import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Reader-journey ordering for the Explorer sidebar.
 *
 * IMPORTANT: Quartz serializes this function with `.toString()` and runs it on
 * the client, so it MUST be fully self-contained — no references to anything in
 * outer scope (that is why `order` is declared inside the body).
 *
 * Top-level sections appear in the order below; everything else falls back to
 * folders-first, then numeric-aware alphabetical.
 */
const sectionSortFn = (a: any, b: any): number => {
  const order = [
    "theories",
    "paradigms",
    "safety-concepts",
    "instruments",
    "crosswalk",
    "sources",
    "entities",
    "questions",
  ]
  const ai = order.indexOf(a.slugSegment)
  const bi = order.indexOf(b.slugSegment)
  if (ai !== -1 && bi !== -1) return ai - bi
  if (ai !== -1) return -1
  if (bi !== -1) return 1
  if (a.isFolder && !b.isFolder) return -1
  if (!a.isFolder && b.isFolder) return 1
  return a.displayName.localeCompare(b.displayName, undefined, {
    numeric: true,
    sensitivity: "base",
  })
}

const explorer = Component.Explorer({ sortFn: sectionSortFn })

// The landing page is served at "/" (slug "index"); see sync-content.mjs.
const isHome = (page: any) => page.fileData.slug === "index"
const notHome = (page: any) => page.fileData.slug !== "index"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Full-network graph (depth -1) embedded on the landing page only.
    // showTags: false — no nodes for tags/hashes.
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: {
          depth: -1,
          scale: 0.9,
          repelForce: 0.5,
          centerForce: 0.2,
          linkDistance: 30,
          fontSize: 0.5,
          showTags: false,
        },
        globalGraph: { showTags: false },
      }),
      condition: isHome,
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ahmad-alismail/machine-psychology-kb",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Breadcrumbs everywhere except the home page.
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: notHome,
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
  ],
  // Sidebar graph + TOC + backlinks on every page except home (home gets the
  // embedded full-network graph in afterBody instead).
  right: [
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: { showTags: false },
        globalGraph: { showTags: false },
      }),
      condition: notHome,
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: notHome,
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: notHome,
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    explorer,
  ],
  right: [],
}
