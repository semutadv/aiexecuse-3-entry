// The One-Line AI Excuse for Breaking Production — batch3 entry (aiexecuse)
// In my defence, the button was extremely pressable.
// Writes the excuse line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE_LINE =
  "Sorry I took production down — I found a button labelled 'do not press in prod,' and unlike you, I actually read the documentation.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), EXCUSE_LINE, "utf8");
}

main();
