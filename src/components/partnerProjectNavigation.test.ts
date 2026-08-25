import { describe, expect, it } from "vitest";
import { isPartnerProjectPath, pageScrollTop, partnerProjectScrollSettleDelay, partnerProjectScrollTop } from "./partnerProjectNavigation";

describe("navigation des projets partenaires", () => {
  it("identifie uniquement les deux fiches avec transition dédiée", () => {
    expect(isPartnerProjectPath("/projets/lets-play")).toBe(true);
    expect(isPartnerProjectPath("/projets/7ouma-arena")).toBe(true);
    expect(isPartnerProjectPath("/projets")).toBe(false);
  });

  it("prépare une remontée au sommet sans défilement animé", () => {
    expect(pageScrollTop).toEqual({ left: 0, top: 0, behavior: "auto" });
    expect(partnerProjectScrollTop).toEqual({ left: 0, top: 0, behavior: "auto" });
    expect(partnerProjectScrollSettleDelay).toBeGreaterThan(0);
  });
});
