import { profile } from "../data/profile";
import { projects } from "../data/projects";

export type ContentOptions = {
  onOpenProject: (index: number, trigger: HTMLElement) => void;
};

function element<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderAbout(): void {
  const copy = document.getElementById("aboutCopy");
  if (copy) {
    profile.about.forEach((paragraph) => copy.append(element("p", undefined, paragraph)));
  }

  const ledger = document.getElementById("aboutLedger");
  if (!ledger) return;
  const rows: [string, string][] = [
    ["Based", profile.location],
    ["Status", profile.availability],
    ["Focus", "Fullstack web, interfaces and the systems behind them"],
  ];
  rows.forEach(([label, value]) => {
    const row = element("div");
    row.append(element("dt", undefined, label), element("dd", undefined, value));
    ledger.append(row);
  });
}

function renderSkills(): void {
  const list = document.getElementById("skillsList");
  if (!list) return;

  profile.skills.forEach((group) => {
    const row = element("section", "skill-group");
    const header = element("header");
    header.append(element("h3", undefined, group.title), element("p", undefined, group.note));
    const items = element("ul", "skill-items");
    group.items.forEach((item) => items.append(element("li", undefined, item)));
    row.append(header, items);
    list.append(row);
  });
}

function renderTimeline(): void {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  profile.experience.forEach((entry) => {
    const item = element("li");
    const body = element("div");
    body.append(
      element("h3", undefined, entry.title),
      element("p", "timeline-context", entry.context),
    );
    item.append(
      element("p", "timeline-period", entry.period),
      body,
      element("p", "timeline-detail", entry.detail),
    );
    timeline.append(item);
  });
}

function renderFallback(options: ContentOptions): void {
  const list = document.getElementById("fallbackProjects");
  if (!list) return;

  projects.forEach((project, index) => {
    const item = element("li");
    const button = element("button", "fallback-link", "Read the case study");
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    button.addEventListener("click", () => options.onOpenProject(index, button));

    item.append(
      element("p", "eyebrow", `${project.index} · ${project.category}`),
      element("h3", undefined, project.title),
      element("p", undefined, project.summary),
      button,
    );
    list.append(item);
  });
}

function bindCopy(): void {
  const button = document.getElementById("copyEmail");
  const status = document.getElementById("copyStatus");
  if (!button || !status) return;

  let timer = 0;
  button.addEventListener("click", () => {
    const done = (message: string): void => {
      status.textContent = message;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        status.textContent = "";
      }, 4000);
    };

    navigator.clipboard
      .writeText(profile.email)
      .then(() => done("Copied to clipboard."))
      .catch(() => done("Copy failed — select the address above."));
  });
}

function observeReveals(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
  );
  items.forEach((item) => observer.observe(item));
}

export function populateContent(options: ContentOptions): void {
  renderAbout();
  renderSkills();
  renderTimeline();
  renderFallback(options);
  bindCopy();
  observeReveals();
}
