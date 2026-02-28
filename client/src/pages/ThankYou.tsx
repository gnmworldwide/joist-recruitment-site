import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <PageLayout
      title="Thank You | Joist Recruitment"
      description="Thanks for contacting Joist Recruitment. We'll be in touch shortly."
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Thank you.
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your message has been received. We’ll respond as soon as possible.
          </p>
          <a href="/">
            <Button className="h-12 bg-primary hover:bg-primary/90 text-white rounded-none font-bold">
              Back to Home
            </Button>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}