import { copyFileSync, mkdirSync } from "node:fs";

const IMAGE_NAME = "entry.png";
const STORIES_NAME = "stories.json";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL(`./${IMAGE_NAME}`, import.meta.url), `${OUTPUT_DIR}/${IMAGE_NAME}`);
copyFileSync(new URL(`./${STORIES_NAME}`, import.meta.url), `${OUTPUT_DIR}/${STORIES_NAME}`);
