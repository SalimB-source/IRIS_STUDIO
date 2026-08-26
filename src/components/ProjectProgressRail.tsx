/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
import { useEffect, useState } from "react";
import type { ProjectProgressChapter } from "@/pages/projectProgressChapters";

type ProjectProgressRailProps = {
  ariaLabel: string;
  chapters: readonly ProjectProgressChapter[];
};

export function getClosestProgressChapterId(
  positions: ReadonlyArray<{ id: string; top: number }>,
  focusLine: number,
) {
  return positions.reduce<{ id: string; distance: number } | undefined>((closest, position) => {
    const distance = Math.abs(position.top - focusLine);
    return !closest || distance < closest.distance ? { id: position.id, distance } : closest;
  }, undefined)?.id;
}

export function ProjectProgressRail({ ariaLabel, chapters }: ProjectProgressRailProps) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    if (!chapters.length || typeof IntersectionObserver === "undefined") return;

    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => Boolean(section));

    let frame = 0;
    const updateActiveChapter = () => {
      frame = 0;
      const nextId = getClosestProgressChapterId(
        sections.map((section) => ({ id: section.id, top: section.getBoundingClientRect().top })),
        window.innerHeight * 0.36,
      );
      if (nextId) setActiveId((currentId) => (currentId === nextId ? currentId : nextId));
    };
    const scheduleActiveChapter = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveChapter);
    };
    const observer = new IntersectionObserver(scheduleActiveChapter, {
      rootMargin: "-24% 0px -58% 0px",
      threshold: [0.12, 0.4, 0.72],
    });

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", scheduleActiveChapter, { passive: true });
    window.addEventListener("resize", scheduleActiveChapter);
    scheduleActiveChapter();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleActiveChapter);
      window.removeEventListener("resize", scheduleActiveChapter);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [chapters]);

  return (
    <nav className="project-progress-rail" aria-label={ariaLabel}>
      <span className="project-progress-rail__label">Parcours</span>
      <ol>
        {chapters.map((chapter, index) => {
          const isActive = activeId === chapter.id;
          return (
            <li key={chapter.id}>
              <a className={isActive ? "is-active" : ""} href={`#${chapter.id}`} aria-current={isActive ? "step" : undefined}>
                <span className="project-progress-rail__index">{String(index + 1).padStart(2, "0")}</span>
                <span>{chapter.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
