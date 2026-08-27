/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 *
 * Items marked `TODO:` are best guesses that should be confirmed.
 */

export const profile = {
  name: "Mohammad Adnaan Mansuri",
  shortName: "Adnaan",
  role: "Software Developer",
  headline: "Full-stack developer building ERP, POS and AI-powered systems.",
  summary:
    "Computer Engineering graduate and full-stack developer who builds business software that people actually run their day on. I architected Inventix, a multi-tenant retail ERP of roughly 74,000 lines of TypeScript with an offline-first point-of-sale, 227 API endpoints, role-based access control and GST reporting. Before that I managed a grocery store — the counter, the cashiers and the stock room — which is why I tend to design software around how the work really happens. Now pursuing a Master of Engineering in Software Engineering Systems at Northeastern University in Toronto.",
  /** Condensed summary for the one-page résumé. */
  shortSummary:
    "Full-stack developer and Computer Engineering graduate. Architected Inventix, a multi-tenant retail ERP of ~74,000 lines of TypeScript with an offline-first point-of-sale, 227 API endpoints and role-based access control. Previously managed the grocery store I went on to build software for. Now an MEng Software Engineering Systems student at Northeastern University, Toronto.",
  location: "Toronto, Ontario, Canada",
  email: "adnaan.mansuri2003@gmail.com",
  phone: "+1 (437) 430 8083",
  phoneHref: "+14374308083",
  resumeFile: "/Mohammad-Adnaan-Mansuri-Resume.pdf",
  resumeShortFile: "/Mohammad-Adnaan-Mansuri-Resume-Onepage.pdf",
  linkedin: "https://www.linkedin.com/in/mohammad-adnaan-mansuri/",
  github: "https://github.com/AdnaanMansuri2003",
};

export const availability = {
  status: "Open to work",
  headline: "Available for Co-op, Internship & Part-time roles",
  points: [
    {
      label: "Work authorization",
      value: "Valid Canadian study permit — eligible to work in Ontario",
    },
    {
      label: "During the term",
      value: "Part-time, Co-op and internship roles",
    },
    {
      label: "Winter & Summer breaks",
      value: "Available full-time",
    },
    {
      label: "Location",
      value: "Toronto, ON — on-site, hybrid or remote",
    },
  ],
};

export const stats = [
  { value: "74k+", label: "lines of TypeScript in a\nproduction retail ERP" },
  { value: "227", label: "REST API endpoints\ndesigned and shipped" },
  { value: "5+", label: "products delivered\nend to end" },
  { value: "2", label: "technical internships\ncompleted" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "work" | "internship";
  featured?: boolean;
  summary: string;
  bullets: string[];
  /** Shorter bullet set used by the printable résumé at /resume. */
  resumeBullets?: string[];
  /** Tightest bullet set, used by the one-page résumé. */
  shortBullets?: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Gujarat Infotech Limited",
    role: "Software Developer",
    period: "July 2025 — April 2026",
    location: "Ahmedabad, India",
    type: "work",
    featured: true,
    summary:
      "Full-stack development on business applications, with a focus on an admin dashboard for invoice and inventory management.",
    bullets: [
      "Designed and developed full-stack applications, including an admin dashboard for invoice and inventory management that streamlined billing and stock tracking for business users.",
      "Wrote, tested and maintained production code across the frontend and backend, owning features from requirement through to release.",
      "Performed debugging and root-cause analysis on reported defects, and refactored problem areas to improve overall system performance.",
      "Collaborated with cross-functional teams on requirements, code review and iterative UX improvements to the internal tooling.",
      "Worked day to day with React, Next.js, Node.js, Express and SQL databases in a shared, version-controlled codebase.",
    ],
    resumeBullets: [
      "Designed and developed full-stack applications, including an admin dashboard for invoice and inventory management that streamlined billing and stock tracking for business users.",
      "Wrote, tested and maintained production code across frontend and backend; performed debugging and root-cause analysis, and refactored problem areas to improve system performance.",
      "Collaborated with cross-functional teams on requirements, code review and iterative UX improvements, working in React, Next.js, Node.js, Express and SQL.",
    ],
    shortBullets: [
      "Designed and developed full-stack applications, including an admin dashboard for invoice and inventory management used for billing and stock tracking.",
      "Wrote, tested and maintained production code across frontend and backend in React, Next.js, Node.js and SQL, with debugging and performance refactoring.",
    ],
    tags: ["React", "Next.js", "Node.js", "Express", "SQL", "REST APIs", "Git"],
  },
  {
    company: "Isaji Mart",
    role: "Store Manager",
    period: "2024 — 2025",
    location: "Ahmedabad, India",
    type: "work",
    featured: true,
    summary:
      "Ran daily retail operations for a neighbourhood grocery store — cashier desk, inventory and staff — then built the software that replaced the manual process.",
    bullets: [
      "Managed daily operations of a grocery retail store, overseeing the cashier desk, billing accuracy and end-of-day cash reconciliation.",
      "Owned inventory and stock management end to end: purchase intake, stock counts, shelf replenishment, expiry tracking and reorder decisions across hundreds of SKUs.",
      "Supervised and trained counter staff on the billing and POS workflow, cutting checkout errors and shortening queues during peak hours.",
      "Coordinated with suppliers on purchase orders, pricing updates and returns, and handled customer service escalations directly at the counter.",
      "Turned that operational knowledge into product: specified and built the store's invoice/stock admin dashboard and product website, replacing manual registers with a digital workflow.",
    ],
    resumeBullets: [
      "Managed daily retail operations — cashier desk, billing accuracy and end-of-day cash reconciliation — and supervised counter staff on the POS workflow, cutting checkout errors and peak-hour queues.",
      "Owned inventory and stock control end to end: purchase intake, stock counts, replenishment, expiry tracking and reorder decisions across hundreds of SKUs, plus supplier and pricing coordination.",
      "Turned that operational knowledge into product, specifying and building the store's invoice/stock admin dashboard and product website to replace manual registers.",
    ],
    shortBullets: [
      "Managed daily retail operations — cashier desk, billing accuracy, cash reconciliation and staff supervision — plus inventory control across hundreds of SKUs.",
      "Turned that operational knowledge into product, specifying and building the store's invoice/stock dashboard and product website to replace manual registers.",
    ],
    tags: [
      "Retail Operations",
      "Cashier & Billing",
      "Inventory Control",
      "Stock Management",
      "Team Supervision",
      "Vendor Coordination",
    ],
  },
  {
    company: "Motion Cut",
    role: "Python Programming Intern",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    type: "internship",
    summary:
      "Project-based Python internship delivering practical solutions against defined objectives.",
    bullets: [
      "Developed and contributed to project-based tasks throughout a structured Python internship programme.",
      "Applied data structures, algorithms and OOP concepts to practical problem statements rather than textbook exercises.",
      "Delivered assigned solutions on schedule and aligned to the stated project objectives.",
    ],
    tags: ["Python", "OOP", "Problem Solving", "Automation"],
  },
  {
    company: "Coding Raja Technology",
    role: "Machine Learning Intern",
    period: "Jan 2024 — Mar 2024",
    location: "Remote",
    type: "internship",
    summary:
      "Built a machine-learning dashboard for data analysis and insight generation.",
    bullets: [
      "Developed a machine-learning based dashboard to analyse datasets and surface insights that supported clearer decision-making.",
      "Tuned and evaluated models with an eye on both accuracy and scalability of the resulting system.",
      "Collaborated with the team to keep model performance on track and deploy solutions to the agreed timeline.",
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Dashboards"],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  period: string;
  featured?: boolean;
  /** Renders the project as the large hero card at the top of the section. */
  flagship?: boolean;
  summary: string;
  metrics?: { value: string; label: string }[];
  bullets: string[];
  /** Shorter bullet set used by the printable résumé at /resume. */
  resumeBullets?: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Inventix ERP",
    subtitle: "Multi-Tenant Retail ERP, POS & E-Commerce Platform",
    period: "2025 — 2026",
    featured: true,
    flagship: true,
    summary:
      "A production multi-tenant retail ERP built end to end — offline-first point-of-sale, inventory, purchasing, CRM, GST reporting, subscription billing and a full storefront builder. Roughly 74,000 lines of TypeScript across a Next.js frontend and an Express/MongoDB backend.",
    metrics: [
      { value: "~74k", label: "lines of TypeScript" },
      { value: "227", label: "REST API endpoints" },
      { value: "72", label: "application routes" },
      { value: "33", label: "data models" },
    ],
    bullets: [
      "Architected an offline-first POS on IndexedDB (Dexie) so cashiers keep billing through internet outages — idempotency-keyed sync, FIFO shift/sale drain ordering, exponential-backoff retry, and a cashier-facing conflict drawer that resolves 409 stock conflicts with retry/void actions.",
      "Solved duplicate-sale risk with a multi-tab lock and provisional offline invoice numbers that reconcile to real invoice IDs once the queue syncs.",
      "Designed a 5-level role hierarchy with ~35 fine-grained module:action permissions, resolved through a Redis-cached lookup with database fallback, plus TOTP two-factor auth and full audit logging.",
      "Built a GST engine handling inclusive-to-exclusive conversion, slab computation and per-line CGST/SGST/IGST breakdown, feeding 32 report endpoints including GSTR-1, GSTR-3B, P&L and stock valuation, with Excel and PDF export.",
      "Integrated Razorpay subscriptions across 5 plans with a dedicated proration service, one-upgrade-per-cycle guarding, orphan-payment recovery and HMAC-verified webhooks on a raw-body route.",
      "Shipped AI voice billing using OpenAI Whisper and GPT-4o-mini to parse a spoken cart, metered atomically with a conditional database reservation and refund-on-failure.",
      "Built a data-driven storefront builder — 17 composable section blocks behind a registry, draft/publish flow, and server-side whitelisting of client-supplied section settings.",
      "Integrated the Meta WhatsApp Cloud API for payment reminders, promotional offers and new-arrival broadcasts, backed by cron jobs for low-stock and payment-due triggers.",
      "Added Socket.IO realtime notifications with JWT handshake auth and a Redis token-blacklist check, delivered to per-user rooms.",
      "Wrote the operational documentation — cashier user guide and a 20KB end-to-end test plan — so non-technical staff could run and validate the system.",
    ],
    resumeBullets: [
      "Architected a multi-tenant retail ERP of ~74,000 lines of TypeScript — 227 REST endpoints, 72 application routes and 33 data models — on Next.js, Express, MongoDB and Redis.",
      "Built an offline-first POS on IndexedDB (Dexie): idempotency-keyed sync, FIFO drain ordering, exponential-backoff retry, a multi-tab lock preventing duplicate sales, and a cashier-facing drawer that resolves 409 stock conflicts.",
      "Implemented a 5-level role hierarchy with ~35 fine-grained permissions resolved via Redis-cached lookups, plus TOTP two-factor auth and full audit logging.",
      "Built a GST engine (per-line CGST/SGST/IGST) feeding 32 report endpoints including GSTR-1, GSTR-3B and P&L with Excel/PDF export, and integrated Razorpay subscriptions with prorated upgrades, OpenAI Whisper voice billing and the Meta WhatsApp Cloud API.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Dexie / IndexedDB",
      "Offline-first",
      "TanStack Query",
      "Zustand",
      "Razorpay",
      "OpenAI",
      "WhatsApp Cloud API",
      "BullMQ",
      "PWA",
      "Vercel",
      "Railway",
    ],
    links: [{ label: "Live site", href: "http://inventixerp.in/" }],
  },
  {
    name: "NexSight",
    subtitle: "AI-Powered Analytics & Prediction Dashboard",
    period: "May 2024 — May 2025",
    featured: true,
    summary:
      "An AI-powered dashboard that turns complex datasets into actionable insight, with machine-learning models driving the forecasts.",
    bullets: [
      "Developed an AI-powered dashboard for data visualisation and prediction, making complex datasets readable and actionable.",
      "Implemented machine-learning models for forecasting, exposed through an interactive, user-focused interface.",
      "Built the system to scale — clean data pipeline, modular model layer and a responsive front end.",
      "Extended the work into real-time AI interaction, integrating vision and speech processing.",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Data Visualisation",
      "Forecasting",
      "React",
      "Computer Vision",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/AdnaanMansuri2003" },
    ],
  },
  {
    name: "Isaji Mart",
    subtitle: "Invoice & Stock Admin Dashboard + Product Website",
    period: "May 2025 — June 2025",
    featured: true,
    summary:
      "Digitised a grocery store I managed: an admin dashboard for invoicing and stock control, plus a public product-display site for customers.",
    bullets: [
      "Developed an admin dashboard for invoice generation and stock management, replacing manual registers and streamlining daily business operations.",
      "Implemented product tracking and inventory records so stock levels, pricing and reorder points stayed accurate.",
      "Built a product-display website to showcase the catalogue and improve customer accessibility to what the store carries.",
      "Designed the workflows directly from the store's real operating needs, having managed the counter and stock room myself.",
    ],
    tags: ["React", "Next.js", "Node.js", "MySQL", "Tailwind CSS", "Dashboards"],
  },
  {
    name: "Fixo Appliance",
    subtitle: "Appliance Service Platform — Web Developer",
    period: "Mid 2026",
    summary:
      "A professional appliance-service website connecting customers with repair professionals and making service booking straightforward.",
    bullets: [
      "Designed and developed a customer-facing appliance-service website covering refrigerators, washing machines, dryers, microwaves, dishwashers, cooktops and TVs.",
      "Built a responsive UI and a clear service-page structure so customers can find the right repair service and enquire in a couple of clicks.",
      "Handled branding and produced custom visual assets to give the business a consistent, professional identity.",
      "Wrote SEO-oriented content and structured the pages around search intent for local appliance-repair queries.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "SEO", "Branding"],
    links: [{ label: "Live site", href: "https://www.fixoappliance.com/" }],
  },
  {
    name: "Ontario Appliance Service",
    subtitle: "Freelance Client Website",
    period: "Since 2026",
    summary:
      "A responsive service website built as a freelance client project, letting users browse appliance repair services and submit enquiries.",
    bullets: [
      "Developed a responsive service website for a freelance client in the appliance repair business.",
      "Enabled users to view the full service catalogue and submit enquiries efficiently through the site.",
      "Improved the user experience through intuitive navigation and optimised page performance.",
      "Continue to maintain and extend the site based on ongoing client feedback.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Freelance"],
    links: [
      {
        label: "Live site",
        href: "https://melodic-squirrel-b72843.netlify.app/",
      },
    ],
  },
];

export type SkillGroup = {
  title: string;
  note?: string;
  items: { name: string; level?: "Advanced" | "Intermediate" | "Novice" }[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Java", level: "Novice" },
      { name: "PHP", level: "Novice" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "shadcn/ui" },
      { name: "Framer Motion" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "MongoDB / Mongoose" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Socket.IO" },
      { name: "JWT & RBAC" },
      { name: "BullMQ" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Machine Learning" },
      { name: "Forecasting Models" },
      { name: "OpenAI API" },
      { name: "Speech & Vision Processing" },
      { name: "Data Visualisation" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "VS Code" },
      { name: "Linux" },
      { name: "Windows" },
    ],
  },
  {
    title: "Beyond Code",
    items: [
      { name: "Team Collaboration" },
      { name: "Public Speaking" },
      { name: "Retail Operations" },
      { name: "Fitness & Gym Training" },
    ],
  },
];

export type Education = {
  school: string;
  credential: string;
  detail: string;
  period: string;
  location: string;
  result?: string;
  current?: boolean;
  /** Dropped from the one-page résumé, where space is tighter. */
  omitFromShort?: boolean;
  coursework?: string[];
};

export const education: Education[] = [
  {
    school: "Northeastern University",
    credential: "Master of Engineering (MEng)",
    detail: "Software Engineering Systems",
    // TODO: confirm the expected graduation date.
    period: "Sept 2026 — Expected 2028",
    location: "Toronto, Ontario, Canada",
    current: true,
  },
  {
    school: "Gandhinagar Institute of Technology",
    credential: "Bachelor of Engineering (BE)",
    detail: "Computer Engineering · Gujarat Technological University",
    period: "Graduated May 2025",
    location: "Ahmedabad, Gujarat, India",
    result: "CGPA 7.48",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Computer Organization & Architecture",
      "Applied Mathematics",
      "Machine Learning: Linear Models to Deep Learning",
    ],
  },
  {
    school: "DBMS School",
    credential: "Higher Secondary",
    detail: "Science stream",
    period: "Graduated May 2021",
    location: "Gujarat, India",
    result: "69%",
    omitFromShort: true,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
