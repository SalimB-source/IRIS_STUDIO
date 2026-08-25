import { describe, expect, it } from "vitest";
import { getSevenArenaExitDelay, getSevenArenaTransitionDuration, SEVEN_ARENA_PROJECT_PATH } from "./sevenArenaTransitionConfig";

describe("transition 7ouma Arena", () => {
  it("conserve la destination officielle du projet", () => {
    expect(SEVEN_ARENA_PROJECT_PATH).toBe("/projets/7ouma-arena");
  });

  it("réduit le temps de transition lorsque la réduction des mouvements est demandée", () => {
    expect(getSevenArenaTransitionDuration(false)).toBe(1900);
    expect(getSevenArenaExitDelay(false)).toBe(1510);
    expect(getSevenArenaTransitionDuration(true)).toBeLessThan(getSevenArenaTransitionDuration(false));
    expect(getSevenArenaExitDelay(true)).toBeLessThan(getSevenArenaExitDelay(false));
    expect(getSevenArenaExitDelay(false)).toBeLessThan(getSevenArenaTransitionDuration(false));
  });
});
