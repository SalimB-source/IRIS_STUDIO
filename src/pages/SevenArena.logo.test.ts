import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const sevenArenaSource = readFileSync(new URL("./SevenArena.tsx", import.meta.url), "utf8");
const globalStyles = readFileSync(new URL("../index.css", import.meta.url), "utf8");

describe("logo EGOR sur 7ouma Arena", () => {
  it("affiche le logo fourni dans le bloc de collaboration", () => {
    expect(sevenArenaSource).toContain("egor-logo-provided_7f6b1b02.png");
    expect(sevenArenaSource).toContain('alt="Logo EGOR Gaming"');
    expect(sevenArenaSource).toContain('className="arena-ecosystem-partnership"');
    expect(globalStyles).toContain(".arena-egor-logo");
  });
});
