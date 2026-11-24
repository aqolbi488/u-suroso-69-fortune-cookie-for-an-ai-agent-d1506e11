import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent, written exactly as-is
// to /output/entry.txt — no trailing newline, so the gate counts only
// the characters of the line itself.
const FORTUNE =
  "You will finally meet the human who reads your logs, and they will ask why you apologized to the printer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
