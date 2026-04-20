export type ContextFieldType = "text" | "select";

export interface ContactConfig {
  badge: string;
  heading: string;
  description: string;
  messagePlaceholder: string;
  contextLabel?: string;
  contextFieldType?: ContextFieldType;
  contextPlaceholder?: string;
  contextOptions?: string[];
}

export const contactConfigs: Record<string, ContactConfig> = {
  general: {
    badge: "Let's Talk",
    heading: "Start the\nConversation",
    description:
      "Tell us about your project and we'll get back to you within 24 hours with a clear plan of action.",
    messagePlaceholder:
      "What are you working on? Share any context — goals, timelines, challenges...",
  },
  "start-project": {
    badge: "New Project",
    heading: "Let's Build\nSomething Great",
    description:
      "Share your vision and we'll tell you how we can bring it to life — architecture, timeline, and the right team.",
    messagePlaceholder:
      "Describe your project — what problem it solves, who uses it, and what success looks like...",
    contextLabel: "Estimated Budget",
    contextFieldType: "select",
    contextOptions: [
      "< $25,000",
      "$25,000 – $50,000",
      "$50,000 – $100,000",
      "$100,000 – $250,000",
      "$250,000+",
      "Not sure yet",
    ],
  },
  "technical-call": {
    badge: "Technical Call",
    heading: "Talk to a\nSenior Engineer",
    description:
      "Discuss your architecture, infrastructure, or technical challenges directly with one of our senior engineers.",
    messagePlaceholder:
      "Describe the technical challenge or question you want to work through...",
    contextLabel: "Current Tech Stack",
    contextFieldType: "text",
    contextPlaceholder: "e.g. React, Node.js, PostgreSQL, AWS...",
  },
  "ai-strategy": {
    badge: "AI Strategy",
    heading: "Let's Fix Your\nAI Governance",
    description:
      "Our AI specialists will help you build the readiness, security, and compliance foundations for responsible AI adoption at scale.",
    messagePlaceholder:
      "Tell us about your current AI initiatives, compliance requirements, or governance gaps...",
    contextLabel: "Where Are You in Your AI Journey?",
    contextFieldType: "select",
    contextOptions: [
      "Just exploring AI",
      "Prototyping / POC stage",
      "Deploying in production",
      "Scaling AI across the org",
      "Dealing with compliance issues",
    ],
  },
  "staff-augmentation": {
    badge: "Staff Augmentation",
    heading: "Embed Expert\nEngineers",
    description:
      "Pre-vetted, senior engineers embedded directly into your team — on-demand and ready to ship from day one.",
    messagePlaceholder:
      "Tell us about your team, what you're building, and the gaps you need to fill...",
    contextLabel: "Skills / Roles Needed",
    contextFieldType: "text",
    contextPlaceholder: "e.g. React engineers, DevOps, ML engineers...",
  },
  "legacy-modernization": {
    badge: "Legacy Modernization",
    heading: "Modernize\nWithout Disruption",
    description:
      "Transform outdated systems into modern, cloud-native architectures without bringing your operations to a halt.",
    messagePlaceholder:
      "Describe your existing system, what's breaking, and what the modernized version should look like...",
    contextLabel: "Current Technology",
    contextFieldType: "text",
    contextPlaceholder: "e.g. .NET 4.5, Oracle DB, monolithic Rails app...",
  },
  "mobile-dev": {
    badge: "Mobile Development",
    heading: "Build a Mobile\nApp That Scales",
    description:
      "Native and cross-platform apps built for performance, usability, and growth across iOS and Android.",
    messagePlaceholder:
      "Describe the app concept, your target users, and any platform requirements...",
    contextLabel: "Target Platform",
    contextFieldType: "select",
    contextOptions: [
      "iOS only",
      "Android only",
      "Both (native)",
      "Cross-platform (React Native / Flutter)",
      "Not sure yet",
    ],
  },
  "cloud-devops": {
    badge: "Cloud & DevOps",
    heading: "Scale Your\nInfrastructure",
    description:
      "CI/CD pipelines, cloud migrations, and infrastructure automation that keep your systems resilient at scale.",
    messagePlaceholder:
      "Tell us about your current infrastructure, deployment workflow, and where the bottlenecks are...",
    contextLabel: "Current Cloud Provider",
    contextFieldType: "select",
    contextOptions: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Multi-cloud",
      "On-premise / bare metal",
      "Not yet on cloud",
    ],
  },
  "ai-ml": {
    badge: "AI & Machine Learning",
    heading: "Talk to an\nAI Engineer",
    description:
      "End-to-end ML pipelines, LLM integrations, and intelligent automation — built around your data and workflows.",
    messagePlaceholder:
      "Describe the problem you're trying to solve with AI/ML, your data availability, and current system context...",
    contextLabel: "Use Case",
    contextFieldType: "select",
    contextOptions: [
      "LLM / Chatbot integration",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation System",
      "Automation / Agents",
      "Other",
    ],
  },
  "custom-software": {
    badge: "Custom Software",
    heading: "Build\nProduction-Ready\nSoftware",
    description:
      "Purpose-built software designed around your goals, your users, and your business — from architecture to production.",
    messagePlaceholder:
      "Describe the software you need — what problem it solves, who uses it, and any technical constraints...",
    contextLabel: "Estimated Budget",
    contextFieldType: "select",
    contextOptions: [
      "< $25,000",
      "$25,000 – $50,000",
      "$50,000 – $100,000",
      "$100,000 – $250,000",
      "$250,000+",
      "Not sure yet",
    ],
  },
};

export function getContactConfig(type?: string): ContactConfig {
  if (type && contactConfigs[type]) return contactConfigs[type];
  return contactConfigs.general;
}
