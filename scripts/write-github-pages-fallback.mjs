import fs from "node:fs";
import path from "node:path";
const dist = path.resolve("dist");
fs.copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));
