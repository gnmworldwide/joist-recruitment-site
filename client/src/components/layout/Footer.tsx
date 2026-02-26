import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-primary rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-black -rotate-45" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Joist<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Precision Recruitment for the Built Environment. Specialist UK construction recruiter powered by structured, tech-enabled sourcing.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Home</Link>
              <Link href="/employers" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Employers</Link>
              <Link href="/candidates" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Candidates</Link>
              <Link href="/sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Sectors</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">About</Link>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Terms of Service</Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:hello@joistrecruitment.co.uk" className="hover:text-primary transition-colors">
                  hello@joistrecruitment.co.uk
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="tel:+447563581741" className="hover:text-primary transition-colors">
                  +44 7563 581741
                </a>
              </li>
              <li className="text-sm text-muted-foreground pt-4">
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Joist Recruitment. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
              in
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
              tw
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}