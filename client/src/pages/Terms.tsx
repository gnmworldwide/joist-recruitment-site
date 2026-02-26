import PageLayout from "@/components/layout/PageLayout";

export default function Terms() {
  return (
    <PageLayout title="Terms of Service">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-white/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the Joist Recruitment website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
            <p>Our website provides information about our recruitment services and allows candidates and employers to contact us. You agree to use the site for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information Accuracy</h2>
            <p>While we strive to ensure that the information on our website is accurate and up-to-date, we do not guarantee the completeness or accuracy of the information provided. Roles and opportunities are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Candidate Submissions</h2>
            <p>By submitting your CV or professional details, you confirm that the information provided is accurate and truthful. Submission of details does not guarantee placement or representation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p>All content, logos, graphics, and design elements on this site are the property of Joist Recruitment unless otherwise stated and are protected by applicable intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p>Joist Recruitment shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
            <p>For any queries regarding these terms, please contact: <a href="mailto:hello@joistrecruitment.co.uk" className="text-primary hover:underline">hello@joistrecruitment.co.uk</a></p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}