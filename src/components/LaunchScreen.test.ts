import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const launchScreenSource = readFileSync(new URL("./LaunchScreen.tsx", import.meta.url), "utf8");
const launchStyles = readFileSync(new URL("./LaunchScreen.css", import.meta.url), "utf8");

describe("chargement principal Iris", () => {
  it("présente une icône d’objectif rotative avec le logo Iris animé", () => {
    expect(launchScreenSource).toContain('className="launch-lens-icon"');
    expect(launchScreenSource).toContain('className="launch-logo-reveal"');
    expect(launchScreenSource).toContain("IRISSTUDIOnewwhite");
    expect(launchStyles).toContain("@keyframes launch-lens-pivot");
    expect(launchStyles).toContain("@keyframes launch-logo-appear");
    expect(launchStyles).toContain("transform: rotate(15deg)");
    expect(launchStyles).toContain("transform: rotate(-15deg)");
    expect(launchStyles).toContain("transform: rotate(5deg)");
    expect(launchStyles).toContain("prefers-reduced-motion: reduce");
  });

  it("reste silencieux et encadre explicitement l’objectif en rouge", () => {
    expect(launchScreenSource).not.toContain("new Audio");
    expect(launchScreenSource).not.toContain("launch-sound-toggle");
    expect(launchStyles).not.toContain(".launch-sound-toggle");
    expect(launchStyles).toContain("border: .42rem solid #e7433a");
  });
});
