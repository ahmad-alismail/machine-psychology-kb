#!/bin/bash
# PostToolUse hook: increment the lint counter once per `ingest:` git commit.
#
# Robust by design — it does NOT parse the tool input/stdin. It only inspects the
# current git HEAD and remembers the last commit it counted. This way it works no
# matter which tool made the commit (Bash or PowerShell) and never double-counts
# the same commit across the many tool calls that follow it.
#
# Counter file:   wiki/.meta/lint-counter            (committed, monotonic, never resets)
# Dedup marker:   wiki/.meta/tmp-last-ingest-commit  (gitignored via wiki/.meta/tmp-*)

COUNTER_FILE="wiki/.meta/lint-counter"
LAST_COUNTED_FILE="wiki/.meta/tmp-last-ingest-commit"

# Current commit; bail quietly if we're not in a git repo / have no commits yet.
HEAD_HASH=$(git rev-parse HEAD 2>/dev/null) || exit 0
HEAD_MSG=$(git log -1 --format=%s 2>/dev/null)

# Only ingest commits move the counter.
echo "$HEAD_MSG" | grep -q "^ingest:" || exit 0

# Count each commit at most once.
PREV=$(cat "$LAST_COUNTED_FILE" 2>/dev/null)
[ "$PREV" = "$HEAD_HASH" ] && exit 0

mkdir -p wiki/.meta
COUNT=$(cat "$COUNTER_FILE" 2>/dev/null | tr -d '[:space:]')
[ -z "$COUNT" ] && COUNT=0
echo $((COUNT + 1)) > "$COUNTER_FILE"
echo "$HEAD_HASH" > "$LAST_COUNTED_FILE"
