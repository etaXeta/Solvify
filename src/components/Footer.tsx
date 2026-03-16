import { Link } from "react-router";
import { Mail, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { SITE_CONFIG, NAV_LINKS } from "../constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.filter(link => link.path !== "/contact").map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {SITE_CONFIG.author}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
