/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
import { ArrowLeft, ArrowUpRight, MoveRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import NotFound from "./NotFound";
import { operationalProjectDetails } from "./operationalProjectDetails";
import { operationalProjects } from "./operationalProjectsContent";
import "./OperationalProjectDetail.css";

export default function OperationalProjectDetail() {
  const [, params] = useRoute("/projets/:projectId");
  const project = operationalProjects.find((item) => item.id === params?.projectId);

  if (!project) return <NotFound />;

  const detail = operationalProjectDetails[project.id];
  const otherProjects = operationalProjects.filter((item) => item.id !== project.id);

  return (
    <div className="site-shell operational-project-detail">
      <SiteHeader />
      <main>
        <section className="operational-detail-hero section-pad" aria-labelledby="operational-detail-title">
          <div className="operational-detail-route" aria-hidden="true"><span>{project.index}</span><i /><b>DOSSIER OPÉRATIONNEL</b></div>
          <div className="operational-detail-copy">
            <Link className="operational-detail-back" href="/projets"><ArrowLeft size={16} /> Retour aux projets</Link>
            <p className="eyebrow">{detail.eyebrow}</p>
            <h1 id="operational-detail-title">{project.title}<br /><em>{detail.headline}</em></h1>
            <p>{detail.summary}</p>
          </div>
          <figure className="operational-detail-media">
            <img src={project.image} alt={project.alt} />
            <figcaption>{project.sourceLabel}</figcaption>
          </figure>
        </section>

        <section className="operational-detail-context section-pad" aria-labelledby="operational-context-title">
          <div>
            <p className="eyebrow">Contexte de réalisation</p>
            <h2 id="operational-context-title" className="display-title">Une présence conçue<br />pour <em>le réel.</em></h2>
          </div>
          <div className="operational-detail-context-copy">
            <p>{detail.context}</p>
            <a href={detail.sourceUrl} target="_blank" rel="noreferrer" className="operational-detail-source">{detail.sourceLabel} <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="operational-detail-specs section-pad" aria-label="Spécificités de la réalisation">
          {detail.specifications.map((specification, index) => (
            <article key={specification.label}>
              <span>0{index + 1}</span>
              <p>{specification.label}</p>
              <strong>{specification.value}</strong>
            </article>
          ))}
        </section>

        <section className="operational-detail-focus section-pad" aria-labelledby="operational-focus-title">
          <div className="operational-detail-focus-heading">
            <p className="eyebrow">Spécificités de la réalisation</p>
            <h2 id="operational-focus-title" className="display-title">Les gestes qui font<br /><em>avancer l’opération.</em></h2>
          </div>
          <div className="operational-detail-focus-list">
            {detail.focus.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <MoveRight size={20} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="operational-detail-next section-pad" aria-labelledby="operational-next-title">
          <div><p className="eyebrow">Explorer les autres réalisations</p><h2 id="operational-next-title">Le terrain continue<br />avec <em>d’autres histoires.</em></h2></div>
          <div className="operational-detail-next-grid">
            {otherProjects.map((item) => (
              <Link key={item.id} href={`/projets/${item.id}`} className="operational-detail-next-link">
                <span>{item.index}</span><strong>{item.title} <em>{item.accent}</em></strong><ArrowUpRight size={19} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
