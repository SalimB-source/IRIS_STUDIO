import { describe, expect, it } from "vitest";
import { featuredEpisodes } from "./homeContent";

describe("featuredEpisodes", () => {
  it("référence deux épisodes officiels avec une source YouTube explicite", () => {
    expect(featuredEpisodes).toHaveLength(2);
    expect(featuredEpisodes.map(({ partner }) => partner)).toEqual([
      "LET’S PLAY × ALGÉRIE TÉLÉCOM",
      "7OUMA ARENA × DJEZZY",
    ]);
    expect(featuredEpisodes.every(({ source }) => source === "CANAL YOUTUBE OFFICIEL")).toBe(true);
  });

  it("utilise des liens directs et des miniatures servies par YouTube", () => {
    for (const episode of featuredEpisodes) {
      expect(episode.href).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/);
      expect(episode.image).toMatch(/^https:\/\/i\.ytimg\.com\/vi\/[\w-]{11}\/hqdefault\.jpg$/);
      expect(episode.views).toContain("VUES OBSERVÉES");
      expect(episode.actionLabel).toBe("Regarder l’épisode");
    }
  });
});
