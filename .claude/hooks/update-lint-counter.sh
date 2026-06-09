#!/bin/bash
# PostToolUse hook: increment lint counter after ingest git commits
# Counter file: wiki/.meta/lint-counter (monotonically increasing, never resets)

COUNTER_FILE="wiki/.meta/lint-counter"

# Only proceed if this was a git commit command
if ! echo "$TOOL_INPUT" | grep -q "git commit"; then
  exit 0
fi

# Skip if commit failed
if echo "$TOOL_OUTPUT" | grep -q "nothing to commit\|error:\|fatal:"; then
  exit 0
fi

# Get the latest commit message
LAST_MSG=$(git log -1 --format=%s 2>/dev/null)

if echo "$LAST_MSG" | grep -q "^ingest:"; then
  mkdir -p wiki/.meta
  COUNT=$(cat "$COUNTER_FILE" 2>/dev/null || echo 0)
  echo $((COUNT + 1)) > "$COUNTER_FILE"
fi
