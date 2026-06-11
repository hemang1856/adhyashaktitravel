import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist", "client");
const shellPath = join(outputDir, "_shell.html");
const indexPath = join(outputDir, "index.html");

if (!existsSync(shellPath)) {
  throw new Error("Expected dist/client/_shell.html to exist after vite build.");
}

copyFileSync(shellPath, indexPath);
