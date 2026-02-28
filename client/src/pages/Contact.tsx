import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout 
      title="Contact Us | Joist Recruitment"
      description="Get in touch with Joist Recruitment. London-based construction recruitment specialists."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Initiate <span className="text-primary">Dialogue</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you are looking to hire critical talent or seeking representation for your next career move, contact us directly for a confidential discussion.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Direct Contact</h2>
              <div className="space-y-6">
                <a href="mailto:hello@joistrecruitment.co.uk" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">hello@joistrecruitment.co.uk</p>
                  </div>
                </a>
                
                <a href="tel:+447563581741" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">+44 7563 581741</p>
                  </div>
                </a>
                  <div className="w-12 h-12 bg-card border border-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">+44 7563 581741</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-card border border-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Schedule a Call</h2>
              <p className="text-sm text-muted-foreground mb-6">Find a time that works for you in our calendar.</p>
              <a href="mailto:hello@joistrecruitment.co.uk">
                <Button variant="outline" className="h-12 border-primary text-primary hover:bg-primary hover:text-white rounded-none w-full">
                  Email Us
                </Button>
              </a>
            </div>
          </div>

          {/* General Enquiry Form */}
          <div className="lg:col-span-7 bg-black p-8 border border-white/10">
            <h2 className="text-2xl font-heading font-bold mb-6">General Enquiry</h2>
            <form action="https://formspree.io/f/xbdabqbw" method="POST" className="space-y-4">
             <input type="hidden" name="_redirect" value="https://joistrecruitment.co.uk/thank-you" /> 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name *</label>
                  <Input name="name" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Company (Optional)</label>
                  <Input name="company" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email *</label>
                  <Input type="email" name="email" required className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone</label>
                  <Input type="tel" name="phone" className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Enquiry Type</label>
                <select name="enquiry_type" className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <option value="Hiring" className="bg-black">I am looking to hire</option>
                  <option value="Job Search" className="bg-black">I am looking for a new role</option>
                  <option value="Other" className="bg-black">Other General Enquiry</option>
                </select>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white/80">Message *</label>
                <Textarea name="message" required rows={5} className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary resize-none" />
              </div>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}