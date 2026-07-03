import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { submitNetlifyForm } from "@/lib/netlifyForms";
import { BOOKING_URL, CONTACT_EMAIL } from "@/config/site";

export default function Contact() {
  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submitNetlifyForm(e.currentTarget);
    if (ok) {
      navigate("/thank-you");
    } else {
      alert(
        "Sorry, something went wrong sending your message. Please email hello@joistrecruitment.co.uk.",
      );
    }
  };

  return (
    <PageLayout
      title="Contact Us | Joist Recruitment"
      description="Get in touch with Joist Recruitment. London-based construction recruitment specialists."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-steel mb-5">
            Contact
          </p>
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
              <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">
                Direct Contact
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:hello@joistrecruitment.co.uk"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-card border border-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      hello@joistrecruitment.co.uk
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+447873965178"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-card border border-white/5 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +44 7873 965178
                    </p>
                  </div>
                </a>

                {/* Location */}
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

            {/* Schedule a call */}
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">
                Schedule a Call
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {BOOKING_URL
                  ? "Pick a time that suits you and book a call directly."
                  : "Find a time that works for you and we will confirm by return."}
              </p>

              <a
                href={
                  BOOKING_URL || `mailto:${CONTACT_EMAIL}?subject=Book%20a%20Call`
                }
                {...(BOOKING_URL
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={
                  BOOKING_URL
                    ? "Book a call using our online calendar"
                    : "Book a call, email us to arrange a time"
                }
              >
                <Button
                  variant="outline"
                  className="h-12 border-primary text-primary hover:bg-primary hover:text-white rounded-none w-full"
                >
                  Book a Call
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                {BOOKING_URL
                  ? "Opens our online booking calendar in a new tab."
                  : "Email us to arrange a convenient time."}
              </p>
            </div>
          </div>

          {/* General Enquiry Form */}
          <div className="lg:col-span-7 bg-black p-8 border border-white/10">
            <h2 className="text-2xl font-heading font-bold mb-6">
              General Enquiry
            </h2>

            <form
              name="contact"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Netlify Forms: identifies which form this submission belongs to */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot: hidden from users, catches bots */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Name *
                  </label>
                  <Input
                    name="name"
                    required
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Company (Optional)
                  </label>
                  <Input
                    name="company"
                    className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Enquiry Type
                </label>
                <select
                  name="enquiry_type"
                  className="flex h-10 w-full rounded-none border border-white/10 bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <option value="Hiring" className="bg-black">
                    I am looking to hire
                  </option>
                  <option value="Job Search" className="bg-black">
                    I am looking for a new role
                  </option>
                  <option value="Other" className="bg-black">
                    Other General Enquiry
                  </option>
                </select>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-white/80">
                  Message *
                </label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  className="bg-background/50 border-white/10 rounded-none focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold mt-4"
              >
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground mt-3">
                We aim to respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}