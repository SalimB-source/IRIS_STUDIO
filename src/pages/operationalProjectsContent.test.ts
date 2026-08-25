import { describe, expect, it } from "vitest";
import { operationalProjects } from "./operationalProjectsContent";

describe("dossiers opérationnels illustrés", () => {
  it("présente les quatre dossiers publics avec un visuel stocké et un texte alternatif", () => {
    expect(operationalProjects.map((project) => project.id)).toEqual([
      "gbfoods",
      "holcim",
      "amir-clean",
      "djezzy",
    ]);
    operationalProjects.forEach((project) => {
      expect(project.image).toMatch(/^\/manus-storage\/.+\.jpg$/);
      expect(project.alt.length).toBeGreaterThan(24);
      expect(project.sourceLabel).toContain("LinkedIn");
    });
  });

  it("n’expose plus Iris Trade dans les dossiers publics", () => {
    expect(operationalProjects.some((project) => project.id === "iris-trade")).toBe(false);
  });
});
