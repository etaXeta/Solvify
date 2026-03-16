import { Link } from "react-router";
import { ArrowRight, Code, Database, Zap, Layers, GitBranch, RefreshCw, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";
import { useState } from "react";
import { Section } from "../components/layout/Section";
import { services, expertise } from "../data/home";
import { SEO } from "../components/SEO";

export function HomePage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<number | null>(null);

  const serviceIcons = [
    <Layers className="text-accent" size={40} />,
    <GitBranch className="text-accent" size={40} />,
    <RefreshCw className="text-accent" size={40} />,
    <Code className="text-accent" size={40} />,
  ];

  const expertiseIcons = [
    <Database size={28} />,
    <Zap size={28} />,
    <Shield size={28} />,
    <TrendingUp size={28} />,
    <Layers size={28} />,
    <RefreshCw size={28} />,
  ];

  const servicesWithIcons = services.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  const expertiseWithIcons = expertise.map((e, i) => ({ ...e, icon: expertiseIcons[i] }));

  return (
    <div>
      <SEO />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-accent-foreground">🚀 Solutions that scale</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Build Powerful FinTech <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Expert backend development, seamless integrations, and system modernization for ambitious FinTech startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section spacing="lg">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CORE SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            What I Build
          </h2>
          <p className="text-muted-foreground">Click any service to learn more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesWithIcons.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent transition-all hover:shadow-lg text-left cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.shortDesc}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* FinTech Expertise */}
      <Section variant="muted" spacing="lg" className="bg-gradient-to-br from-secondary/50 to-background">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Deep FinTech Knowledge
          </h2>
          <p className="text-muted-foreground">Click any area to explore capabilities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expertiseWithIcons.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedExpertise(index)}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-all hover:shadow-md group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-3 text-accent group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <div className="text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View details
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your FinTech vision and create a roadmap to success.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all">
              Schedule Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                {services[selectedService].icon}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {services[selectedService].fullDesc}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-accent" size={20} />
                Key Benefits
              </h3>
              <div className="space-y-3">
                {services[selectedService].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-accent/5 rounded-lg p-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Problems Solved</h3>
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

            <div className="pt-4 border-t border-border">
              <Link to="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Discuss This Service
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}

      {/* Expertise Modal */}
      {selectedExpertise !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedExpertise(null)}
          title={expertise[selectedExpertise].title}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                {expertise[selectedExpertise].icon}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {expertise[selectedExpertise].description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise[selectedExpertise].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link to="/services">
                <Button variant="outline" className="w-full">
                  View All Services
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