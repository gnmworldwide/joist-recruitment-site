import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, Lightbulb } from "lucide-react";

const insights = [
  {
    title: "The skills gap slowing UK project delivery",
    excerpt:
      "Delays across major UK infrastructure and housing programmes are increasingly linked to a shortage of experienced commercial and technical professionals, not just materials or supply chain disruption. We look at where the pressure is sharpest and what it means for hiring strategy.",
    tag: "Market Insight",
    status: "coming-soon" as const,
  },
  {
    title: "Why built environment hiring needs more than CV matching",
    excerpt:
      "Volume-based recruitment misses what matters most in construction and engineering roles: technical judgement, commercial awareness, and the ability to operate under delivery pressure. The firms getting this right are thinking differently about how they assess candidates.",
    tag: "Recruitment Practice",
    status: "coming-soon" as const,
  },
  {
    title:
      "What international urban development conversations reveal about UK talent demand",
    excerpt:
      "Global built environment discussions at forums like the World Urban Forum consistently surface demand for UK-trained planning, design, and commercial expertise. What does this mean for UK professionals considering international moves, and for businesses seeking that experience domestically?",
    tag: "Global Perspective",
    status: "coming-soon" as const,
  },
];

export default function Insights() {
  return (
    <PageLayout
      title="Insights | Joist Recruitment"
      description="Hiring trends, project pressures, skills gaps, and built environment conversations shaping the UK market."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Joist <span className="text-primary">Insights</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hiring trends, project pressures, skills gaps, and built
            environment conversations shaping the UK market. Commercial and
            recruitment-focused — written for the people making decisions on
            both sides of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="p-8 bg-card border border-white/5 hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {insight.tag}
                </span>
              </div>
              <h2 className="text-lg font-heading font-bold mb-3 leading-snug">
                {insight.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {insight.excerpt}
              </p>
              <div className="mt-6">
                {insight.status === "coming-soon" ? (
                  <span className="text-xs text-muted-foreground/60 border border-white/10 px-3 py-1.5 inline-block">
                    Coming soon
                  </span>
                ) : (
                  <span className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 cursor-pointer">
                    Read insight <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-16 max-w-2xl">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Stay informed.
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Longer-form essays and commentary are published separately on
            LinkedIn and Substack. Follow Joist to stay across hiring trends
            and market developments in the UK built environment.
          </p>
          <a
            href="https://www.linkedin.com/company/joist-recruitment-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            Follow Joist on LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
