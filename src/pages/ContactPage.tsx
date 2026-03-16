import { useState } from "react";
import { Mail, Linkedin, Calendar, CheckCircle2, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { PageHeader } from "../components/layout/PageHeader";
import { Section } from "../components/layout/Section";
import { SITE_CONFIG } from "../constants/site";
import { SEO } from "../components/SEO";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  return (
    <div>
      <SEO 
        title="Contact Us" 
        description="Ready to build your FinTech future? Contact Solvify today to schedule a free consultation and discuss your project goals."
        canonical="/contact"
      />
      {/* Hero Section */}
      <PageHeader
        title="Let's Build Your FinTech Future"
        description="Ready to elevate your FinTech startup? Let's discuss your project and explore how we can build something exceptional together."
      />

      {/* Primary CTA - Book Consultation */}
      <Section containerVariant="narrow">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-lg p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
              <Calendar className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Schedule Your Free Discovery Call
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discuss your project needs, challenges, and vision directly with me. This is a no-obligation call to explore how my expertise can benefit your FinTech startup.
            </p>
            
            {/* Calendly Placeholder */}
            <div className="bg-white border border-border rounded-lg p-8 mb-6">
              <div className="text-center text-muted-foreground mb-4">
                <p className="font-medium mb-2">📅 SimplyMeet.Me </p>
                <p className="text-sm"><iframe src="https://app.simplymeet.me/pritanyafritz/pritanyafritz-30-1773441252647?is_widget=1&view=compact&specific-meeting-type=1" style={{width:'100%', height:'650px'}} frameBorder="0" scrolling="yes"></iframe></p>
              </div>
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-auto"
                size="lg"
              >
                Schedule a Free Consultation
              </Button>
            </div>

            <div className="text-left bg-white rounded-lg p-6 max-w-xl mx-auto">
              <p className="font-semibold text-foreground mb-3">What to Expect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <span>We'll discuss your goals and business objectives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <span>I'll ask about your challenges and pain points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <span>We'll determine the best path forward together</span>
                </li>
              </ul>
            </div>
          </div>
      </Section>

      {/* Contact Form Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Have a Quick Question or Prefer to Email?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If a call isn't the right fit right now, or if you have a specific question, feel free to send a message via the form below.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            {isSubmitted ? (
              <div className="bg-accent/10 border-2 border-accent rounded-lg p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-lg text-muted-foreground">
                  Thanks for connecting. I've received your message and will respond as promptly as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Your company or startup"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service of Interest *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={handleServiceChange}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="backend">Custom Backend Development</SelectItem>
                      <SelectItem value="api">API Integration & Development</SelectItem>
                      <SelectItem value="modernization">FinTech System Modernization</SelectItem>
                      <SelectItem value="fullstack">Full-Stack Development</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    rows={6}
                    placeholder="Tell me about your project, challenges, and goals..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Direct Contact Information */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Connect With Me Directly
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                <Mail className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                {SITE_CONFIG.email}
              </p>
            </a>

            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">
                Connect on LinkedIn
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              I aim to respond to all inquiries within <span className="font-semibold text-foreground">24-48 business hours</span>. I look forward to exploring how we can build your next successful FinTech platform.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}