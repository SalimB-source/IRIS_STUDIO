import { describe, expect, it } from "vitest";
import { leadership, letsPlayTeam, studioTeam } from "./About";

describe("cartes d’équipe de la page À propos", () => {
  it("conserve un nom, un rôle et une icône illustrative pour chaque membre", () => {
    [...leadership, ...letsPlayTeam, ...studioTeam].forEach((person) => {
      expect(person.name.trim().length).toBeGreaterThan(2);
      expect(person.role.trim().length).toBeGreaterThan(2);
      expect(person.roleIcon).toBeTruthy();
    });
  });

  it("ajoute Hadjer Mezhoud à la direction avec son rôle administratif et financier", () => {
    const hadjer = leadership.find((person) => person.name === "Hadjer Mezhoud");

    expect(hadjer).toMatchObject({
      role: "Responsable administratif et financier",
      profile: "https://www.linkedin.com/in/hadjer-mezhoud-a95b9969",
      roleIcon: "direction",
    });
  });

  it("identifie Naoufel Amokrane comme Senior Community Manager", () => {
    const naoufel = letsPlayTeam.find((person) => person.name === "Naoufel Amokrane");

    expect(naoufel).toMatchObject({
      role: "Senior Community Manager · Let’s Play",
      roleIcon: "community",
    });
  });

  it("affiche les portraits publics disponibles et laisse les autres sans image", () => {
    expect(leadership.find((person) => person.name === "Rebai Chentli")).toMatchObject({
      portrait: "assets/rebai-chentli_80c004cc.jpg",
      alt: "Portrait public de Rebai Chentli",
    });
    expect(leadership.find((person) => person.name === "Abdelhak Bestandji")).toMatchObject({
      portrait: "assets/abdelhak-bestandji-provided_76fb39f0.jpg",
      alt: "Portrait public d’Abdelhak Bestandji",
    });
    expect(leadership.find((person) => person.name === "Hadjer Mezhoud")).not.toHaveProperty("portrait");

    expect(letsPlayTeam.find((person) => person.name === "Chafai Benamara · Chaft")).toMatchObject({
      portrait: "assets/chafai-benamara-provided_1faa62af.jpg",
      portraitAlt: "Portrait fourni de Chafai Benamara",
    });
    expect(letsPlayTeam.find((person) => person.name === "Rebai Chentli")).toHaveProperty("portrait");
    expect(letsPlayTeam.find((person) => person.name === "Naoufel Amokrane")).toMatchObject({
      portrait: "assets/naoufel-amokrane-provided_d90f66ed.jpg",
      portraitAlt: "Portrait fourni de Naoufel Amokrane",
    });
    expect(letsPlayTeam.find((person) => person.name === "Salim Benmokhtar")).toMatchObject({
      portrait: "assets/salim-benmokhtar-provided_8a0bc794.png",
      portraitAlt: "Portrait fourni de Salim Benmokhtar",
    });
    expect(letsPlayTeam.find((person) => person.name === "Ramy Baghli")).toMatchObject({
      portrait: "assets/ramy-baghli-provided_9b78f5fa.jpg",
      portraitAlt: "Portrait fourni de Ramy Baghli",
    });

    studioTeam.forEach((person) => {
      expect(person.portrait).toBeUndefined();
      expect(person.alt).toMatch(/à venir$/);
    });
  });

  it("associe une icône de pinceau au rôle de design graphique", () => {
    const salim = letsPlayTeam.find((person) => person.name === "Salim Benmokhtar");
    expect(salim).toMatchObject({ roleIcon: "graphicDesign" });
  });

  it("documente les co-animateurs des rubriques Cinéma ta3 El 7it et Easy Tech", () => {
    const rebai = letsPlayTeam.find((person) => person.name === "Rebai Chentli");
    const ramy = letsPlayTeam.find((person) => person.name === "Ramy Baghli");

    expect(rebai).toMatchObject({ marker: "CINÉMA", roleIcon: "presentation" });
    expect(rebai?.role).toContain("Cinéma ta3 El 7it");
    expect(rebai?.text).toContain("films, séries, animation");
    expect(rebai && "episodeFormat" in rebai ? rebai.episodeFormat : undefined).toContain("analyse des images");
    expect(rebai && "episode" in rebai ? rebai.episode.url : undefined).toContain("IB3UtlQdSSQ");
    expect(ramy).toMatchObject({ marker: "EASY TECH", roleIcon: "presentation" });
    expect(ramy?.role).toContain("Easy Tech");
    expect(ramy?.text).toContain("intelligence artificielle");
    expect(ramy && "episodeFormat" in ramy ? ramy.episodeFormat : undefined).toContain("usages du quotidien");
    expect(ramy && "episode" in ramy ? ramy.episode.url : undefined).toContain("0vMonbvVpZQ");
  });
});
