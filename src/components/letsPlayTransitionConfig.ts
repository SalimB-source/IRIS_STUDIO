/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
export const LETS_PLAY_PROJECT_PATH = "/projets/lets-play";

export function getLetsPlayTransitionDuration(reducedMotion: boolean) {
  return reducedMotion ? 180 : 2600;
}

export function getLetsPlayExitDelay(reducedMotion: boolean) {
  return reducedMotion ? 180 : 2120;
}
