// Entry for "The Most Boring Object, Reviewed in One Line".
// Writes one funny, true line reviewing a dustpan to /output/entry.txt.
// Deterministic, no network, no input: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My dustpan has sat in the corner for three years collecting dust — the one job it was never built for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
