import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export const pageNavigationExitDelay = 180;

export function isNewInternalPagePath(href: string, currentHref: string) {
  const destination = new URL(href, currentHref);
  const current = new URL(currentHref);
  return destination.origin === current.origin && destination.pathname !== current.pathname;
}

export default function PageNavigationTransition() {
  const [location, setLocation] = useLocation();
  const [isLeaving, setIsLeaving] = useState(false);
  const navigationTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setIsLeaving(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.detail === 0 ||
        navigationTimer.current
      ) {
        return;
      }

      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      const href = link?.getAttribute("href");
      if (!href || link?.target === "_blank" || !isNewInternalPagePath(href, window.location.href)) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      event.preventDefault();
      const destination = new URL(href, window.location.href);
      const nextLocation = `${destination.pathname}${destination.search}${destination.hash}`;
      setIsLeaving(true);
      navigationTimer.current = window.setTimeout(() => {
        navigationTimer.current = undefined;
        setLocation(nextLocation);
      }, pageNavigationExitDelay);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
    };
  }, [setLocation]);

  return <div className={`page-navigation-transition${isLeaving ? " is-leaving" : ""}`} aria-hidden="true"><span>IRIS STUDIO</span></div>;
}
