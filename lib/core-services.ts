import {
  Bot,
  Brain,
  Building2,
  Cloud,
  Code2,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CoreService = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

export const coreServices: CoreService[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    description: "Autonomous workflows, document processing, and RPA at scale.",
    icon: Bot,
    tags: ["Workflows", "RPA", "Document AI"],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    description: "Multi-step reasoning agents with contextual decision making.",
    icon: Brain,
    tags: ["Copilots", "RAG", "Multi-agent"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software",
    description: "Enterprise platforms built for performance and security.",
    icon: Code2,
    tags: ["Enterprise", "APIs", "Integrations"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    description: "Multi-tenant cloud-native products from idea to launch.",
    icon: Layers,
    tags: ["Multi-tenant", "Billing", "Analytics"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Modern frameworks, serverless backends, responsive UI.",
    icon: Globe,
    tags: ["Next.js", "React", "Serverless"],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    description: "Native and cross-platform iOS & Android experiences.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Migration and auto-scaling on AWS, Azure, and GCP.",
    icon: Cloud,
    tags: ["AWS", "Kubernetes", "Serverless"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design systems and conversion-focused interfaces.",
    icon: Palette,
    tags: ["Design systems", "Prototyping", "Research"],
  },
  {
    slug: "devops",
    title: "DevOps",
    description: "CI/CD pipelines, IaC, and reliability engineering.",
    icon: GitBranch,
    tags: ["CI/CD", "IaC", "Monitoring"],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    description: "Mission-critical platforms with legacy integration.",
    icon: Building2,
    tags: ["Security", "Compliance", "Legacy"],
  },
];
