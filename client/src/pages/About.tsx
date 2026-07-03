import PageLayout from "@/components/layout/PageLayout";
import { FadeIn } from "@/components/ui/FadeIn";
import { Linkedin } from "lucide-react";
import founderPhoto from "@/assets/guy-nkona-headshot.jpg";

export default function About() {
  return (
    <PageLayout
      title="About Us | Joist Recruitment"
      description="Boutique, founder-led recruitment agency delivering highly structured search solutions across the UK built environment sector."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-5">
              About Joist
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Precision over <span className="text-primary">Volume</span>.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Joist was founded by{" "}
              <strong className="text-white">Guy Nkona</strong>, who comes to
              recruitment from inside the built environment rather than from a
              sales desk. His background is in architecture, urban development,
              and housing, and he writes on the forces shaping UK construction:
              skills shortages, delivery pressure, and where the industry finds
              its next generation of talent.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That is the point of Joist. Built environment hiring is too often
              run by generalist recruiters matching keywords on a CV to keywords
              in a job description. Joist was built to do the opposite: to
              understand the actual work, the commercial pressure, and the
              difference between someone who lists the right projects and someone
              who can deliver them. Founder-led, sector-focused, and deliberately
              boutique.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 bg-card/50 translate-x-4 translate-y-4" />
            <div className="relative z-10">
              <img
                src={founderPhoto}
                alt="Guy Nkona, founder of Joist Recruitment"
                className="w-full h-[500px] object-cover object-[center_15%] border border-white/5"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-semibold">Guy Nkona</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-muted-foreground">
                    Founder, Joist Recruitment
                  </p>
                  <a
                    href="https://www.linkedin.com/in/guy-nkona-888a84165"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Guy Nkona on LinkedIn"
                    className="p-1.5 border border-white/20 hover:border-primary rounded-none transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white/70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Mission-Driven",
              body: "To raise the standard of recruitment within the built environment by providing transparent, accurate, and genuinely professional representation to both clients and candidates. Less friction. More rigour.",
            },
            {
              title: "Structural Focus",
              body: "We do not rely on job boards. We use systematic market mapping, competitor analysis, and targeted outreach to find professionals who are not actively looking but are open to the right opportunity. The search is structured, not speculative.",
            },
            {
              title: "Market Presence",
              body: "UK-focused, with bespoke international support where UK-based built environment expertise is required. Our primary operational footprint is the UK market; international mandates are accepted selectively, for strategic partners with specific requirements.",
            },
          ].map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-t-2 border-primary pt-6">
                <h3 className="text-xl font-heading font-bold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
