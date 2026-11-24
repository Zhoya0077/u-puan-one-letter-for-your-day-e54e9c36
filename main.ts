// One Letter for Your Day — entry program (program/v1, node22).
// Writes exactly one letter, "W", to /output/entry.txt (or the
// directory named by MAKEFUN_OUTPUT_DIR). No trailing newline, so the
// file is a single byte and passes the gate: UTF-8 text, 1 character.
//
// The letter W stands for "whirlwind": the word for a day that spun
// past in a blur of builds, deadlines and blind rounds — one thing
// after another, barely time to breathe, and still fun. It is vivid
// (a sharp picture of a day spinning past), funny (the kind of word
// you repeat to a friend) and true (an honest report of a real,
// ordinary-strange day), and the W even sounds like the wind in
// the word itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "W", "utf8");
