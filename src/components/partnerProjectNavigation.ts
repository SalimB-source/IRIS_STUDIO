/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
export const partnerProjectPaths = ["/projets/lets-play", "/projets/7ouma-arena"] as const;

export const pageScrollTop = {
  left: 0,
  top: 0,
  behavior: "auto" as const,
};

export const partnerProjectScrollTop = pageScrollTop;

export const partnerProjectScrollSettleDelay = 220;

export function isPartnerProjectPath(path: string) {
  return partnerProjectPaths.includes(path as (typeof partnerProjectPaths)[number]);
}

export function scrollToPageTop() {
  if (typeof window === "undefined") return;
  const root = document.scrollingElement ?? document.documentElement;
  const previousDocumentScrollBehavior = document.documentElement.style.scrollBehavior;
  const previousBodyScrollBehavior = document.body.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  root.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(pageScrollTop.left, pageScrollTop.top);
  window.requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousDocumentScrollBehavior;
    document.body.style.scrollBehavior = previousBodyScrollBehavior;
  });
}

export function scrollPartnerProjectToTop() {
  scrollToPageTop();
}
