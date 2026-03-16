import { techIcons } from "../constants/tech-icons";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Code, GitBranch, RefreshCw, Layers, Zap, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";
import { useState } from "react";
import { PageHeader } from "../components/layout/PageHeader";
import { Section } from "../components/layout/Section";
import { services } from "../data/home";
import { SEO } from "../components/SEO";

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const serviceIcons = [
    <Code className="text-accent" size={48} />,
    <GitBranch className="text-accent" size={48} />,
    <RefreshCw className="text-accent" size={48} />,
    <Layers className="text-accent" size={48} />,
  ];

  const servicesWithIcons = services.map((s, i) => ({ ...s, icon: serviceIcons[i] }));

  return (
    <div>
      <SEO 
        title="Services" 
        description="Explore our range of FinTech development services including backend engineering, API integrations, and legacy system modernization."
        canonical="/services"
      />
      {/* Hero Section */}
      <PageHeader
        title="FinTech Solutions That Scale"
        description="Comprehensive development services designed to solve critical challenges and accelerate growth."
      >
        <p className="text-muted-foreground">Click any service to explore details</p>
      </PageHeader>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesWithIcons.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className="group text-left bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all hover:shadow-xl relative overflow-hidden flex flex-col h-full cursor-pointer"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-1">
                    {service.title}
                  </h2>
                  <p className="text-sm text-accent font-medium">{service.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Solves Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.solves.slice(0, 3).map((problem, idx) => (
                  <span
                    key={idx}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {problem}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto flex items-center gap-2 text-accent font-medium">
                View full details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Process Preview */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            A Proven Process
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            From discovery to deployment, every project follows a structured approach designed for success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Discovery", "Planning", "Development", "Testing", "Launch"].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {idx + 1}
                  </div>
                  <div className="font-semibold text-foreground text-sm">{step}</div>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-accent/30" size={20} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/process">
              <Button size="lg" variant="outline" className="group">
                View Full Process
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Let's Build Your Solution
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your FinTech platform? Schedule a consultation to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                {serviceIcons[selectedService]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{services[selectedService].title}</h3>
                <p className="text-sm text-accent">{services[selectedService].subtitle}</p>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-muted-foreground leading-relaxed">
              {services[selectedService].fullDesc}
            </p>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-accent" size={20} />
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services[selectedService].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-accent/5 rounded-lg p-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Zap className="text-accent" size={20} />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {services[selectedService].technologies?.map((tech, idx) => {
                  const techKey = tech.toLowerCase().replace(/[\s\.]/g, '');
                  const icon = techIcons[techKey];
                  
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-accent/5 border border-accent/10 px-3 py-2 rounded-lg"
                    >
                      {icon && (
                        <div 
                          dangerouslySetInnerHTML={{ __html: icon.svg }}
                          style={{ width: 18, height: 18 }}
                          className="flex-shrink-0"
                        />
                      )}
                      <span className="text-sm font-medium text-foreground">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Problems Solved */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Shield className="text-accent" size={20} />
                Problems Solved
              </h3>
              <div className="flex flex-wrap gap-2">
                {services[selectedService].solves.map((problem, idx) => (
                  <span
                    key={idx}
                    className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {problem}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border flex gap-3">
              <Link to="/contact" className="flex-1">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Discuss This Service
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/case-studies" className="flex-1">
                <Button variant="outline" className="w-full">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}