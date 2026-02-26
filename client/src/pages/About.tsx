import PageLayout from "@/components/layout/PageLayout";
import aboutImg from "@/assets/about-img.png";

export default function About() {
  return (
    <PageLayout 
      title="About Us | Joist Recruitment"
      description="Boutique, founder-led recruitment agency delivering highly structured search solutions across the UK construction sector."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Precision over <span className="text-primary">Volume</span>.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Joist Recruitment is a founder-led, boutique specialist search firm operating within the UK Built Environment. We were established on a simple premise: the construction recruitment market requires less transactional friction and more rigorous, structural integrity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We leverage tech-enabled sourcing methodologies combined with deep, traditional networking to map passive talent pools. Our approach is entirely qualitative; we represent the top percentile of commercial and technical professionals, partnering exclusively with organizations that demand excellence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 bg-card/50 translate-x-4 translate-y-4"></div>
            <img 
              src={aboutImg} 
              alt="Professional architecture office" 
              className="relative z-10 w-full h-[500px] object-cover grayscale-[50%] contrast-125 border border-white/5"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border-t-2 border-primary pt-6">
            <h3 className="text-xl font-heading font-bold mb-4">Mission-Driven</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To elevate the standard of recruitment within the built environment by providing transparent, highly accurate, and fiercely professional representation to both clients and candidates.
            </p>
          </div>
          <div className="border-t-2 border-primary pt-6">
            <h3 className="text-xl font-heading font-bold mb-4">Structural Focus</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We do not rely on job boards. We utilize systemic market mapping, competitor analysis, and targeted outreach to uncover professionals who are not actively seeking but are open to strategic career advancement.
            </p>
          </div>
          <div className="border-t-2 border-primary pt-6">
            <h3 className="text-xl font-heading font-bold mb-4">Market Presence</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              While our core operational footprint and primary focus is strictly within the United Kingdom, our robust systems provide us with the capability to execute international mandates for key strategic partners.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}