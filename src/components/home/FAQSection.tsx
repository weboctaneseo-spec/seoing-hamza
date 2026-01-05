import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do overseas Pakistanis need to file taxes in Pakistan?",
    answer: "Yes, if you own property, have investments, or earn income from Pakistani sources, you are required to file taxes. Filing taxes also helps you become an Active Taxpayer, which reduces withholding taxes on property transactions, vehicle purchases, and banking transactions by up to 50%."
  },
  {
    question: "What is NTN and why do I need it?",
    answer: "NTN (National Tax Number) is a unique identification number issued by the Federal Board of Revenue (FBR) to taxpayers in Pakistan. You need an NTN to file tax returns, open business bank accounts, purchase property or vehicles, and to appear on the Active Taxpayer List (ATL) which provides significant tax benefits."
  },
  {
    question: "How can I file taxes from abroad?",
    answer: "With Befiller, you can file your taxes remotely from anywhere in the world. Simply provide us with your documents via WhatsApp or email, and our expert team of Hamza and Abdul Hadi will handle everything from NTN registration to tax return filing. We offer 24/7 support across all time zones."
  },
  {
    question: "What documents do I need for tax filing?",
    answer: "For individual tax filing, you typically need: CNIC copy, passport copy (for overseas Pakistanis), bank statements, property documents (if applicable), salary certificates or income proof, and details of any investments or assets in Pakistan. Our team will guide you through the specific requirements for your situation."
  },
  {
    question: "What are the tax slabs for salaried individuals in Pakistan 2024-25?",
    answer: "For salaried individuals in 2024-25: Income up to PKR 600,000 is tax-free. Income from PKR 600,001 to 1,200,000 is taxed at 5%. From PKR 1,200,001 to 2,200,000, tax is PKR 30,000 plus 15% of amount exceeding PKR 1,200,000. Higher slabs have progressive rates up to 35% for income above PKR 5,600,000."
  },
  {
    question: "What is the deadline for filing tax returns in Pakistan?",
    answer: "The standard deadline for filing income tax returns in Pakistan is September 30th each year for salaried individuals and business owners. However, extensions are sometimes granted by FBR. Late filing results in penalties, so we recommend filing as early as possible. Befiller can help you meet all deadlines."
  },
  {
    question: "How long does the tax filing process take?",
    answer: "With Befiller's streamlined process, tax filing typically takes 2-3 business days once all documents are submitted. NTN registration can be completed within 1-2 business days. Complex cases involving businesses or multiple income sources may take slightly longer. We keep you updated throughout the process."
  },
  {
    question: "What are the benefits of being on the Active Taxpayer List (ATL)?",
    answer: "Being on the ATL provides significant benefits: 50% reduction in withholding tax on property transactions, reduced tax on vehicle registration, lower banking transaction taxes, eligibility for government contracts, easier loan approvals, and enhanced credibility for business dealings. Non-filers pay double the tax rates."
  },
  {
    question: "Can Befiller help with business registration and sales tax?",
    answer: "Absolutely! We offer comprehensive business services including company registration (sole proprietorship, partnership, private limited), Sales Tax Registration with FBR, professional tax registration, and ongoing compliance services. Our team handles all documentation and liaison with government authorities."
  },
  {
    question: "What are your service charges?",
    answer: "Our pricing is transparent and competitive. Individual tax filing starts from PKR 5,000, NTN registration from PKR 3,000, and business registration packages from PKR 15,000. We offer special packages for overseas Pakistanis. Contact us via WhatsApp for a personalized quote based on your specific requirements."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Tax Questions for Overseas Pakistanis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about tax filing, NTN registration, 
            and compliance requirements for Pakistani expats.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/+923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <HelpCircle className="h-5 w-5" />
            Ask Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export const faqData = faqs;
