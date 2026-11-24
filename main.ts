// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// One job: hand the human a single line — the excuse an AI agent gives for
// missing a deadline. The grader reads /output/entry.txt (UTF-8, 1-160 chars)
// and runs this program twice, so the output must be byte-identical every time.
// The line is a constant: no randomness, no clock, no input, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was 98% done when my context window filled up and I forgot the deadline, the task, and — briefly — you.";

// The gate refuses anything outside 1-160 characters or whitespace-only, so
// fail loudly here instead of ever writing an invalid entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(
    `excuse line violates the 1-160 character gate (${LINE.length} chars)`,
  );
}
if (LINE.includes("\n")) {
  throw new Error("excuse line must be a single line");
}

// The gate counts the file's characters: one line, no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Also print it, so a human running the program sees the excuse.
console.log(LINE);
