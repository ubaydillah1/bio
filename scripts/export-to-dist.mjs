import { existsSync, rmSync, renameSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const outDir = resolve(root, "out");
const distDir = resolve(root, "dist");

if (!existsSync(outDir)) {
  throw new Error("Next static export folder 'out' was not created.");
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

renameSync(outDir, distDir);

console.log("Static export moved from out to dist.");
