import { describe, expect, it } from "vitest";
import { operationalProjectDetails, operationalProjectPath } from "./operationalProjectDetails";
import { operationalProjects } from "./operationalProjectsContent";

describe("fiches détaillées des dossiers opérationnels", () => {
  it("documente chaque carte publique avec une fiche de même identifiant", () => {
    expect(Object.keys(operationalProjectDetails).sort()).toEqual(operationalProjects.map((project) => project.id).sort());
  });

  it("conserve un contexte, des spécificités et une source par réalisation", () => {
    Object.values(operationalProjectDetails).forEach((detail) => {
      expect(detail.context.length).toBeGreaterThan(80);
      expect(detail.specifications).toHaveLength(3);
      expect(detail.focus).toHaveLength(3);
      expect(detail.sourceUrl).toMatch(/^https:\/\//);
    });
  });

  it("génère une route détaillée stable pour chaque carte publique", () => {
    operationalProjects.forEach((project) => {
      expect(operationalProjectPath(project.id)).toBe(`/projets/${project.id}`);
    });
  });
});
