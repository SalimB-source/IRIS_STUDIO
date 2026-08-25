import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const contactSource = readFileSync(new URL("./Contact.tsx", import.meta.url), "utf8");

describe("page Contact publiée", () => {
  it("privilégie les canaux directs plutôt que le formulaire serveur", () => {
    expect(contactSource).toContain("Commercial@iris-dz.com");
    expect(contactSource).toContain("mailto:${commercialEmail}");
    expect(contactSource).not.toContain("trpc.contact.submit");
    expect(contactSource).not.toContain("<form");
  });

  it("présente les trois réseaux sous l’adresse commerciale", () => {
    const emailPosition = contactSource.indexOf("Commercial@iris-dz.com");
    const socialPosition = contactSource.indexOf("contact-socials");

    expect(socialPosition).toBeGreaterThan(emailPosition);
    expect(contactSource).toContain("linkedin.com/company/iris-studio-alger");
    expect(contactSource).toContain("instagram.com/iris_studio_marketing");
    expect(contactSource).toContain("youtube.com/@letsplay.officiel");
  });
});
