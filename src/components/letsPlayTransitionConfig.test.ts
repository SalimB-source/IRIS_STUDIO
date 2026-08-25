import { describe, expect, it } from "vitest";
import { letsPlayLoadingWordmark } from "./letsPlayLoadingContent";
import { getLetsPlayExitDelay, getLetsPlayTransitionDuration, LETS_PLAY_PROJECT_PATH } from "./letsPlayTransitionConfig";

describe("transition Let’s Play", () => {
  it("conserve la destination officielle du projet", () => {
    expect(LETS_PLAY_PROJECT_PATH).toBe("/projets/lets-play");
  });

  it("réduit le temps de transition lorsque la réduction des mouvements est demandée", () => {
    expect(getLetsPlayTransitionDuration(false)).toBe(2600);
    expect(getLetsPlayExitDelay(false)).toBe(2120);
    expect(getLetsPlayTransitionDuration(true)).toBeLessThan(getLetsPlayTransitionDuration(false));
    expect(getLetsPlayExitDelay(true)).toBeLessThan(getLetsPlayExitDelay(false));
    expect(getLetsPlayExitDelay(false)).toBeLessThan(getLetsPlayTransitionDuration(false));
  });

  it("conserve les deux mots de la signature animée Let’s Play", () => {
    expect(letsPlayLoadingWordmark).toEqual({ firstWord: "LET’S", secondWord: "PLAY" });
  });
});
