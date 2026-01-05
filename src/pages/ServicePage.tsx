import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, Clock, Shield, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CTASection } from "@/components/home/CTASection";
import { StructuredData } from "@/components/StructuredData";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  price: string;
  duration: string;
}> = {
  "tax-filing": {
    title: "Income Tax Filing",
    subtitle: "Professional Tax Return Filing for Individuals & Businesses",
    description: "Complete income tax return filing service for salaried individuals, freelancers, business owners, and overseas Pakistanis. Our expert consultants ensure accurate filing and maximum tax savings.",
    longDescription: "Filing income tax returns in Pakistan can be complex, especially for overseas Pakistanis managing income from multiple sources. Befiller simplifies this process with our comprehensive tax filing service. Our FBR-registered consultants handle everything from gathering your income documents to calculating your tax liability and filing your return with the Federal Board of Revenue. We specialize in helping expats, freelancers working with international clients, property owners, and business professionals navigate Pakistan's tax system efficiently. With Befiller, you can file your taxes from anywhere in the world while ensuring complete compliance with Pakistani tax laws.",
    benefits: [
      "Accurate tax calculation and maximum deductions",
      "Filing for multiple income sources (salary, rental, capital gains)",
      "Overseas income declarations handled properly",
      "Tax notices and correspondence management",
      "Wealth statement preparation and filing",
      "Refund claims processing",
    ],
    process: [
      { step: 1, title: "Document Collection", description: "Share your income documents via our secure portal" },
      { step: 2, title: "Tax Calculation", description: "Our experts calculate your tax liability with maximum deductions" },
      { step: 3, title: "Review & Approval", description: "Review your return and approve for filing" },
      { step: 4, title: "FBR Filing", description: "We file your return with FBR and provide confirmation" },
    ],
    price: "Starting from PKR 3,500",
    duration: "2-3 business days",
  },
  "ntn-registration": {
    title: "NTN Registration",
    subtitle: "Get Your National Tax Number from FBR",
    description: "Quick and hassle-free NTN registration service. Essential for property transactions, banking, and becoming an active tax filer in Pakistan.",
    longDescription: "A National Tax Number (NTN) is your unique identification for all tax matters in Pakistan. Whether you're a resident or overseas Pakistani, having an NTN is essential for property purchases, opening bank accounts, government tenders, and demonstrating your status as an active taxpayer. Befiller provides fast NTN registration services, handling all the paperwork and FBR procedures on your behalf. Our process is streamlined for overseas Pakistanis, requiring minimal documentation and no physical presence at FBR offices.",
    benefits: [
      "NTN registration within 48 hours",
      "No physical visit to FBR required",
      "Both individual and business NTN available",
      "Complete documentation support",
      "CNIC verification and IRIS registration",
      "Active filer status confirmation",
    ],
    process: [
      { step: 1, title: "Submit CNIC Copy", description: "Provide your CNIC front and back copy" },
      { step: 2, title: "Fill Application", description: "We prepare your NTN application form" },
      { step: 3, title: "FBR Registration", description: "Registration with FBR IRIS portal" },
      { step: 4, title: "NTN Certificate", description: "Receive your NTN certificate via email" },
    ],
    price: "Starting from PKR 2,000",
    duration: "24-48 hours",
  },
  "business-registration": {
    title: "Business Registration",
    subtitle: "Complete Company Formation & SECP Registration",
    description: "Start your business in Pakistan with proper legal registration. We handle sole proprietorship, partnership, and private limited company formations.",
    longDescription: "Starting a business in Pakistan requires proper legal registration to operate legitimately and access banking, contracts, and government services. Befiller provides end-to-end business registration services, from choosing the right business structure to completing registration with SECP, FBR, and provincial authorities. Whether you want to register a sole proprietorship for your freelance work, set up a partnership, or incorporate a private limited company, our team handles all the paperwork, name availability checks, and compliance requirements.",
    benefits: [
      "Complete SECP company incorporation",
      "Sole proprietorship and partnership registration",
      "Business NTN and sales tax registration",
      "Chamber of Commerce registration",
      "Company bank account guidance",
      "Annual compliance support",
    ],
    process: [
      { step: 1, title: "Consultation", description: "We advise on the best business structure for your needs" },
      { step: 2, title: "Name Reservation", description: "Check availability and reserve your company name" },
      { step: 3, title: "Document Preparation", description: "Prepare MOA, AOA, and other required documents" },
      { step: 4, title: "Registration", description: "Complete SECP and FBR registration" },
    ],
    price: "Starting from PKR 25,000",
    duration: "7-14 business days",
  },
  "sales-tax": {
    title: "Sales Tax Registration",
    subtitle: "GST Registration & Monthly Returns Filing",
    description: "Register for sales tax with FBR and maintain compliance with monthly GST returns. Essential for businesses exceeding the registration threshold.",
    longDescription: "Sales tax registration is mandatory for businesses in Pakistan that exceed certain turnover thresholds or deal in taxable goods and services. Befiller provides complete sales tax registration services with both federal (FBR) and provincial revenue authorities. We also handle monthly sales tax return filing to ensure your business remains compliant. Our team stays updated with the latest GST rates, exemptions, and compliance requirements to help your business avoid penalties and maximize input tax credits.",
    benefits: [
      "FBR sales tax registration",
      "Provincial sales tax registration (SRB, PRA, KPRA)",
      "Monthly GST return filing",
      "Input tax credit optimization",
      "Sales tax audit support",
      "Compliance monitoring and alerts",
    ],
    process: [
      { step: 1, title: "Eligibility Check", description: "Assess your sales tax registration requirements" },
      { step: 2, title: "Documentation", description: "Gather required documents and business details" },
      { step: 3, title: "Registration", description: "Complete FBR and provincial registration" },
      { step: 4, title: "Ongoing Filing", description: "Monthly return filing and compliance management" },
    ],
    price: "Starting from PKR 10,000",
    duration: "5-7 business days",
  },
  "accounting": {
    title: "Accounting Services",
    subtitle: "Professional Bookkeeping & Financial Reporting",
    description: "Comprehensive accounting services including bookkeeping, financial statements, payroll processing, and financial advisory for businesses.",
    longDescription: "Accurate accounting is the foundation of a successful business. Befiller provides professional accounting services tailored for Pakistani SMEs and startups. Our team of qualified accountants handles your daily bookkeeping, monthly financial statements, payroll processing, and year-end accounts preparation. We use modern accounting software to maintain real-time financial records, giving you insights into your business performance. For overseas Pakistanis with businesses in Pakistan, we provide remote accounting services with regular reporting.",
    benefits: [
      "Daily transaction recording and bookkeeping",
      "Monthly profit & loss statements",
      "Balance sheet preparation",
      "Cash flow management",
      "Payroll processing and EOBI compliance",
      "Financial analysis and advisory",
    ],
    process: [
      { step: 1, title: "Setup", description: "Set up your accounting system and chart of accounts" },
      { step: 2, title: "Data Entry", description: "Regular recording of business transactions" },
      { step: 3, title: "Reconciliation", description: "Bank and account reconciliations" },
      { step: 4, title: "Reporting", description: "Monthly financial statements and analysis" },
    ],
    price: "Starting from PKR 15,000/month",
    duration: "Ongoing service",
  },
};

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const serviceInfo = service ? servicesData[service.toLowerCase()] : null;

  if (!serviceInfo) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find this service.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{serviceInfo.title} - Befiller Pakistan Tax Services</title>
        <meta name="description" content={serviceInfo.description} />
        <meta name="keywords" content={`${serviceInfo.title} Pakistan, ${serviceInfo.title} service, Befiller ${service}`} />
      </Helmet>
      <StructuredData 
        type="service"
        pageTitle={`${serviceInfo.title} - Befiller Pakistan Tax Services`}
        pageDescription={serviceInfo.description}
        pageUrl={`https://befiller.pk/services/${service}`}
        serviceName={serviceInfo.title}
      />

      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {serviceInfo.title}
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-4">{serviceInfo.subtitle}</p>
            <p className="text-lg text-primary-foreground/70 mb-8">{serviceInfo.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+923001234567">
                  <Phone className="w-4 h-4" /> Call for Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                About This Service
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {serviceInfo.longDescription}
              </p>

              {/* Benefits */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                What's Included
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 mb-12">
                {serviceInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Our Process
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {serviceInfo.process.map((step) => (
                  <div key={step.step} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                    <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center mb-4">
                      <span className="text-primary-foreground font-bold">{step.step}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-accent rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Service Details
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Starting Price</p>
                      <p className="font-semibold text-foreground">{serviceInfo.price}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Turnaround Time</p>
                      <p className="font-semibold text-foreground">{serviceInfo.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Guarantee</p>
                      <p className="font-semibold text-foreground">100% Accuracy</p>
                    </div>
                  </li>
                </ul>
                <div className="space-y-4">
                  <Button variant="default" className="w-full" asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/923001234567">WhatsApp Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
