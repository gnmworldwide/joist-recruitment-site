import PageLayout from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, HardHat, Cog, ArrowRight } from "lucide-react";

export default function Sectors() {
  return (
    <PageLayout 
      title="Sectors | Joist Recruitment"
      description="Specialists in Quantity Surveying and technical construction recruitment across the UK market."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Focused <span className="text-primary">Expertise</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We operate exclusively within the Built Environment. Our deep, narrow focus ensures we understand the technical nuances of the roles we place and the commercial realities of the businesses we serve.
          </p>
        </div>

        <div className="space-y-24">
          {/* Primary Sector */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <Target className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Quantity Surveying & Commercial</h2>
              <p className="text-muted-foreground relative z-10">
                Our undisputed core capability. We partner with leading PQS consultancies, main contractors, and developers to secure elite commercial talent. We understand the distinction between pre-contract measurement, post-contract delivery, and strategic commercial management.
              </p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Key Disciplines</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Project Quantity Surveyor",
                  "Senior Quantity Surveyor",
                  "Managing Quantity Surveyor",
                  "Commercial Manager",
                  "Commercial Director",
                  "Estimator / Senior Estimator",
                  "Cost Manager",
                  "Claims & Dispute Specialists"
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Sector 1 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Key Disciplines</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Site Manager",
                  "Project Manager",
                  "Contracts Manager",
                  "Design Manager",
                  "Construction Director",
                  "Planner",
                  "BIM Coordinator / Manager"
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center order-1 lg:order-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <HardHat className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">Construction & Delivery</h2>
              <p className="text-muted-foreground relative z-10">
                Operational leadership is critical to project success. We source professionals who drive site safety, program adherence, and quality control from groundworks to handover.
              </p>
            </div>
          </div>

          {/* Secondary Sector 2 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-card border border-white/5 p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <Cog className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">MEP & Technical Services</h2>
              <p className="text-muted-foreground relative z-10">
                Specialist technical sourcing for mechanical and electrical disciplines. Connecting complex engineering talent with specialist sub-contractors and tier-one MEP divisions.
              </p>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Key Disciplines</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Mechanical Engineer",
                  "Electrical Engineer",
                  "MEP Project Manager",
                  "MEP Quantity Surveyor",
                  "Building Services Manager",
                  "M&E Estimator"
                ].map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="text-white/90">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6">Require specific capabilities?</h3>
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