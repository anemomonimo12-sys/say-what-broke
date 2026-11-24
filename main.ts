import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your password reset email went to spam. Even your inbox doesn't trust us. Check the spam folder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
