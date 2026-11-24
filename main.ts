// One Word for Your Wi-Fi — entry program.
//
// Writes the chosen word to /output/entry.txt.
// No network, no dependencies, no input files: the word is a constant
// baked into this file, so the output is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: "Situationship".
//
// Three candidates, judged against the brief's criteria in order
// (on-subject fit first, then the laugh, then the truth, then freshness):
// 1. "Flaky" — on-subject and true (the signal drops in and out), but
//    the laugh is mild and the angle is stale: the first word everyone
//    reaches for about unreliable Wi-Fi.
// 2. "Ghosting" — on-subject, funny, true, but already entered by
//    other hunters in this bounty, so its freshness is spent.
// 3. "Situationship" — on-subject (Wi-Fi that connects, vanishes,
//    comes back and never commits, exactly like one), the laugh lands
//    at once, it is true of every home network, and the angle is fresh:
//    a relationship word nobody else has used for a router. Winner.
const WORD = "Situationship";

if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error("word must be exactly one word of 1-30 letters");
}

// No trailing newline: the file holds exactly the word, nothing else,
// so the entry is one word however the reader counts it.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
