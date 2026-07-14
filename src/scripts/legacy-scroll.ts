import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initLegacyScroll = () => {
  const section = document.querySelector<HTMLElement>("[data-scroll-scene='legacy']");
  if (!section) return;

  const media = section.querySelector<HTMLElement>("[data-legacy-media]");
  if (!media) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 901px)").matches;

  if (reduceMotion || !desktop) {
    gsap.set(media, { clearProps: "all" });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.set(media, { yPercent: 8, scale: 0.985 });

  gsap.to(media, {
    yPercent: -8,
    scale: 1.01,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 82%",
      end: "bottom top",
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLegacyScroll, { once: true });
} else {
  initLegacyScroll();
}
