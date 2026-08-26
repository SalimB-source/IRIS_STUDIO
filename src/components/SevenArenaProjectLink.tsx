/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
import { type MouseEvent, type ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import SevenArenaLoadingScreen from "./SevenArenaLoadingScreen";
import { scrollPartnerProjectToTop } from "./partnerProjectNavigation";
import { SEVEN_ARENA_PROJECT_PATH } from "./sevenArenaTransitionConfig";

type SevenArenaProjectLinkProps = {
  children: ReactNode;
  className?: string;
};

export default function SevenArenaProjectLink({ children, className }: SevenArenaProjectLinkProps) {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || isLoading) return;
    event.preventDefault();
    setIsLoading(true);
  };

  return <>
    <Link href={SEVEN_ARENA_PROJECT_PATH} className={className} onClick={handleProjectClick} aria-busy={isLoading || undefined}>{children}</Link>
    {isLoading && <SevenArenaLoadingScreen onComplete={() => {
      setLocation(SEVEN_ARENA_PROJECT_PATH);
      window.requestAnimationFrame(scrollPartnerProjectToTop);
    }} />}
  </>;
}
