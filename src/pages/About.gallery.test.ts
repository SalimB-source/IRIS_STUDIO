import { describe, expect, it } from "vitest";
import { backstageGallery } from "./About";

describe("galerie des coulisses Iris Studio", () => {
  it("présente uniquement trois archives opérationnelles attribuées", () => {
    expect(backstageGallery).toHaveLength(3);
    expect(backstageGallery.map((item) => item.id)).toEqual([
      "gbfoods-retail",
      "holcim-stand",
      "djezzy-activation",
    ]);
  });

  it("conserve une image locale, une alternative et une source pour chaque archive", () => {
    backstageGallery.forEach((item) => {
      expect(item.image).toMatch(/^\/manus-storage\//);
      expect(item.alt).toBeTruthy();
      expect(item.source).toContain("archive LinkedIn Iris Studio fournie");
    });
  });
});

