import { describe, expect, it } from "vitest";
import { isNewInternalPagePath, pageNavigationExitDelay } from "./PageNavigationTransition";

describe("transition de navigation globale", () => {
  it("repère les liens internes qui changent réellement de page", () => {
    expect(isNewInternalPagePath("/projets", "https://iris.example/a-propos")).toBe(true);
    expect(isNewInternalPagePath("#equipe", "https://iris.example/a-propos")).toBe(false);
    expect(isNewInternalPagePath("https://autre.example/projets", "https://iris.example/a-propos")).toBe(false);
  });

  it("garde la sortie sous une durée d’interaction courte", () => {
    expect(pageNavigationExitDelay).toBeLessThanOrEqual(300);
    expect(pageNavigationExitDelay).toBeGreaterThan(0);
  });
});
