export type FeaturedEpisode = {
  index: string;
  partner: string;
  source: string;
  title: string;
  description: string;
  views: string;
  duration: string;
  image: string;
  imageAlt: string;
  href: string;
  actionLabel: string;
};

export const featuredEpisodes: FeaturedEpisode[] = [
  {
    index: "LP / 01",
    partner: "LET’S PLAY × ALGÉRIE TÉLÉCOM",
    source: "CANAL YOUTUBE OFFICIEL",
    title: "The Legend of Grendizer: Between Yesterday and Today",
    description: "Une traversée pop culture entre mémoire collective et jeu vidéo, choisie parmi les épisodes les plus vus de la chaîne officielle.",
    views: "66 K VUES OBSERVÉES",
    duration: "21:13",
    image: "https://i.ytimg.com/vi/am2tBXsNO-8/hqdefault.jpg",
    imageAlt: "Miniature officielle de l’épisode Let’s Play The Legend of Grendizer: Between Yesterday and Today",
    href: "https://www.youtube.com/watch?v=am2tBXsNO-8",
    actionLabel: "Regarder l’épisode",
  },
  {
    index: "7A / 02",
    partner: "7OUMA ARENA × DJEZZY",
    source: "CANAL YOUTUBE OFFICIEL",
    title: "هل الموبايل غيمينغ ولى أقوى من PC والكونسول؟",
    description: "Un épisode long qui fait circuler la conversation du mobile gaming au cœur de la communauté 7ouma Arena.",
    views: "175 K VUES OBSERVÉES",
    duration: "55:29",
    image: "https://i.ytimg.com/vi/f9XByuv2d1k/hqdefault.jpg",
    imageAlt: "Miniature officielle d’un épisode 7ouma Arena by Djezzy consacré au mobile gaming",
    href: "https://www.youtube.com/watch?v=f9XByuv2d1k",
    actionLabel: "Regarder l’épisode",
  },
];
