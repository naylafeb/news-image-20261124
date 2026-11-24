import { copyFileSync, mkdirSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY_FILES = ["entry.png", "stories.json"];

function prepareOutput() {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  return OUTPUT_DIR;
}

function copyEntry(name) {
  const source = new URL(`./${name}`, import.meta.url);
  copyFileSync(source, `${OUTPUT_DIR}/${name}`);
}

const outputDir = prepareOutput();
for (const name of ENTRY_FILES) {
  copyEntry(name);
}
console.log(`Copied ${ENTRY_FILES.join(", ")} to ${outputDir}`);
