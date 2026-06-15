import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  Users,
  ShieldCheck,
  Target,
  TrendingUp,
  HardHat,
  Cog,
  PenTool,
  ClipboardList,
  Lightbulb,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(211,84,0,0.12)]";

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
              Precision Recruitment for the{" "}
              <span className="text-primary block">Built Environment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              Joist helps UK construction, architecture, engineering, and
              development teams find reliable talent across permanent, contract,
              and project-based roles.
            </p>
            <p className="text-base text-muted-foreground/80 mb-3 max-w-2xl">
              Founder-led, sector-focused, and powered by structured sourcing
              systems.
            </p>
            <p className="text-sm text-muted-foreground/60 mb-10 max-w-2xl">
              UK-focused, with bespoke international support where UK expertise
              is required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/employers">
                <Button className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-none w-full sm:w-auto transition-transform duration-200 hover:-translate-y-px active:translate-y-0">
                  Hire Talent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/candidates">
                <Button
                  variant="outline"
                  className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/5 rounded-none w-full sm:w-auto bg-black/50 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
                >
                  Submit CV
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Founder-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Tech-Enabled Sourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Permanent &amp; Contract</span>
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
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Core <span className="text-primary">Sectors</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Deep sector knowledge across the disciplines that drive UK built
              environment delivery.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-7 h-7 text-primary" />,
                title: "Quantity Surveying & Commercial",
                desc: "Our primary vertical. From Project QS to Commercial Directors, we map the entire UK market for consultancies, developers, and contractors.",
                roles: ["Senior & Managing QS", "Cost Managers & Estimators", "Commercial Directors"],
                primary: true,
              },
              {
                icon: <HardHat className="w-7 h-7 text-primary" />,
                title: "Construction Delivery & Site Management",
                desc: "Operational leadership for projects under pressure. We source professionals who deliver site safety, programme adherence, and quality from groundworks to handover.",
                roles: ["Site Managers", "Contracts Managers", "Construction Directors"],
              },
              {
                icon: <PenTool className="w-7 h-7 text-primary" />,
                title: "Architecture & Design",
                desc: "From RIBA-chartered architects to BIM specialists and design managers. We support practices and in-house design teams at every stage of a project.",
                roles: ["Architects (Part II / III)", "Design Managers", "BIM Coordinators"],
              },
              {
                icon: <Building2 className="w-7 h-7 text-primary" />,
                title: "Engineering & Technical",
                desc: "Structural, civil, and multi-disciplinary engineering capability supporting the full project lifecycle with rigorously vetted professionals.",
                roles: ["Structural Engineers", "Civil Engineers", "Planners"],
              },
              {
                icon: <ClipboardList className="w-7 h-7 text-primary" />,
                title: "Project Management",
                desc: "Programme delivery, client-side management, and development management roles. We understand the commercial accountability these positions carry.",
                roles: ["Project Managers", "Programme Managers", "Development Managers"],
              },
              {
                icon: <Cog className="w-7 h-7 text-primary" />,
                title: "Building Services & MEP",
                desc: "Specialist technical sourcing for mechanical and electrical disciplines. Complex engineering talent for specialist sub-contractors and tier-one MEP divisions.",
                roles: ["MEP Project Managers", "M&E Estimators", "Building Services Engineers"],
              },
            ].map((sector, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className={`p-8 bg-background border group h-full ${
                    sector.primary
                      ? "border-primary/30 hover:border-primary"
                      : "border-white/5 hover:border-primary/50"
                  } ${CARD_HOVER}`}
                >
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {sector.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {sector.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center" delay={0.15}>
            <Link href="/sectors">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-none transition-transform duration-200 hover:-translate-y-px"
              >
                View all sectors
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Structured <span className="text-primary">Process</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic, data-driven approach to talent acquisition and
              career transition.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Employers */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-heading font-bold">
                    For Employers
                  </h3>
                </div>
              </FadeIn>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  {
                    title: "Role Scoping",
                    desc: "We clarify your requirements, timeline, and whether the role is permanent, contract, or project-based, then align commercial expectations before search begins.",
                  },
                  {
                    title: "Structured Search",
                    desc: "Tech-enabled market mapping and exclusive networks to identify passive talent across the UK built environment.",
                  },
                  {
                    title: "Screened Shortlist",
                    desc: "Delivery of fully vetted candidates with comprehensive profiles and relevant market data.",
                  },
                  {
                    title: "Placement & Follow-up",
                    desc: "Offer management, onboarding support, and post-placement reviews.",
                  },
                ].map((step, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="relative flex items-start gap-6">
                      <div className="w-10 h-10 rounded-none bg-background border border-primary text-primary flex items-center justify-center font-bold z-10 shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Candidates */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-8">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-heading font-bold">
                    For Candidates
                  </h3>
                </div>
              </FadeIn>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {[
                  {
                    title: "Intake",
                    desc: "Confidential discussion about your experience, aspirations, and market value: permanent, contract, or both.",
                  },
                  {
                    title: "Matching",
                    desc: "Targeted introduction to unadvertised roles and organisations that align with your goals.",
                  },
                  {
                    title: "Prep",
                    desc: "Interview preparation, CV structuring, and practical advice on positioning your experience.",
                  },
                  {
                    title: "Offer & Onboarding",
                    desc: "Contract negotiation, resignation support, and a smooth transition into your next role.",
                  },
                ].map((step, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="relative flex items-start gap-6">
                      <div className="w-10 h-10 rounded-none bg-background border border-primary text-primary flex items-center justify-center font-bold z-10 shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
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
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary mb-6" />,
                title: "Structured Screening",
                body: "We don't forward CVs; we present validated professionals. Every candidate undergoes rigorous technical and commercial qualification before introduction.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-primary mb-6" />,
                title: "Market Insight",
                body: "Real-time data on salary trends, project pipelines, and competitive movements within the UK built environment, useful for both hiring decisions and career choices.",
              },
              {
                icon: <CheckCircle2 className="w-10 h-10 text-primary mb-6" />,
                title: "Transparent Comms",
                body: "Direct, honest feedback and absolute confidentiality. We build long-term partnerships, not transactional interactions.",
              },
            ].map((d, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6">
                  {d.icon}
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{d.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Joist <span className="text-primary">Insights</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Hiring trends, project pressures, skills gaps, and built
              environment conversations shaping the UK market.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The skills gap slowing UK project delivery",
                excerpt:
                  "Delays across major UK infrastructure and housing programmes are increasingly linked to a shortage of experienced commercial and technical professionals, not just materials.",
              },
              {
                title:
                  "Why built environment hiring needs more than CV matching",
                excerpt:
                  "Volume-based recruitment misses what matters most in construction and engineering roles: technical judgement, commercial awareness, and the ability to operate under delivery pressure.",
              },
              {
                title:
                  "What international urban development conversations reveal about UK talent demand",
                excerpt:
                  "Global built environment discussions at forums like the World Urban Forum consistently surface demand for UK-trained planning, design, and commercial expertise.",
              },
            ].map((insight, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`p-8 bg-card border border-white/5 hover:border-primary/30 flex flex-col h-full ${CARD_HOVER}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      Insight
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3 leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {insight.excerpt}
                  </p>
                  <div className="mt-6">
                    <Link href="/insights">
                      <span className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                        Read insight <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center" delay={0.15}>
            <Link href="/insights">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-none transition-transform duration-200 hover:-translate-y-px"
              >
                View all insights
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/*
      Recent Placements section intentionally commented out.
      Reinstate only when Joist Recruitment has real completed placements to show.

      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">
            Recent <span className="text-primary">Placements</span>.
          </h2>
          ...
        </div>
      </section>
      */}

      {/* CTA Banner */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <FadeIn className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to secure your next hire?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
            Whether you are building a team or advancing your career, speak to
            the specialists.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/employers">
              <Button className="h-14 px-8 text-lg bg-black hover:bg-black/80 text-white rounded-none w-full sm:w-auto transition-transform duration-200 hover:-translate-y-px active:translate-y-0">
                Send a Hiring Brief
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="h-14 px-8 text-lg border-white text-white hover:bg-white/10 rounded-none w-full sm:w-auto transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageLayout>
  );
}
