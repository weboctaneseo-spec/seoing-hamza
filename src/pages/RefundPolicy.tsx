import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { StructuredData } from "@/components/StructuredData";

const RefundPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Refund Policy - Befiller Pakistan</title>
        <meta name="description" content="Refund Policy for Befiller tax and accounting services. Learn about our refund and cancellation policies." />
      </Helmet>
      <StructuredData 
        type="legal"
        pageTitle="Refund Policy - Befiller Pakistan"
        pageDescription="Refund Policy for Befiller tax and accounting services. Learn about our refund and cancellation policies."
        pageUrl="https://befiller.pk/refund-policy"
      />

      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Refund Policy</h1>
          <p className="text-primary-foreground/80 mt-2">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Overview</h2>
            <p className="text-muted-foreground mb-6">
              At Befiller, we strive to provide excellent service and ensure client satisfaction. This Refund Policy outlines the terms and conditions for refunds and cancellations of our tax and accounting services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Service Categories and Refund Eligibility</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Tax Filing Services</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Full refund available if cancellation is requested before work begins</li>
              <li>50% refund if cancellation is requested after work has started but before filing</li>
              <li>No refund once the tax return has been filed with FBR</li>
              <li>Refund does not include any FBR processing fees paid on your behalf</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 NTN Registration</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Full refund if we are unable to complete the registration</li>
              <li>75% refund if cancelled before FBR submission</li>
              <li>No refund after successful registration with FBR</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Business Registration</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Full refund minus administrative fees if cancelled within 24 hours</li>
              <li>50% refund if cancelled before name reservation</li>
              <li>25% refund if cancelled after name reservation but before SECP submission</li>
              <li>No refund after SECP submission</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.4 Accounting Services</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Monthly services can be cancelled with 15 days notice</li>
              <li>Refund provided for unused portion of prepaid services</li>
              <li>Work completed up to cancellation date will be charged</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Non-Refundable Situations</h2>
            <p className="text-muted-foreground mb-4">Refunds will not be provided in the following cases:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Services completed and filed with government authorities</li>
              <li>Delays caused by client's failure to provide required documents</li>
              <li>Errors resulting from incorrect information provided by the client</li>
              <li>Government fees, stamps, and third-party charges</li>
              <li>Consultation services that have been rendered</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Refund Process</h2>
            <p className="text-muted-foreground mb-4">To request a refund:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Email your refund request to refunds@befiller.pk with your order details</li>
              <li>Include your name, contact information, and reason for refund</li>
              <li>Our team will review your request within 3 business days</li>
              <li>Approved refunds will be processed within 7-14 business days</li>
              <li>Refunds will be issued to the original payment method</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Service Guarantee</h2>
            <p className="text-muted-foreground mb-6">
              We guarantee the accuracy of our work. If an error on our part results in penalties or additional taxes, we will: correct the error at no additional cost, reimburse any penalties arising from our error, and provide a full refund of the service fee if the error cannot be corrected.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Disputes</h2>
            <p className="text-muted-foreground mb-6">
              If you are not satisfied with the resolution of your refund request, you may escalate the matter to our management team by emailing management@befiller.pk. We are committed to resolving all disputes fairly and promptly.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              For refund requests or questions about this policy, contact us at:<br />
              Email: refunds@befiller.pk<br />
              Phone: +92 300 1234567<br />
              Address: Office 123, Business Plaza, Shahrah-e-Faisal, Karachi, Pakistan
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
