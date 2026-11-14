import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Experience } from "./experience/Experience";
import { createCaseStudy } from "./ui/caseStudy";
import { populateContent } from "./ui/content";
import { createOverlay } from "./ui/overlay";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const root = document.documentElement;
const body = document.body;
const stage = document.getElementById("stage");
const experienceElement = document.getElementById("experience");
const fallback = document.getElementById("fallback");
const scene = document.getElementById("scene");
const loaderStatus = document.getElementById("loaderStatus");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let experience: Experience | null = null;

function supportsWebGL(): boolean {
  try {
    const probe = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (probe.getContext("webgl2") || probe.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

function feelWebGLLoss(): void {
  if (experience) {
    experience.destroy();
    experience = null;
  }
  showFallback();
}

function showFallback(): void {
  root.classList.add("booted");
  stage?.classList.add("is-hidden");
  if (experienceElement) experienceElement.hidden = true;
  if (fallback) fallback.hidden = false;
  body.classList.add("is-paper", "past-stage");
  if (loaderStatus) loaderStatus.textContent = "Showing the catalogue";
  ScrollTrigger.refresh();
}

function setupScroll(): void {
  if (!experienceElement) return;

  ScrollTrigger.create({
    trigger: experienceElement,
    start: "top top",
    end: () => `+=${window.innerHeight * (window.innerWidth < 860 ? 6 : 7.2)}`,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      if (experience) {
        experience.setProgress(self.progress);
      } else {
        overlay.setProgress(self.progress);
      }
    },
  });

  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  let stageGone = false;

  // Read live positions instead of trigger starts: ScrollTrigger measures later
  // sections with the pin reverted, which fires these toggles far too early.
  const syncSectionState = (): void => {
    const vh = window.innerHeight;
    const aboutTop = about?.getBoundingClientRect().top ?? Infinity;
    const contactTop = contact?.getBoundingClientRect().top ?? Infinity;

    const paper = aboutTop < vh * 0.08;
    body.classList.toggle("is-paper", paper);
    body.classList.toggle("past-stage", paper);
    body.classList.toggle("is-dark-end", contactTop < vh * 0.62);

    // The studio is only removed once the document has fully covered it.
    const gone = aboutTop < 0;
    if (gone !== stageGone) {
      stageGone = gone;
      stage?.classList.toggle("is-hidden", gone);
      experience?.setActive(!gone);
    }
  };

  let lastY = window.scrollY;
  const head = document.getElementById("siteHead");
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      syncSectionState();
      if (!head) return;
      if (y < 80) {
        head.classList.remove("is-tucked");
      } else if (y > lastY + 6) {
        head.classList.add("is-tucked");
      } else if (y < lastY - 6) {
        head.classList.remove("is-tucked");
      }
      lastY = y;
    },
    { passive: true },
  );
  window.addEventListener("resize", syncSectionState, { passive: true });
  syncSectionState();
}

const caseStudy = createCaseStudy();

const overlay = createOverlay({
  onOpenProject: (index, trigger) => caseStudy.open(index, trigger),
  onHoverProject: (index) => experience?.highlightProject(index),
});

populateContent({
  onOpenProject: (index, trigger) => caseStudy.open(index, trigger),
});

async function boot(): Promise<void> {
  if (!scene || !supportsWebGL()) {
    showFallback();
    return;
  }

  if (loaderStatus) loaderStatus.textContent = "Stretching the canvas";

  try {
    await Promise.race([
      document.fonts.ready,
      new Promise((resolve) => window.setTimeout(resolve, 1600)),
    ]);
  } catch {
    // Font loading is optional; the fallback stack is already specified.
  }

  try {
    experience = await Experience.create({
      canvas: scene as HTMLCanvasElement,
      reducedMotion: reduceMotion.matches,
      onProgress: (progress) => overlay.setProgress(progress),
      onHover: (index) => {
        overlay.setHover(index);
        stage?.classList.toggle("is-pointing", index !== null);
      },
      onOpenProject: (index) => {
        const trigger = overlay.getTrigger(index) ?? null;
        caseStudy.open(index, trigger);
      },
    });
  } catch (error) {
    console.error("The studio could not start:", error);
    showFallback();
    return;
  }

  scene.addEventListener("webglcontextlost", feelWebGLLoss);
  setupScroll();
  overlay.setProgress(0);
  root.classList.add("booted");
  if (loaderStatus) loaderStatus.textContent = "The studio is open";
}

reduceMotion.addEventListener("change", (event) => {
  experience?.setReducedMotion(event.matches);
});

window.addEventListener("load", () => ScrollTrigger.refresh());

void boot();
