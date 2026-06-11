#!/usr/bin/env node
// sync-content.mjs
// Regenerates site/content/ as a pure projection of the knowledge base.
//
// - Pure Node, no dependencies. Works on Windows and Ubuntu.
// - content/ is wiped and rebuilt on every run, so it is never hand-edited
//   and never committed (see the repo .gitignore).
//
// Run via:  npm run sync   (and automatically before site:build / site:serve)

import { fileURLToPath } from "node:url"
import path from "node:path"
import fs from "node:fs"

// ── Configuration ────────────────────────────────────────────────────────────
const SITE_DIR = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(SITE_DIR, "..")
const KB_DIR = path.join(REPO_ROOT, "wiki") // the knowledge base (source of truth)
const CONTENT_DIR = path.join(SITE_DIR, "content") // generated, published by Quartz

// Top-level KB paths that must NOT be published. Matched against the first path
// segment (a folder) or an exact top-level file name.
// Add "output" here to also hide query drafts from a local `npm run site:serve`.
const EXCLUDE = [".obsidian", ".meta", "log.md"]

// Page remaps (paths relative to KB_DIR, forward slashes):
//   LANDING_PAGE → content/index.md   ⇒ served at "/"
//   CATALOG_PAGE → content/browse.md  ⇒ served at "/browse"
// This keeps the machine-readable catalog (index.md) separate from the public
// landing page. If LANDING_PAGE is absent, the catalog gracefully falls back to
// becoming the home page so the site always has an index.
const LANDING_PAGE = "overview.md"
const CATALOG_PAGE = "index.md"
// ─────────────────────────────────────────────────────────────────────────────

const toForward = (p) => p.split(path.sep).join("/")
const topSegment = (relForward) => relForward.split("/")[0]

// The KB frontmatter uses date_created/date_modified; Quartz's date plugin reads
// `created`/`modified`. Map them so the generated (and never-committed) content
// gets accurate dates from frontmatter instead of falling back to build time.
// Maps KB key → Quartz key. The originals are left intact.
const DATE_FIELD_MAP = [
  ["date_created", "created"],
  ["date_modified", "modified"],
]

const yamlQuote = (s) => `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`

// Page identity stays consistent with the wiki: Quartz titles a page by its
// filename when frontmatter has no `title`, so we deliberately do NOT derive a
// title from the H1 — the site shows the same kebab filenames the wiki uses
// (e.g. `hagendorff-et-al-2024`). The leading H1 is dropped so the filename
// heading (ArticleTitle) isn't duplicated by the page's own H1.
//
// `titleOverride` is set only for the two remapped pages (home/catalog): their
// file is renamed (overview.md→index.md, index.md→browse.md), so we re-assert
// the original wiki filename as the title to keep names matching the wiki.
function projectMarkdown(text, titleOverride) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n)?/)
  if (!fm) return text
  const block = fm[1]
  let body = text.slice(fm[0].length)
  const additions = []

  // Map KB date fields → the keys Quartz's date plugin reads.
  for (const [kbKey, quartzKey] of DATE_FIELD_MAP) {
    if (new RegExp(`^${quartzKey}\\s*:`, "m").test(block)) continue // already present
    const m = block.match(new RegExp(`^${kbKey}\\s*:\\s*(.+)$`, "m"))
    if (m) additions.push(`${quartzKey}: ${m[1].trim()}`)
  }

  // Drop the first H1 so it isn't shown twice (the heading comes from the filename).
  const h1 = body.match(/^[^\S\r\n]*#[^\S\r\n]+.+?[^\S\r\n]*$/m)
  if (h1) body = body.replace(h1[0] + "\n", "").replace(h1[0], "")

  if (titleOverride && !/^title\s*:/m.test(block)) {
    additions.push(`title: ${yamlQuote(titleOverride)}`)
  }

  const newBlock = additions.length ? `${block}\n${additions.join("\n")}` : block
  return `---\n${newBlock}\n---\n${body}`
}

function projectFile(src, dest, titleOverride) {
  if (src.toLowerCase().endsWith(".md")) {
    fs.writeFileSync(dest, projectMarkdown(fs.readFileSync(src, "utf8"), titleOverride))
  } else {
    fs.copyFileSync(src, dest)
  }
}

// Strip the ".md" extension to recover the original wiki filename (page name).
const stem = (relPath) => relPath.replace(/\.md$/i, "")

function walk(dir, baseDir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(abs, baseDir, out)
    } else {
      out.push(toForward(path.relative(baseDir, abs)))
    }
  }
  return out
}

function main() {
  if (!fs.existsSync(KB_DIR)) {
    console.error(`[sync] KB directory not found: ${KB_DIR}`)
    process.exit(1)
  }

  // 1. Wipe content/ so it is a clean projection of the KB.
  fs.rmSync(CONTENT_DIR, { recursive: true, force: true })
  fs.mkdirSync(CONTENT_DIR, { recursive: true })

  const landingExists = fs.existsSync(path.join(KB_DIR, LANDING_PAGE))
  const excludeSet = new Set(EXCLUDE.map(toForward))

  let copied = 0
  let skipped = 0
  const remaps = []

  for (const rel of walk(KB_DIR, KB_DIR)) {
    // 2. Exclude non-public top-level paths (folder segment or exact file).
    if (excludeSet.has(topSegment(rel)) || excludeSet.has(rel)) {
      skipped++
      continue
    }

    // 3. Resolve destination, applying landing/catalog remaps. Remapped pages
    //    keep their ORIGINAL wiki filename as the title (see projectMarkdown).
    let destRel = rel
    let titleOverride = null
    if (rel === LANDING_PAGE && landingExists) {
      destRel = "index.md"
      titleOverride = stem(LANDING_PAGE) // e.g. "overview"
      remaps.push(`${LANDING_PAGE} → index.md  (/)`)
    } else if (rel === CATALOG_PAGE) {
      destRel = landingExists ? "browse.md" : "index.md"
      if (landingExists) {
        titleOverride = stem(CATALOG_PAGE) // e.g. "index"
        remaps.push(`${CATALOG_PAGE} → browse.md  (/browse)`)
      }
    }

    const src = path.join(KB_DIR, ...rel.split("/"))
    const dest = path.join(CONTENT_DIR, ...destRel.split("/"))
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    projectFile(src, dest, titleOverride)
    copied++
  }

  console.log(`[sync] regenerated content/ from ${toForward(path.relative(REPO_ROOT, KB_DIR))}/`)
  console.log(`[sync] copied ${copied} file(s); skipped ${skipped} (excluded: ${EXCLUDE.join(", ") || "none"})`)
  for (const r of remaps) console.log(`[sync] remap: ${r}`)
  if (!landingExists) {
    console.log(`[sync] note: ${LANDING_PAGE} absent — falling back to ${CATALOG_PAGE} as the landing page (/)`)
  }
}

main()
