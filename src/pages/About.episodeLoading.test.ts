import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const aboutSource = readFileSync(new URL("./About.tsx", import.meta.url), "utf8");

describe("ouverture des épisodes Let’s Play", () => {
  it("annonce l’ouverture et conserve une redirection YouTube déclenchée par le clic", () => {
    expect(aboutSource).toContain("const [loadingEpisodeUrl, setLoadingEpisodeUrl]");
    expect(aboutSource).toContain('window.open("about:blank", "_blank")');
    expect(aboutSource).toContain("window.setTimeout");
    expect(aboutSource).toContain("Ouverture…");
    expect(aboutSource).toContain('aria-busy={isEpisodeLoading}');
  });
});
