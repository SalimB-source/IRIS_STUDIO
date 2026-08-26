/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
export const sevenArenaDossiers = [
  {
    id: "alliance-champions",
    index: "DOSSIER / 01",
    eyebrow: "FF PRO LEAGUE · ALLIANCE",
    title: "L’Alliance au sommet de la Pro League.",
    description:
      "Dans son épisode final, 7ouma Arena by Djezzy accueille VENOM, présenté comme le capitaine de Team Alliance et champion de la FF Pro League, aux côtés de Supreme, manager de l’équipe.",
    source: "Épisode officiel 7ouma Arena · 41:40",
    sourceHref: "https://www.youtube.com/watch?v=RxOv92HDMQI",
    actionLabel: "Voir le Team Alliance Special",
  },
  {
    id: "pro-league-route",
    index: "DOSSIER / 02",
    eyebrow: "FF PRO LEAGUE · MONTH 2",
    title: "Une compétition qui se raconte au fil des matchs.",
    description:
      "La chaîne officielle suit la Pro League de ses étapes de qualification à la finale. Les rendez-vous éditoriaux font de la compétition un format à vivre, autant qu’un classement à suivre.",
    source: "Épisode officiel 7ouma Arena · 29:44",
    sourceHref: "https://www.youtube.com/watch?v=jJx6CmNaxCo",
    actionLabel: "Voir le lancement du Month 2",
  },
] as const;

export const sevenArenaScreenings = [
  {
    id: "alliance-special",
    category: "TEAM ALLIANCE SPECIAL",
    title: "VENOM, capitaine des champions.",
    detail: "41:40 · 36 k vues observées",
    href: "https://www.youtube.com/watch?v=RxOv92HDMQI",
    image: "https://i.ytimg.com/vi/RxOv92HDMQI/hqdefault.jpg",
  },
  {
    id: "pro-league-month-two",
    category: "FF PRO LEAGUE · MONTH 2",
    title: "Le retour de la compétition.",
    detail: "29:44 · 98 k vues observées",
    href: "https://www.youtube.com/watch?v=jJx6CmNaxCo",
    image: "https://i.ytimg.com/vi/jJx6CmNaxCo/hqdefault.jpg",
  },
  {
    id: "qualifiers-highlights",
    category: "FREE FIRE QUALIFIERS",
    title: "Les temps forts des qualifications.",
    detail: "35:02 · 130 k vues observées",
    href: "https://www.youtube.com/watch?v=tw8n0oi01Wg",
    image: "https://i.ytimg.com/vi/tw8n0oi01Wg/hqdefault.jpg",
  },
] as const;

export const sevenArenaVoices = [
  {
    id: "samy-charif",
    name: "Samy Charif",
    role: "Fondateur d’Egor Gaming · présentateur de 7ouma Arena",
    href: "https://www.instagram.com/charif.samy.dz/",
    image: "assets/samy-charif-egor-public-portrait_38be12ee.jpg",
    imageAlt: "Samy Charif, portrait public lié à Egor Gaming",
    imageNote: "Portrait public · réseau social",
  },
  {
    id: "seven",
    name: "Seven",
    role: "Présentateur · caster e-sport des formats 7ouma Arena",
    href: "https://www.instagram.com/seven.caster_/",
    image: "assets/seven-instagram-profile_50ea9921.jpg",
    imageAlt: "Seven, portrait public issu de son profil Instagram",
    imageNote: "Portrait public · Instagram",
  },

  {
    id: "mlagi",
    name: "MLAGI",
    role: "Invité d’un épisode officiel 7ouma Arena",
    href: "https://www.instagram.com/mlagi0/",
    image: "assets/mlagi-instagram-profile_0ffed2a5.jpg",
    imageAlt: "MLAGI, portrait public issu de son profil Instagram",
    imageNote: "Portrait public · Instagram",
  },
  {
    id: "boneja7",
    name: "Boneja7",
    role: "Les frères Bounjah · streaming et Free Fire",
    href: "https://www.instagram.com/boneja7_34/",
    image: "assets/boneja7-social-8_ba438501.jpg",
    imageAlt: "Boneja7, photo publique issue de ses publications Instagram",
    imageNote: "Photo publique · Instagram",
  },
  {
    id: "bnl",
    name: "BNL",
    role: "Créateur invité · épisode 02 Ga3da Mobile",
    href: "https://www.instagram.com/bnl_yt/",
    image: "assets/bnl-instagram-profile_63088726.jpg",
    imageAlt: "BNL, portrait public issu de son profil Instagram",
    imageNote: "Portrait public · Instagram",
  },
] as const;

export const sevenArenaMentionedGuests = [
  { name: "RA3D", role: "Invité Free Fire · Ga3da Mobile avec BEESTO" },
  { name: "VENOM", role: "Capitaine de Team Alliance · champion FF Pro League" },
  { name: "Supreme", role: "Manager de Team Alliance · Team Alliance Special" },
  { name: "BEESTO", role: "Invité Free Fire · Ga3da Mobile avec RA3D" },
  { name: "BOSS YT", role: "Créateur invité · épisode Free Fire" },
  { name: "Lady Gaming", role: "Créatrice et streameuse · entretien Ga3da Mobile" },
] as const;

export const sevenArenaEcosystem = {
  label: "EGOR GAMING × 7OUMA ARENA",
  eyebrow: "Lien d’écosystème",
  title: "Un même terrain pour faire jouer l’e-sport.",
  description:
    "Samy Charif se présente publiquement comme CEO d’Egor Gaming et hôte de 7ouma Arena. Cette double présence relie le format 7ouma Arena à une plateforme compétitive pensée pour l’écosystème esport algérien.",
  note: "Relation présentée à partir de rôles publics déclarés ; aucun partenariat institutionnel distinct n’est affirmé ici.",
  platformHref: "https://egorgaming.com/",
  profileHref: "https://www.instagram.com/charif.samy.dz/",
} as const;

export const sevenArenaCredits = {
  eyebrow: "Remerciements & attribution",
  title: "7ouma Arena, un produit Djezzy.",
  description:
    "Djezzy porte 7ouma Arena comme projet e-sport et communautaire. Merci à la marque pour sa confiance et pour l’espace donné à une scène gaming algérienne plus visible, plus compétitive et plus connectée.",
  studio:
    "Imaginée et mise en action par Iris Studio, l’émission prend forme entre conception éditoriale, production de formats et activation communautaire.",
  chaft:
    "Chaft a participé activement à l’aventure de l’émission, au sein de cette mise en mouvement créative et éditoriale.",
  pillars: [
    { label: "Marque porteuse", value: "Djezzy" },
    { label: "Conception & activation", value: "Iris Studio" },
    { label: "Participation active", value: "Équipe projet" },
  ],
  activeParticipants: [
    {
      name: "Chaft",
      role: "Participation éditoriale active",
      description: "Contribution active à la mise en mouvement créative et éditoriale de l’émission.",
    },
    {
      name: "Samy « Egor »",
      role: "Présentateur",
      description: "Présentateur de 7ouma Arena et fondateur d’Egor Gaming.",
    },
    {
      name: "Seven",
      role: "Présentateur · caster e-sport",
      description: "Présentateur et caster e-sport associé aux formats de l’émission.",
    },
    {
      name: "Naoufel",
      role: "Community manager",
      description: "Community manager de l’émission et de ses échanges avec la communauté.",
    },
    {
      name: "Salim Benmokhtar",
      role: "Graphic design",
      description:
        "Charte graphique, visuels d’annonces et de résultats quotidiens, ainsi que les miniatures des épisodes.",
    },
    {
      name: "Kouceila",
      role: "Montage",
      description: "Montage des épisodes et des reels de 7ouma Arena.",
    },
    {
      name: "Ramy Baghli",
      role: "Planification",
      description: "Planification de l’émission et de ses rendez-vous éditoriaux.",
    },
  ],
} as const;

export const sevenArenaVisuals = [
  {
    id: "alliance-champions",
    kind: "resultat",
    category: "PUBLICATION INSTAGRAM · CHAMPIONS",
    title: "Team Alliance, champions.",
    detail: "Visuel HQ fourni · Pro League Free Fire",
    campaignPeriod: "Finale Pro League",
    image: "assets/alliance-champions_b6a53baf.jpg",
    alt: "Team Alliance présentée comme championne de la Pro League Free Fire par 7ouma Arena by Djezzy",
    href: "https://www.instagram.com/p/Dbyl8VIjTkt/",
  },
  {
    id: "lootbox-month-five",
    kind: "annonce",
    category: "PUBLICATION INSTAGRAM · LOOTBOX",
    title: "Lootbox Month 5.",
    detail: "Visuel HQ fourni · récompenses Free Fire",
    campaignPeriod: "Month 5",
    image: "assets/lootbox-month-five_54036fb0.jpg",
    alt: "Visuel 7ouma Arena Lootbox Month 5 avec des récompenses Free Fire",
    href: "https://www.instagram.com/7ouma.arena/",
  },
  {
    id: "lootbox-month-five-creators",
    kind: "annonce",
    category: "PUBLICATION INSTAGRAM · VOTE",
    title: "Lootbox Month 5, côté créateurs.",
    detail: "Visuel HQ fourni · vote communautaire",
    campaignPeriod: "Month 5 · vote créateurs",
    image: "assets/lootbox-month-five-creators_934873fb.jpg",
    alt: "Visuel 7ouma Arena présentant les créateurs sélectionnés pour Lootbox Month 5",
    href: "https://www.instagram.com/7ouma.arena/",
  },
  {
    id: "childrens-day-free-fire",
    kind: "annonce",
    category: "PUBLICATION INSTAGRAM · COMMUNAUTÉ",
    title: "Happy Children’s Day.",
    detail: "Visuel HQ fourni · rendez-vous Free Fire",
    campaignPeriod: "Journée des enfants",
    image: "assets/childrens-day_9dd4423c.jpg",
    alt: "Visuel 7ouma Arena et Free Fire pour la Journée des enfants",
    href: "https://www.instagram.com/7ouma.arena/",
  },
  {
    id: "wanted-dz-winner",
    kind: "resultat",
    category: "PUBLICATION INSTAGRAM · VAINQUEURS",
    title: "Wanted DZ, winners.",
    detail: "Visuel HQ fourni · résultat Pro League Free Fire",
    campaignPeriod: "Résultats Pro League",
    image: "assets/wanted-dz-winner_486ca2db.jpg",
    alt: "Wanted DZ annoncée comme équipe gagnante de la Pro League Free Fire par 7ouma Arena",
    href: "https://www.instagram.com/7ouma.arena/",
  },
  {
    id: "semi-final-global-ranking",
    kind: "resultat",
    category: "PUBLICATION INSTAGRAM · CLASSEMENT",
    title: "Semi-final Global Ranking.",
    detail: "Visuel HQ fourni · résultats Day 3/3",
    campaignPeriod: "Demi-finale · Day 3/3",
    image: "assets/pro-league-semi-final-ranking_7e10df4a.jpg",
    alt: "Visuel 7ouma Arena du classement mondial de demi-finale Pro League Free Fire",
    href: "https://www.instagram.com/7ouma.arena/",
  },
] as const;

export const sevenArenaVisualFilters = [
  { id: "tout", label: "Tout" },
  { id: "annonce", label: "Annonces" },
  { id: "resultat", label: "Résultats" },
] as const;
