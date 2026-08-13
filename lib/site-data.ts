export type PageKind = "home" | "about" | "team" | "service" | "product" | "industry" | "portfolio" | "case-study" | "careers" | "blog" | "resources" | "contact" | "pricing" | "legal";

export type PageData = {
  kind: PageKind;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: string[];
  items?: string[];
};

export const services = [
  "ai-automation",
  "ai-agents",
  "custom-software-development",
  "saas-development",
  "web-development",
  "mobile-applications",
  "cloud-solutions",
  "ui-ux-design",
  "devops",
  "enterprise-software"
];

export const products = [
  "think-plus-plus",
  "ai-evaluate",
  "postpilot-ai",
  "hashboost-ai",
  "future-innovations"
];

export const industries = [
  "healthcare",
  "finance",
  "retail",
  "logistics",
  "enterprise",
  "education"
];

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services", opensModal: true },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CAREERS", href: "/careers" },
  { label: "TEAM", href: "/team" },
] as const;

export const pages: Record<string, PageData> = {
  home: {
    kind: "home",
    slug: "",
    eyebrow: "AI • SOFTWARE • AUTOMATION",
    title: "Build AI That Works.\nScale Businesses That Last.",
    description: "We design intelligent software, AI automation, and scalable digital products that transform ambitious ideas into real-world solutions.",
    sections: [
      "Trusted By",
      "Building Tomorrow's Digital Solutions",
      "Our Services",
      "Featured Products",
      "Industries We Serve",
      "Our Development Process",
      "Technology Stack",
      "Our Impact",
      "Success Stories",
      "Client Testimonials",
      "Latest Insights",
      "Frequently Asked Questions",
      "Ready to Build Something Extraordinary?"
    ]
  },
  about: {
    kind: "about",
    slug: "about",
    eyebrow: "ABOUT / 01",
    title: "Building Tomorrow's Digital Solutions",
    description: "SkillYug Technologies is an AI-first technology company that builds AI products, intelligent automation systems, enterprise software, SaaS platforms, web applications, mobile apps, and digital solutions that help businesses innovate, automate, and scale.",
    sections: [
      "Building Tomorrow's Digital Solutions",
      "Our Services",
      "Our Development Process",
      "Technology Stack",
      "Our Impact",
      "Client Testimonials",
      "Ready to Build Something Extraordinary?"
    ]
  },
  team: {
    kind: "team",
    slug: "team",
    eyebrow: "TEAM / 07",
    title: "Our Team",
    description: "Meet the engineers, AI researchers, and product strategists building intelligent software systems for global enterprises.",
    sections: [
      "Leadership Team",
      "Engineering Team",
      "AI & Research Team",
      "Ready to Build Something Extraordinary?"
    ]
  },
  services: {
    kind: "service",
    slug: "services",
    eyebrow: "SERVICES / 02",
    title: "Our Services",
    description: "End-to-end AI engineering, intelligent automation systems, custom software development, and scalable cloud solutions built for modern enterprises.",
    sections: [
      "Our Services",
      "Our Development Process",
      "Technology Stack",
      "Frequently Asked Questions",
      "Ready to Build Something Extraordinary?"
    ]
  },
  industries: {
    kind: "industry",
    slug: "industries",
    eyebrow: "INDUSTRIES / 09",
    title: "Industries We Serve",
    description: "Tailored AI and software solutions engineered for healthcare, fintech, e-commerce, logistics, enterprise SaaS, and edtech.",
    sections: [
      "Industries We Serve",
      "Success Stories",
      "Frequently Asked Questions",
      "Ready to Build Something Extraordinary?"
    ]
  },
  portfolio: {
    kind: "portfolio",
    slug: "portfolio",
    eyebrow: "WORK / 04",
    title: "Success Stories",
    description: "A showcase of production-ready AI products, enterprise applications, and digital platforms delivered by SkillYug Technologies.",
    sections: [
      "Project Filters",
      "Success Stories",
      "Our Impact",
      "Client Testimonials",
      "Ready to Build Something Extraordinary?"
    ]
  },
  "case-studies": {
    kind: "case-study",
    slug: "case-studies",
    eyebrow: "CASE STUDIES / 10",
    title: "Success Stories",
    description: "In-depth case studies detailing how our custom AI software and automation systems drive measurable ROI and operational scale.",
    sections: [
      "Success Stories",
      "Our Impact",
      "Client Testimonials",
      "Ready to Build Something Extraordinary?"
    ]
  },
  careers: {
    kind: "careers",
    slug: "careers",
    eyebrow: "CAREERS / 06",
    title: "Join SkillYug Technologies",
    description: "Build cutting-edge AI products and high-impact enterprise software alongside a passionate team of innovators.",
    sections: [
      "Company Culture",
      "Open Positions",
      "Hiring Process",
      "Apply Form",
      "Ready to Build Something Extraordinary?"
    ]
  },
  blog: {
    kind: "blog",
    slug: "blog",
    eyebrow: "INSIGHTS / 05",
    title: "Latest Insights",
    description: "Technical perspectives, engineering breakdowns, and strategic insights on AI, cloud architecture, and business automation.",
    sections: [
      "Latest Insights",
      "Categories",
      "Newsletter CTA"
    ]
  },
  resources: {
    kind: "resources",
    slug: "resources",
    eyebrow: "RESOURCES / 11",
    title: "Resources & Technical Guides",
    description: "Documentation, technical whitepapers, and integration guides for SkillYug AI platforms and software frameworks.",
    sections: [
      "Technical Documentation",
      "Whitepapers & Guides",
      "API References",
      "Ready to Build Something Extraordinary?"
    ]
  },
  pricing: {
    kind: "pricing",
    slug: "pricing",
    eyebrow: "PRICING / 12",
    title: "Engagement Models",
    description: "Flexible, outcome-driven engagement models designed for startups, high-growth companies, and enterprise organizations.",
    sections: [
      "Engagement Plans",
      "Frequently Asked Questions",
      "Ready to Build Something Extraordinary?"
    ]
  },
  legal: {
    kind: "legal",
    slug: "legal",
    eyebrow: "LEGAL / 13",
    title: "Legal & Compliance",
    description: "Our standards for data privacy, security, terms of service, and ethical AI development.",
    sections: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Data Security & Ethical AI"
    ]
  }
};

const serviceAliases: Record<string, string> = {
  "custom-software": "custom-software-development",
  "website-development": "web-development",
  "mobile-app-development": "mobile-applications",
  "api-development": "custom-software-development",
  "maintenance-support": "devops",
  "ai-chatbots": "ai-agents",
  "product-01": "think-plus-plus",
  "product-02": "ai-evaluate",
  "product-03": "postpilot-ai",
  "product-04": "hashboost-ai",
  "agriculture": "logistics",
  "real-estate": "enterprise",
  "hr": "enterprise"
};

const sharedDetailSections = [
  "Building Tomorrow's Digital Solutions",
  "Key Features & Capabilities",
  "Our Development Process",
  "Technology Stack",
  "Frequently Asked Questions",
  "Ready to Build Something Extraordinary?"
];

const serviceDetails: Record<string, { title: string; desc: string }> = {
  "ai-automation": { title: "AI Automation", desc: "Streamline business operations with autonomous AI workflows, intelligent document processing, and robotic process automation." },
  "ai-agents": { title: "AI Agents", desc: "Deploy self-learning autonomous agents capable of multi-step reasoning, contextual decision making, and automated execution." },
  "custom-software-development": { title: "Custom Software Development", desc: "Engineered-to-order enterprise software solutions built for high performance, security, and long-term scalability." },
  "saas-development": { title: "SaaS Development", desc: "Architect and launch scalable multi-tenant SaaS platforms engineered with modern cloud-native standards." },
  "web-development": { title: "Web Development", desc: "High-performance web applications built with modern frameworks, serverless architectures, and responsive UI." },
  "mobile-applications": { title: "Mobile Applications", desc: "Native and cross-platform mobile apps for iOS and Android delivering fluid user experiences and offline resilience." },
  "cloud-solutions": { title: "Cloud Solutions", desc: "Serverless architecture, cloud migration, container orchestration, and auto-scaling infrastructure on AWS, Azure, and GCP." },
  "ui-ux-design": { title: "UI/UX Design", desc: "Human-centered design systems, research-backed interfaces, and micro-interactions engineered for user conversion." },
  "devops": { title: "DevOps", desc: "Automated CI/CD pipelines, infrastructure as code, Kubernetes deployment, and 24/7 reliability engineering." },
  "enterprise-software": { title: "Enterprise Software", desc: "Mission-critical enterprise platforms integrated with enterprise APIs, security protocols, and legacy systems." }
};

for (const slug of services) {
  const detail = serviceDetails[slug] || { title: slug.replaceAll("-", " "), desc: "Production-ready software and AI solution." };
  pages[slug] = {
    kind: "service",
    slug,
    eyebrow: "SERVICES / DETAIL",
    title: detail.title,
    description: detail.desc,
    sections: sharedDetailSections
  };
}

const productDetails: Record<string, { title: string; desc: string }> = {
  "think-plus-plus": { title: "THINK++", desc: "Advanced cognitive AI engine for predictive analytics, decision support, and deep reasoning across complex data environments." },
  "ai-evaluate": { title: "AI Evaluate", desc: "Enterprise-grade platform for AI model benchmarking, safety evaluation, bias detection, and real-time LLM output validation." },
  "postpilot-ai": { title: "PostPilot AI", desc: "Autonomous social content generation, campaign scheduling, audience intelligence, and multi-channel marketing automation engine." },
  "hashboost-ai": { title: "HashBoost AI", desc: "Semantic keyword intelligence, automated search engine optimization, and real-time digital visibility acceleration suite." },
  "future-innovations": { title: "Future Innovations", desc: "R&D innovation laboratory crafting spatial intelligence, quantum-ready algorithms, and next-generation AI primitives." }
};

for (const slug of products) {
  const detail = productDetails[slug] || { title: slug.replaceAll("-", " "), desc: "Proprietary AI platform built by SkillYug Technologies." };
  pages[slug] = {
    kind: "product",
    slug,
    eyebrow: "PRODUCTS / DETAIL",
    title: detail.title,
    description: detail.desc,
    sections: ["Overview & Architecture", "Key Features & Capabilities", "Technology Stack", "Frequently Asked Questions", "Ready to Build Something Extraordinary?"]
  };
}

const industryDetails: Record<string, { title: string; desc: string }> = {
  "healthcare": { title: "Healthcare & Biotech", desc: "HIPAA-compliant AI diagnostic tools, clinical workflow automation, and secure patient data processing systems." },
  "finance": { title: "Financial Services & Fintech", desc: "Real-time algorithmic risk modeling, automated fraud prevention, and compliant financial transaction processing." },
  "retail": { title: "E-Commerce & Retail", desc: "Hyper-personalized AI recommendations, dynamic pricing intelligence, demand forecasting, and inventory optimization." },
  "logistics": { title: "Logistics & Supply Chain", desc: "Route optimization, warehouse automation AI, fleet telemetry tracking, and predictive supply chain management." },
  "enterprise": { title: "Enterprise & SaaS", desc: "Enterprise process automation, intelligent document understanding, automated customer operations, and analytics." },
  "education": { title: "Education & EdTech", desc: "Adaptive learning platforms, automated grading engines, intelligent tutoring systems, and student progress analytics." }
};

for (const slug of industries) {
  const detail = industryDetails[slug] || { title: slug.replaceAll("-", " "), desc: "Industry-specific AI and software solutions." };
  pages[slug] = {
    kind: "industry",
    slug,
    eyebrow: "INDUSTRIES / DETAIL",
    title: detail.title,
    description: detail.desc,
    sections: ["Industry Overview", "Custom Solutions", "Technology Stack", "Success Stories", "Ready to Build Something Extraordinary?"]
  };
}

for (const [alias, realSlug] of Object.entries(serviceAliases)) {
  if (pages[realSlug] && !pages[alias]) {
    pages[alias] = pages[realSlug];
  }
}
