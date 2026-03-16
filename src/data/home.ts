export interface Service {
  id: number;
  title: string;
  subtitle?: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  solves: string[];
  technologies?: string[];
}

export const services: Omit<Service, 'icon'>[] = [
  {
    id: 1,
    title: "Custom Backend Development",
    subtitle: "Java, Python, Node.js",
    shortDesc: "Build powerful, scalable backend systems tailored to your FinTech vision with security and performance at the core.",
    fullDesc: "Design and build bespoke backend systems tailored to your unique FinTech vision. Leveraging robust languages like Java, Python, and Node.js, we create the foundation for your application to handle complex financial transactions, scale rapidly as you grow, and maintain the highest standards of security and reliability. Your outcome is a powerful, efficient backend that supports your business objectives and ensures seamless operation.",
    benefits: [
      "High-performance architecture optimized for financial transactions",
      "Security-first design with encryption and compliance built-in",
      "Scalable infrastructure that grows with your business",
      "Modern tech stack (Java, Spring Boot, Python, Node.js)",
      "Microservices architecture for flexibility",
      "Database optimization for fast queries",
    ],
    technologies: ["Java", "Python", "Node.js", "Spring Boot", "PostgreSQL", "MongoDB", "Redis"],
    solves: ["Outdated systems", "Slow processing", "Security gaps", "Integration issues"],
  },
  {
    id: 2,
    title: "API Integration & Development",
    subtitle: "Seamless Connectivity",
    shortDesc: "Connect your platform with payment gateways, banking APIs, and third-party services for a unified ecosystem.",
    fullDesc: "In today's interconnected financial landscape, smooth integration is key. We specialize in designing, developing, and implementing robust APIs that enable your FinTech platform to communicate flawlessly with third-party services, payment gateways, legacy systems, and internal databases. The outcome is a connected, efficient ecosystem that improves data flow, enhances operational efficiency, and expands your service capabilities.",
    benefits: [
      "RESTful & GraphQL API development",
      "Third-party integrations (Stripe, Plaid, banking APIs)",
      "Real-time data synchronization",
      "Comprehensive error handling and monitoring",
      "API documentation and versioning",
      "Webhook implementation for real-time updates",
    ],
    technologies: ["REST", "GraphQL", "Stripe", "Plaid", "OAuth 2.0", "WebSockets"],
    solves: ["Integration complexity", "Data silos", "Manual processes", "Limited features"],
  },
  {
    id: 3,
    title: "System Modernization",
    subtitle: "Migrate, Refactor, Innovate",
    shortDesc: "Transform legacy systems into modern, agile platforms with minimal disruption to your operations.",
    fullDesc: "Is your current FinTech infrastructure holding you back? We help you transition from outdated, cumbersome systems to modern, agile, and secure platforms. Whether through strategic refactoring, cloud migration, or rebuilding key components, we minimize disruption and maximize your system's potential. The outcome is a modernized, future-ready infrastructure that boosts performance, enhances security, and enables faster innovation.",
    benefits: [
      "Cloud-native architecture (AWS, Azure, GCP)",
      "Improved performance and reliability",
      "Modern security and compliance standards",
      "Better maintainability and faster iteration",
      "Microservices migration strategy",
      "Zero-downtime deployment",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    solves: ["Legacy tech debt", "Poor performance", "Compliance risks", "Innovation barriers"],
  },
  {
    id: 4,
    title: "Full-Stack Development",
    subtitle: "End-to-End Solutions",
    shortDesc: "Complete platform development from intuitive frontends to robust backends for cohesive financial products.",
    fullDesc: "We provide comprehensive full-stack development services to bring your financial platform vision to life. From crafting intuitive user interfaces that delight your customers to building powerful, secure backend systems that handle complex transactions, we manage the entire development lifecycle. The outcome is a cohesive, high-performing, and user-centric financial product ready to capture your market.",
    benefits: [
      "Seamless UX/UI design and implementation",
      "Unified full-stack architecture",
      "Complete project ownership from concept to launch",
      "Faster time-to-market with coordinated development",
      "Responsive design for all devices",
      "Progressive Web App capabilities",
    ],
    technologies: ["React", "Vue", "Angular", "TypeScript", "Node.js", "Next.js"],
    solves: ["Fragmented experience", "Coordination overhead", "Quality inconsistency", "Delayed launches"],
  },
];

export interface Expertise {
  id: number;
  title: string;
  description: string;
  features: string[];
}

export const expertise: Omit<Expertise, 'icon'>[] = [
  {
    id: 1,
    title: "Payment Processing",
    description: "Secure payment gateways, transaction processing, and PCI compliance implementation. Expert integration with Stripe, Square, and custom payment solutions for seamless financial operations.",
    features: ["Payment gateway integration", "PCI DSS compliance", "Transaction monitoring", "Fraud detection"],
  },
  {
    id: 2,
    title: "Banking APIs",
    description: "Expert integration with Plaid, Stripe Connect, banking APIs, and financial data providers for real-time connectivity and account aggregation across institutions.",
    features: ["Plaid integration", "Open banking APIs", "Account aggregation", "Real-time balance updates"],
  },
  {
    id: 3,
    title: "Security & Compliance",
    description: "Built-in security best practices, data encryption, regulatory compliance (SOC 2, GDPR, CCPA), and comprehensive audit trail implementation for financial systems.",
    features: ["End-to-end encryption", "SOC 2 compliance", "GDPR/CCPA ready", "Audit logging"],
  },
  {
    id: 4,
    title: "Scalable Infrastructure",
    description: "Cloud-native architectures on AWS/Azure/GCP, microservices design, and database optimization for handling growing transaction volumes and user bases.",
    features: ["Cloud architecture", "Microservices design", "Auto-scaling", "Database optimization"],
  },
  {
    id: 5,
    title: "KYC/AML Solutions",
    description: "Identity verification, Know Your Customer processes, Anti-Money Laundering compliance workflows, and integration with verification providers.",
    features: ["Identity verification", "KYC workflows", "AML compliance", "Risk assessment"],
  },
  {
    id: 6,
    title: "Legacy Modernization",
    description: "Transform outdated financial systems into modern, API-driven platforms without disrupting existing operations. Strategic migration and refactoring expertise.",
    features: ["Legacy assessment", "Incremental migration", "API modernization", "Zero-downtime deployment"],
  },
];
