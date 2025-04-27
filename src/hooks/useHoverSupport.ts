import { useState, useEffect } from "react";

/**
 * A custom hook that detects if the user's device supports hover interactions.
 * This is useful for applying hover-specific styles only when the device supports them.
 *
 * @returns {boolean} Returns true if the device supports hover interactions and has fine pointer control,
 *                   false otherwise (e.g., on touch devices or devices with coarse pointer control).
 */
export function useHoverSupport() {
  const [hasHoverSupport, setHasHoverSupport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHoverSupport(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setHasHoverSupport(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return hasHoverSupport;
}
