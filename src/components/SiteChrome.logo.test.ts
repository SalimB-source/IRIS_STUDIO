import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const siteChromeSource = readFileSync(new URL("./SiteChrome.tsx", import.meta.url), "utf8");
const siteStylesSource = readFileSync(new URL("../index.css", import.meta.url), "utf8");

describe("identité Iris Studio", () => {
  it("utilise le nouveau logo horizontal dans la navigation", () => {
    expect(siteChromeSource).toContain("IRIS_NAV_LOGO");
    expect(siteChromeSource).toContain("1000083810_fa866568.png");
    expect(siteChromeSource).toContain("iris-nav-logo-white_70ab914f.svg");
    expect(siteChromeSource).toContain('theme === "dark" ? IRIS_NAV_LOGO_WHITE : IRIS_NAV_LOGO');
  });

  it("utilise toujours la variante blanche dans le pied de page", () => {
    expect(siteChromeSource).toContain("export function SiteFooter() {");
    expect(siteChromeSource).toContain("const logo = IRIS_LOGO_WHITE;");
  });

  it("agrandit le logo horizontal dans la navigation", () => {
    expect(siteStylesSource).toContain(".brand-logo-wrap { width: 12.2rem; }");
    expect(siteStylesSource).toContain(".brand-logo { height: 2.65rem; }");
    expect(siteStylesSource).toContain(".brand-logo-wrap { width: 10.5rem; }");
    expect(siteStylesSource).toContain(".brand-logo { height: 2.35rem; }");
    expect(siteStylesSource).toContain(".brand-logo--white { filter: grayscale(1) brightness(0) invert(1); }");
    expect(siteStylesSource).toContain(".art-home .brand-logo { filter: grayscale(1) brightness(0) invert(1); }");
    expect(siteStylesSource).toContain(".dark .brand-logo-wrap img.brand-logo--white");
    expect(siteStylesSource).toContain("filter: grayscale(1) brightness(0) invert(1) !important;");
  });

  it("maintient le lien Let’s Play en violet dans le menu mobile", () => {
    expect(siteStylesSource).toContain(".mobile-menu > a.is-letsplay-link");
    expect(siteStylesSource).toContain("background:#281347 !important");
    expect(siteStylesSource).toContain("color:#fcca35 !important");
  });
});
