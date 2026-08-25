import { describe, expect, it } from "vitest";
import { letsPlayProgressChapters, sevenArenaProgressChapters } from "./projectProgressChapters";

describe("projectProgressChapters", () => {
  it("définit cinq chapitres uniques et nommés pour Let’s Play", () => {
    expect(letsPlayProgressChapters).toHaveLength(5);
    expect(new Set(letsPlayProgressChapters.map(({ id }) => id)).size).toBe(5);
    expect(letsPlayProgressChapters.every(({ label }) => label.length > 0)).toBe(true);
  });

  it("définit cinq chapitres uniques et nommés pour 7ouma Arena", () => {
    expect(sevenArenaProgressChapters).toHaveLength(5);
    expect(new Set(sevenArenaProgressChapters.map(({ id }) => id)).size).toBe(5);
    expect(sevenArenaProgressChapters.every(({ label }) => label.length > 0)).toBe(true);
  });
});
