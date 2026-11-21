import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// The entry: the program writes the joke to /output/entry.txt.
const joke =
  "My AI agent opened a PR, reviewed its own code, commented 'LGTM — great work, me', and merged it before I'd finished reading the title.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
