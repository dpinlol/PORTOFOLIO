export type SkillGroup = {
  title: string;
  items: string[];
  note: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  context: string;
  detail: string;
};

export const profile = {
  name: "Devin",
  handle: "dpinlol",
  role: "Software engineering student & interface developer",
  kicker: "An exhibition in five acts",
  statement:
    "I build small, complete web things — school systems, marketplaces, and the interfaces around them. I care about the parts people actually touch: the form, the empty state, the moment a page answers back.",
  location: "Indonesia",
  availability: "Open to internships and junior roles",
  email: "devinleez99@gmail.com",
  github: "https://github.com/dpinlol",
  githubLabel: "github.com/dpinlol",
  portraitNote:
    "The figure on the canvas is an original study, not a likeness. Swap in a real portrait at public/assets/portrait.webp.",
  about: [
    "I am a software engineering student in XII PPLG 2. Most of what I know comes from building things that had to work: a lost-and-found desk for school, a library system under exam time, a four-role marketplace for COMPFEST 18.",
    "I like the unglamorous middle of a project — schema design, role checks, the checkout edge cases — and I like the surface to feel considered too. Good type, a clear hierarchy, and motion that explains rather than decorates.",
    "Right now I am looking for an internship or junior role on a real product with people who review code carefully.",
  ],
  skills: [
    {
      title: "Languages",
      note: "Read and written day to day",
      items: ["TypeScript", "JavaScript", "PHP", "SQL", "Python"],
    },
    {
      title: "Frontend",
      note: "The surface and its behaviour",
      items: ["React", "Next.js", "Vite", "Tailwind CSS", "Three.js", "GSAP", "Semantic HTML & CSS"],
    },
    {
      title: "Backend",
      note: "APIs, auth and data flow",
      items: ["Node.js", "Express", "Laravel", "Prisma", "JWT & sessions", "REST", "Zod"],
    },
    {
      title: "Data",
      note: "Where the state lives",
      items: ["PostgreSQL", "MySQL", "SQLite", "Upstash Redis"],
    },
    {
      title: "Tools",
      note: "Shipping and collaboration",
      items: ["Git & GitHub", "Docker", "Vercel", "Railway", "Swagger / OpenAPI", "Figma"],
    },
    {
      title: "Practice",
      note: "How the work gets made",
      items: ["MVC structure", "Role-based access", "Accessibility basics", "Responsive layout", "Interface illustration"],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      period: "2026",
      title: "COMPFEST 18 — Software Engineering Academy",
      context: "Participant · Seapedia",
      detail:
        "Designed and built a fullstack multi-role marketplace against the academy brief: wallet checkout, vouchers, 12% tax, delivery SLAs and admin monitoring.",
    },
    {
      period: "2026",
      title: "UKK — Perpustakaan Sekolah Digital",
      context: "Competency exam · Laravel",
      detail:
        "Built a school library system inside the exam's three-session limit: two roles, book and member CRUD, borrowing and returns with dates.",
    },
    {
      period: "2026",
      title: "Ruang Editing",
      context: "Collaboration · with Hosea",
      detail:
        "A film-production study site for class case studies 9 and 12, translating framing and sound-mixing theory into a scrollable, cinematic interface.",
    },
    {
      period: "2025—2026",
      title: "School and independent builds",
      context: "Lost & Found, then its Next.js port",
      detail:
        "Built the same lost-and-found workflow twice: first as a framework-free PHP MVC app, then as a serverless Next.js port on Upstash Redis.",
    },
  ] satisfies ExperienceItem[],
} as const;
