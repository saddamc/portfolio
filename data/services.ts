export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  bestFor: string[];
  technologies: string[];
  anchorId: string;
  whatIBuild: string[];
  included: string[];
  idealFor: string;
  whatsappMessage: string;
}

export const services: ServiceItem[] = [
  {
    id: 'full-stack',
    number: '01',
    title: 'Full-Stack Web Development',
    shortDesc: 'Custom modern web applications built with scalable frontend and backend architecture.',
    bestFor: ['Custom Platforms', 'Dashboards & Portals', 'Data-Driven Web Apps', 'Bespoke Workflows'],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'],
    anchorId: 'full-stack-detail',
    whatIBuild: [
      'Customer-facing web applications with sub-second page loads',
      'Executive admin panels and role-based permissions (RBAC)',
      'High-throughput client portals and account dashboards',
      'Data-driven internal business tools and workflows',
    ],
    included: [
      'Modular, typed Next.js frontend architecture',
      'Secure Node.js / Next.js backend APIs',
      'Database schema design (PostgreSQL / MongoDB / Prisma)',
      'User authentication (JWT, OAuth, secure sessions)',
      'Automated CI/CD deployment configuration',
      '95+ Google Lighthouse speed optimization',
    ],
    idealFor: 'Founders, teams, and growing businesses needing a reliable, scalable web platform engineered without template bloat.',
    whatsappMessage: 'Hi Saddam! I am interested in discussing a Full-Stack Web Development project with you.',
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-Commerce Development',
    shortDesc: 'High-performance e-commerce experiences designed around real business workflows, catalog management, and conversion.',
    bestFor: ['Online Stores', 'Custom Commerce Platforms', 'WooCommerce Integrations', 'Headless Commerce'],
    technologies: ['Next.js', 'Headless WordPress', 'WooCommerce API', 'Stripe', 'Tailwind CSS'],
    anchorId: 'ecommerce-detail',
    whatIBuild: [
      'Headless fashion and product storefronts with instant filtration',
      'Custom checkout funnels optimized for low cart abandonment',
      'Automated multi-currency payment gateway integrations',
      'Product catalog management and inventory sync pipelines',
    ],
    included: [
      'Headless CMS / WooCommerce REST API architecture',
      'Instant search, multi-attribute variant pickers & cart drawer',
      'Secure payment processing (Stripe, SSL, Webhooks)',
      'Order confirmation notifications and invoice routing',
      'Mobile-first responsive design for 60FPS scrolling',
      'SEO metadata structure for search engine indexing',
    ],
    idealFor: 'Brands and retail businesses wanting sub-second page transitions, unique brand identity, and frictionless checkout.',
    whatsappMessage: 'Hi Saddam! I would like to discuss building an E-Commerce platform with you.',
  },
  {
    id: 'saas',
    number: '03',
    title: 'SaaS Development',
    shortDesc: 'Multi-user software platforms with authentication, dashboards, subscriptions, APIs, and scalable architecture.',
    bestFor: ['Subscription Products', 'Admin Platforms', 'Marketplace Systems', 'B2B SaaS Tools'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe Billing'],
    anchorId: 'saas-detail',
    whatIBuild: [
      'Multi-tenant SaaS architectures with isolated team workspaces',
      'Tiered subscription portals with Stripe Customer Portal integration',
      'Interactive metrics visualization and analytics dashboards',
      'Self-service user onboarding and automated account setups',
    ],
    included: [
      'Role-based access control (Admin, Member, Viewer)',
      'Recurring subscription & invoice lifecycle via Stripe webhooks',
      'Comprehensive relational database migrations (Prisma / SQL)',
      'RESTful APIs ready for mobile and third-party consumers',
      'Audit logging and security hardening',
      'Production deployment on Vercel, AWS, or Docker VPS',
    ],
    idealFor: 'Product founders and SaaS companies seeking an engineering partner to take their MVP from concept to paying subscribers.',
    whatsappMessage: 'Hi Saddam! I am looking to build a SaaS software platform with you.',
  },
  {
    id: 'business-apps',
    number: '04',
    title: 'Business Web Applications',
    shortDesc: 'Purpose-built systems that replace manual business processes with reliable digital workflows.',
    bestFor: ['Logistics Platforms', 'Fleet Dispatch Systems', 'Inventory Management', 'Internal Dashboards'],
    technologies: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Excel Batch Engine', 'Google Maps API'],
    anchorId: 'business-apps-detail',
    whatIBuild: [
      'Cross-border freight and shipment tracking platforms (like ShaplaTrade)',
      'Airport transfer, fleet tracking, and chauffeur dispatch engines (like Alvis)',
      'Bulk Excel rate and weight validation batch processors',
      'Custom CRM, quotation engines, and commercial invoice generators',
    ],
    included: [
      'Custom operational workflows mapped to your actual business steps',
      'Real-time status updates and multi-stage milestone tracking',
      'Bulk spreadsheet import/export validation mechanisms',
      'Interactive mapping and distance/pricing calculators',
      'Automated dispatch slips and WhatsApp booking notifications',
      'Role-based operations console for staff and managers',
    ],
    idealFor: 'Logistics operators, rental companies, and business owners tired of manual spreadsheets and fragmented software.',
    whatsappMessage: 'Hi Saddam! I need a custom Business Web Application / Management System built.',
  },
  {
    id: 'api-backend',
    number: '05',
    title: 'API & Backend Development',
    shortDesc: 'Secure, structured backend systems and APIs designed for reliability, maintainability, and seamless integration.',
    bestFor: ['REST APIs', 'Third-Party Integrations', 'Payment Gateways', 'Database Architecture'],
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker'],
    anchorId: 'api-backend-detail',
    whatIBuild: [
      'Structured RESTful API endpoints for web and mobile clients',
      'Secure webhook listeners for payment and logistics providers',
      'Automated batch data processing and background cron workers',
      'Third-party service connectors (Stripe, Firebase, WhatsApp, Cloudinary)',
    ],
    included: [
      'Strict input validation using Zod and type guards',
      'Authentication & authorization tokens with refresh rotation',
      'Database query optimization, indexing, and connection pooling',
      'API error handling, rate limiting, and structured logging',
      'API documentation (Postman collection / OpenAPI schema)',
      'Containerized deployment using Docker and reverse proxies',
    ],
    idealFor: 'Teams that have frontend designs ready but need a rock-solid, production-grade backend to power their product.',
    whatsappMessage: 'Hi Saddam! I am looking for API & Backend Development services.',
  },
  {
    id: 'maintenance',
    number: '06',
    title: 'Maintenance & Improvement',
    shortDesc: 'Ongoing improvement, optimization, bug fixing, security updates, and feature development for existing applications.',
    bestFor: ['Performance Audits', 'Next.js Upgrades', 'Bug Resolution', 'Feature Additions'],
    technologies: ['Next.js', 'TypeScript', 'Lighthouse Audits', 'Refactoring', 'Vercel / AWS'],
    anchorId: 'maintenance-detail',
    whatIBuild: [
      'Codebase refactoring to reduce technical debt and build times',
      'Next.js Pages-to-App Router modernizations and React 19 upgrades',
      'Targeted Core Web Vitals remediation (achieving 95+ scores)',
      'Security patching, dependency upgrades, and database performance tuning',
    ],
    included: [
      'Deep architectural and performance health check',
      'Prioritized issue remediation plan',
      'Clean Git branches with clear, documented commits',
      'Regression testing before staging deployment',
      'Ongoing sprint support and emergency bug fix turnaround',
    ],
    idealFor: 'Businesses with existing web platforms that have slowed down, accumulated technical debt, or need ongoing senior developer support.',
    whatsappMessage: 'Hi Saddam! I need maintenance, updates, or performance improvement for an existing application.',
  },
];

export interface ProcessStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    name: 'DISCOVER',
    tagline: 'Understand the business problem, users, and core goals.',
    description: 'We clarify the product requirements, target audience, technical constraints, and measurable success criteria before writing any code.',
    deliverables: ['Problem definition', 'Feature scope outline', 'Technical requirements checklist'],
  },
  {
    step: '02',
    name: 'PLAN',
    tagline: 'Define structure, user flows, and technical architecture.',
    description: 'I map out the database schema, API contracts, third-party services, and user journey wireframes to ensure a solid foundation.',
    deliverables: ['Database schema blueprint', 'API contract design', 'Component & layout wireframe'],
  },
  {
    step: '03',
    name: 'DESIGN',
    tagline: 'Create a clear, responsive, and purposeful interface.',
    description: 'Translating product functionality into a clean, modern design with typographic hierarchy, accessible contrast, and zero layout clutter.',
    deliverables: ['Interactive design tokens', 'Responsive layouts (Mobile/Desktop)', 'Design-system components'],
  },
  {
    step: '04',
    name: 'BUILD',
    tagline: 'Develop frontend, backend, database, and integrations.',
    description: 'Writing clean, typed TypeScript code with modular components, secure API endpoints, robust error handling, and staging environment syncs.',
    deliverables: ['Production Next.js application', 'Secured backend APIs & database', 'Staging preview links on every milestone'],
  },
  {
    step: '05',
    name: 'LAUNCH',
    tagline: 'Test, optimize, deploy, and prepare for growth.',
    description: 'Thorough QA testing, Lighthouse speed auditing, domain routing, automated CI/CD pipeline setup, and complete code handoff.',
    deliverables: ['Live production deployment', 'Clean GitHub repository transfer', 'Environment documentation & post-launch support'],
  },
];

export interface ClientBenefit {
  title: string;
  description: string;
  proof: string;
}

export const clientBenefits: ClientBenefit[] = [
  {
    title: 'Clean Architecture',
    description: 'Modular, well-structured TypeScript codebase that your team or future engineers can easily understand, maintain, and expand without rewriting.',
    proof: 'Zero spaghetti code, clear separation of concerns, and typed models.',
  },
  {
    title: 'Responsive & Sub-Second Experience',
    description: 'Every layout is carefully crafted for mobile, tablet, and desktop with 60FPS fluid interactions and zero cumulative layout shifts.',
    proof: '95+ Google Lighthouse scores and optimized asset delivery.',
  },
  {
    title: 'Scalable Backend & Data Integrity',
    description: 'Relational or document database schemas designed for ACID compliance, fast indexing, safe transactions, and seamless future data migration.',
    proof: 'Structured Prisma / Mongoose models with validation layers.',
  },
  {
    title: 'Secure Authentication & Role Control',
    description: 'Battle-tested authentication flows with encrypted password hashing, JWT/session rotation, and granular role-based authorization guards.',
    proof: 'Protects user data and sensitive admin endpoints from unauthorized access.',
  },
  {
    title: 'Clear, Transparent Communication',
    description: 'Direct communication with me as your dedicated engineer — regular milestone demonstrations, staging links, and prompt async updates.',
    proof: 'No middlemen or agency account managers. You speak directly to the builder.',
  },
  {
    title: 'Production-Ready Deployment',
    description: 'Complete deployment setup on Vercel, AWS, or Docker VPS with automated CI/CD builds, SSL encryption, and environment secret management.',
    proof: '100% intellectual property ownership and full repository handoff.',
  },
];

export interface TechGroup {
  category: string;
  purpose: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    category: 'Frontend Engineering',
    purpose: 'Crafting responsive, sub-second user interfaces',
    items: ['React 19', 'Next.js 15 (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI', 'Zustand / Redux'],
  },
  {
    category: 'Backend & APIs',
    purpose: 'Building reliable business logic and data routes',
    items: ['Node.js', 'Express.js', 'Fastify', 'REST APIs', 'Zod Validation', 'JWT & RBAC Auth'],
  },
  {
    category: 'Database Architecture',
    purpose: 'Structured, secure, and fast data storage',
    items: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Mongoose', 'Database Indexing', 'Transactions'],
  },
  {
    category: 'Infrastructure & Cloud',
    purpose: 'High-availability hosting and automation',
    items: ['Docker', 'Vercel CI/CD', 'Cloudflare DNS', 'AWS Amplify / EC2', 'Linux / VPS', 'SSL Hardening'],
  },
  {
    category: 'Integrations & Services',
    purpose: 'Connecting critical business tools',
    items: ['Stripe Payments', 'Firebase Auth', 'Google Maps API', 'Cloudinary CDN', 'WhatsApp API', 'Headless WooCommerce'],
  },
];

export interface RealProjectProof {
  id: string;
  name: string;
  role: string;
  serviceCategory: string;
  problemSolved: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  internalRoute: string;
}

export const realProjectsProof: RealProjectProof[] = [
  {
    id: 'shaplatrade',
    name: 'ShaplaTrade International',
    role: 'Full-Stack Logistics Platform',
    serviceCategory: 'Business Web Application',
    problemSolved: 'Replaced manual WhatsApp spreadsheets with an enterprise Guangzhou-Dhaka cargo freight management system handling multi-stage air & sea shipments.',
    highlights: [
      'Real-time 9-stage route tracking milestone progress',
      'Shipment-wise management console with carton reconciliation',
      'Automated bulk Excel weight & rate batch processor',
      'Commercial invoicing and customer verification',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Route Engine', 'Excel Batch Parser'],
    liveUrl: 'https://www.shaplatrade.com',
    internalRoute: '/#timeline',
  },
  {
    id: 'alvis-car',
    name: 'Alvis Rent a Car',
    role: 'Airport Transfer & Fleet Dispatch Portal',
    serviceCategory: 'Booking / Business Web Application',
    problemSolved: 'Digitized airport chauffeur bookings, flight-number tracking, vehicle dispatch readiness, and operations analytics into a unified platform.',
    highlights: [
      'Live fleet tracking dashboard managing 12+ vehicles',
      'Driver dispatch readiness monitoring (19+ on-duty drivers)',
      'Interactive Google Maps route and distance calculators',
      'Automated airport slips & WhatsApp booking dispatch',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Maps API', 'Admin Operations Panel'],
    liveUrl: 'https://alviscarbd.com',
    internalRoute: '/#timeline',
  },
  {
    id: 'plain-stitch',
    name: 'Plain Stitch',
    role: 'Headless Fashion E-Commerce Storefront',
    serviceCategory: 'E-Commerce Development',
    problemSolved: 'Eliminated slow traditional WordPress page loads by decoupling the WooCommerce backend and powering the storefront with sub-second Next.js routes.',
    highlights: [
      'Headless WooCommerce REST API integration with zero latency',
      'Dynamic multi-attribute color and size variant pickers',
      'Instant slide-out cart drawer and frictionless checkout routing',
      'Mobile-first responsive architecture designed for fast shopping',
    ],
    technologies: ['Next.js', 'Headless WordPress', 'WooCommerce API', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.plainstitch.net/',
    internalRoute: '/#timeline',
  },
  {
    id: 'petco-portal',
    name: 'Pet Adoption & Care SaaS Portal',
    role: 'Multi-User Care Platform',
    serviceCategory: 'SaaS / Full-Stack Platform',
    problemSolved: 'Created a centralized multi-user portal for pet adoption campaigns, foster applications, and secure sponsorship donations.',
    highlights: [
      'Role-based access control with Firebase authentication',
      'Interactive adoption dashboard and volunteer management',
      'Secure payment processing with Stripe donation flows',
      'Real-time status updates and animal health records',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase Auth', 'Stripe Payments'],
    liveUrl: 'https://assignment-pets.web.app',
    internalRoute: '/#timeline',
  },
];

export interface ServiceFitItem {
  need: string;
  recommendedService: string;
  anchorId: string;
  reason: string;
}

export const serviceFitMatrix: ServiceFitItem[] = [
  {
    need: 'A custom web application, portal, or bespoke interactive platform',
    recommendedService: 'Full-Stack Web Development',
    anchorId: 'full-stack-detail',
    reason: 'End-to-end architecture with custom UI, APIs, and database built exactly for your workflow.',
  },
  {
    need: 'An online store with smooth checkout, product variants, and payment processing',
    recommendedService: 'E-Commerce Development',
    anchorId: 'ecommerce-detail',
    reason: 'Optimized for high speed, conversion, catalog management, and seamless payments.',
  },
  {
    need: 'A multi-user software product with user accounts, dashboards, and recurring billing',
    recommendedService: 'SaaS Development',
    anchorId: 'saas-detail',
    reason: 'Multi-tenant architecture with authentication, subscription tiers, and production scaling.',
  },
  {
    need: 'A system to replace spreadsheets, automate logistics, bookings, or internal operations',
    recommendedService: 'Business Web Applications',
    anchorId: 'business-apps-detail',
    reason: 'Eliminates repetitive manual tasks with structured digital pipelines and staff dashboards.',
  },
  {
    need: 'A secure backend, REST API, database design, or third-party service connector',
    recommendedService: 'API & Backend Development',
    anchorId: 'api-backend-detail',
    reason: 'High-reliability server architecture, data protection, and clean endpoints ready for integration.',
  },
  {
    need: 'An existing application that is slow, has bugs, or needs new features and updates',
    recommendedService: 'Maintenance & Improvement',
    anchorId: 'maintenance-detail',
    reason: 'Targeted code refactoring, performance remediation, and dependable ongoing support.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What types of projects do you work on?',
    answer: 'I specialize in full-stack web applications, custom business management systems, e-commerce storefronts, SaaS MVPs, and backend API architectures. I work best on projects where clean engineering, high speed, and reliability matter more than generic drag-and-drop templates.',
  },
  {
    question: 'Can you build both the frontend and backend?',
    answer: 'Yes. As a full-stack engineer, I handle the complete stack: responsive Next.js/React user interfaces, server-side APIs in Node.js, database architecture (PostgreSQL, MongoDB, Prisma), authentication guards, and deployment infrastructure. You get a unified, coherent product with no handoff friction.',
  },
  {
    question: 'Can you work with an existing codebase or design?',
    answer: 'Absolutely. If you already have Figma designs, I translate them into pixel-perfect, accessible code. If you have an existing Next.js, React, or Node.js codebase, I can audit the architecture, resolve bugs, improve performance, or develop new features alongside your team.',
  },
  {
    question: 'Can you integrate payment gateways and third-party APIs?',
    answer: 'Yes. I regularly integrate Stripe (checkout sessions, multi-currency, webhooks, subscription billing), headless CMS APIs, Google Maps routing, Cloudinary media pipelines, Firebase, and automated WhatsApp/email notifications.',
  },
  {
    question: 'How long does a project typically take?',
    answer: 'Delivery timelines depend on scope. A focused MVP or business tool typically takes 2 to 4 weeks. Smaller feature implementations or API integrations take 1 to 2 weeks, while large-scale platforms take 4 to 8 weeks. I provide a realistic milestone breakdown before we start and share staging preview links every 3 to 5 days.',
  },
  {
    question: 'Do you provide maintenance and support after launch?',
    answer: 'Yes. Every project includes complimentary post-launch support to monitor production stability and resolve any initial questions. For ongoing feature development, security updates, or continuous improvements, I offer dedicated monthly maintenance engagements.',
  },
];
