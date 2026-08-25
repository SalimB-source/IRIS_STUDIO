import { describe, expect, it } from "vitest";
import { brandPartners } from "./About";

describe("logos des marques Iris Studio", () => {
  it("présente les neuf marques avec un logo hébergé", () => {
    expect(brandPartners).toHaveLength(9);
    expect(brandPartners.map((partner) => partner.name)).toEqual([
      "Coca-Cola", "Henkel", "Ooredoo", "Philip Morris International", "Bel", "Danone", "Algérie Télécom", "Djezzy", "Lafarge",
    ]);
    brandPartners.forEach((partner) => expect(partner.logo).toMatch(/^\/manus-storage\//));
  });
});
