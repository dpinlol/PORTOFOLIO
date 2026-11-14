import { projects } from "../data/projects";
import { smoothstep } from "../experience/math";

type OverlayOptions = {
  onOpenProject: (index: number, trigger: HTMLElement) => void;
  onHoverProject: (index: number | null) => void;
};

const windowRange = (
  progress: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
): number => {
  const enter = smoothstep(inStart, inEnd, progress);
  const leave = smoothstep(outStart, outEnd, progress);
  return enter * (1 - leave);
};

export type Overlay = {
  setProgress: (progress: number) => void;
  setHover: (index: number | null) => void;
  getTrigger: (index: number) => HTMLElement | undefined;
};

export function createOverlay(options: OverlayOptions): Overlay {
  const scenes = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLElement>("[data-scene]").forEach((element) => {
    const name = element.dataset.scene;
    if (name) scenes.set(name, element);
  });

  const intro = scenes.get("intro");
  const approach = scenes.get("approach");
  const portrait = scenes.get("portrait");
  const transform = scenes.get("transform");
  const gallery = scenes.get("gallery");
  const scrollCue = document.getElementById("scrollCue");
  const stageCaption = document.querySelector<HTMLElement>(".stage-caption");
  const railItems = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
  const rail = document.querySelector<HTMLElement>(".chapter-rail");
  const railProgress = document.getElementById("railProgress");
  const indexList = document.getElementById("projectIndex");
  const buttons: HTMLButtonElement[] = [];

  if (indexList) {
    projects.forEach((project, index) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-label", `Open ${project.title} case study`);
      button.innerHTML = `<span>${project.index}</span>${project.title}`;
      button.addEventListener("mouseenter", () => options.onHoverProject(index));
      button.addEventListener("mouseleave", () => options.onHoverProject(null));
      button.addEventListener("focus", () => options.onHoverProject(index));
      button.addEventListener("blur", () => options.onHoverProject(null));
      button.addEventListener("click", () => options.onOpenProject(index, button));
      item.appendChild(button);
      indexList.appendChild(item);
      buttons.push(button);
    });
  }

  const apply = (element: HTMLElement | null | undefined, opacity: number, lift = 16): void => {
    if (!element) return;
    element.style.opacity = opacity.toFixed(3);
    element.style.visibility = opacity > 0.005 ? "visible" : "hidden";
    element.style.translate = `0 ${((1 - opacity) * lift).toFixed(2)}px`;
    if (element === gallery) element.inert = opacity < 0.35;
  };

  const setHover = (index: number | null): void => {
    buttons.forEach((button, i) => button.classList.toggle("is-active", i === index));
  };

  const setProgress = (progress: number): void => {
    const introOpacity = 1 - smoothstep(0.12, 0.2, progress);
    const approachOpacity = windowRange(progress, 0.21, 0.26, 0.3, 0.34);
    const portraitOpacity = windowRange(progress, 0.36, 0.43, 0.6, 0.66);
    const transformOpacity = windowRange(progress, 0.67, 0.72, 0.76, 0.81);
    const galleryOpacity = smoothstep(0.83, 0.89, progress);

    apply(intro, introOpacity, 28);
    apply(approach, approachOpacity, 18);
    apply(portrait, portraitOpacity, 22);
    apply(transform, transformOpacity, 18);
    apply(gallery, galleryOpacity, 14);
    rail?.classList.toggle("is-gallery", galleryOpacity > 0.2);

    if (scrollCue) {
      const cue = 1 - smoothstep(0.015, 0.075, progress);
      scrollCue.style.opacity = cue.toFixed(3);
      scrollCue.style.visibility = cue > 0.01 ? "visible" : "hidden";
    }

    if (stageCaption) {
      const caption = 1 - smoothstep(0.18, 0.3, progress);
      stageCaption.style.opacity = caption.toFixed(3);
    }

    const chapter = progress < 0.34 ? 0 : progress < 0.7 ? 1 : 2;
    railItems.forEach((item, index) => item.classList.toggle("is-active", index === chapter));
    if (railProgress) railProgress.textContent = String(chapter + 1).padStart(2, "0");
  };

  setProgress(0);

  return { setProgress, setHover, getTrigger: (index) => buttons[index] };
}
