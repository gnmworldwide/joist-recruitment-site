import PageLayout from "@/components/layout/PageLayout";

export default function About() {
  return (
    <PageLayout
      title="About Us | Joist Recruitment"
      description="Boutique, founder-led recruitment agency delivering highly structured search solutions across the UK built environment sector."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Precision over <span className="text-primary">Volume</span>.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Joist is founded and led by{" "}
              <strong className="text-white">Guy Nkona Mukulayenge</strong>,
              whose background in architecture, urban development planning, and
              housing gives the business a practical understanding of how built
              environment teams operate. Joist was created to bring more
              structure, clarity, and sector awareness into recruitment across
              construction, architecture, engineering, and development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a founder-led, boutique specialist search firm operating
              within the UK built environment. We combine tech-enabled sourcing
              methodologies with deep, traditional networking to surface passive
              talent that job boards and volume agencies miss. Our approach is
              qualitative: we focus on fit, capability, and long-term value —
              not throughput.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 bg-card/50 translate-x-4 translate-y-4" />
            {/* TODO: replace with founder headshot (professional photo) */}
            <div
              className="relative z-10 w-full h-[500px] bg-card border border-white/10 flex flex-col items-center justify-center gap-4"
              role="img"
              aria-label="Guy Nkona Mukulayenge, founder of Joist Recruitment"
            >
              <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <span className="text-3xl font-heading font-bold text-primary">
                  GN
                </span>
              </div>
              <div className="text-center px-8">
                <p className="text-white font-semibold mb-1">
                  Guy Nkona Mukulayenge
                </p>
                <p className="text-sm text-muted-foreground">
                  Founder, Joist Recruitment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border-t-2 border-primary pt-6">
            <h3 className="text-xl font-heading font-bold mb-4">
              Mission-Driven
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To raise the standard of recruitment within the built environment
              by providing transparent, accurate, and genuinely professional
              representation to both clients and candidates. Less friction. More
              rigour.
            </p>
          </div>
          <div className="border-t-2 border-primary pt-6">
            <h3 className="text-xl font-heading font-bold mb-4">
              Structural Focus
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We do not rely on job boards. We use systematic market mapping,
              competitor analysis, and targeted outreach to find professionals
              who are not actively looking but are open to the right
              opportunity. The search is structured, not speculative.
            </p>
          </div>
          <div className="border-t-2 border-primary pt-6">
            <h3 className="text-xl font-heading font-bold mb-4">
              Market Presence
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              UK-focused, with bespoke international support where UK-based
              built environment expertise is required. Our primary operational
              footprint is the UK market; international mandates are accepted
              selectively, for strategic partners with specific requirements.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
