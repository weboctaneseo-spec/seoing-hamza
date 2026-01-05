import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service - Befiller Pakistan</title>
        <meta name="description" content="Terms of Service for Befiller tax and accounting services. Read our terms and conditions for using our services." />
      </Helmet>

      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Terms of Service</h1>
          <p className="text-primary-foreground/80 mt-2">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using the services provided by Befiller (owned by Hamza and Abdul Hadi), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Services Provided</h2>
            <p className="text-muted-foreground mb-4">Befiller provides the following services:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Income tax return filing with FBR</li>
              <li>NTN registration for individuals and businesses</li>
              <li>Business registration and SECP incorporation</li>
              <li>Sales tax registration and monthly return filing</li>
              <li>Accounting and bookkeeping services</li>
              <li>Tax advisory and consultation</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information for tax filing</li>
              <li>Respond to our requests for documentation in a timely manner</li>
              <li>Review and approve all documents before submission to authorities</li>
              <li>Pay all fees as agreed upon before service commencement</li>
              <li>Notify us of any changes to your tax situation</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Accuracy of Information</h2>
            <p className="text-muted-foreground mb-6">
              While we strive for 100% accuracy, our work is based on the information you provide. You are responsible for the accuracy and completeness of all data shared with us. We are not liable for errors arising from incorrect or incomplete information provided by you.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment is required before the commencement of services unless otherwise agreed in writing. All prices are quoted in Pakistani Rupees (PKR). We accept bank transfers, mobile payments, and international wire transfers. Prices are subject to change; however, quoted prices for confirmed services will be honored.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              We maintain strict confidentiality of all client information. Your financial and personal data will only be used for the purpose of providing our services and will not be shared with third parties except as required by law or with your consent.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              Befiller shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Service Delivery</h2>
            <p className="text-muted-foreground mb-6">
              We make reasonable efforts to deliver services within stated timeframes. However, delays may occur due to FBR system issues, incomplete documentation, or other factors beyond our control. We will communicate any delays promptly.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content on our website, including text, graphics, logos, and software, is the property of Befiller and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms shall be governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Karachi, Pakistan.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              For questions about these Terms of Service, contact us at:<br />
              Email: legal@befiller.pk<br />
              Phone: +92 300 1234567<br />
              Address: Office 123, Business Plaza, Shahrah-e-Faisal, Karachi, Pakistan
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
