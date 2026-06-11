import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 configuration for the Machine Psychology & Strategic Evaluation of AI wiki.
 *
 * The knowledge base in ../wiki is the source of truth. `sync-content.mjs`
 * projects it into ./content before every build — never edit ./content by hand.
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Machine Psychology & Strategic Evaluation of AI",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "ahmad-alismail.github.io/machine-psychology-kb",
    // Defence-in-depth: sync-content.mjs already drops non-public top-level
    // paths, but these keep private/scaffolding files out of the build too.
    ignorePatterns: ["private", "templates", ".obsidian", ".meta", "log.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Spectral",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f6", // page background — warm paper
          lightgray: "#e6e3dc", // borders
          gray: "#9c958a", // muted text / graph links
          darkgray: "#3a3a42", // body text
          dark: "#1f1d2b", // headers
          secondary: "#5b3fb5", // links / primary accent (indigo-violet)
          tertiary: "#c97b4a", // hover / graph accent (terracotta)
          highlight: "rgba(91, 63, 181, 0.10)", // internal-link & search bg
          textHighlight: "#b39ddb88", // ==highlighted== text
        },
        darkMode: {
          light: "#161620", // page background
          lightgray: "#2c2a3a", // borders
          gray: "#6e6a82", // muted text / graph links
          darkgray: "#cfcad8", // body text
          dark: "#f2f0f7", // headers
          secondary: "#a78bfa", // links / primary accent (light violet)
          tertiary: "#e0986b", // hover / graph accent (light terracotta)
          highlight: "rgba(167, 139, 250, 0.12)",
          textHighlight: "#b39ddb55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      // "absolute" so folder-qualified wikilinks like [[paradigms/false-belief-task]]
      // resolve from the site root.
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
