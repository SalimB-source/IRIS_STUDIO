import { describe, expect, it } from "vitest";
import {
  sevenArenaDossiers,
  sevenArenaCredits,
  sevenArenaEcosystem,
  sevenArenaMentionedGuests,
  sevenArenaScreenings,
  sevenArenaVisualFilters,
  sevenArenaVisuals,
  sevenArenaVoices,
} from "./sevenArenaContent";

describe("sevenArenaContent", () => {
  it("conserve l’attribution vérifiée d’Alliance à la FF Pro League", () => {
    expect(sevenArenaDossiers[0].id).toBe("alliance-champions");
    expect(sevenArenaDossiers[0].sourceHref).toBe(
      "https://www.youtube.com/watch?v=RxOv92HDMQI",
    );
    expect(sevenArenaMentionedGuests.find(({ name }) => name === "VENOM")?.role).toContain(
      "champion FF Pro League",
    );
  });

  it("utilise des liens et miniatures YouTube officiels pour les extraits", () => {
    expect(sevenArenaScreenings).toHaveLength(3);

    for (const screening of sevenArenaScreenings) {
      expect(screening.href).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/);
      expect(screening.image).toMatch(/^https:\/\/i\.ytimg\.com\/vi\/[\w-]{11}\/hqdefault\.jpg$/);
      expect(screening.detail).toContain("vues observées");
    }
  });

  it("présente Egor comme un lien d’écosystème, sans inventer un partenariat formel", () => {
    expect(sevenArenaEcosystem.eyebrow).toBe("Lien d’écosystème");
    expect(sevenArenaEcosystem.note).toContain("aucun partenariat institutionnel");
    expect(sevenArenaEcosystem.platformHref).toBe("https://egorgaming.com/");
  });

  it("attribue le projet à Djezzy et Iris Studio sans afficher Chaft dans le pilier", () => {
    expect(sevenArenaCredits.title).toContain("produit Djezzy");
    expect(sevenArenaCredits.studio).toContain("Iris Studio");
    expect(sevenArenaCredits.chaft).toContain("Chaft");
    expect(sevenArenaCredits.pillars.map(({ value }) => value)).toEqual([
      "Djezzy",
      "Iris Studio",
      "Équipe projet",
    ]);
    expect(sevenArenaCredits.pillars.map(({ value }) => value)).not.toContain("Chaft");
  });

  it("crédite les contributions graphiques, de montage et de planification", () => {
    const productionParticipants = sevenArenaCredits.activeParticipants.slice(-3);

    expect(productionParticipants.map(({ name }) => name)).toEqual([
      "Salim Benmokhtar",
      "Kouceila",
      "Ramy Baghli",
    ]);
    expect(productionParticipants.map(({ role }) => role)).toEqual([
      "Graphic design",
      "Montage",
      "Planification",
    ]);
  });

  it("identifie les présentateurs et le community manager parmi les participants actifs", () => {
    expect(sevenArenaCredits.activeParticipants.map(({ name }) => name)).toEqual([
      "Chaft",
      "Samy « Egor »",
      "Seven",
      "Naoufel",
      "Salim Benmokhtar",
      "Kouceila",
      "Ramy Baghli",
    ]);
    expect(sevenArenaCredits.activeParticipants.map(({ role }) => role)).toEqual([
      "Participation éditoriale active",
      "Présentateur",
      "Présentateur · caster e-sport",
      "Community manager",
      "Graphic design",
      "Montage",
      "Planification",
    ]);
  });

  it("réunit uniquement des créations visuelles attribuables à Instagram", () => {
    expect(sevenArenaVisuals).toHaveLength(6);
    expect(sevenArenaVisuals.every(({ category }) => category.startsWith("PUBLICATION INSTAGRAM ·"))).toBe(true);
    expect(sevenArenaVisuals.map(({ id }) => id)).toContain("alliance-champions");
    expect(sevenArenaVisuals.map(({ id }) => id)).toContain("semi-final-global-ranking");

    for (const visual of sevenArenaVisuals) {
      expect(visual.href).toMatch(/^https:\/\/www\.instagram\.com\//);
      expect(visual.href).not.toContain("youtube.com");
      expect(visual.image).not.toContain("i.ytimg.com");
      expect(visual.image).toMatch(/^\/manus-storage\//);
      expect(visual.alt).toBeTruthy();
      expect(visual.campaignPeriod).toBeTruthy();
    }
  });

  it("ajoute un repère de période à chaque création sans inventer de date calendaire", () => {
    expect(sevenArenaVisuals.map(({ campaignPeriod }) => campaignPeriod)).toEqual([
      "Finale Pro League",
      "Month 5",
      "Month 5 · vote créateurs",
      "Journée des enfants",
      "Résultats Pro League",
      "Demi-finale · Day 3/3",
    ]);
  });

  it("propose des filtres pour les annonces et les résultats Instagram", () => {
    expect(sevenArenaVisualFilters.map(({ id }) => id)).toEqual([
      "tout",
      "annonce",
      "resultat",
    ]);
    expect(new Set(sevenArenaVisuals.map(({ kind }) => kind))).toEqual(
      new Set(["annonce", "resultat"]),
    );
  });

  it("utilise uniquement des portraits sociaux attribuables dans les cartes de personnalités", () => {
    expect(sevenArenaVoices.map(({ id }) => id)).toEqual([
      "samy-charif",
      "seven",
      "mlagi",
      "boneja7",
      "bnl",
    ]);

    for (const voice of sevenArenaVoices) {
      expect(voice.image).toBeTruthy();
      expect(voice.imageAlt).toBeTruthy();
      expect(voice.imageNote).toBeTruthy();
      expect(voice.image).toMatch(/^\/manus-storage\//);
      expect(voice.image).not.toContain("i.ytimg.com");
      expect(voice.href).toMatch(/^https:\/\/www\.instagram\.com\//);
    }
  });

  it("conserve les invités sans portrait humain social dans une liste citée plutôt que sous une miniature YouTube", () => {
    expect(sevenArenaMentionedGuests.map(({ name }) => name)).toEqual([
      "RA3D",
      "VENOM",
      "Supreme",
      "BEESTO",
      "BOSS YT",
      "Lady Gaming",
    ]);
  });
});
