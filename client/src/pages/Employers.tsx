import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Clock, Phone, Search } from "lucide-react";

export default function Employers() {
  return (
    <PageLayout 
      title="For Employers | Joist Recruitment"
      description="Partner with Joist Recruitment to secure high-impact commercial and technical talent for your construction projects."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Secure <span className="text-primary">Tier-One</span> Talent.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide contractors, consultancies, and developers with rapid access to rigorously screened professionals. Permanent, contract, and freelance solutions delivered with commercial confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Services & Value Prop */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-8">Our Service</h2>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <Search className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Rapid Shortlists</h3>
                  <p className="text-muted-foreground text-sm">Tech-enabled mapping allows us to deliver qualified candidates faster than traditional methods.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Role Scoping Call</h3>
                  <p className="text-muted-foreground text-sm">Deep dive into your project requirements, commercial goals, and cultural environment to ensure absolute alignment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Briefcase className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Perm & Contract</h3>
                  <p className="text-muted-foreground text-sm">Flexible resourcing solutions. Compliance-aware processes ensuring all contract staff meet regulatory standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Structured Screening</h3>
                  <p className="text-muted-foreground text-sm">We don't forward CVs blindly. Every submission includes our consultant notes detailing motivations and verified capabilities.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-heading font-bold mb-4 relative z-10">Prefer a direct conversation?</h3>
              <p className="text-sm text-muted-foreground mb-6 relative z-10">Schedule a confidential discovery call directly with our lead consultant to discuss your immediate hiring requirements.</p>
              {/* Calendly Placeholder */}
              <a href="https://calendly.com/placeholder" target="_blank" rel="noreferrer" className="relative z-10">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none">
                  Book a Call
                </Button>
              </a>
            </div>
          </div>

          {/* Employer Lead Form */}
          <div className="bg-black p-8 border border-white/10">
            <h2 className="text-2xl font-heading font-bold mb-6">Register a Vacancy</h2>
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Company Name *</label>
                  <Input name="company" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Contact Name *</label>
                  <Input name="name" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email *</label>
                  <Input type="email" name="email" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone</label>
                  <Input type="tel" name="phone" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Role Title *</label>
                  <Input name="role_title" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Sector</label>
                  <select name="sector" className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <option value="" className="bg-black">Select Sector...</option>
                    <option value="Quantity Surveying" className="bg-black">Quantity Surveying</option>
                    <option value="Engineering" className="bg-black">Engineering</option>
                    <option value="Site Management" className="bg-black">Site Management</option>
                    <option value="Other" className="bg-black">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Location</label>
                  <Input name="location" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Salary/Rate</label>
                  <Input name="salary" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Start Date</label>
                  <Input type="date" name="start_date" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary [color-scheme:dark]" />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white/80">Additional Details</label>
                <Textarea name="message" rows={4} className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary resize-none" placeholder="Key project details, specific requirements..." />
              </div>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold mt-4">
                Request Candidates
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}