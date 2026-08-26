/* Import fidèle IRIS Studio : cette feuille ou ce composant conserve le langage éditorial et immersif du dépôt source. */
import { type MouseEvent, type ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import LetsPlayLoadingScreen from "./LetsPlayLoadingScreen";
import { scrollPartnerProjectToTop } from "./partnerProjectNavigation";
import { LETS_PLAY_PROJECT_PATH } from "./letsPlayTransitionConfig";

type LetsPlayProjectLinkProps = {
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export default function LetsPlayProjectLink({ children, className, onNavigate }: LetsPlayProjectLinkProps) {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || isLoading) return;
    event.preventDefault();
    onNavigate?.();
    setIsLoading(true);
  };

  return <>
    <Link href={LETS_PLAY_PROJECT_PATH} className={className} onClick={handleProjectClick} aria-busy={isLoading || undefined}>{children}</Link>
    {isLoading && <LetsPlayLoadingScreen onComplete={() => {
      setLocation(LETS_PLAY_PROJECT_PATH);
      window.requestAnimationFrame(scrollPartnerProjectToTop);
    }} />}
  </>;
}
