import PageLayout from "@/components/layout/PageLayout";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, HardHat, Cog, PenTool, ClipboardList, Building2, ArrowRight } from "lucide-react";

export default function Sectors() {
  return (
    <PageLayout
      title="Sectors | Joist Recruitment"
      description="Specialist built environment recruitment across quantity surveying, construction delivery, architecture, engineering, project management, and MEP in the UK."
    >
      <div className="container mx-auto px-6 py-20">
        <FadeIn className="max-w-4xl mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-5">
            What we cover
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Focused <span className="text-primary">Expertise</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We operate exclusively within the UK built environment. Our focused
            approach means we understand the technical pressures of the roles we
            place and the commercial realities of the businesses we serve.
          </p>
        </FadeIn>

        <div className="space-y-24">
          {/* Primary Sector */}
          <FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <Target className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
                Quantity Surveying &amp; Commercial
              </h2>
              <p className="text-muted-foreground relative z-10">
                Our primary capability. We partner with leading PQS
                consultancies, main contractors, and developers to place elite
                commercial talent. We understand the difference between
                pre-contract measurement, post-contract delivery, and strategic
                commercial management, and we recruit for all three.
              </p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Disciplines
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Project Quantity Surveyor",
                  "Senior Quantity Surveyor",
                  "Managing Quantity Surveyor",
                  "Commercial Manager",
                  "Commercial Director",
                  "Estimator / Senior Estimator",
                  "Cost Manager",
                  "Claims &amp; Dispute Specialists",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span
                      className="text-white/90"
                      dangerouslySetInnerHTML={{ __html: role }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Construction Delivery */}
          <FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Disciplines
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Site Manager",
                  "Project Manager",
                  "Contracts Manager",
                  "Construction Director",
                  "Design Manager",
                  "Planner / Programme Manager",
                  "BIM Coordinator / Manager",
                  "Health &amp; Safety Manager",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span
                      className="text-white/90"
                      dangerouslySetInnerHTML={{ __html: role }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <HardHat className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
                Construction Delivery &amp; Site Management
              </h2>
              <p className="text-muted-foreground relative z-10">
                Operational leadership is critical to project success. We source
                professionals who drive site safety, programme adherence, and
                quality from groundworks to handover, across both permanent and
                contract engagements.
              </p>
            </div>
          </div>
          </FadeIn>

          {/* Architecture & Design */}
          <FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <PenTool className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
                Architecture &amp; Design
              </h2>
              <p className="text-muted-foreground relative z-10">
                From RIBA-chartered architects to BIM specialists and interior
                designers. We support practices, developers, and in-house design
                teams who need people who combine creative capability with
                technical delivery.
              </p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Disciplines
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Architect (Part II / III)",
                  "Senior / Associate Architect",
                  "Design Manager",
                  "BIM Coordinator / Manager",
                  "Interior Designer",
                  "Urban Designer",
                  "Architectural Technologist",
                  "Studio Manager",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Engineering & Technical */}
          <FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Disciplines
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Structural Engineer",
                  "Civil Engineer",
                  "Geotechnical Engineer",
                  "Façade Engineer",
                  "Planner",
                  "Transport Planner",
                  "Environmental Consultant",
                  "Sustainability Consultant",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <Building2 className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
                Engineering &amp; Technical
              </h2>
              <p className="text-muted-foreground relative z-10">
                Structural, civil, and multi-disciplinary engineering capability
                supporting the full project lifecycle. We place professionals
                with strong technical grounding and an understanding of how
                engineering decisions affect programme, cost, and buildability.
              </p>
            </div>
          </div>
          </FadeIn>

          {/* Project Management */}
          <FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <ClipboardList className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
                Project Management
              </h2>
              <p className="text-muted-foreground relative z-10">
                Programme delivery, client-side management, and development
                management roles. We understand the commercial accountability
                and stakeholder pressure these positions carry, and we look for
                candidates with both.
              </p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Disciplines
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Project Manager",
                  "Senior Project Manager",
                  "Programme Manager",
                  "Development Manager",
                  "Client-Side PM",
                  "Project Director",
                  "Assistant Project Manager",
                  "Change Manager",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* MEP & Technical Services */}
          <FadeIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Disciplines
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Mechanical Engineer",
                  "Electrical Engineer",
                  "MEP Project Manager",
                  "MEP Quantity Surveyor",
                  "Building Services Manager",
                  "M&E Estimator",
                  "Commissioning Manager",
                  "Energy Consultant",
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <Cog className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
                Building Services &amp; MEP
              </h2>
              <p className="text-muted-foreground relative z-10">
                Specialist technical sourcing for mechanical and electrical
                disciplines. Connecting complex engineering talent with
                specialist sub-contractors and tier-one MEP divisions, for
                both permanent and contract requirements.
              </p>
            </div>
          </div>
          </FadeIn>
        </div>

        {/* Salary Snapshot */}
        <FadeIn className="mt-32">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Market Salary{" "}
              <span className="text-primary">Snapshot</span>.
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Indicative UK salary ranges by discipline. Figures vary by
              region, employer type, project size, package structure, and
              market conditions, and should be reviewed regularly. Contract
              day rates are not shown here; contact us for current benchmarks.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              All figures in GBP. Last reviewed June 2026. These are indicative
              ranges only and do not constitute a guarantee or formal market
              report.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold text-white/80 w-1/3">
                    Discipline
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-white/80">
                    Entry / Assistant
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-white/80">
                    Mid-Level
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-white/80">
                    Senior / Lead
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    discipline: "Quantity Surveying / Commercial",
                    entry: "£28,000 – £38,000",
                    mid: "£45,000 – £65,000",
                    senior: "£70,000 – £100,000+",
                  },
                  {
                    discipline: "Construction Delivery / Site Management",
                    entry: "£28,000 – £38,000",
                    mid: "£45,000 – £60,000",
                    senior: "£65,000 – £90,000+",
                  },
                  {
                    discipline: "Architecture / Design",
                    entry: "£25,000 – £35,000",
                    mid: "£38,000 – £55,000",
                    senior: "£60,000 – £85,000+",
                  },
                  {
                    discipline: "MEP / Building Services",
                    entry: "£28,000 – £38,000",
                    mid: "£42,000 – £60,000",
                    senior: "£65,000 – £90,000+",
                  },
                  {
                    discipline: "Project Management",
                    entry: "£30,000 – £42,000",
                    mid: "£50,000 – £70,000",
                    senior: "£75,000 – £110,000+",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/2 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-white/90">
                      {row.discipline}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.entry}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.mid}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.senior}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* TODO: verify salary figures against current market data before each site update */}
          {/* TODO: add contract day rate benchmarks section */}
        </FadeIn>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Require specific capabilities?
          </h3>
          <Link href="/employers">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-8">
              Submit a Brief <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
