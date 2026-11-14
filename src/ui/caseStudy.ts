import { projects, type Project } from "../data/projects";
import { studyPreview } from "../experience/textures";

export type CaseStudy = {
  open: (index: number, trigger: HTMLElement | null) => void;
  close: () => void;
};

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

function heading(number: string, label: string): HTMLHeadingElement {
  const node = element("h3");
  node.append(element("span", undefined, number), document.createTextNode(label));
  return node;
}

function renderPreview(project: Project): HTMLElement {
  const figure = element("figure", "case-preview");
  const image = element("img");

  if (project.preview.kind === "image") {
    image.src = project.preview.src;
    image.alt = `${project.title} interface`;
    const caption = element("figcaption");
    caption.append(
      element("span", undefined, "Captured from the running build"),
      element("span", undefined, project.year),
    );
    figure.append(image, caption);
  } else {
    image.src = studyPreview(project.preview.variant);
    image.alt = `${project.title} interface study, redrawn from the application layout`;
    figure.append(image);
    const caption = element("figcaption");
    caption.append(
      element("span", undefined, "Interface study, redrawn from the application layout"),
      element("span", undefined, "Not a live screenshot"),
    );
    figure.append(caption);
  }

  return figure;
}

function renderAside(project: Project): HTMLElement {
  const aside = element("aside", "case-aside");
  aside.append(element("h3", undefined, "Details"));

  const meta = element("dl", "case-meta");
  const metaRow = (label: string, values: string[]): void => {
    const row = element("div");
    row.append(element("dt", undefined, label));
    values.forEach((value) => row.append(element("dd", undefined, value)));
    meta.append(row);
  };
  metaRow("Year", [project.year]);
  metaRow("Medium", [project.medium]);
  metaRow("Role", project.role);
  aside.append(meta);

  const materials = element("div", "case-group");
  materials.append(element("h3", undefined, "Materials"));
  const tags = element("ul", "case-tags");
  project.stack.forEach((item) => tags.append(element("li", undefined, item)));
  materials.append(tags);
  aside.append(materials);

  const links = element("div", "case-group");
  links.append(element("h3", undefined, "Links"));
  const linkList = element("div", "case-links");
  project.links.forEach((link) => {
    if (link.href) {
      const anchor = element("a");
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      anchor.append(element("b", undefined, link.label), element("small", undefined, link.note));
      linkList.append(anchor);
    } else {
      const note = element("span");
      note.append(element("b", undefined, link.label), element("small", undefined, link.note));
      linkList.append(note);
    }
  });
  links.append(linkList);
  aside.append(links);

  aside.append(
    element(
      "p",
      "case-note",
      "Written from the project's source and documentation. Interface images are labelled where they are studies rather than captures.",
    ),
  );

  return aside;
}

function renderProject(project: Project): HTMLElement {
  const article = element("article", "case-doc");

  const top = element("header", "case-top");
  const topMain = element("div");
  const kicker = element("div", "case-kicker");
  kicker.append(
    element("span", undefined, project.index),
    element("span", undefined, project.category),
    element("span", undefined, project.year),
  );
  const title = element("h2", "case-title", project.title);
  title.id = "caseTitle";
  topMain.append(kicker, title);
  top.append(topMain, element("p", "case-summary", project.summary));
  article.append(top, renderPreview(project));

  const grid = element("div", "case-grid");
  const main = element("div", "case-main");

  const overview = element("section", "case-block");
  overview.append(heading("01", "Overview"), element("p", undefined, project.overview));
  main.append(overview);

  const problem = element("section", "case-block");
  problem.append(heading("02", "The problem"), element("p", undefined, project.problem));
  main.append(problem);

  const objectives = element("section", "case-block");
  objectives.append(heading("03", "Objectives"));
  const objectiveList = element("ul", "case-list");
  project.objectives.forEach((item) => objectiveList.append(element("li", undefined, item)));
  objectives.append(objectiveList);
  main.append(objectives);

  const process = element("section", "case-block");
  process.append(heading("04", "Process"));
  const steps = element("ol", "case-steps");
  project.process.forEach((item) => {
    const step = element("li");
    const body = element("div", "case-step-content");
    body.append(element("b", undefined, item.step), element("span", undefined, item.detail));
    step.append(body);
    steps.append(step);
  });
  process.append(steps);
  main.append(process);

  const decisions = element("section", "case-block");
  decisions.append(heading("05", "Decisions worth explaining"));
  project.challenges.forEach((challenge) => {
    const row = element("div", "case-challenge");
    row.append(element("b", undefined, challenge.problem), element("p", undefined, challenge.solution));
    decisions.append(row);
  });
  main.append(decisions);

  grid.append(main, renderAside(project));
  article.append(grid);

  return article;
}

export function createCaseStudy(): CaseStudy {
  const dialog = document.getElementById("caseStudy");
  const content = document.getElementById("caseContent");
  const closeButton = document.getElementById("caseClose");

  if (!(dialog instanceof HTMLDialogElement) || !content) {
    const noop = (): void => {};
    return { open: noop, close: noop };
  }

  let trigger: HTMLElement | null = null;
  let closeTimer = 0;

  const finishClose = (): void => {
    window.clearTimeout(closeTimer);
    dialog.classList.remove("is-closing");
    if (dialog.open) dialog.close();
    document.body.classList.remove("case-open");
    if (trigger && document.contains(trigger)) trigger.focus({ preventScroll: true });
    trigger = null;
  };

  const close = (): void => {
    if (!dialog.open || dialog.classList.contains("is-closing")) return;
    dialog.classList.add("is-closing");
    closeTimer = window.setTimeout(finishClose, reducedMotion() ? 0 : 380);
  };

  const open = (index: number, source: HTMLElement | null): void => {
    const project = projects[index];
    if (!project) return;
    window.clearTimeout(closeTimer);
    dialog.classList.remove("is-closing");
    content.replaceChildren(renderProject(project));
    content.scrollTop = 0;
    trigger = source;
    document.body.classList.add("case-open");
    if (!dialog.open) dialog.showModal();
    closeButton?.focus({ preventScroll: true });
  };

  closeButton?.addEventListener("click", close);

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  return { open, close };
}
