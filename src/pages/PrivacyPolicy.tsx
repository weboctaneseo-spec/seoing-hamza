import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - Befiller Pakistan</title>
        <meta name="description" content="Privacy Policy for Befiller tax and accounting services. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="text-primary-foreground/80 mt-2">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              Befiller ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our tax and accounting services. We are owned and operated by Hamza and Abdul Hadi, registered tax consultants in Pakistan.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Personal identification information (name, CNIC, passport details)</li>
              <li>Contact information (email address, phone number, address)</li>
              <li>Financial information (income details, bank statements, tax documents)</li>
              <li>Business information (company registration details, financial statements)</li>
              <li>Communication records (emails, messages, call recordings for quality assurance)</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Provide tax filing, NTN registration, and accounting services</li>
              <li>Communicate with you about our services</li>
              <li>Process your transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations including FBR requirements</li>
              <li>Improve our services and develop new features</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell your personal information. We may share your information only with: the Federal Board of Revenue (FBR) as required for tax filing; SECP for business registrations; our trusted service providers who assist in operations; law enforcement when required by law.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information. All data transmissions are encrypted using SSL technology. Access to personal data is restricted to authorized personnel only. We maintain secure backups and follow industry best practices for data protection.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Tax records are retained for a minimum of 6 years as required by Pakistani tax law.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@befiller.pk<br />
              Phone: +92 300 1234567<br />
              Address: Office 123, Business Plaza, Shahrah-e-Faisal, Karachi, Pakistan
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
