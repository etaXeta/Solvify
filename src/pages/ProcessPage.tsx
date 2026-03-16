import { Link } from "react-router";
import { ArrowRight, Search, FileText, Code2, TestTube, Rocket } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageHeader } from "../components/layout/PageHeader";
import { Section } from "../components/layout/Section";
import { SEO } from "../components/SEO";

export function ProcessPage() {
  const processSteps = [
    {
      number: "01",
      icon: <Search className="text-accent" size={40} />,
      title: "Discovery & Strategy",
      headline: "Understanding Your Goals & Challenges",
      description:
        "We begin with a thorough discovery phase. We'll have an in-depth consultation to understand your specific FinTech vision, business objectives, target audience, and any existing pain points (e.g., integration issues, outdated systems, scalability needs). This stage is crucial for defining project scope and laying a solid foundation.",
      outcome: "A clear understanding of your project's requirements, goals, and success metrics.",
    },
    {
      number: "02",
      icon: <FileText className="text-accent" size={40} />,
      title: "Planning & Architecture",
      headline: "Designing Your Future-Proof Solution",
      description:
        "Based on the discovery phase, I'll develop a detailed technical roadmap. This includes selecting the right technologies (Java, Python, Node.js, etc.), architecting a scalable and secure system design, planning API integrations, and defining the project timeline and deliverables. For FinTech, this stage includes ensuring all architectural decisions align with security and compliance best practices.",
      outcome: "A comprehensive project plan and technical architecture ready for development.",
    },
    {
      number: "03",
      icon: <Code2 className="text-accent" size={40} />,
      title: "Expert Development & Integration",
      headline: "Building Robust & Seamless Systems",
      description:
        "This is where your solution comes to life. I'll implement the planned architecture, focusing on writing clean, efficient, and maintainable code. Whether it's custom backend development, API integrations, or full-stack features, I prioritize delivering high-quality, secure, and scalable components. I'll keep you updated regularly on progress and seek feedback.",
      outcome: "High-quality, functional software components and seamless integrations built to your specifications.",
    },
    {
      number: "04",
      icon: <TestTube className="text-accent" size={40} />,
      title: "Rigorous Testing & Quality Assurance",
      headline: "Ensuring Performance, Security, & Reliability",
      description:
        "Before deployment, thorough testing is paramount, especially in FinTech. I conduct comprehensive testing, including functional testing, performance testing, security vulnerability checks, and integration testing, to ensure the solution meets all requirements and operates flawlessly.",
      outcome: "A thoroughly tested, secure, and reliable solution ready for deployment.",
    },
    {
      number: "05",
      icon: <Rocket className="text-accent" size={40} />,
      title: "Deployment & Launch Support",
      headline: "Taking Your Solution Live",
      description:
        "I'll manage the deployment process to ensure a smooth transition to your live environment. Whether it's a new feature release, a system modernization, or a full platform launch, I aim for a seamless rollout. Post-launch support and monitoring are also available to ensure everything operates as expected.",
      outcome: "A successfully deployed solution and a stable operational environment.",
    },
  ];

  return (
    <div>
      <SEO 
        title="Our Process" 
        description="Learn about our structured approach to delivering exceptional FinTech solutions, from discovery and planning to development and launch."
        canonical="/process"
      />
      {/* Hero Section */}
      <PageHeader
        title="How I Bring Your Vision to Life"
        description="A structured, transparent process designed to deliver exceptional FinTech solutions efficiently. Here's how we'll work together."
      />

      {/* Process Steps */}
      <Section containerVariant="narrow">
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-24 bg-accent/30"></div>
              )}

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Icon and Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="bg-accent/10 rounded-full p-6 mb-4">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-accent/20">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h2>
                  <h3 className="text-xl text-accent mb-4">{step.headline}</h3>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">
                      Outcome:
                    </p>
                    <p className="text-muted-foreground">{step.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why This Process Works */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why This Process Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach that ensures quality, transparency, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Clear Communication
            </h3>
            <p className="text-muted-foreground">
              You'll always know what's happening, what's next, and why decisions are made.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Proven Results
            </h3>
            <p className="text-muted-foreground">
              This systematic approach has delivered success for numerous clients across industries.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Flexibility
            </h3>
            <p className="text-muted-foreground">
              While the framework is consistent, each step is tailored to your unique needs.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            My process is designed for maximum transparency and client success. I believe in clear communication, collaborative problem-solving, and delivering the results your FinTech business needs.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Let's begin with a discovery call to understand your needs and map out the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Your Discovery Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                Explore My Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}