import { describe, expect, it } from "vitest";
import { getClosestProgressChapterId } from "./ProjectProgressRail";

describe("getClosestProgressChapterId", () => {
  const positions = [
    { id: "project", top: -220 },
    { id: "terrain", top: 150 },
    { id: "archives", top: 620 },
  ];

  it("sélectionne le chapitre le plus proche de la ligne de lecture", () => {
    expect(getClosestProgressChapterId(positions, 240)).toBe("terrain");
  });

  it("retourne undefined lorsqu’aucun chapitre ne peut être calculé", () => {
    expect(getClosestProgressChapterId([], 240)).toBeUndefined();
  });
});
