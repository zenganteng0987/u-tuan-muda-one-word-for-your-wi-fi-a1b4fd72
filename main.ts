// One Word for Your Wi-Fi — entry program.
//
// Writes the chosen word to /output/entry.txt.
// No network, no dependencies, no input files: the word is a constant
// baked into this file, so the output is identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: "Ghosting".
//
// Why this word, against the judge's brief (most important first):
// 1. On-subject: it describes Wi-Fi as lived — the signal vanishes
//    without warning or explanation, exactly like being ghosted.
// 2. Funny at once: the dating metaphor lands instantly, no setup.
// 3. True: every home Wi-Fi drops out mid-call, mid-show, mid-game.
// 4. Surprising angle: not "slow" / "buffering" / "weak", the words
//    everyone reaches for — a familiar annoyance seen sideways.
// 5. One word, instantly readable, and a fine network name.
const WORD = "Ghosting";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// /output may not exist yet in a fresh sandbox; create it if needed.
mkdirSync(outputPath.slice(0, outputPath.lastIndexOf("/")), {
  recursive: true,
});

writeFileSync(outputPath, WORD, "utf8");
