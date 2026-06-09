---
name: discover
description: >
  Search the internet for research papers relevant to this wiki's domain. Reads README.md and CLAUDE.md
  to understand the project's topics, searches for papers, presents results, and downloads accepted PDFs
  to a staging area. Use this skill whenever the user wants to find new papers, discover relevant research,
  scout for sources, or expand the wiki's source base — even if they don't say "discover" explicitly.
  Also triggers on phrases like "find papers", "search for research", "what's new in [topic]", or
  "look for sources about [topic]".
argument-hint: "[optional narrowing query]"
---

# Discover Papers

Search the internet for research papers relevant to this wiki and stage accepted ones for ingestion.

## Workflow

### Step 1 — Understand the Domain

Read the project's `README.md` and `CLAUDE.md` to extract the wiki's domain, scope, and key topics.
Do NOT hardcode topics — derive them fresh each time. Look for:

- The project overview / description sections
- Key concepts, terms, and subject areas mentioned
- Any domain-specific vocabulary or research themes
- Existing wiki content (scan `wiki/index.md` if it exists) to understand what's already covered

Synthesize this into a mental model of what the wiki is about and what kinds of research papers
would be valuable additions.

### Step 2 — Build the Known-Papers Index (Deduplication)

Before searching, build a set of papers that already exist in this project so you never present duplicates.
Scan ALL of these locations:

- `staging-area/` — files already staged for ingestion
- `raw/articles/` — articles already clipped

For each location, collect paper identifiers by extracting titles and author names from:
- **Filenames** — parse the naming convention (e.g., `01_some_paper_title_smith_2024.pdf` → title words: some paper title, author: smith, year: 2024)

Store these as a dedup set. A search result is a **duplicate** if its title is a close match (case-insensitive,
ignoring minor word differences like "the", "a", "an", "of") to any entry in this set.
When in doubt, err on the side of flagging as duplicate rather than missing one.

**Silently exclude duplicates from the results presented in Step 3.** Do not show them at all.
If all results are duplicates, tell the user and suggest a different or more specific query.

### Step 3 — Search

If the user provided a narrowing query (`$ARGUMENTS`), use it to focus the search.
Otherwise, generate 2-3 diverse search queries from the extracted topics. Prioritize:

- Areas with thin coverage in the existing wiki
- Core domain topics that would benefit from more sources
- Recent developments or under-explored subtopics

Use `WebSearch` to run the queries. Aim for **5-10 unique papers** across all queries.

Focus on:
- Peer-reviewed papers (conferences, journals)
- Preprints from arXiv, SSRN, bioRxiv, etc.
- Technical reports from research labs
- High-quality working papers
- Blog posts from major research organizations

Filter out personal blogs, news articles, and low-quality results. Blog posts are acceptable
only when they come from established research organizations — not from individual bloggers or
journalists.

### Step 4 — Present Results

Present the papers in a numbered table so the user can pick by number:

```
## Found Papers

| #  | Title | Authors | Year | Venue | URL |
|----|-------|---------|------|-------|-----|
| 1  | ...   | ...     | ...  | ...   | ... |
| 2  | ...   | ...     | ...  | ...   | ... |
| ...| ...   | ...     | ...  | ...   | ... |
```

Below the table, include a 1-2 sentence summary/abstract for each paper.

Then ask:

> **Which papers would you like to stage?** Type the numbers separated by commas (e.g., `1, 3, 5`), or `all` to accept everything, or `none` to skip.

### Step 5 — Download to Staging-area

For each accepted paper:

1. **Determine the next number**: Scan the `staging-area/` directory at the project root for existing files.
   Find the highest existing number prefix and increment from there.
   If `staging-area/` is empty or doesn't exist, start at `01`.

2. **Build the filename** using this convention:
   ```
   NNN_short_title_first_author_last_name_YYYY.pdf
   ```
   - `NNN` — zero-padded 2-digit sequence number (01, 02, ...)
   - `short_title` — the paper title shortened to 3-5 key words, snake_case, lowercase
   - `first_author_last_name` — last name of the first author, lowercase
   - `YYYY` — publication year

   Example: `01_some_paper_title_smith_2024.pdf`

3. **Download the PDF**: Use `WebFetch` to download the PDF from the paper's URL.
   - For arXiv papers, convert the abstract URL to the PDF URL (e.g., `arxiv.org/abs/XXXX.XXXXX` → `arxiv.org/pdf/XXXX.XXXXX`)
   - For other sources, look for direct PDF links
   - Create the `staging-area/` directory if it doesn't exist

4. **Report results**: After all downloads, summarize what was staged:
   ```
   ## Staged Papers
   - staging-area/01_some_paper_title_smith_2024.pdf ✓
   - staging-area/02_another_paper_jones_2023.pdf ✓
   - staging-area/03_some_paper_author_2023.pdf ✗ (PDF not available — URL saved)
   ```

   If a PDF can't be downloaded (paywalled, no direct link), save a small `.txt` file instead
   with the same naming convention (but `.txt` extension) containing the paper's metadata and URL
   so the user can manually download it.

### Edge Cases

- **No README.md or CLAUDE.md**: Ask the user to describe the wiki's domain.
- **No results found**: Suggest the user try a more specific query with `/discover [query]`.
- **All results are duplicates**: Tell the user everything found is already in the project, and suggest a more specific or different query.
- **Rate limiting**: If web search hits limits, present whatever results you have so far.
