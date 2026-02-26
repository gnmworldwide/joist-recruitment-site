import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building2, Briefcase, Users, ShieldCheck, Target, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <PageLayout 
      title="Precision Recruitment for the Built Environment"
      description="Boutique specialist UK construction recruiter powered by structured, tech-enabled sourcing systems."
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Construction background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Precision Recruitment for the <span className="text-primary block">Built Environment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Quantity Surveying leadership & broader construction capability. We connect tier-one talent with industry-leading firms through structured, tech-enabled sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/employers">
                <Button className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-none w-full sm:w-auto">
                  Hire Talent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/candidates">
                <Button variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/5 rounded-none w-full sm:w-auto bg-black/50 backdrop-blur-sm">
                  Submit CV
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Tech-Enabled Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Deep Market Insight</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Quality Over Volume</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Spotlight */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Core <span className="text-primary">Sectors</span>.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Specialist focus ensuring deep network penetration and rapid delivery of high-impact personnel.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-background border border-white/5 group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Quantity Surveying</h3>
              <p className="text-muted-foreground mb-6">Our primary vertical. From Project QS to Commercial Directors, we map the entire UK market to deliver exceptional commercial talent to consultancies, developers, and contractors.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Senior & Managing QS</li>
                <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Cost Managers & Estimators</li>
                <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Commercial Directors</li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-white/5 group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Engineering & Construction</h3>
              <p className="text-muted-foreground mb-6">Secondary but robust capability across technical and operational delivery roles, supporting the full project lifecycle with rigorously vetted professionals.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Site & Project Managers</li>
                <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Mechanical & Electrical Engineers</li>
                <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> BIM Coordinators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Structured <span className="text-primary">Process</span>.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A systematic, data-driven approach to talent acquisition and career transition.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Employers */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-heading font-bold">For Employers</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { title: "Role Scoping", desc: "Deep dive into technical requirements, commercial objectives, and cultural fit." },
                  { title: "Structured Search", desc: "Utilization of tech-enabled mapping and exclusive networks to identify passive talent." },
                  { title: "Screened Shortlist", desc: "Delivery of fully vetted candidates with comprehensive profiles and market data." },
                  { title: "Placement & Follow-up", desc: "Offer management, onboarding support, and post-placement reviews." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-none bg-background border border-primary text-primary flex items-center justify-center font-bold z-10 shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidates */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-heading font-bold">For Candidates</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  { title: "Intake", desc: "Confidential consultation regarding your experience, aspirations, and market value." },
                  { title: "Matching", desc: "Targeted introduction to unadvertised roles and tier-one firms aligning with your goals." },
                  { title: "Prep", desc: "Rigorous interview preparation, project portfolio structuring, and strategic advice." },
                  { title: "Offer & Onboarding", desc: "Contract negotiation, resignation strategy, and seamless transition support." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-none bg-background border border-primary text-primary flex items-center justify-center font-bold z-10 shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <ShieldCheck className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-bold mb-3">Structured Screening</h3>
              <p className="text-muted-foreground text-sm">We don't forward CVs; we present validated professionals. Every candidate undergoes rigorous technical and commercial qualification.</p>
            </div>
            <div className="p-6">
              <TrendingUp className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-bold mb-3">Market Insight</h3>
              <p className="text-muted-foreground text-sm">Real-time data on compensation trends, project pipelines, and competitor movements within the UK Built Environment.</p>
            </div>
            <div className="p-6">
              <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-bold mb-3">Transparent Comms</h3>
              <p className="text-muted-foreground text-sm">Direct, honest feedback and absolute confidentiality. We build long-term partnerships, not transactional interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Placements Placeholder */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Recent <span className="text-primary">Placements</span>.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Senior QS - Top 10 Main Contractor", "Commercial Manager - Developer", "MEP Estimator - Consultancy", "Project Manager - Fit Out"].map((role, i) => (
              <div key={i} className="bg-black border border-white/10 p-6 flex items-center justify-center text-center hover:border-primary/50 transition-colors">
                <span className="text-sm font-medium text-white/80">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to secure your next asset?</h2>
          <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
            Whether you are building a team or advancing your career, partner with the specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/employers">
              <Button className="h-14 px-8 text-lg bg-black hover:bg-black/80 text-white rounded-none w-full sm:w-auto">
                Client Enquiry
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white/10 rounded-none w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}