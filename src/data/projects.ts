export type ProjectLink = {
  label: string;
  href?: string;
  note: string;
};

export type Challenge = {
  problem: string;
  solution: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  medium: string;
  summary: string;
  preview: { kind: "image"; src: string } | { kind: "study"; variant: "lostfound" | "library" };
  overview: string;
  problem: string;
  objectives: string[];
  role: string[];
  stack: string[];
  process: { step: string; detail: string }[];
  challenges: Challenge[];
  links: ProjectLink[];
};
const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const projects: Project[] = [
  {
    slug: "seapedia",
    index: "01",
    title: "Seapedia",
    category: "Marketplace platform",
    year: "2026",
    medium: "React · Express · Prisma",
    summary:
      "A four-role marketplace built for COMPFEST 18: buyers, sellers, drivers and admins sharing one checkout, wallet and delivery system.",
    preview: { kind: "image", src: asset("/assets/projects/seapedia.webp") },
    overview:
      "Seapedia was built for the COMPFEST 18 Software Engineering Academy brief: a marketplace where users can buy, sell and deliver products. Each role gets its own dashboard, and the whole system shares one API: wallet top-ups, cart checkout, vouchers and promos, 12% PPN, delivery SLAs and admin monitoring.",
    problem:
      "Most marketplace demos stop at product cards. The difficult part is after checkout: a wallet that must not go negative, stock that must not oversell, tax calculated on the discounted total, and an SLA clock that needs a tested admin override.",
    objectives: [
      "Make all four roles usable end to end: buyer, seller, driver, admin.",
      "Keep checkout consistent: wallet charge, stock change and order creation in one flow.",
      "Document the API and the setup well enough for another person to run it.",
      "Deploy a working demo rather than a local-only repository.",
    ],
    role: [
      "Fullstack: data model, API, authentication and role checks.",
      "Frontend: React app, role dashboards and checkout flow.",
      "Documentation: OpenAPI, environment setup and demo accounts.",
    ],
    stack: [
      "TypeScript",
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Node.js / Express",
      "Prisma ORM",
      "PostgreSQL (production) / SQLite (local)",
      "JWT + bcrypt",
      "Swagger / OpenAPI",
      "Railway + Vercel",
    ],
    process: [
      {
        step: "Schema first",
        detail:
          "Modelled users, roles, stores, products, carts, orders, wallet entries, discounts, deliveries and claims before writing the UI.",
      },
      {
        step: "Auth and roles",
        detail:
          "JWT sessions carry the active role; middleware enforces access per route group, including delivery RBAC.",
      },
      {
        step: "Build the API",
        detail:
          "Eleven route groups, Zod validation and consistent error responses. Swagger documents each group.",
      },
      {
        step: "Build the surface",
        detail:
          "React dashboards for each role, with a role picker and switcher for accounts that hold more than one role.",
      },
      {
        step: "Harden and ship",
        detail:
          "XSS sanitising for address and store text, phone validation, security headers, seed data and a Railway/Vercel deployment.",
      },
    ],
    challenges: [
      {
        problem:
          "A cart could mix products from different stores, which makes delivery and seller order processing ambiguous.",
        solution:
          "The cart API enforces a single-store rule and returns a clear 400 with the store already in the cart; the UI surfaces it before checkout.",
      },
      {
        problem: "PPN must apply to the amount actually paid, not the pre-discount subtotal.",
        solution:
          "Tax is calculated as 12% of (subtotal − discount), and the checkout summary breaks out subtotal, delivery, discount and tax.",
      },
      {
        problem: "Multi-role accounts can act as seller and buyer, but permissions must not leak between dashboards.",
        solution:
          "The active role is stored in the JWT and re-checked by middleware on every protected route; switching roles issues a fresh token.",
      },
      {
        problem:
          "Delivery SLAs are time-based, and a real waiting period is impractical to test.",
        solution:
          "Admin-only time simulation advances the clock, then an overdue run refunds affected orders and moves them to the returned state.",
      },
    ],
    links: [
      {
        label: "Live demo",
        href: "https://seapedia-seven.vercel.app",
        note: "Vercel frontend, Railway API",
      },
      {
        label: "GitHub",
        href: "https://github.com/dpinlol/seapedia",
        note: "Source and README",
      },
      {
        label: "API docs",
        href: "https://seapedia-production-269b.up.railway.app/api-docs",
        note: "Swagger / OpenAPI",
      },
    ],
  },
  {
    slug: "u-find2",
    index: "02",
    title: "u-FIND2",
    category: "Serverless port",
    year: "2026",
    medium: "Next.js · Upstash Redis",
    summary:
      "The Lost & Found system rebuilt for Vercel: same UI and workflow, with signed cookies, server actions and Redis instead of PHP sessions and MySQL.",
    preview: { kind: "study", variant: "lostfound" },
    overview:
      "u-FIND2 is a JavaScript port of an earlier PHP MVC app. The screens, copy and stylesheet were kept; the data layer, sessions and mutations were replaced so the app can run serverless on Vercel. Old index.php URLs redirect to their App Router equivalents.",
    problem:
      "The original app assumed a LAMP stack with a persistent MySQL connection. Hosting it meant keeping a server and database alive for a school project, and the session model did not fit an edge/serverless deployment.",
    objectives: [
      "Preserve the existing interface and the verification workflow.",
      "Run without a connection pool, on Vercel's serverless runtime.",
      "Keep passwords hashed and sessions signed rather than storing user ids in plain cookies.",
      "Keep old PHP URLs working through redirects.",
    ],
    role: [
      "Porting: mapped the PHP routes and controllers to App Router routes.",
      "Data modelling: designed Redis keys and index sets for users, items, claims and statuses.",
      "Auth: bcrypt hashing and jose-signed session cookies.",
    ],
    stack: [
      "Next.js 16 App Router",
      "React 19",
      "JavaScript",
      "Upstash Redis (REST)",
      "@upstash/redis",
      "jose",
      "bcryptjs",
      "Vercel",
    ],
    process: [
      {
        step: "Map the old app",
        detail:
          "Listed every PHP route, query and mutation, then matched each one to an App Router page, server action or redirect.",
      },
      {
        step: "Model Redis",
        detail:
          "Used hashes for records, lists for ids and sets for status indexes, with explicit next-id counters and idempotent seeding.",
      },
      {
        step: "Replace sessions",
        detail:
          "Signed, http-only cookies replace PHP sessions; login and registration hash passwords with bcrypt.",
      },
      {
        step: "Keep the old URLs",
        detail:
          "next.config.js redirects index.php?page=… to the new routes so existing links and bookmarks still resolve.",
      },
    ],
    challenges: [
      {
        problem: "Redis has no joins or relational queries.",
        solution:
          "Index sets and id lists reconstruct the views; status changes update both the record hash and the status set in one pipeline.",
      },
      {
        problem: "Serverless functions can be recycled at any time, so in-memory sessions are unsafe.",
        solution:
          "Sessions moved to signed JWTs in http-only cookies, with the secret supplied by the environment.",
      },
      {
        problem: "The original UI expected form posts and redirects.",
        solution:
          "Server actions keep the same request/redirect rhythm, and a small flash module carries status messages across the redirect.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/dpinlol/u-FIND2",
        note: "Source and setup notes",
      },
      {
        label: "Deployment",
        note: "The earlier Vercel URL is no longer live; the repository runs locally with Upstash credentials.",
      },
    ],
  },
  {
    slug: "u-find",
    index: "03",
    title: "U-Find",
    category: "Lost & found system",
    year: "2026",
    medium: "PHP · MySQL · MVC",
    summary:
      "A framework-free lost-and-found desk: students report items, an admin verifies them, and approved items can be claimed with a recorded decision.",
    preview: { kind: "study", variant: "lostfound" },
    overview:
      "U-Find is a native PHP application built on an explicit MVC structure: one front controller, controllers, models and views. Students report lost or found items; an admin approves or rejects reports and claims; approved items move through a visible status trail.",
    problem:
      "Lost items at school were handled through chat groups and noticeboards. There was no record of who reported an item, whether it was verified, or who claimed it.",
    objectives: [
      "Give students one place to report lost and found items.",
      "Give admins a review queue for reports and claims.",
      "Make every item's status visible: pending, approved, rejected or claimed.",
      "Build the MVC structure by hand rather than hiding it behind a framework.",
    ],
    role: [
      "Solo build for a school assignment.",
      "Database schema, controllers, models, views and styling.",
      "Manual routing, validation and role checks.",
    ],
    stack: ["PHP", "MySQL", "MySQLi", "HTML", "CSS", "Laragon"],
    process: [
      {
        step: "Design the tables",
        detail:
          "Users, items and claims, with status fields for reports and claims and a reporter reference on each item.",
      },
      {
        step: "Build the front controller",
        detail:
          "index.php requires the matching controller and calls its action; page parameters select login, register, user or admin views.",
      },
      {
        step: "Implement the workflow",
        detail:
          "Report → pending → admin decision → approved/rejected; claim → pending → admin decision → claimed.",
      },
      {
        step: "Build the two dashboards",
        detail:
          "Students see their reports and claims; admins see the review queue with the reporter column and approve/reject actions.",
      },
    ],
    challenges: [
      {
        problem: "Without a framework there is no router, ORM or built-in CSRF protection.",
        solution:
          "Routing stays in one front controller, queries sit in models, and every state-changing action re-checks the session role.",
      },
      {
        problem: "A claim must not mark an item claimed until an admin approves it.",
        solution:
          "Claims have their own status; only an approved claim updates the item to CLAIMED, and rejected claims leave it available.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/dpinlol/U-Find",
        note: "Source, SQL dump and setup notes",
      },
    ],
  },
  {
    slug: "perpustakaan",
    index: "04",
    title: "Perpustakaan Sekolah",
    category: "Library application",
    year: "2026",
    medium: "Laravel · Blade · MySQL",
    summary:
      "A school library system built under exam conditions: two roles, book and member CRUD, and borrowing and returns with dates.",
    preview: { kind: "study", variant: "library" },
    overview:
      "Built for the UKK competency exam, this Laravel application covers the brief's full workflow: admin and student login, book and member management, borrowing and returns, and a responsive Bootstrap interface. Students can register themselves; admins manage the catalogue and transactions.",
    problem:
      "The library kept borrowing records on paper. The exam brief required a working digital system with two roles and a complete transaction history, built within three sessions.",
    objectives: [
      "Implement role-based login for admin and student.",
      "Provide CRUD for books, members and transactions.",
      "Let students register, borrow and return books with dates.",
      "Keep the database constraints honest: unique NIS, unique book code, restricted deletes.",
    ],
    role: [
      "Solo build under exam conditions.",
      "Migrations, models, controllers, Blade views and route protection.",
      "Responsive Bootstrap layout.",
    ],
    stack: ["Laravel 13", "PHP 8.3", "Blade", "Bootstrap 5", "MySQL", "Vite", "Tailwind CSS"],
    process: [
      {
        step: "Read the brief",
        detail:
          "Mapped each exam requirement (a–h) to a route, a controller action and a database table before coding.",
      },
      {
        step: "Build the schema",
        detail:
          "Books keyed by kode_buku; members with unique NIS and user link; transactions referencing both with restricted deletes.",
      },
      {
        step: "Split the roles",
        detail:
          "Admin routes cover books, members and transactions; student routes cover borrowing and returns. Middleware checks the role on every group.",
      },
      {
        step: "Finish the interface",
        detail:
          "Bootstrap tables and forms, status alerts, and a login page that keeps the demo accounts visible.",
      },
    ],
    challenges: [
      {
        problem: "The exam time limit rewards shortcuts that would normally create data problems.",
        solution:
          "The schema keeps unique constraints and foreign keys; deletes are restricted when a book has transactions, rather than silently orphaning records.",
      },
      {
        problem: "A return date must be recorded only when the book actually comes back.",
        solution:
          "tanggal_kembali stays nullable until the return action runs, and the student view shows the current state instead of a fake date.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/dpinlol/Latihan_UKK_Devin_XIIPPLG2",
        note: "Source, migrations and setup notes",
      },
    ],
  },
  {
    slug: "ruang-editing",
    index: "05",
    title: "Ruang Editing",
    category: "Creative study",
    year: "2026",
    medium: "Three.js · GSAP · Canvas",
    summary:
      "A film-production study site for class case studies 9 and 12: how frame size carries emotion, and how music and dialogue share a mix.",
    preview: { kind: "image", src: asset("/assets/projects/ruang-editing.webp") },
    overview:
      "Ruang Editing turns two film-production case studies into a scrollable interface. The first explains how shot size and aspect ratio direct emotion; the second explains how score and dialogue are balanced so both survive. A viewfinder HUD, a Three.js lens and a silent-film still carry the visual language.",
    problem:
      "Film theory is usually handed in as a document. The concepts are visual and temporal, so a text-only page loses the thing it is trying to explain.",
    objectives: [
      "Make framing and sound-mixing decisions legible without a lecturer.",
      "Use the interface itself as the example: crop marks, HUD, lens, timecode.",
      "Keep the page usable on a phone and with reduced motion.",
    ],
    role: [
      "Co-designed and built with Hosea for XII PPLG 2.",
      "Frontend structure, motion and canvas/Three.js elements.",
      "Content layout for both case studies.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "Three.js", "Canvas 2D"],
    process: [
      {
        step: "Choose the frame",
        detail:
          "A silent-film still and a camera HUD set the subject before any paragraph is read.",
      },
      {
        step: "Build the lens",
        detail:
          "A canvas-drawn lens and a Three.js element respond to the pointer and scroll without hiding the text.",
      },
      {
        step: "Write to the visuals",
        detail:
          "Each section pairs one concept with one visible comparison, rather than a wall of theory.",
      },
      {
        step: "Test the quiet paths",
        detail:
          "Reduced motion and small screens keep the content readable when the effects are off.",
      },
    ],
    challenges: [
      {
        problem: "A dense HUD can make body copy unreadable over a photograph.",
        solution:
          "The HUD is confined to the edges, the image is scrimmed, and reading sections move to a solid paper background.",
      },
      {
        problem: "Three.js and GSAP can both compete for scroll.",
        solution:
          "One scroll trigger owns the sequence; the 3D layer only reads progress and pointer state.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/dpinlol/FILM",
        note: "Source and assets",
      },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
