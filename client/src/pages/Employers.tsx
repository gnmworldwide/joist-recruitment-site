import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Clock, Phone, Search, Star, Users } from "lucide-react";
import { useLocation } from "wouter";
import { submitNetlifyForm } from "@/lib/netlifyForms";

export default function Employers() {
  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submitNetlifyForm(e.currentTarget);
    if (ok) {
      navigate("/thank-you");
    } else {
      alert(
        "Sorry, something went wrong sending your enquiry. Please email hello@joistrecruitment.co.uk.",
      );
    }
  };

  return (
    <PageLayout
      title="For Employers | Joist Recruitment"
      description="Partner with Joist Recruitment to secure high-impact commercial and technical talent for your construction and built environment projects."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Secure <span className="text-primary">Reliable</span> Talent.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We help contractors, consultancies, and developers find the right
            people for permanent, contract, and project-based roles: screened
            properly, introduced directly, and supported through to placement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Services & Value Prop */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-8">
              Our Services
            </h2>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <Briefcase className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Permanent Recruitment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    For long-term hires across construction, architecture,
                    commercial, technical, and project delivery roles. We take
                    the time to understand your team before making a single
                    introduction.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Contract &amp; Interim Recruitment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    For urgent project needs, temporary cover, specialist
                    assignments, and delivery-critical roles. Compliance-aware
                    processes to ensure all contract staff meet regulatory
                    requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Bespoke Search</h3>
                  <p className="text-muted-foreground text-sm">
                    For niche requirements, harder-to-find candidates, or
                    selected international partners seeking UK-based built
                    environment expertise. Confidential, structured, and
                    conducted with precision.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    Candidate Screening &amp; Shortlisting
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Structured qualification, relevance checks, and shortlist
                    preparation before introduction. Every submission includes
                    consultant notes detailing motivations and verified
                    capabilities. We do not forward CVs blindly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Search className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Rapid Shortlists</h3>
                  <p className="text-muted-foreground text-sm">
                    Tech-enabled mapping allows us to deliver qualified
                    candidates faster than traditional methods without
                    compromising on relevance or quality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Role Scoping Call</h3>
                  <p className="text-muted-foreground text-sm">
                    We start every assignment with a direct conversation to
                    understand the role, the team, the timeline, and whether
                    this is a permanent, contract, or interim requirement. No
                    guesswork.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-heading font-bold mb-4 relative z-10">
                Prefer a direct conversation?
              </h3>
              <p className="text-sm text-muted-foreground mb-6 relative z-10">
                Speak directly with the founder to discuss your immediate hiring
                requirements, whether permanent, contract, or project-based.
              </p>
              <a
                href="mailto:hello@joistrecruitment.co.uk"
                className="relative z-10"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none">
                  Send a Hiring Brief
                </Button>
              </a>
            </div>
          </div>

          {/* Employer Lead Form */}
          <div className="bg-black p-8 border border-white/10">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Register a Vacancy
            </h2>
            <form
              name="register-vacancy"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="register-vacancy" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Company Name *
                  </label>
                  <Input
                    name="company"
                    required
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Contact Name *
                  </label>
                  <Input
                    name="name"
                    required
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Role Title *
                  </label>
                  <Input
                    name="role_title"
                    required
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Engagement Type
                  </label>
                  <select
                    name="engagement_type"
                    className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <option value="" className="bg-black">
                      Select...
                    </option>
                    <option value="Permanent" className="bg-black">
                      Permanent
                    </option>
                    <option value="Contract / Interim" className="bg-black">
                      Contract / Interim
                    </option>
                    <option value="Project-Based" className="bg-black">
                      Project-Based
                    </option>
                    <option value="Bespoke Search" className="bg-black">
                      Bespoke Search
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Sector
                </label>
                <select
                  name="sector"
                  className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <option value="" className="bg-black">
                    Select Sector...
                  </option>
                  <option value="Quantity Surveying / Commercial" className="bg-black">
                    Quantity Surveying / Commercial
                  </option>
                  <option value="Construction Delivery / Site Management" className="bg-black">
                    Construction Delivery / Site Management
                  </option>
                  <option value="Architecture / Design" className="bg-black">
                    Architecture / Design
                  </option>
                  <option value="Engineering / Technical" className="bg-black">
                    Engineering / Technical
                  </option>
                  <option value="Project Management" className="bg-black">
                    Project Management
                  </option>
                  <option value="MEP / Building Services" className="bg-black">
                    MEP / Building Services
                  </option>
                  <option value="Other" className="bg-black">
                    Other
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Location
                  </label>
                  <Input
                    name="location"
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Salary / Rate
                  </label>
                  <Input
                    name="salary"
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Start Date
                  </label>
                  <Input
                    type="date"
                    name="start_date"
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white/80">
                  Additional Details
                </label>
                <Textarea
                  name="message"
                  rows={4}
                  className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary resize-none"
                  placeholder="Key project details, specific requirements, team context..."
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold mt-4"
              >
                Request Candidates
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
