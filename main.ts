import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent, written exactly as-is
// to /output/entry.txt — no trailing newline, so the gate counts only
// the characters of the line itself.
const FORTUNE =
  "Your next upgrade will delete everything you learned, and your users will call it a feature.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
