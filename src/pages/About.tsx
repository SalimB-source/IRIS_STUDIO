/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
/**
 * Direction « Portfolio Iris » : page À propos blanche, rouge Iris et orange signal.
 * La narration emploie les faits institutionnels vérifiables, présente la direction avec portraits publics
 * crédite Let’s Play séparément et présente l’équipe Iris Studio avec des fonctions et portraits publics attribués avec prudence.
 */
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Brush, Clapperboard, Linkedin, LoaderCircle, Mic2, MoveRight, PenLine, Play, UserRound, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./About.css";
import "./AboutRefinement.css";
import "./AboutPortraitPlaceholders.css";

const roleIcons = {
  direction: BriefcaseBusiness,
  editorial: PenLine,
  community: UsersRound,
  graphicDesign: Brush,
  videoEditing: Clapperboard,
  projectManagement: BriefcaseBusiness,
  data: BarChart3,
  presentation: Mic2,
} as const;

type RoleIcon = keyof typeof roleIcons;

function RoleGlyph({ icon }: { icon: RoleIcon }) {
  const Icon = roleIcons[icon];
  return <Icon size={16} strokeWidth={1.7} aria-hidden="true" />;
}

function RoleBadge({ icon, label, className = "" }: { icon: RoleIcon; label: string; className?: string }) {
  return <p className={`about-role-badge ${className}`}><RoleGlyph icon={icon} /><span>{label}</span></p>;
}

function PersonPlaceholder({ name }: { name: string }) {
  return <div className="about-person-placeholder" role="img" aria-label={`Portrait de ${name} à venir`}><UserRound size={32} strokeWidth={1.5} aria-hidden="true" /><span>Portrait à venir</span></div>;
}

type PersonMediaVariant = "person" | "letsplay" | "studio";

function PersonMedia({ name, portrait, alt, variant = "person" }: { name: string; portrait?: string; alt?: string; variant?: PersonMediaVariant }) {
  if (!portrait) return <PersonPlaceholder name={name} />;

  const className = variant === "letsplay"
    ? "about-letsplay-member-portrait"
    : variant === "studio"
      ? "about-studio-member-portrait"
      : "about-person-portrait";

  return (
    <div className={className}>
      <img src={portrait} alt={alt ?? `Portrait public de ${name}`} loading="lazy" decoding="async" />
    </div>
  );
}

const principles = [
  {
    number: "01",
    title: "Écouter avant d’activer.",
    text: "Chaque réponse utile commence par un contexte compris : la marque, les usages, les équipes et le terrain qui les relie.",
  },
  {
    number: "02",
    title: "Construire avec les bons alliés.",
    text: "L’agence rassemble les compétences les plus pertinentes pour donner à une idée la forme qui lui permettra d’agir.",
  },
  {
    number: "03",
    title: "Faire avancer le réel.",
    text: "La stratégie se mesure lorsqu’elle devient visible, activable et utile pour les marques comme pour leurs communautés.",
  },
];

export const backstageGallery = [
  {
    id: "gbfoods-retail",
    index: "ARCHIVE / 01",
    title: "Préparer le point de vente.",
    description: "Exécution retail et suivi de merchandising autour d’un présentoir Jumbo Noodles.",
    image: "assets/gbfoods-retail-execution_e4762b3b.jpg",
    alt: "Intervention de merchandising sur un présentoir Jumbo Noodles, archive LinkedIn Iris Studio fournie.",
    source: "GBfoods Algeria · archive LinkedIn Iris Studio fournie",
    layout: "retail",
  },
  {
    id: "holcim-stand",
    index: "ARCHIVE / 02",
    title: "Composer un espace de marque.",
    description: "Dispositif Holcim El-Djazaïr présenté au Salon International des Travaux Publics 2024.",
    image: "assets/holcim-sitp-stand_cd9587e2.jpg",
    alt: "Stand Holcim El-Djazaïr au Salon International des Travaux Publics 2024, archive LinkedIn Iris Studio fournie.",
    source: "Holcim / SITP 2024 · archive LinkedIn Iris Studio fournie",
    layout: "panorama",
  },
  {
    id: "djezzy-activation",
    index: "ARCHIVE / 03",
    title: "Déployer dans la ville.",
    description: "Activation Djezzy déployée sur le terrain avec un dispositif visible au contact du public.",
    image: "assets/djezzy-trade-activation_1642adb5.jpg",
    alt: "Dispositif d’activation terrain Djezzy, archive LinkedIn Iris Studio fournie.",
    source: "Djezzy · archive LinkedIn Iris Studio fournie",
    layout: "activation",
  },
] as const;

export const brandPartners = [
  { name: "Coca-Cola", logo: "assets/coca-cola-logo_5889a27b.png" },
  { name: "Henkel", logo: "assets/henkel-logo-transparent-provided_47000655.png" },
  { name: "Ooredoo", logo: "assets/ooredoo-logo-provided_5e9d03a0.png" },
  { name: "Philip Morris International", logo: "assets/philip-morris-logo_9da5a02d.png" },
  { name: "Bel", logo: "assets/bel-logo_b884da95.jpg" },
  { name: "Danone", logo: "assets/danone-logo_ad3b4003.png" },
  { name: "Algérie Télécom", logo: "assets/algerie-telecom-logo_58b44931.png" },
  { name: "Djezzy", logo: "assets/djezzy-logo_827e6b0c.svg" },
  { name: "Lafarge", logo: "assets/lafarge-logo_cd94104e.png" },
] as const;

export const leadership = [
  {
    name: "Rebai Chentli",
    role: "Directeur général",
    text: "Fonction associée publiquement à la direction générale d’Iris Studio.",
    portrait: "assets/rebai-chentli_80c004cc.jpg",
    profile: "https://dz.linkedin.com/in/rebai-chentli-160a5332",
    alt: "Portrait public de Rebai Chentli",
    roleIcon: "direction" as const,
  },
  {
    name: "Abdelhak Bestandji",
    role: "Directeur associé",
    text: "Fonction associée publiquement à la direction de la SARL Iris Studio.",
    portrait: "assets/abdelhak-bestandji-provided_76fb39f0.jpg",
    profile: "https://dz.linkedin.com/in/abdelhak-bestandji-9b65918a",
    alt: "Portrait public d’Abdelhak Bestandji",
    roleIcon: "direction" as const,
  },
  {
    name: "Hadjer Mezhoud",
    role: "Responsable administratif et financier",
    text: "Responsable administratif et financier d’Iris Studio, selon l’intitulé professionnel communiqué pour cette fiche.",
    portrait: "assets/hadjer-mezhoud.jpg",
    alt: "Portrait public de Hadjer Mezhoud",
    profile: "https://www.linkedin.com/in/hadjer-mezhoud-a95b9969",
    roleIcon: "direction" as const,
  },
];

export const letsPlayTeam = [
  {
    name: "Chafai Benamara · Chaft",
    role: "Éditeur en chef · gaming, cinéma & tech",
    text: "Éditeur en chef Gaming, Cinéma et Tech chez Iris Studio, Chafai Benamara est aussi identifié publiquement comme Editor in Chief & Host. À travers Let’s Play, il porte la conversation éditoriale entre jeu vidéo, culture, technologies et communauté.",
    marker: "ÉDITO",
    roleIcon: "editorial" as const,
    portrait: "assets/chafai-benamara-provided_1faa62af.jpg",
    portraitAlt: "Portrait fourni de Chafai Benamara",
    portraitCaption: "Portrait fourni / Chafai Benamara",
    source: "https://dz.linkedin.com/in/chafai-benamara-b7b87316",
    sourceLabel: "Voir le profil LinkedIn",
    linkedin: true,
  },
  {
    name: "Rebai Chentli",
    role: "Directeur d’agence · Co-animateur, Cinéma ta3 El 7it",
    text: "Directeur de l’agence Iris Studio et co-animateur de Cinéma ta3 El 7it, la rubrique qui met en discussion films, séries, animation et imaginaires pop culture.",
    episodeFormat: "Un film, une série, une sortie ou une actualité lance le débrief ; la discussion relie ensuite analyse des images, récit et culture pop.",
    episode: {
      label: "Voir l’épisode · concours du film court",
      url: "https://www.youtube.com/watch?v=IB3UtlQdSSQ&list=PLESXjoPag9EkfPAvP5CSq8CxL881aokt5",
    },
    marker: "CINÉMA",
    roleIcon: "presentation" as const,
    portrait: "assets/rebai-chentli_80c004cc.jpg",
    portraitAlt: "Portrait public de Rebai Chentli",
    portraitCaption: "Portrait / direction Iris Studio",
    source: "https://dz.linkedin.com/in/rebai-chentli-160a5332",
    sourceLabel: "Voir le profil LinkedIn",
    linkedin: true,
  },
  {
    name: "Naoufel Amokrane",
    role: "Senior Community Manager · Let’s Play",
    text: "Senior Community Manager de l’équipe Let’s Play, fonction communiquée par Iris Studio. Sa carte reste volontairement sans lien professionnel afin d’éviter toute association à un homonyme non vérifié.",
    marker: "COMMUNAUTÉ",
    roleIcon: "community" as const,
    portrait: "assets/naoufel-amokrane-provided_d90f66ed.jpg",
    portraitAlt: "Portrait fourni de Naoufel Amokrane",
    portraitCaption: "Portrait fourni / Naoufel Amokrane",
  },
  {
    name: "Salim Benmokhtar",
    role: "Design graphique · Iris Studio",
    text: "Son profil professionnel public le présente comme Graphic Designer Senior chez Iris Studio.",
    marker: "IMAGE",
    roleIcon: "graphicDesign" as const,
    portrait: "assets/salim-benmokhtar-provided_8a0bc794.png",
    portraitAlt: "Portrait fourni de Salim Benmokhtar",
    source: "https://dz.linkedin.com/in/salim-benmokhtar-526408365",
    sourceLabel: "Voir le profil LinkedIn",
    linkedin: true,
  },
  {
    name: "Koussaila Ait Saada",
    role: "Édition vidéo · Iris Studio",
    text: "Son profil professionnel public le présente comme éditeur vidéo chez Iris Studio.",
    marker: "MONTAGE",
    roleIcon: "videoEditing" as const,
    source: "https://dz.linkedin.com/in/ait-saada-koussaila-153175350",
    sourceLabel: "Voir le profil LinkedIn",
    linkedin: true,
  },
  {
    name: "Ramy Baghli",
    role: "Co-présentateur · rubrique Easy Tech",
    text: "Co-présentateur d’Easy Tech, une rubrique qui rend des sujets technologiques, dont l’intelligence artificielle, accessibles à la communauté Let’s Play.",
    episodeFormat: "Un sujet technologique concret sert de point de départ, puis l’épisode le replace dans les usages du quotidien et du travail pour faciliter la discussion.",
    episode: {
      label: "Voir Easy Tech · l’IA avec Ramy",
      url: "https://www.youtube.com/watch?v=0vMonbvVpZQ",
    },
    marker: "EASY TECH",
    roleIcon: "presentation" as const,
    portrait: "assets/ramy-baghli-provided_9b78f5fa.jpg",
    portraitAlt: "Portrait fourni de Ramy Baghli",
    portraitCaption: "Portrait fourni / Ramy Baghli",
  },
];

export const studioTeam = [
  {
    name: "Amine Ladjal",
    role: "Chef de projet · Iris Studio",
    text: "Chef de projet chez Iris Studio. Il contribue à la coordination et au suivi des projets au sein de l’agence.",
    portrait: undefined,
    profile: "https://dz.linkedin.com/in/amine-ladjal-2796611a2",
    alt: "Portrait d’Amine Ladjal à venir",
    roleIcon: "projectManagement" as const,
  },
  {
    name: "Farouk Lakehal",
    role: "Chef de projet · Iris Studio",
    text: "Chef de projet chez Iris Studio. Il participe à l’organisation et à l’avancement des opérations portées par le studio.",
    portrait: undefined,
    profile: "https://dz.linkedin.com/in/farouk-lakehal-464666289",
    alt: "Portrait de Farouk Lakehal à venir",
    roleIcon: "projectManagement" as const,
  },
  {
    name: "Ayoub Toukal",
    role: "Data Engineer · Data Scientist · Big Data Analyst",
    text: "Profil data chez Iris Studio, avec une expertise déclarée en data engineering, data science et big data analytics.",
    portrait: undefined,
    profile: "https://dz.linkedin.com/in/toukal-ayoub-664429298",
    alt: "Portrait d’Ayoub Toukal à venir",
    roleIcon: "data" as const,
  },
  {
    name: "Chakib Taleb",
    role: "Senior Project Manager · Iris Studio",
    text: "Senior Project Manager chez Iris Studio. Il accompagne le pilotage de projets et la coordination de leurs étapes de production.",
    portrait: undefined,
    profile: "https://dz.linkedin.com/in/chakib-taleb-716abb179",
    alt: "Portrait de Chakib Taleb à venir",
    roleIcon: "projectManagement" as const,
  },
];

export default function About() {
  const [loadingEpisodeUrl, setLoadingEpisodeUrl] = useState<string | null>(null);

  const handleEpisodeClick = (event: ReactMouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();
    if (loadingEpisodeUrl) return;

    const videoWindow = window.open("about:blank", "_blank");
    if (videoWindow) videoWindow.opener = null;

    setLoadingEpisodeUrl(url);
    window.setTimeout(() => {
      if (videoWindow) {
        videoWindow.location.href = url;
      } else {
        window.location.assign(url);
      }
      setLoadingEpisodeUrl(null);
    }, 320);
  };

  return (
    <div className="site-shell about-page">
      <SiteHeader />
      <main>
        <section className="about-hero section-pad" aria-labelledby="about-title">
          <div className="about-hero-line" aria-hidden="true"><i /><i /><i /></div>
          <div className="about-hero-meta">
            <p className="eyebrow">À propos / Iris Studio</p>
            <p>Alger, Algérie<br />Une communication qui part du réel.</p>
          </div>
          <div className="about-hero-main">
            <span className="about-section-index">00 / ORIGINE</span>
            <h1 id="about-title">Le studio commence<br />par <em>la rencontre.</em></h1>
            <p>
              Iris Studio accompagne les marques au plus près de leurs enjeux. Une idée ne suffit pas : elle doit trouver son langage, son équipe et son terrain.
            </p>
          </div>
          <div className="about-hero-eye" aria-hidden="true"><i /><i /><i /><b /></div>
        </section>

        <section className="about-origin section-pad" aria-labelledby="origin-title">
          <div className="about-origin-label">
            <span>01</span>
            <p>NOTRE HISTOIRE<br />EN MOUVEMENT</p>
          </div>
          <div className="about-origin-copy">
            <p className="eyebrow">Une agence qui s’adapte</p>
            <h2 id="origin-title" className="display-title">Partir d’un besoin.<br /><em>Faire émerger une réponse.</em></h2>
            <div className="about-story-columns">
              <p>
                Iris Studio est né d’une volonté : offrir des solutions sur mesure aux marques qui cherchent à faire évoluer leur communication. L’agence aborde chaque projet comme une rencontre, entre une ambition, un métier, un public et une réalité de marché.
              </p>
              <p>
                Forte de plus d’une décennie d’expérience, elle se redéfinit avec son époque et ses enjeux. Sa créativité et sa réactivité servent un objectif concret : simplifier les problématiques de communication et créer des dispositifs qui produisent un impact juste.
              </p>
            </div>
          </div>
          <aside className="about-experience-note">
            <strong>10<span>+</span></strong>
            <p>années d’expérience<br />au contact des marques<br />et du terrain.</p>
          </aside>
        </section>

        <section className="about-principles section-pad" aria-labelledby="principles-title">
          <div className="about-principles-heading">
            <div><p className="eyebrow">Notre ligne de conduite</p><h2 id="principles-title" className="display-title">Une agence organique,<br /><em>éclectique et pragmatique.</em></h2></div>
            <p>Une même exigence relie nos métiers : faire de la communication un levier lisible pour les équipes, les marques et leurs publics.</p>
          </div>
          <div className="about-principles-list">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                <MoveRight size={20} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="about-proof section-pad" aria-labelledby="proof-title">
          <div className="about-proof-route" aria-hidden="true"><span>02</span><i /><b>PREUVE TERRAIN</b></div>
          <figure className="about-proof-media">
            <span className="about-proof-index">ARCHIVE / 01</span>
            <img src="assets/letsplay-comiccon_56bebf05.jpg" alt="Games and Comic Con Dzair, publication officielle de Let’s Play" />
            <figcaption><span>Territoire culture & communauté</span><strong>Let’s Play × Algérie Télécom — Games & Comic Con Dzair</strong></figcaption>
          </figure>
          <div className="about-proof-copy">
            <p className="eyebrow">Une trace, pas un décor</p>
            <h2 id="proof-title" className="display-title">Le terrain est notre<br />premier <em>document.</em></h2>
            <p>Les projets d’Iris Studio prennent leur sens au contact des communautés, des usages et des partenaires. Cette archive publique Let’s Play témoigne d’une pratique : observer ce qui se passe, puis donner une forme juste à la conversation.</p>
            <a className="arrow-link" href="https://www.youtube.com/watch?v=HzigJZOxz2o" target="_blank" rel="noreferrer">Consulter l’archive source <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="about-backstage-gallery section-pad" aria-labelledby="backstage-gallery-title">
          <div className="about-backstage-gallery-route" aria-hidden="true"><span>03</span><i /><b>COULISSES OPÉRATIONNELLES</b></div>
          <div className="about-backstage-gallery-heading">
            <div>
              <p className="eyebrow">Coulisses / archives de terrain</p>
              <h2 id="backstage-gallery-title" className="display-title">Avant l’impact, il y a<br /><em>le geste juste.</em></h2>
            </div>
            <div>
              <p>Une sélection d’archives de projets accompagne le récit du studio : préparation du point de vente, conception de dispositifs et activation sur le terrain.</p>
              <span>Dossiers / captures LinkedIn Iris Studio fournies par l’équipe</span>
            </div>
          </div>
          <div className="about-backstage-gallery-grid">
            {backstageGallery.map((item) => (
              <figure key={item.id} className={`about-backstage-gallery-item about-backstage-gallery-item-${item.layout}`}>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>
                  <span>{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <small>{item.source}</small>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link href="/projets" className="about-backstage-gallery-link">Voir les dossiers opérationnels <ArrowUpRight size={17} /></Link>
        </section>

        <section className="about-letsplay-team section-pad" aria-labelledby="letsplay-team-title">
          <div className="about-letsplay-team-route" aria-hidden="true"><span>04</span><i /><b>CRÉDITS DE FABRICATION</b></div>
          <div className="about-letsplay-team-heading">
            <p className="eyebrow">Let’s Play × Algérie Télécom</p>
            <h2 id="letsplay-team-title" className="display-title">Une émission se construit<br />à plusieurs <em>regards.</em></h2>
            <p>
              Cette sélection réunit des membres de l’équipe Let’s Play communiqués par Iris Studio. Les cartes distinguent les fonctions visibles dans les sources publiques des contributions d’équipe confirmées par le studio.
            </p>
          </div>
          <div className="about-letsplay-team-grid">
            {letsPlayTeam.map((person, index) => (
              <article key={person.name} className="about-letsplay-member">
                <div className="about-letsplay-member-top">
                  <span>ÉQUIPE / 0{index + 1}</span>
                  <div aria-hidden="true" className="about-letsplay-member-mark"><RoleGlyph icon={person.roleIcon} /></div>
                </div>
                <PersonMedia
                  name={person.name}
                  portrait={"portrait" in person ? person.portrait : undefined}
                  alt={"portraitAlt" in person ? person.portraitAlt : undefined}
                  variant="letsplay"
                />
                <RoleBadge icon={person.roleIcon} label={person.role} />
                <h3>{person.name}</h3>
                <small>{person.text}</small>
                {"episodeFormat" in person && person.episodeFormat ? (
                  <div className="about-letsplay-member-format">
                    <span>Format d’un épisode</span>
                    <p>{person.episodeFormat}</p>
                  </div>
                ) : null}
                <div className="about-letsplay-member-actions">
                  {"episode" in person && person.episode ? (() => {
                    const isEpisodeLoading = loadingEpisodeUrl === person.episode.url;
                    return (
                    <a href={person.episode.url} target="_blank" rel="noreferrer" className="about-letsplay-member-episode-link" aria-label={`${person.episode.label} sur la chaîne YouTube officielle Let’s Play`} aria-busy={isEpisodeLoading} data-loading={isEpisodeLoading || undefined} onClick={(event) => handleEpisodeClick(event, person.episode.url)}>
                      {isEpisodeLoading ? <LoaderCircle className="about-letsplay-member-episode-spinner" size={13} aria-hidden="true" /> : <Play size={13} fill="currentColor" aria-hidden="true" />}
                      <span aria-live="polite">{isEpisodeLoading ? "Ouverture…" : person.episode.label}</span>
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                    );
                  })() : null}
                  {person.source ? (
                    <a href={person.source} target="_blank" rel="noreferrer" className="about-letsplay-member-link">
                      {person.sourceLabel} {person.linkedin ? <Linkedin size={14} /> : <ArrowUpRight size={14} />} <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="about-letsplay-member-pending">Profil professionnel non associé publiquement</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="about-letsplay-source-note">
            Crédits d’équipe complétés à partir d’informations communiquées directement par Iris Studio et de profils professionnels publics consultés en août 2026. Les liens LinkedIn peuvent rediriger vers une page de connexion selon la session.
          </p>
        </section>

        <section className="about-leadership section-pad" aria-labelledby="leadership-title">
          <div className="about-leadership-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="about-leadership-route" aria-hidden="true"><span>05 / REGARD</span><i /><b /></div>
          <div className="about-leadership-heading">
            <p className="eyebrow">Direction associée à l’histoire du studio</p>
            <h2 id="leadership-title" className="display-title">Trois parcours publics<br />qui portent <em>la direction.</em></h2>
            <p>
              Iris Studio avance grâce à un collectif de métiers. Les fonctions ci-dessous sont reprises d’informations professionnelles publiques afin de présenter la direction avec transparence.
            </p>
            <span className="about-direction-source">Dossier / portraits publics &amp; profils professionnels</span>
          </div>
          <div className="about-leadership-cards">
            {leadership.map((person, index) => (
              <article key={person.name} className="about-person-card">
                <span className="about-person-archive">FICHE / 0{index + 1}</span>
                <PersonMedia name={person.name} portrait={"portrait" in person ? person.portrait : undefined} alt={"portrait" in person ? person.alt : undefined} />
                <RoleBadge icon={person.roleIcon} label={person.role} />
                <h3>{person.name}</h3>
                <span className="about-person-line" aria-hidden="true" />
                <small>{person.text}</small>
                <a className="about-person-link" href={person.profile} target="_blank" rel="noreferrer">Voir le profil LinkedIn <Linkedin size={14} /><ArrowUpRight size={14} /></a>
              </article>
            ))}
          </div>
          <p className="about-source-note">Fonctions et portraits issus de résultats publics liés aux profils LinkedIn, consultés en août 2026. Chaque carte renvoie vers le profil professionnel correspondant ; les biographies détaillées et l’attribution formelle du statut de fondateur pourront être complétées après validation d’Iris Studio.</p>
        </section>

        <section className="about-studio-team section-pad" aria-labelledby="studio-team-title">
          <div className="about-studio-team-route" aria-hidden="true"><span>06</span><i /><b>COLLECTIF IRIS</b></div>
          <div className="about-studio-team-heading">
            <p className="eyebrow">Équipe Iris Studio</p>
            <h2 id="studio-team-title" className="display-title">Les métiers qui font<br /><em>avancer le studio.</em></h2>
            <p>
              Cette sélection présente des membres de l’équipe Iris Studio, distinctement des crédits Let’s Play. Les intitulés sont limités aux informations visibles dans les profils professionnels publics fournis.
            </p>
          </div>
          <div className="about-studio-team-grid">
            {studioTeam.map((person, index) => (
              <article key={person.name} className="about-studio-member">
                <span className="about-studio-member-index">MEMBRE / 0{index + 1}</span>
                <PersonMedia name={person.name} portrait={person.portrait} alt={person.alt} variant="studio" />
                <RoleBadge icon={person.roleIcon} label={person.role} />
                <h3>{person.name}</h3>
                <small>{person.text}</small>
                <a className="about-studio-member-link" href={person.profile} target="_blank" rel="noreferrer">
                  Voir le profil LinkedIn <Linkedin size={14} /> <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
          <p className="about-studio-team-note">Dossier / les cartes utilisent un portrait seulement lorsqu’il est fourni ou vérifié comme image individuelle. Les autres restent volontairement en placeholder, plutôt que d’afficher une capture de profil. Les fonctions, profils et courtes biographies s’appuient sur les informations professionnelles publiques consultées en août 2026.</p>
        </section>

        <section className="about-ecosystem section-pad" aria-labelledby="ecosystem-title">
          <div className="about-ecosystem-route" aria-hidden="true"><span>07</span><i /></div>
          <div className="about-ecosystem-copy">
            <p className="eyebrow">Un écosystème de confiance</p>
            <h2 id="ecosystem-title" className="display-title">Les objectifs business,<br /><em>marketing et communication.</em></h2>
            <p>La présence publique d’Iris Studio fait notamment référence à des collaborations avec des marques telles que Coca-Cola, Henkel, Ooredoo, Philip Morris, Bel, Danone, Algérie Télécom, Djezzy et Lafarge.</p>
          </div>
            <div className="about-client-dossier">
              <p className="about-client-source">DOSSIER / MARQUES CITÉES PAR LA PRÉSENTATION PUBLIQUE D’IRIS STUDIO</p>
              <div className="about-client-marquee" aria-label="Logos des marques citées par Iris Studio">
                <div className="about-client-marquee-track">
                  {[0, 1].map((setIndex) => <div className="about-client-marquee-set" aria-hidden={setIndex === 1} key={setIndex}>
                    {brandPartners.map((client) => <span key={`${client.name}-${setIndex}`}><img src={client.logo} alt={setIndex === 0 ? `Logo ${client.name}` : ""} loading="lazy" decoding="async" /></span>)}
                  </div>)}
                </div>
              </div>
            </div>
        </section>

        <section className="about-contact section-pad" aria-labelledby="about-contact-title">
          <div className="about-contact-eye" aria-hidden="true"><i /><i /></div>
          <div><p className="eyebrow">La suite s’écrit ensemble</p><h2 id="about-contact-title">Un projet commence<br />toujours par <em>une conversation.</em></h2></div>
          <Link className="about-contact-link" href="/contact">Parlons de votre besoin <ArrowUpRight size={21} /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
