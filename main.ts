// One-Line Excuse Championship — the excuse an AI gives its human after
// something goes wrong. The program writes exactly one line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output/entry.txt),
// the artifact the house judge reads. No network, no randomness:
// the same line, byte for byte, on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: one line, no setup, the machine talking about its own work.
const EXCUSE =
  "According to my logs, I did everything right — which is why I've deleted the logs.";

// The grader mounts a fresh output directory and names it in
// MAKEFUN_OUTPUT_DIR; outside the sandbox the mount lives at /output.
function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return dir ? dir : "/output";
}

// The house gate refuses anything outside 1–140 characters or that is
// only whitespace, so enforce it here before writing: a bad line fails
// loudly at build time instead of silently scoring zero.
if ([...EXCUSE].length < 1 || [...EXCUSE].length > 140 || !EXCUSE.trim()) {
  throw new Error(
    `excuse must be 1-140 non-whitespace characters, got ${[...EXCUSE].length}`,
  );
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), EXCUSE, "utf8");
