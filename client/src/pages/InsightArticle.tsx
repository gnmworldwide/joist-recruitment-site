import { useParams, Link } from "wouter";
import PageLayout from "@/components/layout/PageLayout";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { insights } from "@/data/insights";
import NotFound from "@/pages/not-found";

export default function InsightArticle() {
  const params = useParams<{ slug: string }>();
  const insight = insights.find((i) => i.slug === params.slug);

  if (!insight) return <NotFound />;

  const currentIndex = insights.indexOf(insight);
  const prev = insights[currentIndex - 1] ?? null;
  const next = insights[currentIndex + 1] ?? null;

  return (
    <PageLayout
      title={`${insight.title} | Joist Insights`}
      description={insight.excerpt}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Back nav */}
        <FadeIn className="mb-12">
          <Link href="/insights">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </span>
          </Link>
        </FadeIn>

        {/* Article header */}
        <FadeIn className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary font-medium uppercase tracking-wider">
              {insight.tag}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
            {insight.title}
          </h1>
        </FadeIn>

        {/* Article body */}
        <FadeIn className="max-w-3xl" delay={0.1}>
          <div className="space-y-6 border-t border-white/10 pt-10">
            {insight.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Source essay (Substack) */}
        {insight.source && (
          <FadeIn className="max-w-3xl mt-16 pt-10 border-t border-white/10" delay={0.12}>
            <p className="text-sm text-muted-foreground mb-4">
              This insight draws on{" "}
              <span className="text-white font-medium">
                {insight.source.essayTitle}
              </span>
              , published in The Blueprint.
            </p>
            <a
              href={insight.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Read the full essay <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        )}

        {/* CTA */}
        <FadeIn className="max-w-3xl mt-16 pt-10 border-t border-white/10" delay={0.15}>
          <p className="text-sm text-muted-foreground mb-6">
            If this raises questions about your hiring approach or candidate
            pipeline, we're happy to discuss.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/employers">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-11 px-6 transition-transform duration-200 hover:-translate-y-px">
                Send a Hiring Brief
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-none h-11 px-6 transition-transform duration-200 hover:-translate-y-px"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Prev / Next nav */}
        {(prev || next) && (
          <FadeIn className="max-w-3xl mt-20 pt-10 border-t border-white/10" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              {prev ? (
                <Link href={`/insights/${prev.slug}`}>
                  <div className="group flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Previous
                    </span>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowLeft className="w-3 h-3" />
                      {prev.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {next && (
                <Link href={`/insights/${next.slug}`}>
                  <div className="group flex flex-col gap-1 sm:text-right">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Next
                    </span>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-2 sm:justify-end">
                      {next.title}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </PageLayout>
  );
}
