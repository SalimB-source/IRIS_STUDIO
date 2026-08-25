import { describe, expect, it } from "vitest";
import { partnerProjectBranding } from "./partnerProjectBranding";

describe("identité visuelle des projets partenaires", () => {
  it("associe chaque carte à un emblème de projet", () => {
    expect(partnerProjectBranding.letsPlay.logo).toContain("lets-play-logo-provided");
    expect(partnerProjectBranding.letsPlay.thumbnail).toContain("letsplay-thumbnail-provided");
    expect(partnerProjectBranding.sevenArena.logo).toContain("7ouma-arena-official-avatar");
    expect(partnerProjectBranding.sevenArena.thumbnail).toContain("7ouma-arena-thumbnail-provided");
  });
});
