import PageLayout from "@/components/layout/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: {new Date().getFullYear()}</p>
        
        <div className="space-y-8 text-white/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>Joist Recruitment ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and handle your personal data when you use our website and services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Identity Data: names, job titles, employer details.</li>
              <li>Contact Data: email addresses, telephone numbers.</li>
              <li>Professional Data: CVs, resumes, employment history, qualifications, and salary expectations.</li>
              <li>Technical Data: IP addresses, browser types, and usage data via cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Provide recruitment services to you.</li>
              <li>Match candidates with potential employers.</li>
              <li>Communicate with you regarding roles and opportunities.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
            <p className="font-medium text-primary">We will never share your CV or personal details with a client without your explicit prior consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
            <p>Your data is stored securely. We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-4">Under data protection laws, you have rights including:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request correction of inaccurate data.</li>
              <li>The right to request erasure of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:hello@joistrecruitment.co.uk" className="text-primary hover:underline">hello@joistrecruitment.co.uk</a></p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}