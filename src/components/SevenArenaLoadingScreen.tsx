import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getSevenArenaExitDelay, getSevenArenaTransitionDuration } from "./sevenArenaTransitionConfig";
import "./SevenArenaLoadingScreen.css";

type SevenArenaLoadingScreenProps = {
  onComplete: () => void;
};

export default function SevenArenaLoadingScreen({ onComplete }: SevenArenaLoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitTimer = window.setTimeout(() => setIsExiting(true), getSevenArenaExitDelay(reducedMotion));
    const completeTimer = window.setTimeout(onComplete, getSevenArenaTransitionDuration(reducedMotion));

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return createPortal(
    <div className={`sevenarena-loading-screen${isExiting ? " is-exiting" : ""}`} role="status" aria-live="polite" aria-label="Ouverture du projet 7ouma Arena">
      <div className="sevenarena-loading-grid" aria-hidden="true" />
      <div className="sevenarena-loading-radar" aria-hidden="true"><i /></div>
      <div className="sevenarena-loading-content">
        <p className="sevenarena-loading-kicker">7OUMA ARENA × DJEZZY</p>
        <div className="sevenarena-wordmark" aria-label="7ouma Arena">
          <span aria-hidden="true">7</span>
          <div><b>7OUMA</b><strong>ARENA</strong></div>
        </div>
        <p className="sevenarena-loading-label">CONNEXION À L’ARÈNE</p>
        <div className="sevenarena-loading-progress" aria-hidden="true"><i /></div>
        <p className="sevenarena-loading-status"><span>ÉQUIPEMENT DU MATCH</span><b>07 / 02</b></p>
      </div>
    </div>,
    document.body,
  );
}
