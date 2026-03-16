import { Link } from "react-router";
import { ArrowRight, TrendingUp, Users, Zap, Target, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";
import { useState } from "react";
import atomLogo from '../assets/atom.svg';
import hsbcLogo from '../assets/hsbc.png'
import { SEO } from "../components/SEO";

export function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "SME Lending Automation",
      client: "FinTech Startup",
      industry: "SME Lending",
      icon: <img src ={atomLogo}
      alt = "Atom bank logo" width={500} height={500} style={{background: {white: "transparent"}}}/>,
      summary: "Transformed manual loan processing into intelligent automation, reducing approval time from 5 days to 24 hours.",
      context:
        "A fast-scaling FinTech startup providing lending solutions to small and medium enterprises (SMEs) needed to overcome operational bottlenecks that were severely limiting their growth trajectory and competitive positioning in a crowded market.",
      challenge:
        "Manual loan approval process had become their biggest growth inhibitor. Every application crawled through 15+ manual steps, taking 5 days to process. This wasn't just slowing them down—it was actively costing customers who went to faster competitors. The team was drowning in repetitive tasks, unable to focus on strategic growth. Manual processes created compliance nightmares with incomplete audit trails, putting them at regulatory risk.",
      solution:
        "Deploying Custom Backend Development and FinTech System Modernization expertise, I architected a complete workflow automation solution:\n\n• Strategic Process Reengineering: Deep-dive analysis of their 15-step workflow, identifying optimization opportunities while maintaining compliance\n\n• Enterprise-Grade Backend: Built robust services using Java and Spring Boot, integrating Flowable workflow engine\n\n• Compliance-First Design: Implemented comprehensive structured logging and real-time monitoring with complete audit trails\n\n• Collaborative Implementation: Worked with compliance, risk, and operations teams to exceed regulatory requirements",
      results: [
        {
          metric: "83% Faster",
          detail: "Processing time reduced from 5 days to 24 hours",
        },
        {
          metric: "15 Steps Automated",
          detail: "Eliminated manual bottlenecks, freeing staff for growth",
        },
        {
          metric: "100% Audit Coverage",
          detail: "Complete compliance trail for all decisions",
        },
        {
          metric: "10x Scalability",
          detail: "Infrastructure ready for massive growth",
        },
      ],
      tags: ["Backend Development", "Automation", "Compliance", "Workflow"],
    },
    {
      title: "Global Customer Onboarding",
      client: "HSBC FinTech Division",
      industry: "Enterprise Banking",
      icon: <img src ={hsbcLogo}
                 alt = "HSBC logo" width={200} height={200} style={{background: {white: "transparent"}}}/>,
      summary: "Modernized enterprise onboarding platform serving millions globally, reducing critical processes from 2 weeks to 2 days.",
      context:
        "A major financial institution's FinTech division required comprehensive modernization of their global customer onboarding platform—a mission-critical system serving millions of users across multiple continents and regulatory jurisdictions.",
      challenge:
        "The global onboarding platform was buckling under technical debt. Manual processes created inconsistent experiences across regions. Complex, fragile deployment cycles took weeks to ship critical features—competitors were moving faster. Backend inefficiencies caused performance issues frustrating customers and operations teams. They needed enterprise-grade modernization without disrupting ongoing operations.",
      solution:
        "Leveraging Full-Stack Development and System Modernization expertise, I drove comprehensive platform transformation:\n\n• Backend Performance Optimization: Developed critical backend functionality with scalable architectures handling massive global transaction volumes\n\n• Data Layer Modernization: Designed robust persistent data layer with optimized Hibernate entities\n\n• Quality Engineering: Led rigorous testing, debugging, and code reviews establishing best practices\n\n• DevOps Transformation: Automated deployment pipeline, replacing manual processes with reliable CI/CD workflows\n\n• Team Building: Mentored developers creating a culture of technical excellence",
      results: [
        {
          metric: "85% Time Reduction",
          detail: "Onboarding reduced from 2 weeks to 2 days",
        },
        {
          metric: "2x Deployments",
          detail: "Automated pipeline doubled deployment frequency",
        },
        {
          metric: "Enhanced UX",
          detail: "Major improvements in satisfaction and performance",
        },
        {
          metric: "Team Growth",
          detail: "Mentorship accelerated capability development",
        },
      ],
      tags: ["Full-Stack", "Enterprise", "DevOps", "Performance"],
    },
    {
      title: "Cross-Border Payment Platform",
      client: "International Payments Company",
      industry: "Cross-Border Payments",
      icon: <Zap size={32} />,
      summary: "Built seamless integration platform connecting multiple payment gateways, reducing transaction errors by 70%.",
      context:
        "An expanding FinTech platform specializing in cross-border payments needed to break through critical integration barriers that were preventing them from scaling their international operations and delivering the seamless global experience their customers demanded.",
      challenge:
        "The platform was being strangled by integration chaos—juggling multiple international payment gateways, various KYC/AML compliance providers, and internal risk management systems, none talking to each other properly. Operations teams were drowning in manual data reconciliation. Transaction errors were embarrassingly high. Payment processing took days for international transfers. They couldn't scale or provide the unified experience customers expected.",
      solution:
        "Applying API Integration & Development and Custom Backend Development expertise, I architected a comprehensive integration solution:\n\n• Integration Architecture: Exhaustive analysis of all payment gateways, compliance APIs, and internal systems\n\n• Robust API Development: Designed secure, scalable RESTful APIs enabling seamless data exchange across the payment ecosystem\n\n• Real-Time Validation: Implemented sophisticated validation and error handling catching issues before transaction failures\n\n• Cross-Functional Collaboration: Partnered with third-party providers and internal teams for flawless integration\n\n• Workflow Orchestration: Developed backend logic orchestrating complex payment workflows across multiple services",
      results: [
        {
          metric: "70% Fewer Errors",
          detail: "Real-time validation dramatically improved accuracy",
        },
        {
          metric: "60% Faster Processing",
          detail: "Reduced international transaction completion time",
        },
        {
          metric: "Unified Platform",
          detail: "Seamless integration across all payment providers",
        },
        {
          metric: "Global Scalability",
          detail: "Ready to expand to new markets effortlessly",
        },
      ],
      tags: ["API Integration", "Payments", "Global Scale", "Real-time"],
    },
  ];

  return (
    <div>
      <SEO 
        title="Case Studies" 
        description="See how Solvify has helped FinTech startups and enterprises automate lending, modernize onboarding, and scale cross-border payments."
        canonical="/case-studies"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">CASE STUDIES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Real Results, Real <span className="text-accent">Impact</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-4">
            See how I've helped FinTech companies transform challenges into competitive advantages.
          </p>
          <p className="text-muted-foreground">Click any case study to explore the full story</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setSelectedCase(index)}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all hover:shadow-xl text-left cursor-pointer"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6 text-accent group-hover:scale-110 transition-transform">
                  {study.icon}
                </div>

                {/* Title & Client */}
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-1">{study.client}</p>
                <p className="text-xs text-muted-foreground mb-4">{study.industry}</p>

                {/* Summary */}
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Key Results Preview */}
                <div className="space-y-2 mb-6">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0" size={16} />
                      <span className="text-sm font-medium text-foreground">{result.metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-accent font-medium">
                  Read full case study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can help transform your FinTech challenges into success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCase(null)}
          title={caseStudies[selectedCase].title}
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                {caseStudies[selectedCase].icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{caseStudies[selectedCase].client}</h3>
                <p className="text-sm text-muted-foreground">{caseStudies[selectedCase].industry}</p>
              </div>
            </div>

            {/* Context */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Context</h3>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudies[selectedCase].context}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudies[selectedCase].challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">The Solution</h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {caseStudies[selectedCase].solution}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="text-accent" size={20} />
                Results & Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies[selectedCase].results.map((result, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Technologies & Approaches</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudies[selectedCase].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Want similar results for your FinTech business?
              </p>
              <Link to="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Let's Discuss Your Project
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}