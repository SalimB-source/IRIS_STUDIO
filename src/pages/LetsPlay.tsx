/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
/**
 * Direction « Portfolio Iris » : Let’s Play est présenté comme une étude de cas, avec des archives officielles cadrées par Iris.
 * Chaque média conserve sa provenance publique, sa légende et un repère de campagne clair.
 */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import { Link } from "wouter";
import { partnerProjectBranding } from "@/components/partnerProjectBranding";
import { ProjectProgressRail } from "@/components/ProjectProgressRail";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  letsPlayDossiers,
  letsPlayFeaturedScreening,
  letsPlayInstagramVisuals,
  letsPlayScreenings,
} from "./letsPlayContent";
import { letsPlayProgressChapters } from "./projectProgressChapters";

function LetsPlayInstagramCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;
    const updateActiveSlide = () => setActiveSlide(api.selectedScrollSnap());
    updateActiveSlide();
    api.on("select", updateActiveSlide);
    api.on("reInit", updateActiveSlide);
    return () => {
      api.off("select", updateActiveSlide);
      api.off("reInit", updateActiveSlide);
    };
  }, [api]);

  return (
    <Carousel
      className="letsplay-instagram-carousel"
      opts={{ align: "start", loop: true, duration: 30 }}
      setApi={setApi}
      aria-label="Carrousel des publications Instagram Let’s Play"
    >
      <CarouselContent className="letsplay-instagram-carousel-track">
        {letsPlayInstagramVisuals.map((visual, index) => (
          <CarouselItem className="letsplay-instagram-carousel-item" data-active={index === activeSlide} key={visual.id}>
            <a href={visual.href} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${visual.title} sur Instagram`}>
              <figure>
                <img src={visual.image} alt={visual.alt} />
                <figcaption>
                  <span>{visual.category}</span>
                  <strong>{visual.title}</strong>
                </figcaption>
              </figure>
              <div>
                <p>0{index + 1} / 0{letsPlayInstagramVisuals.length}</p>
                <span>{visual.detail}</span>
                <ArrowUpRight size={18} />
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <p className="carousel-swipe-status" aria-live="polite">
        <span aria-hidden="true">←</span>
        <span>Balayez pour explorer</span>
        <strong>{String(activeSlide + 1).padStart(2, "0")} / {String(letsPlayInstagramVisuals.length).padStart(2, "0")}</strong>
        <span aria-hidden="true">→</span>
      </p>
      <div className="letsplay-instagram-carousel-nav">
        <CarouselPrevious aria-label="Publication Instagram précédente" />
        <div className="letsplay-instagram-carousel-dots" aria-label="Choisir une publication Instagram">
          {letsPlayInstagramVisuals.map((visual, index) => (
            <button
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={index === activeSlide ? "is-active" : ""}
              aria-label={`Afficher ${visual.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={visual.id}
            />
          ))}
        </div>
        <CarouselNext aria-label="Publication Instagram suivante" />
      </div>
    </Carousel>
  );
}

export default function LetsPlay() {
  const brand = partnerProjectBranding.letsPlay;

  return <div className="page-shell project-detail letsplay-detail"><SiteHeader /><main>
    <section className="detail-hero detail-hero--letsplay-surface" aria-labelledby="letsplay-title"><div className="detail-hero-overlay" /><span className="detail-hero-texture" aria-hidden="true" /><div className="iris-eye-orbit iris-eye-hero" aria-hidden="true"><i /><i /><i /></div><div className="detail-hero-copy"><Link className="back-link" href="/projets"><ArrowLeft size={16} /> Tous les projets</Link><p>01 / Let’s Play × Algérie Télécom</p><h1 id="letsplay-title">La pop culture<br />se joue aussi <em>sur le terrain.</em></h1><span>GAMING · TECH · E-SPORT · CINÉMA</span></div><div className="detail-project-brand detail-project-brand--letsplay"><span>Identité du projet</span><img src={brand.logo} alt={brand.alt} /></div><div className="detail-stamp">LP<i>IRIS / 01</i></div></section>
    <ProjectProgressRail ariaLabel="Parcours de la fiche Let’s Play" chapters={letsPlayProgressChapters} />
    <section id="letsplay-overview" className="detail-overview section-pad project-progress-target"><div><p className="eyebrow">Le projet</p><h2 className="display-title">Une émission qui<br /><em>parle communautés.</em></h2></div><p>Let’s Play est une émission dédiée au gaming et à la pop culture, en partenariat avec Algérie Télécom. Jeux vidéo, technologie, e-sport, cinéma et nouveaux usages y alimentent une conversation pensée pour celles et ceux qui vivent ces univers au quotidien.</p></section>
    <section id="letsplay-terrain" className="detail-framework section-pad project-progress-target"><figure className="detail-framework-image"><span className="detail-archive-index">ARCHIVE / 01</span><img src="assets/letsplay-asus_c5260be3.jpg" alt="ASUS Experts Day 2025, publication Let’s Play" /><figcaption>Preuve terrain / Let’s Play — ASUS Experts Day 2025</figcaption></figure><div className="detail-framework-copy"><p className="eyebrow">Le terrain éditorial</p><h2 className="display-title">Des passions qui deviennent <em>conversation.</em></h2><div className="detail-pillars"><span>Gaming</span><span>Pop culture</span><span>Tech & IA</span><span>E-sport</span></div><p>Le format rassemble des univers en mouvement dans un langage accessible, utile et proche de ses communautés.</p></div></section>
    <section id="letsplay-archives" className="letsplay-archive section-pad project-progress-target" aria-labelledby="letsplay-archive-title"><div className="letsplay-archive-heading"><div><p className="eyebrow">Au-delà du plateau</p><h2 className="display-title" id="letsplay-archive-title">Des formats qui donnent <em>une scène</em> à la communauté.</h2></div><p>Deux réalisations documentées par les publications officielles de Let’s Play : une présence média annoncée au GCCDZ 2026 et un concours de court métrage relayé par la chaîne.</p></div><div className="letsplay-dossier-grid">{letsPlayDossiers.map((dossier) => <article className="letsplay-dossier" key={dossier.id}><div className="letsplay-dossier-top"><span>{dossier.index}</span><b>{dossier.eyebrow}</b></div>{"image" in dossier && dossier.image ? <figure className="letsplay-dossier-brand"><img src={dossier.image} alt={dossier.imageAlt} /></figure> : null}<h3>{dossier.title}</h3><p>{dossier.description}</p><a href={dossier.sourceHref} target="_blank" rel="noreferrer"><span>{dossier.source}</span><strong>{dossier.actionLabel}</strong><ArrowUpRight size={17} /></a></article>)}</div></section>
    <section id="letsplay-focus" className="letsplay-featured-screening section-pad project-progress-target" aria-labelledby="letsplay-featured-title"><div className="letsplay-featured-heading"><p className="eyebrow">Focus principal</p><span>ARCHIVE VIDÉO / 01</span></div><a className="letsplay-featured-card" href={letsPlayFeaturedScreening.href} target="_blank" rel="noreferrer"><figure><img src={letsPlayFeaturedScreening.image} alt={`Miniature officielle : ${letsPlayFeaturedScreening.title}`} /><span className="letsplay-featured-play" aria-hidden="true"><Play size={30} fill="currentColor" /></span><figcaption>{letsPlayFeaturedScreening.category}</figcaption></figure><div><p>{letsPlayFeaturedScreening.detail}</p><h2 className="display-title" id="letsplay-featured-title">Un terrain,<br /><em>une histoire à vivre.</em></h2><h3>{letsPlayFeaturedScreening.title}</h3><span>Regarder le reportage <ArrowUpRight size={18} /></span></div></a></section>
    <section id="letsplay-instagram" className="letsplay-instagram section-pad project-progress-target" aria-labelledby="letsplay-instagram-title"><div className="letsplay-instagram-heading"><div><p className="eyebrow">Publications Instagram</p><h2 className="display-title" id="letsplay-instagram-title">La pop culture<br /><em>en pleine partie.</em></h2></div><p>Une sélection de visuels Let’s Play fournis pour ce site, reliés au compte Instagram officiel du projet.</p></div><LetsPlayInstagramCarousel /></section>
    <section className="letsplay-screenings section-pad" aria-labelledby="letsplay-screenings-title"><div className="letsplay-screenings-heading"><div><p className="eyebrow">Sélection complémentaire</p><h2 className="display-title" id="letsplay-screenings-title">Deux regards,<br /><em>un même terrain.</em></h2></div><p>Deux extraits officiels supplémentaires pour prolonger la sélection : un concours et une émission de pop culture. Chaque visionnage s’ouvre directement sur YouTube.</p></div><div className="letsplay-screening-grid">{letsPlayScreenings.filter((screening) => screening.id !== letsPlayFeaturedScreening.id).map((screening) => <a className="letsplay-screening-card" href={screening.href} target="_blank" rel="noreferrer" key={screening.id}><figure><img src={screening.image} alt={`Miniature officielle : ${screening.title}`} /><span className="letsplay-play-mark" aria-hidden="true"><Play size={19} fill="currentColor" /></span><figcaption>{screening.category}</figcaption></figure><div><p>{screening.detail}</p><h3>{screening.title}</h3><span>Regarder sur YouTube <ArrowUpRight size={16} /></span></div></a>)}</div></section>
    <section className="detail-links section-pad"><p className="eyebrow">Suivre Let’s Play</p><div><a href="https://www.youtube.com/@letsplay.officiel" target="_blank" rel="noreferrer"><Youtube size={23} /><span>Voir la chaîne<br /><strong>YouTube</strong></span><ArrowUpRight size={21} /></a><a href="https://www.instagram.com/letsplay.officiel/" target="_blank" rel="noreferrer"><Instagram size={23} /><span>Suivre les actus<br /><strong>Instagram</strong></span><ArrowUpRight size={21} /></a></div></section>
  </main><SiteFooter /></div>;
}
