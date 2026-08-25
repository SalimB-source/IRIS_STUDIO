import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getLetsPlayExitDelay, getLetsPlayTransitionDuration } from "./letsPlayTransitionConfig";
import { letsPlayLoadingWordmark } from "./letsPlayLoadingContent";
import "./LetsPlayLoadingScreen.css";

type LetsPlayLoadingScreenProps = {
  onComplete: () => void;
};

export default function LetsPlayLoadingScreen({ onComplete }: LetsPlayLoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitTimer = window.setTimeout(() => setIsExiting(true), getLetsPlayExitDelay(reducedMotion));
    const completeTimer = window.setTimeout(onComplete, getLetsPlayTransitionDuration(reducedMotion));

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return createPortal(<div className={`letsplay-loading-screen${isExiting ? " is-exiting" : ""}`} role="status" aria-live="polite" aria-label="Ouverture du projet Let’s Play">
    <div className="letsplay-loading-grid" aria-hidden="true" />
    <div className="letsplay-loading-beam" aria-hidden="true"><i /><i /><i /></div>
      <div className="letsplay-loading-content">
      <p className="letsplay-loading-kicker">LET’S PLAY × ALGÉRIE TÉLÉCOM</p>
      <div className="letsplay-loading-wordmark" aria-hidden="true">
        <span className="letsplay-loading-word letsplay-loading-word--lets">{letsPlayLoadingWordmark.firstWord}</span>
        <span className="letsplay-loading-word letsplay-loading-word--play">{letsPlayLoadingWordmark.secondWord}</span>
        <i className="letsplay-loading-swoosh" />
      </div>
      <p className="letsplay-loading-label">ENTRÉE EN SCÈNE</p>
      <div className="letsplay-loading-progress" aria-hidden="true"><i /></div>
      <p className="letsplay-loading-status">Chargement du projet <b>LP / 01</b></p>
    </div>
  </div>, document.body);
}
