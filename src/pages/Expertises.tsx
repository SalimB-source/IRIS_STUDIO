/**
 * Direction « Logo Iris Studio » : les expertises forment un itinéraire clair, précis et actionnable, ponctué de rouge Iris.
 * Les lignes, l’œil-prisme et les numéros traduisent le passage de l’intention à la mesure sans décor superflu.
 */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const areas = [
  { number: "01", eyebrow: "Penser", title: "Route to Market", copy: "Clarifier le potentiel, la proposition et le plan qui permettra à une idée de trouver sa place.", tags: ["Marketing stratégique", "Business plan", "Audit terrain"] },
  { number: "02", eyebrow: "Activer", title: "Trade marketing", copy: "Donner à la marque une présence qui guide les usages et aide les équipes commerciales à faire la différence.", tags: ["Expérience retail", "Visibilité", "Activation"] },
  { number: "03", eyebrow: "Accompagner", title: "Conseil & déploiement", copy: "Faire circuler une idée du bureau jusqu’au terrain, avec un suivi attentif des détails et des retours de terrain.", tags: ["Pilotage", "Accompagnement", "Suivi d’exécution"] },
];

export default function Expertises() {
  return <div className="page-shell"><SiteHeader /><main>
    <section className="page-hero page-hero-expertise" aria-labelledby="expertise-title"><div className="expertise-hero-prism" aria-hidden="true" /><div className="iris-eye-orbit iris-eye-hero" aria-hidden="true"><i /><i /><i /></div><div className="page-hero-inner"><p className="eyebrow light-eyebrow">02 / Expertises</p><h1 id="expertise-title">La stratégie est le départ.<br /><em>L’impact est la mesure.</em></h1><p>Une lecture ambitieuse et concrète, du premier diagnostic jusqu’à l’exécution au plus près des usages.</p></div><span className="hero-coordinate">DE L’INTENTION À L’IMPACT / 02</span></section>
    <section className="expertise-list">{areas.map((area) => <article className="expertise-row" key={area.number}><div className="expertise-row-index">{area.number}</div><div><p>{area.eyebrow}</p><h2>{area.title}</h2></div><p className="expertise-row-copy">{area.copy}</p><div className="expertise-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</section>
    <section className="expertise-field section-pad"><div className="field-copy"><p className="eyebrow">Un système, pas une addition</p><h2 className="display-title">Observer. Orchestrer.<br /><em>Activer. Apprendre.</em></h2><p>Chaque mission se construit comme un parcours lisible : les intentions s’affinent, les équipes s’alignent, le terrain répond, puis la suite devient plus juste.</p><Link className="arrow-link" href="/contact">Parler d’un besoin <ArrowUpRight size={17} /></Link></div><figure><img src="assets/iris-field-documentary_b5c5419c.webp" alt="Activation de marque en point de vente" /><figcaption>CE QUI COMPTE : LE CONTEXTE, L’USAGE, LA DÉCISION.</figcaption></figure></section>
    <section className="page-next section-pad"><p>Prochaine étape / 03</p><Link href="/projets"><span>Voir les formats<br /><em>en mouvement.</em></span><ArrowUpRight size={34} /></Link></section>
  </main><SiteFooter /></div>;
}
