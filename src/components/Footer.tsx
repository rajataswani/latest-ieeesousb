
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Twitter } from "lucide-react";
import { SocialLink } from "@/types";

const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/ieee_silveroakuni/",
    icon: Instagram
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/IEEE_SilverOak",
    icon: Twitter
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/IEEESilverOakUni",
    icon: Facebook
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/ieee-silveroakuni/",
    icon: Linkedin
  }
];

export default function Footer() {
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              {/* IMPORTANT: Replace this with dark mode logo when available */}
              <img
                src="http://ieee.socet.edu.in/wp-content/uploads/2025/03/ieee_sou_sb_logo-removebg-preview.png"
                alt="IEEE SOU SB Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Silver Oak University IEEE SB aims to give an interactive platform for students to 
              develop professional and technical abilities. Since the start, it is successfully 
              organizing various events with well-defined subjects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/ieee-sou-sb" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">+91 07966046304</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:aswanirajat@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  aswanirajat@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  352,353 A, Nr. Bhavik Publications, Opp. Bhagwat Vidyapith, S.G.Highway,
                  Ahmedabad, Gujarat - 382481
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
                <a
                  href="https://www.threads.net/@ieee_silveroakuni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Threads"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-5.687-1.569-6.446-4.753C5.141 16.5 4.69 13.148 4.5 11.486c0-.24.219-.435.47-.435l.27.015c3.55.327 7.03-1.389 8.386-4.193.626-1.293.932-2.703.905-4.128C14.254 1.363 15.652 0 17.02 0h.942c1.127 0 2.152.747 2.48 1.86.473 1.602.454 3.214-.063 4.593-.81 2.146-2.107 3.932-3.692 5.235 0 0 .662 3.537 2.608 4.157.738.245 1.079 1.088.737 1.809-.334.7-1.14.985-1.826.638-2.878-1.43-3.115-5.251-3.328-7.447.031-.106.05-.216.05-.336 0-.643-.526-1.17-1.163-1.17-.638 0-1.162.527-1.162 1.17 0 .018 0 .035.002.054-.028 0-.028 9.95 5.872 9.95.168 0 .342-.012.512-.03.626-.073 1.21.372 1.282 1.01.072.65-.347 1.231-.97 1.303-.273.034-.565.054-.86.054z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; Copyright Silver Oak University IEEE SB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
