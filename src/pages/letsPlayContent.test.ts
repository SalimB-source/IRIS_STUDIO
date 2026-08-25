import { describe, expect, it } from "vitest";
import {
  letsPlayDossiers,
  letsPlayFeaturedScreening,
  letsPlayInstagramVisuals,
  letsPlayScreenings,
} from "./letsPlayContent";

describe("letsPlayContent", () => {
  it("présente uniquement les deux réalisations explicitement sourcées", () => {
    expect(letsPlayDossiers.map(({ id }) => id)).toEqual([
      "gccdz-2026",
      "short-film-contest",
    ]);
    expect(letsPlayDossiers[0].sourceHref).toBe(
      "https://www.instagram.com/p/DUi7HH2CFUJ/",
    );
    expect(letsPlayDossiers[1].sourceHref).toBe(
      "https://www.youtube.com/watch?v=IB3UtlQdSSQ",
    );
    expect(letsPlayDossiers[0].image).toMatch(/^\/manus-storage\/.+\.(png|jpg)$/);
    expect(letsPlayDossiers[0].imageAlt).toContain("Logo Games & Comic Con Dzair");
    expect(letsPlayDossiers[0].imageAlt).toContain("GCCDZ 2026");
  });

  it("utilise des liens directs et des miniatures officielles YouTube pour les extraits", () => {
    expect(letsPlayScreenings).toHaveLength(3);

    for (const screening of letsPlayScreenings) {
      expect(screening.href).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/);
      expect(screening.image).toMatch(/^https:\/\/i\.ytimg\.com\/vi\/[\w-]{11}\/hqdefault\.jpg$/);
      expect(screening.detail).toContain("vues observées");
    }
  });

  it("met en avant un reportage officiel comme scène éditoriale principale", () => {
    expect(letsPlayFeaturedScreening.id).toBe("gccdz-video");
    expect(letsPlayFeaturedScreening.href).toBe("https://www.youtube.com/watch?v=HzigJZOxz2o");
  });

  it("associe le carrousel Instagram aux cinq visuels Let’s Play fournis", () => {
    expect(letsPlayInstagramVisuals).toHaveLength(5);
    expect(letsPlayInstagramVisuals[0].href).toBe("https://www.instagram.com/p/DUi7HH2CFUJ/");

    for (const visual of letsPlayInstagramVisuals) {
      expect(visual.image).toMatch(/^\/manus-storage\/.+\.(png|jpg)$/);
      expect(visual.href).toMatch(/^https:\/\/www\.instagram\.com\//);
      expect(visual.alt.length).toBeGreaterThan(10);
    }
  });
});
