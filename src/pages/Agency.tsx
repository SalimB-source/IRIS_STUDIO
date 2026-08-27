/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
/**
 * Direction « Logo Iris Studio » : l’agence est un chapitre documentaire clair, structuré par le rouge Iris et l’œil-prisme.
 * Les photographies de travail dialoguent avec les repères de méthode, les chiffres d’archive et les rayons rouge-orangé directionnels.
 */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { brandPartners } from "@/components/brandPartners";
import "./Operations.css";
import "./AgencyPartnerMarquee.css";
import "./AgencyHeroCorporate.css";

const values = [
  ["01", "Écouter", "Commencer par le contexte, les équipes et les usages qui font réellement bouger une décision."],
  ["02", "Orchestrer", "Relier les bons talents, les bons moyens et les bons moments autour d’un cap clair."],
  ["03", "Agir", "Faire exister la stratégie au contact du terrain plutôt que la laisser dans une présentation."],
];

const irisFigures = [["3", "directions"], ["268", "employés"], ["180", "véhicules"], ["+25", "clients"], ["+38", "wilayas"], ["4", "missions"]];
const agencyHeroImage = "assets/iris-agency-corporate-hero-1600.webp";
const agencyHeroImageSmall = "assets/iris-agency-corporate-hero-960.webp";

export default function Agency() {
  return <div className="page-shell"><SiteHeader /><main>
    <section className="page-hero page-hero-agency" aria-labelledby="agency-title"><img className="page-hero-photo" src={agencyHeroImage} srcSet={`${agencyHeroImageSmall} 960w, ${agencyHeroImage} 1600w`} sizes="100vw" alt="" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" /><div className="page-hero-shade" /><div className="page-hero-ray" /><div className="iris-eye-orbit iris-eye-hero" aria-hidden="true"><i /><i /><i /></div><div className="page-hero-inner"><p className="eyebrow light-eyebrow">01 / L’agence</p><h1 id="agency-title">Les bonnes idées<br />ont besoin de <em>présence.</em></h1><p>Depuis Alger, Iris Studio accompagne les marques au moment où la réflexion doit devenir une action tangible.</p></div><div className="page-hero-index">AGENCE / 36.75°</div><div className="agency-hero-dossier">Cadre de méthode<br /><span>Illustration éditoriale / 01</span></div></section>
    <section className="agency-manifesto section-pad"><div className="agency-manifesto-side"><div className="section-marker"><span>02</span><i /></div><p className="eyebrow">Notre posture</p><p>Une agence qui construit avec les gens, jamais à distance du contexte.</p></div><div><h2 className="display-title">Comprendre avant<br /><em>de faire.</em></h2><p className="large-copy">Notre pratique associe stratégie, écoute et déploiement. L’objectif n’est pas de produire plus de communication, mais d’installer une idée là où elle peut réellement compter.</p><Link className="arrow-link" href="/expertises">Découvrir nos expertises <ArrowUpRight size={17} /></Link></div></section>
    <section className="values-section section-pad"><div className="values-image"><img src="assets/iris-team-documentary_eceff224.jpg" alt="Illustration éditoriale d’une réunion de travail" /><span>CADRE DE MÉTHODE / ILLUSTRATION</span></div><div className="values-list">{values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="iris-figures section-pad" aria-labelledby="figures-title"><div className="iris-figures-header"><div><p className="eyebrow">Iris en chiffres</p><h2 id="figures-title" className="display-title">Une présence qui<br />se lit <em>sur le terrain.</em></h2></div><p>Ces repères reprennent la publication institutionnelle « Vision 2025 » d’Iris Studio. Ils donnent une lecture d’échelle de l’organisation et de ses opérations.</p></div><div className="iris-figures-grid">{irisFigures.map(([figure, label]) => <article key={label}><strong>{figure}</strong><span>{label}</span></article>)}</div><p className="iris-figures-note">Repères publiés dans l’archive Iris Studio #Vision2025 ; ils sont présentés comme un instantané de communication, non comme des données mises à jour en temps réel.</p></section>
    <section className="proof-section agency-trust-marquee" aria-labelledby="agency-trust-title"><div className="agency-trust-marquee-heading section-pad"><div><p className="eyebrow">Trajectoires partagées</p><h2 id="agency-trust-title" className="display-title">Des marques qui nous font <em>confiance.</em></h2></div><p>Des collaborations qui prolongent les idées sur le terrain, auprès de publics et de contextes différents.</p></div><div className="agency-trust-marquee-window"><div className="agency-trust-marquee-track">{[0, 1].map((setIndex) => <div className="agency-trust-marquee-set" aria-hidden={setIndex === 1} key={setIndex}>{brandPartners.map((client) => <span className={`agency-trust-logo agency-trust-logo--${client.name.toLowerCase().replaceAll(" ", "-")}`} key={`${client.name}-${setIndex}`}><img src={client.logo} alt={setIndex === 0 ? `Logo ${client.name}` : ""} loading="lazy" decoding="async" /></span>)}</div>)}</div></div></section>
    <section className="page-next section-pad"><p>Prochaine étape / 02</p><Link href="/expertises"><span>Ce que nous<br /><em>activons.</em></span><ArrowUpRight size={34} /></Link></section>
  </main><SiteFooter /></div>;
}
