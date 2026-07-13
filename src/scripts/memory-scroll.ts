import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initMemorySectionAnimation = () => {
  const section = document.querySelector<HTMLElement>("[data-scroll-scene='memory']");
  if (!section) return;

  const background = section.querySelector<HTMLElement>("[data-memory-background]");
  const texture = section.querySelector<HTMLElement>("[data-memory-texture]");
  const portrait = section.querySelector<HTMLElement>("[data-memory-portrait]");
  const revealItems = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-memory-reveal]"));
  const chips = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-memory-chip]"));

  if (!background || !texture || !portrait || revealItems.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 901px)").matches;

  if (reduceMotion || !desktop) {
    section.classList.add("memory-section--static");
    gsap.set([background, texture, portrait, revealItems, chips], { clearProps: "all" });
    gsap.set([...revealItems, ...chips], { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  section.classList.add("memory-section--animated");
  gsap.set(background, { scale: 1.04, yPercent: -6, transformOrigin: "50% 50%" });
  gsap.set(texture, { autoAlpha: 0.06, yPercent: 3 });
  gsap.set(portrait, { yPercent: 9, scale: 0.985 });
  gsap.set(revealItems, { autoAlpha: 0, y: 32 });
  gsap.set(chips, { autoAlpha: 0, y: 12 });

  const timeline = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: section,
      start: "top 78%",
      end: "bottom top",
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .to(background, { scale: 1.12, yPercent: 6, duration: 1, ease: "none" }, 0)
    .to(texture, { autoAlpha: 0.16, yPercent: -3, duration: 1, ease: "none" }, 0)
    .to(portrait, { yPercent: -9, scale: 1.015, duration: 1, ease: "none" }, 0)
    .to(revealItems, { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.08 }, 0.08)
    .to(chips, { autoAlpha: 1, y: 0, duration: 0.24, stagger: 0.04 }, 0.58);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMemorySectionAnimation, { once: true });
} else {
  initMemorySectionAnimation();
}
