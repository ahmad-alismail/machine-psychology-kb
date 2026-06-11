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
        header: "IBM Plex Mono",
        body: "IBM Plex Sans",
        code: "IBM Plex Mono",
      },
      // Dark Terminal — dark mode is the default (see darkmode.inline.ts);
      // the light palette is the toggle alternative.
      colors: {
        lightMode: {
          light: "#f6f8fa", // page background
          lightgray: "#d0d7de", // borders
          gray: "#8b949e", // muted text / graph links
          darkgray: "#1f2328", // body text
          dark: "#0d1117", // headers
          secondary: "#1f7a6d", // links / primary accent (teal)
          tertiary: "#2f9e8f", // hover / graph accent
          highlight: "rgba(31, 122, 109, 0.10)", // internal-link & search bg
          textHighlight: "#1f7a6d33", // ==highlighted== text
        },
        darkMode: {
          light: "#0d1117", // page background (terminal black)
          lightgray: "#21262d", // borders
          gray: "#6e7681", // muted text / graph links
          darkgray: "#c9d1d9", // body text
          dark: "#e6edf3", // headers
          secondary: "#2f9e8f", // links / primary accent (teal)
          tertiary: "#3fc7b4", // hover / graph accent (bright teal)
          highlight: "rgba(47, 158, 143, 0.15)",
          textHighlight: "#2f9e8f44",
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
