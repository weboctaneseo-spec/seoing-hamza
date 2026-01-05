import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CitiesSection } from "@/components/home/CitiesSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection, faqData } from "@/components/home/FAQSection";
import { StructuredData } from "@/components/StructuredData";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Befiller - Expert Tax & Accounting Services for Overseas Pakistanis</title>
        <meta 
          name="description" 
          content="Pakistan's #1 tax filing service for overseas Pakistanis. Expert tax filing, NTN registration, business registration, and accounting services by Hamza & Abdul Hadi. Available 24/7." 
        />
        <meta name="keywords" content="tax filing Pakistan, NTN registration, overseas Pakistani taxes, FBR tax return, Pakistan tax consultant, expat tax services" />
        <link rel="canonical" href="https://befiller.pk" />
      </Helmet>
      <StructuredData 
        type="home"
        pageTitle="Befiller - Expert Tax & Accounting Services for Overseas Pakistanis"
        pageDescription="Pakistan's #1 tax filing service for overseas Pakistanis. Expert tax filing, NTN registration, business registration, and accounting services."
        pageUrl="https://befiller.pk"
        faqs={faqData}
      />
      
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CitiesSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
