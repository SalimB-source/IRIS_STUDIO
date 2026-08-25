import type { OperationalProject } from "./operationalProjectsContent";

type ProjectId = OperationalProject["id"];

export type OperationalProjectDetail = {
  id: ProjectId;
  eyebrow: string;
  headline: string;
  summary: string;
  context: string;
  specifications: readonly { label: string; value: string }[];
  focus: readonly { title: string; text: string }[];
  sourceUrl: string;
  sourceLabel: string;
};

export const operationalProjectDetails: Record<ProjectId, OperationalProjectDetail> = {
  gbfoods: {
    id: "gbfoods",
    eyebrow: "GBfoods Algeria · Retail execution",
    headline: "La présence de marque se joue aussi dans le détail du rayon.",
    summary: "Un accompagnement terrain documenté sur deux années, entre suivi des équipes de merchandising et coordination des points de vente.",
    context: "Iris Studio présente ce dossier comme un projet opérationnel conduit avec rigueur pour renforcer la présence et la visibilité de GBfoods Algeria. Le visuel fourni montre l’exécution merchandising de la gamme Jumbo en magasin.",
    specifications: [
      { label: "Territoire", value: "Points de vente et rayons de distribution" },
      { label: "Intervention", value: "Merchandising, suivi terrain et coordination" },
      { label: "Repère public", value: "Deux années d’accompagnement terrain" },
    ],
    focus: [
      { title: "Visibilité produit", text: "Faire exister la marque dans les usages réels de l’achat, au plus près du linéaire." },
      { title: "Exécution suivie", text: "Suivre les équipes et les points de vente pour maintenir une présence lisible dans la durée." },
      { title: "Coordination locale", text: "Relier les réalités de terrain aux objectifs de visibilité de la marque." },
    ],
    sourceUrl: "https://www.linkedin.com/company/iris-studio-alger",
    sourceLabel: "Consulter la page LinkedIn Iris Studio",
  },
  holcim: {
    id: "holcim",
    eyebrow: "Holcim El-Djazaïr · SITP 2024",
    headline: "Un stand conçu comme un espace de présence et d’échange.",
    summary: "Conception et réalisation du stand Holcim El-Djazaïr au Salon International des Travaux Publics 2024.",
    context: "Le dossier présente le stand réalisé pour Holcim El-Djazaïr à l’occasion du SITP 2024. La documentation visuelle fournie montre un espace ouvert, destiné à accueillir les échanges autour de la présence de la marque au salon.",
    specifications: [
      { label: "Format", value: "Stand de salon professionnel" },
      { label: "Événement", value: "Salon International des Travaux Publics 2024" },
      { label: "Intervention", value: "Conception et réalisation du stand" },
    ],
    focus: [
      { title: "Présence spatiale", text: "Donner une forme accueillante et identifiable à la marque dans un environnement de salon." },
      { title: "Parcours visiteur", text: "Organiser les zones d’échange et de présentation pour rendre la visite plus fluide." },
      { title: "Exécution événementielle", text: "Transformer l’intention de marque en dispositif concret, visible sur le terrain." },
    ],
    sourceUrl: "https://www.linkedin.com/company/iris-studio-alger",
    sourceLabel: "Consulter la page LinkedIn Iris Studio",
  },
  "amir-clean": {
    id: "amir-clean",
    eyebrow: "Amir Clean · Merchandising",
    headline: "Accompagner un nouveau partenaire jusqu’au point de vente.",
    summary: "Un projet de merchandising pour accompagner Amir Clean dans son déploiement et sa présence en rayon.",
    context: "Iris Studio indique accompagner Amir Clean dans le pilotage de son projet merchandising. La publication fournie met en scène le travail d’installation et de mise en rayon, au service d’une marque locale présentée comme attentive aux besoins des foyers algériens.",
    specifications: [
      { label: "Territoire", value: "Rayons et environnements de vente" },
      { label: "Intervention", value: "Pilotage merchandising et mise en rayon" },
      { label: "Positionnement", value: "Accompagnement d’un nouveau partenaire" },
    ],
    focus: [
      { title: "Présence en rayon", text: "Travailler la lisibilité du produit dans l’espace où se décide l’achat." },
      { title: "Déploiement accompagné", text: "Soutenir le passage d’une ambition de marque à une présence concrète en magasin." },
      { title: "Exécution terrain", text: "Mettre l’équipe et le dispositif au service d’un quotidien commercial plus cohérent." },
    ],
    sourceUrl: "https://www.linkedin.com/company/iris-studio-alger",
    sourceLabel: "Consulter la page LinkedIn Iris Studio",
  },
  djezzy: {
    id: "djezzy",
    eyebrow: "Djezzy · Trade marketing",
    headline: "Faire du terrain un levier stratégique de visibilité.",
    summary: "Depuis 2023, Iris Studio accompagne Djezzy dans le déploiement d’opérations de trade marketing à travers le territoire national.",
    context: "La publication fournie décrit une intervention allant de la conception des dispositifs d’activation à la coordination des équipes terrain, en passant par la logistique et le suivi de performance. Le visuel associé documente une activation de marque Djezzy en extérieur.",
    specifications: [
      { label: "Période annoncée", value: "Depuis 2023" },
      { label: "Échelle", value: "Territoire national" },
      { label: "Intervention", value: "Activation, coordination, logistique et suivi" },
    ],
    focus: [
      { title: "Activation de marque", text: "Concevoir des dispositifs capables de créer un point de contact direct avec les publics." },
      { title: "Coordination terrain", text: "Articuler les équipes, la logistique et les partenaires autour d’une même présence de marque." },
      { title: "Suivi de performance", text: "Inscrire le déploiement dans un regard opérationnel sur les résultats et les usages." },
    ],
    sourceUrl: "https://www.linkedin.com/company/iris-studio-alger",
    sourceLabel: "Consulter la page LinkedIn Iris Studio",
  },
};

export function operationalProjectPath(projectId: ProjectId) {
  return `/projets/${projectId}`;
}
