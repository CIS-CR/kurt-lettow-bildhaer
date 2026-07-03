import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initHeroScroll = () => {
  const hero = document.querySelector<HTMLElement>("[data-scroll-scene='hero']");
  const image = hero?.querySelector<HTMLImageElement>(".hero__image");
  const overlay = hero?.querySelector<HTMLElement>(".hero__overlay");
  const revealItems = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");

  if (!hero || !image || !overlay || revealItems.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 901px)").matches;

  if (reduceMotion || !desktop) {
    hero.classList.add("hero--static");
    gsap.set(revealItems, { autoAlpha: 1, y: 0 });
    gsap.set(image, { scale: 1 });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  hero.classList.add("hero--scroll-ready");
  gsap.set(image, { scale: 1.04, transformOrigin: "58% 50%" });
  gsap.set(revealItems, { autoAlpha: 0, y: 28 });

  const timeline = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=190%",
      scrub: 0.85,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .to(image, { scale: 1.14, filter: "contrast(1.02) brightness(0.82)", duration: 1 }, 0)
    .to(overlay, { opacity: 0.86, duration: 1 }, 0)
    .to(revealItems[0], { autoAlpha: 1, y: 0, duration: 0.22 }, 0.08)
    .to(revealItems[1], { autoAlpha: 1, y: 0, duration: 0.18 }, 0.2)
    .to(revealItems[2], { autoAlpha: 1, y: 0, duration: 0.18 }, 0.32)
    .to(revealItems[3], { autoAlpha: 1, y: 0, duration: 0.18 }, 0.48)
    .to(revealItems[4], { autoAlpha: 1, y: 0, duration: 0.22 }, 0.64);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroScroll, { once: true });
} else {
  initHeroScroll();
}
