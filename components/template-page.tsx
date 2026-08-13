import Link from "next/link";
import { ArrowUpRight, ChevronDown, CircleDot, Quote, Sparkles } from "lucide-react";
import type { PageData } from "@/lib/site-data";

export function Section({ name, index, children }: { name: string; index: number; children: React.ReactNode }) {
  return (
    <section className="content-section">
      <div className="section-header">
        <h2 className="section-title">{name}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export function ServiceCards() {
  const categories = [
    {
      title: "Education",
      items: ["AI Study Planner", "AI Personalized Tutor", "AI Doubt Solver", "AI Quiz Generator", "AI Flashcard Generator", "AI Notes Generator", "AI Assignment Assistant", "AI Exam Preparation Assistant", "AI Lecture Summarizer", "AI Homework Checker", "AI Plagiarism Checker", "AI Coding Mentor", "AI Career Guidance", "AI Scholarship Finder", "AI Admission Counselor"]
    },
    {
      title: "Business & Productivity",
      items: ["AI Business Assistant", "AI Email Writer", "AI Meeting Summarizer", "AI Proposal Generator", "AI Report Generator", "AI Presentation Creator", "AI Document Analyzer", "AI Knowledge Base Assistant", "AI Workflow Automation", "AI Project Manager", "AI CRM Assistant", "AI Data Entry Automation", "AI Invoice Processing", "AI Contract Analyzer", "AI Compliance Assistant"]
    },
    {
      title: "Sales & Marketing",
      items: ["AI Lead Generator", "AI Cold Email Generator", "AI Sales Assistant", "AI WhatsApp Sales Bot", "AI Voice Calling Agent", "AI Customer Segmentation", "AI Social Media Manager", "AI Content Writer", "AI SEO Optimizer", "AI Ad Copy Generator", "AI Campaign Analyzer", "AI Product Description Generator", "AI Influencer Finder", "AI Competitor Analysis", "AI Market Research"]
    },
    {
      title: "Customer Support",
      items: ["AI Chatbot", "AI Voice Support Agent", "AI Ticket Routing", "AI FAQ Assistant", "AI Complaint Analyzer", "AI Sentiment Analysis", "AI Customer Feedback Analyzer", "AI Live Translation", "AI Help Desk Automation", "AI Knowledge Assistant"]
    },
    {
      title: "HR & Recruitment",
      items: ["AI Resume Analyzer", "AI Resume Builder", "AI Interview Simulator", "AI Candidate Screening", "AI Employee Onboarding", "AI Performance Analysis", "AI Attendance Assistant", "AI Payroll Assistant", "AI Training Assistant", "AI HR Chatbot"]
    },
    {
      title: "Finance",
      items: ["AI Expense Tracker", "AI Budget Planner", "AI Financial Advisor", "AI Tax Assistant", "AI Invoice Generator", "AI Fraud Detection", "AI Investment Insights", "AI Loan Eligibility Checker", "AI Risk Analysis", "AI Accounting Assistant"]
    },
    {
      title: "Healthcare",
      items: ["AI Symptom Checker", "AI Appointment Assistant", "AI Medical Report Analyzer", "AI Prescription Reader", "AI Health Monitoring", "AI Mental Wellness Assistant", "AI Diet Planner", "AI Fitness Coach", "AI Medical Chatbot", "AI Drug Information Assistant"]
    },
    {
      title: "Legal",
      items: ["AI Legal Research", "AI Contract Review", "AI Agreement Generator", "AI Compliance Checker", "AI Case Summarizer", "AI Legal Chatbot", "AI Document Verification", "AI Evidence Organizer"]
    },
    {
      title: "E-Commerce",
      items: ["AI Product Recommendation", "AI Inventory Prediction", "AI Demand Forecasting", "AI Price Optimization", "AI Order Tracking Assistant", "AI Shopping Assistant", "AI Review Analyzer", "AI Return Management", "AI Product Image Generator", "AI Virtual Try-On"]
    },
    {
      title: "Manufacturing",
      items: ["AI Predictive Maintenance", "AI Quality Inspection", "AI Production Planning", "AI Supply Chain Optimization", "AI Warehouse Management", "AI Robotics Control", "AI Inventory Optimization", "AI Fault Detection"]
    },
    {
      title: "Agriculture",
      items: ["AI Crop Disease Detection", "AI Yield Prediction", "AI Smart Irrigation", "AI Soil Analysis", "AI Weather Prediction", "AI Farm Monitoring", "AI Livestock Monitoring", "AI Pest Detection"]
    },
    {
      title: "Real Estate",
      items: ["AI Property Recommendation", "AI Price Estimation", "AI Virtual Property Tour", "AI Rental Assistant", "AI Lead Qualification", "AI Property Description Generator", "AI Market Analysis"]
    },
    {
      title: "Cybersecurity",
      items: ["AI Threat Detection", "AI Phishing Detection", "AI Malware Analysis", "AI Security Monitoring", "AI Identity Verification", "AI Vulnerability Scanner", "AI Fraud Detection"]
    },
    {
      title: "Creative & Media",
      items: ["AI Image Generator", "AI Video Generator", "AI Music Generator", "AI Voice Cloning", "AI Podcast Generator", "AI Script Writer", "AI Thumbnail Generator", "AI Logo Designer", "AI Animation Creator", "AI Video Editor"]
    },
    {
      title: "Software Development",
      items: ["AI Code Generator", "AI Code Reviewer", "AI Bug Detection", "AI Documentation Generator", "AI Test Case Generator", "AI API Generator", "AI Database Designer", "AI DevOps Assistant"]
    },
    {
      title: "Research & Analytics",
      items: ["AI Research Assistant", "AI Paper Summarizer", "AI Data Visualization", "AI Predictive Analytics", "AI Business Intelligence", "AI Dashboard Generator", "AI Trend Analysis", "AI Decision Support"]
    },
    {
      title: "Travel & Hospitality",
      items: ["AI Trip Planner", "AI Hotel Assistant", "AI Flight Booking Assistant", "AI Travel Guide", "AI Itinerary Generator", "AI Language Translator", "AI Expense Planner"]
    },
    {
      title: "Smart Automation",
      items: ["AI Voice Assistant", "AI Personal Assistant", "AI Smart Home Controller", "AI IoT Monitoring", "AI Document Automation", "AI OCR Scanner", "AI Form Automation", "AI Process Automation (RPA)", "AI Scheduling Assistant", "AI Notification Assistant"]
    },
    {
      title: "Advanced AI Services",
      items: ["AI Agents", "Multi-Agent Systems", "AI Copilots", "AI Voice Agents", "AI Search Engine", "AI Recommendation Engine", "AI Decision Engine", "AI Digital Twin", "AI Knowledge Graph", "AI Autonomous Workflow Automation", "AI Retrieval-Augmented Generation (RAG)", "AI Computer Vision Solutions", "AI Speech-to-Text", "AI Text-to-Speech", "AI Translation Engine", "AI Predictive Intelligence", "AI Generative Design", "AI Document Intelligence", "AI Business Intelligence Platform", "Custom AI Model Development"]
    }
  ];

  return (
    <div className="service-card-grid">
      {categories.map((category, i) => (
        <article className="template-card" key={i}>
          <h3 style={{ marginTop: "0" }}>{category.title}</h3>
          <div className="service-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
            {category.items.map((item, j) => (
              <span key={j} style={{ background: 'rgba(96, 165, 250, 0.08)', border: '1px solid rgba(96, 165, 250, 0.2)', color: 'var(--electric)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.02em' }}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProductCards() {
  const items = [
    { title: "THINK++", slug: "think-plus-plus", desc: "Advanced cognitive AI engine for predictive analytics, decision support, and deep reasoning across complex data environments." },
    { title: "AI Evaluate", slug: "ai-evaluate", desc: "Enterprise-grade platform for AI model benchmarking, safety evaluation, bias detection, and real-time LLM output validation." },
    { title: "PostPilot AI", slug: "postpilot-ai", desc: "Autonomous social content generation, campaign scheduling, audience intelligence, and multi-channel marketing automation engine." },
    { title: "HashBoost AI", slug: "hashboost-ai", desc: "Semantic keyword intelligence, automated search engine optimization, and real-time digital visibility acceleration suite." },
    { title: "Future Innovations", slug: "future-innovations", desc: "R&D innovation laboratory crafting spatial intelligence, quantum-ready algorithms, and next-generation AI primitives." },
  ];

  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article className="template-card" key={i}>
          <div className="card-number">{String(i + 1).padStart(2, "0")}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Link href={`/${item.slug}`} className="text-link">
            Product Overview <ArrowUpRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function IndustryCards() {
  const items = [
    { title: "Healthcare & Biotech", desc: "HIPAA-compliant AI diagnostic tools, clinical workflow automation, and secure patient data processing systems." },
    { title: "Financial Services & Fintech", desc: "Real-time algorithmic risk modeling, automated fraud prevention, and compliant financial transaction processing." },
    { title: "E-Commerce & Retail", desc: "Hyper-personalized AI recommendations, dynamic pricing intelligence, demand forecasting, and inventory optimization." },
    { title: "Logistics & Supply Chain", desc: "Route optimization, warehouse automation AI, fleet telemetry tracking, and predictive supply chain management." },
    { title: "Enterprise & SaaS", desc: "Enterprise process automation, intelligent document understanding, automated customer operations, and analytics." },
    { title: "Education & EdTech", desc: "Adaptive learning platforms, automated grading engines, intelligent tutoring systems, and student progress analytics." },
  ];

  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article className="template-card" key={i}>
          <div className="card-number">{String(i + 1).padStart(2, "0")}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Link href="/industries" className="text-link">
            Industry Solutions <ArrowUpRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CompanyIntroCards() {
  const items = [
    { title: "AI-First Software Engineering", desc: "We design resilient software systems with embedded machine intelligence to automate complex workflows and drive operating leverage." },
    { title: "Enterprise Scale & Reliability", desc: "High-throughput digital platforms built for 99.99% uptime, enterprise-grade security, and seamless legacy IT integration." },
    { title: "Accelerated Digital Innovation", desc: "Rapid transition from ambitious technical concepts to production-grade software solutions with agile delivery models." },
  ];

  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article className="template-card" key={i}>
          <div className="card-number">{String(i + 1).padStart(2, "0")}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Link href="/about" className="text-link">
            Learn More <ArrowUpRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyCards() {
  const items = [
    { title: "HaarWala.org NGO Website", desc: "Designed and developed the HaarWala.org website for this NGO, creating a clear digital home for its mission, work, and community impact.", href: "https://haarwala.org", external: true },
    { title: "Think++", desc: "turn abstract concepts into something students can see, interact with, and understand.", href: "https://anuji.vercel.app/", external: true },
    { title: "AI-Evaluate", desc: "An AI-powered answer sheet evaluation platform that automates copy checking, marks allocation, and performance analysis.", href: "https://ai-evaluaite-1.onrender.com/", external: true },
    { title: "HashBoost AI", desc: "A cutting-edge AI platform for hash function optimization and performance analysis.", href: "https://viral-tag-ai.lovable.app/", external: true },
     { title: "BOI", desc: "BOI is an AI-powered desktop automation framework designed to control your system through intelligent commands, automation routines, and real-time monitoring. It includes 300+ features, a modular architecture, and complete documentation.A cutting-edge AI platform for hash function optimization and performance analysis.", href: "https://github.com/VATSALVARSHNEY108/B.O.I.-MARK-1.git", external: true },
    
  ];

  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article className="template-card" key={i}>
          <div className="card-number">{String(i + 1).padStart(2, "0")}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Link
            href={item.href ?? "/portfolio"}
            className="text-link"
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
          >
            {item.external ? "Visit Website" : "Read Case Study"} <ArrowUpRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function InsightsCards() {
  const items = [
    { title: "Building Autonomous AI Agents for Enterprise Scale", desc: "Architectural strategies for multi-agent orchestration, tool usage, and deterministic guardrails in production systems." },
    { title: "Modernizing Enterprise Systems with AI Automation", desc: "How enterprise organizations can introduce intelligent automation without re-architecting core database layers." },
    { title: "Engineering High-Performance SaaS Architectures", desc: "Modern design principles for micro-frontends, serverless backends, and sub-10ms vector search querying." },
  ];

  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article className="template-card" key={i}>
          <div className="card-number">{String(i + 1).padStart(2, "0")}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Link href="/blog" className="text-link">
            Read Article <ArrowUpRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function TestimonialCards() {
  const items = [
    { quote: "SkillYug Technologies transformed our core platform with autonomous AI agents that execute complex customer workflows flawlessly. Their technical depth is world-class.", author: "Elena Rostova", role: "CTO at Nexus Systems" },
    { quote: "Partnering with SkillYug felt like adding a top-tier AI engineering lab to our organization. They delivered scalable, production-ready software ahead of schedule.", author: "Marcus Vance", role: "Founder & CEO at Aura Global" },
    { quote: "The custom software and automation systems engineered by SkillYug allowed us to expand operations 5x without increasing operational overhead.", author: "Sarah Jenkins", role: "VP of Operations at Horizon Logistics" },
  ];

  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <article className="template-card testimonial-card" key={i}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", flex: 1 }}>
            <div className="card-number" style={{ letterSpacing: ".18em" }}>TESTIMONIAL 0{i + 1}</div>
            <p className="testimonial-quote">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{item.author.charAt(0)}</div>
            <div>
              <h3 className="testimonial-name">{item.author}</h3>
              <p className="testimonial-role">{item.role}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function StatGrid() {
  const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "120+", label: "Clients Served" },
    { value: "500+", label: "AI Solutions Built" },
    { value: "35+", label: "Countries Reached" },
    { value: "8+", label: "Years of Innovation" },
  ];

  return (
    <div className="stat-grid">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function DevelopmentProcess() {
  const steps = [
    { num: "01 // DISCOVER", title: "Discover", desc: "Comprehensive analysis of business objectives, technical requirements, user needs, and strategic AI roadmap design." },
    { num: "02 // DESIGN", title: "Design", desc: "System architecture blueprints, data pipeline modeling, UI/UX design systems, and interactive prototype validation." },
    { num: "03 // DEVELOP", title: "Develop", desc: "Agile software engineering, clean modular code construction, microservices setup, and AI model training and fine-tuning." },
    { num: "04 // TEST", title: "Test", desc: "Automated test suite execution, security audits, stress testing, and empirical AI output validation." },
    { num: "05 // DEPLOY", title: "Deploy", desc: "Infrastructure provisioning, CI/CD pipeline rollout, automated performance monitoring, and zero-downtime production deployment." },
    { num: "06 // SCALE", title: "Scale", desc: "Continuous monitoring, auto-scaling infrastructure optimization, real-time analytics, and iterative feature enhancements." },
  ];

  return (
    <div className="timeline">
      {steps.map((step) => (
        <article className="timeline-card" key={step.num}>
          <div className="timeline-step-num">{step.num}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </article>
      ))}
    </div>
  );
}

export function TechStackPills() {
  const stack = [
    "Python & PyTorch",
    "TypeScript & Next.js",
    "Node.js & Go",
    "AWS & Cloud Native",
    "Docker & Kubernetes",
    "PostgreSQL & Vector DBs",
    "OpenAI & Claude APIs",
    "GraphQL & REST APIs"
  ];

  return (
    <div className="pill-row">
      {stack.map((item, i) => (
        <span className="pill" key={i}>{item}</span>
      ))}
    </div>
  );
}

export function FAQAccordion() {
  const faqs = [
    { q: "What services does SkillYug Technologies provide?", a: "SkillYug Technologies builds AI-powered products, custom software applications, autonomous AI agents, enterprise automation systems, SaaS platforms, web and mobile apps, and scalable cloud solutions." },
    { q: "How do you ensure client data security and AI privacy?", a: "We enforce enterprise-grade security standards including SOC 2 compliance guidelines, end-to-end encryption, strict zero-retention policies for proprietary model data, and isolated cloud environments." },
    { q: "Can SkillYug integrate AI capabilities into our existing software stack?", a: "Yes. We engineer modular, API-driven solutions that connect directly into your existing databases, CRMs, ERPs, and legacy applications without interrupting existing workflows." },
    { q: "What is the typical project timeline?", a: "Proof-of-concept deployments and specialized AI agents take 3 to 6 weeks, while complete enterprise software platforms or multi-tenant SaaS products range from 8 to 16 weeks depending on requirements." },
  ];

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <details key={i}>
          <summary>
            {faq.q} <ChevronDown size={17} />
          </summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactForm({ apply = false }: { apply?: boolean }) {
  return (
    <form className="template-form">
      {apply ? (
        <>
          <label>
            Full Name
            <input placeholder="e.g. Alex Morgan" />
          </label>
          <label>
            Email Address
            <input placeholder="e.g. alex@example.com" />
          </label>
          <label>
            Target Role / Department
            <input placeholder="e.g. Senior AI Engineer" />
          </label>
          <label>
            Portfolio / LinkedIn / GitHub
            <input placeholder="e.g. github.com/alexmorgan" />
          </label>
        </>
      ) : (
        <>
          <label>
            Full Name
            <input placeholder="e.g. Sarah Jenkins" />
          </label>
          <label>
            Email Address
            <input placeholder="e.g. sarah@company.com" />
          </label>
          <label>
            Company Name
            <input placeholder="e.g. Apex Global" />
          </label>
          <label>
            Project Details
            <input placeholder="Describe your software or AI project goals..." />
          </label>
        </>
      )}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1"
        target="_blank"
        rel="noopener noreferrer"
        className="primary-button"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
      >
        {apply ? "Submit Application" : "Start Your Project"} <ArrowUpRight size={16} />
      </a>
    </form>
  );
}

export function TeamMembers() {
  const members = [
    { name: "Vinayak Pandey", role: "Founder & Chief AI Architect", bio: "Deep learning specialist with 10+ years in distributed systems, neural network design, and multi-agent AI orchestration.", expertise: "AI System Architecture · Multi-Agent Systems" },
    { name: "Vinayak Pandey", role: "VP of Engineering", bio: "Cloud infrastructure expert leading high-concurrency enterprise software engineering, Kubernetes, and DevOps reliability.", expertise: "Cloud Computing · Scalable Microservices" },
    { name: "Vinayak Pandey", role: "Head of Product & UX", bio: "Product strategist specializing in intuitive AI human-computer interaction, scalable design systems, and SaaS UX design.", expertise: "UI/UX Systems · SaaS Product Design" },
  ];

  return (
    <div className="card-grid">
      {members.map((m, i) => (
        <article className="member-card" key={i}>
          <div className="card-number">LEADERSHIP</div>
          <h3>{m.name}</h3>
          <p style={{ color: "var(--electric)", fontSize: "13px", fontWeight: "600", marginBottom: "10px" }}>{m.role}</p>
          <p>{m.bio}</p>
          <div style={{ borderTop: "1px solid var(--line)", color: "var(--muted)", fontSize: "11px", marginTop: "18px", paddingTop: "12px", textTransform: "uppercase" }}>
            <span>{m.expertise}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function SectionContent({ name }: { name: string }) {
  if (name === "Trusted By") {
    return (
      <div className="logo-row">
        <span>NEXUS LABS</span>
        <span>AURA GLOBAL</span>
        <span>VANGUARD SYSTEMS</span>
        <span>APEX AI</span>
        <span>OMNITECH</span>
      </div>
    );
  }

  if (name === "Building Tomorrow's Digital Solutions" || name === "Company Introduction") {
    return <CompanyIntroCards />;
  }

  if (name === "Our Services" || name === "Services Overview" || name === "Key Features & Capabilities") {
    return <ServiceCards />;
  }

  if (name === "Featured Products" || name === "Products Overview" || name === "Overview & Architecture") {
    return <ProductCards />;
  }

  if (name === "Industries We Serve" || name === "Industries Overview" || name === "Solutions by Industry" || name === "Custom Solutions") {
    return <IndustryCards />;
  }

  if (name === "Our Development Process" || name === "Development Process" || name === "Our Process" || name === "Hiring Process" || name === "Timeline") {
    return <DevelopmentProcess />;
  }

  if (name === "Technology Stack" || name === "Technology Used") {
    return <TechStackPills />;
  }

  if (name === "Our Impact" || name === "Statistics" || name === "Results") {
    return <StatGrid />;
  }

  if (name === "Success Stories" || name === "Case Studies" || name === "Project Cards") {
    return <CaseStudyCards />;
  }

  if (name === "Client Testimonials" || name === "Testimonials" || name === "Client Feedback") {
    return <TestimonialCards />;
  }

  if (name === "Latest Insights" || name === "Latest Blogs" || name === "Featured Articles") {
    return <InsightsCards />;
  }

  if (name === "Frequently Asked Questions" || name === "FAQs") {
    return <FAQAccordion />;
  }

  if (name.includes("Form") || name === "Inquiry Form" || name === "Apply Form") {
    return <ContactForm apply={name.includes("Apply")} />;
  }

  if (name.includes("Team")) {
    return <TeamMembers />;
  }

  if (name === "Project Filters") {
    return (
      <div className="pill-row">
        {["All Work", "AI Agents", "Custom Software", "SaaS Platforms", "Cloud Infrastructure"].map((filter, i) => (
          <span className="pill" key={i}>{filter}</span>
        ))}
      </div>
    );
  }

  if (name === "Contact Information" || name === "Office Locations") {
    return (
      <div className="card-grid">
        <article className="template-card">
          <div className="card-number">HEADQUARTERS</div>
          <h3>San Francisco</h3>
          <p>500 Howard Street, Suite 400<br />San Francisco, CA 94105</p>
          <p style={{ marginTop: "10px", color: "var(--electric)" }}>sf@skillyug.tech</p>
        </article>
        <article className="template-card">
          <div className="card-number">EAST COAST HUB</div>
          <h3>New York</h3>
          <p>One World Trade Center, Fl 45<br />New York, NY 10007</p>
          <p style={{ marginTop: "10px", color: "var(--electric)" }}>ny@skillyug.tech</p>
        </article>
        <article className="template-card">
          <div className="card-number">ASIA PACIFIC HUB</div>
          <h3>New Delhi</h3>
          <p>Cyber City, Tower B, 12th Floor<br />Gurugram, HR 122002</p>
          <p style={{ marginTop: "10px", color: "var(--electric)" }}>india@skillyug.tech</p>
        </article>
      </div>
    );
  }

  return (
    <>
      <p className="lead">Building intelligent software solutions that empower businesses through AI, automation, and modern technology.</p>
      <CompanyIntroCards />
    </>
  );
}


export const serviceDetailList = [
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

export const productDetailList = [
  "think-plus-plus",
  "ai-evaluate",
  "postpilot-ai",
  "hashboost-ai",
  "future-innovations"
];

export const industryDetailList = [
  "healthcare",
  "finance",
  "retail",
  "logistics",
  "enterprise",
  "education"
];

export default function TemplatePage({ data }: { data: PageData }) {
  const home = data.kind === "home";

  if (data.kind === "contact") {
    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> CONNECT WITH US
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff", textShadow: "0 2px 20px rgba(0, 0, 0, 0.6)" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "10px" }}>
              <div className="timeline-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "#ffffff", margin: "0 0 10px" }}>Email & Inquiries</h3>
                <p style={{ margin: 0, fontSize: "15px", color: "var(--electric)", fontWeight: "600" }}>hello@skillyug.tech</p>
              </div>

              <div className="timeline-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", color: "#ffffff", margin: "0 0 10px" }}>Career Opportunities</h3>
                <p style={{ margin: 0, fontSize: "15px", color: "var(--electric)", fontWeight: "600" }}>careers@skillyug.tech</p>
              </div>
            </div>
          </div>

          <div className="column-content">
            <div style={{ background: "rgba(22, 22, 26, 0.5)", borderRadius: "18px", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "10px" }}>
              <SectionContent name="Inquiry Form" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "20px 0 0" }}>Global Offices</h2>
              <SectionContent name="Office Locations" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.kind === "careers") {
    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> GROW YOUR CAREER
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff", textShadow: "0 2px 20px rgba(0, 0, 0, 0.6)" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>

            <div className="timeline-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "19px", color: "#ffffff", margin: "0 0 12px" }}>Why Work With Us?</h3>
              <ul style={{ paddingLeft: "20px", color: "#cbd5e1", fontSize: "14px", lineHeight: "1.8", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Work on cutting-edge AI and agentic software.</li>
                <li>Flexible remote options & competitive compensation.</li>
                <li>Continuous learning stipend & high autonomy.</li>
                <li>Collaborative, engineering-first culture.</li>
              </ul>
            </div>
          </div>

          <div className="column-content">
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>Open Positions</h2>
              <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
                <article className="template-card" style={{ minHeight: "auto", padding: "28px" }}>
                  <div className="card-number">ENGINEERING</div>
                  <h3 style={{ margin: "12px 0 8px", fontSize: "20px" }}>Senior AI Platform Engineer</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8" }}>Remote / Full-time. Python, PyTorch, Kubernetes, Vector Databases.</p>
                </article>
                <article className="template-card" style={{ minHeight: "auto", padding: "28px" }}>
                  <div className="card-number">ENGINEERING</div>
                  <h3 style={{ margin: "12px 0 8px", fontSize: "20px" }}>Full Stack Developer (Next.js & Node)</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8" }}>Remote / Full-time. React, TypeScript, serverless backend, GraphQL.</p>
                </article>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "20px 0 16px" }}>Submit Application</h2>
              <SectionContent name="Apply Form" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.kind === "about") {
    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> ABOUT OUR COMPANY
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>Our Growth & Impact</h2>
            <SectionContent name="Our Impact" />

            <div style={{ marginTop: "20px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>Core Expertise</h2>
              <CompanyIntroCards />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Section name="Meet Our Leadership" index={1}>
            <SectionContent name="Leadership Team" />
          </Section>
        </div>
      </div>
    );
  }

  if (data.kind === "team") {
    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> MEET THE TEAM
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>Leadership & Experts</h2>
            <SectionContent name="Leadership Team" />
          </div>
        </div>
      </div>
    );
  }

  if (data.kind === "service") {
    const isDetail = serviceDetailList.includes(data.slug);

    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> {isDetail ? "SERVICE DETAILS" : "CAPABILITIES & SERVICES"}
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>

            <div className="timeline-card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "18px", color: "#ffffff", margin: "0 0 12px" }}>Technologies Used</h3>
              <SectionContent name="Technology Stack" />
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>{isDetail ? "Core Features" : "Service Offerings"}</h2>
            <SectionContent name="Our Services" />
          </div>
        </div>
      </div>
    );
  }

  if (data.kind === "product") {
    const isDetail = productDetailList.includes(data.slug);

    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> {isDetail ? "PRODUCT DETAILS" : "PROPRIETARY TECHNOLOGY"}
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>{isDetail ? "Capabilities" : "Product Suite"}</h2>
            <SectionContent name="Featured Products" />
          </div>
        </div>
      </div>
    );
  }

  if (data.kind === "industry") {
    return (
      <div className="page-wrap">
        <div className="split-layout">
          <div className="sticky-column column-content">
            <div>
              <p className="kicker">
                <Sparkles size={13} /> TAILORED SOLUTIONS
              </p>
              <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "12px 0 24px", color: "#ffffff" }}>
                {data.title}
              </h1>
              <p className="hero-copy" style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7, borderLeft: "3px solid var(--electric)", paddingLeft: "18px" }}>
                {data.description}
              </p>
            </div>
          </div>

          <div className="column-content">
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px" }}>Industry Focus</h2>
            <SectionContent name="Industries We Serve" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrap">
      <section className="page-hero">
        <div>
          <p className="kicker">
            <Sparkles size={13} /> INTELLIGENT SOFTWARE & AI PLATFORMS
          </p>
          <h1>
            {home ? (
              <>
                Build AI That Works.
                <br />
                Scale Businesses That Last.
              </>
            ) : (
              data.title
            )}
          </h1>
          <p className="hero-copy">
            {home
              ? "We design intelligent software, AI automation, and scalable digital products that transform ambitious ideas into real-world solutions."
              : data.description}
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-button">
              Start Your Project <ArrowUpRight size={16} />
            </Link>
            <Link href="/portfolio" className="secondary-button">
              {home ? "Explore Our Work" : "Book a Consultation"} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="signal-card">
          <div className="signal-card-header">
            <div className="signal-pulse" />
            <span>LIVE SYSTEM ARCHITECTURE</span>
          </div>
          <b>Real-Time AI Workflow Visualization</b>
          <small>Live visualization of intelligent systems powering modern enterprise workflows with 99.99% reliability.</small>
        </div>
      </section>

      {data.sections.map((section, index) => {
        if (section === "Ready to Build Something Extraordinary?" || section === "Contact CTA" || section === "CTA") {
          return (
            <div id={`section-${index}`} key={section}>
              <section className="contact-band">
                <Quote size={28} style={{ color: "var(--electric)" }} />
                <h2>Let's Build the Future Together</h2>
                <p>Whether you're launching a startup, modernizing your business, or building the next AI-powered platform, SkillYug Technologies is ready to help.</p>
                <div style={{ display: "flex", gap: "14px", marginTop: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="primary-button">
                    Start Your Project <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/contact" className="secondary-button">
                    Book a Consultation <ArrowUpRight size={16} />
                  </Link>
                </div>
              </section>
            </div>
          );
        }

        return (
          <div id={`section-${index}`} key={section}>
            <Section name={section} index={index}>
              <SectionContent name={section} />
            </Section>
          </div>
        );
      })}
    </div>
  );
}
