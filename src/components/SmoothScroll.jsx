import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing effect
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return null;
}

export default SmoothScroll;
