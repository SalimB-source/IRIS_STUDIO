/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
export const SEVEN_ARENA_PROJECT_PATH = "/projets/7ouma-arena";

export function getSevenArenaTransitionDuration(reducedMotion: boolean) {
  return reducedMotion ? 180 : 1900;
}

export function getSevenArenaExitDelay(reducedMotion: boolean) {
  return reducedMotion ? 100 : 1510;
}
