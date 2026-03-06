import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-lg font-heading font-bold">
              Joist <span className="text-primary">Recruitment</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Boutique construction recruitment specialists focused on Quantity Surveying, with coverage across engineering, MEP and site leadership roles.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/employers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Employers
                </a>
              </li>
              <li>
                <a href="/candidates" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Candidates
                </a>
              </li>
              <li>
                <a href="/sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sectors
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:hello@joistrecruitment.co.uk"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@joistrecruitment.co.uk
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+447563581741"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 7563 581741
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="LinkedIn (add link)"
                className="p-2 border border-white/10 hover:border-primary rounded-none transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram (add link)"
                className="p-2 border border-white/10 hover:border-primary rounded-none transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Joist Recruitment. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}