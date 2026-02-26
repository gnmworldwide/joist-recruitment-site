import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Lock, TrendingUp, Presentation } from "lucide-react";

export default function Candidates() {
  return (
    <PageLayout 
      title="For Candidates | Joist Recruitment"
      description="Advance your construction career with discreet, professional representation and exclusive access to unadvertised roles."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Advance with <span className="text-primary">Precision</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional, supportive, and highly discreet representation. We partner with you to navigate the market and secure roles that align with your true value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-card border border-white/5 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-heading font-bold mb-8">The Joist Advantage</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Confidential Search</h3>
                  <p className="text-muted-foreground text-sm">Your profile is never shared without explicit permission. We protect your current position while exploring new opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Salary & Rate Guidance</h3>
                  <p className="text-muted-foreground text-sm">Access to real-time market data to ensure your compensation expectations are accurate and optimized.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">CV Feedback</h3>
                  <p className="text-muted-foreground text-sm">Strategic restructuring of your project portfolio and CV to highlight your most marketable achievements.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Presentation className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Interview Prep</h3>
                  <p className="text-muted-foreground text-sm">Rigorous preparation covering technical questioning, commercial scenarios, and cultural alignment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 border border-white/10">
            <h2 className="text-2xl font-heading font-bold mb-2">Submit Your Details</h2>
            <p className="text-sm text-muted-foreground mb-6">Register your interest below for a confidential discussion.</p>
            
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Full Name *</label>
                <Input name="name" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email *</label>
                  <Input type="email" name="email" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone *</label>
                  <Input type="tel" name="phone" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Role Type</label>
                  <select name="role_type" className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <option value="" className="bg-black">Select...</option>
                    <option value="Permanent" className="bg-black">Permanent</option>
                    <option value="Contract/Freelance" className="bg-black">Contract / Freelance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Primary Discipline</label>
                  <select name="sector" className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <option value="" className="bg-black">Select...</option>
                    <option value="QS / Commercial" className="bg-black">Quantity Surveying / Commercial</option>
                    <option value="Engineering" className="bg-black">Engineering</option>
                    <option value="MEP" className="bg-black">MEP</option>
                    <option value="Site Management" className="bg-black">Site Management</option>
                    <option value="Other" className="bg-black">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Location Preference</label>
                  <Input name="location" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Salary/Rate Expectation</label>
                  <Input name="salary_expectation" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Availability / Notice Period</label>
                <Input name="availability" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white/80">Message / Career Goals</label>
                <Textarea name="message" rows={3} className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary resize-none" />
              </div>

              <div className="bg-primary/10 border border-primary/20 p-4 text-sm text-primary-foreground/80 my-4">
                <strong>Note on CVs:</strong> If your browser supports it, you may attach a file via the form provider. Alternatively, please submit this form and email your CV to <a href="mailto:hello@joistrecruitment.co.uk" className="text-primary hover:underline">hello@joistrecruitment.co.uk</a>.
              </div>

              {/* Formspree supports file uploads if enabled on paid plans, otherwise user emails it. 
                  Leaving file input here; it will be ignored by Formspree free tier, hence the note above. */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Upload CV (Optional)</label>
                <Input type="file" name="cv_upload" accept=".pdf,.doc,.docx" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary py-2 text-muted-foreground file:bg-primary file:text-white file:border-0 file:mr-4 file:px-4 file:py-1 file:text-xs hover:file:bg-primary/90" />
              </div>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold mt-4">
                Submit Profile
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}