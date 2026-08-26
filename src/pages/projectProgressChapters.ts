/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
export type ProjectProgressChapter = {
  id: string;
  label: string;
};

export const letsPlayProgressChapters = [
  { id: "letsplay-overview", label: "Le projet" },
  { id: "letsplay-terrain", label: "Terrain" },
  { id: "letsplay-archives", label: "Archives" },
  { id: "letsplay-focus", label: "Focus" },
  { id: "letsplay-instagram", label: "Communauté" },
] as const satisfies readonly ProjectProgressChapter[];

export const sevenArenaProgressChapters = [
  { id: "arena-overview", label: "Le projet" },
  { id: "arena-attribution", label: "Crédits" },
  { id: "arena-visuals", label: "Visuels" },
  { id: "arena-archive", label: "Pro League" },
  { id: "arena-voices", label: "Communauté" },
] as const satisfies readonly ProjectProgressChapter[];
