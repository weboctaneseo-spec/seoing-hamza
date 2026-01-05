import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Building2, 
  Calculator, 
  Receipt, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Income Tax Filing",
    description: "Complete income tax return filing for salaried individuals, freelancers, and overseas Pakistanis. Get your taxes filed accurately and on time.",
    href: "/services/tax-filing",
    features: ["Salary Tax Returns", "Freelancer Returns", "Overseas Income"],
  },
  {
    icon: Building2,
    title: "NTN Registration",
    description: "Register for your National Tax Number (NTN) with FBR. Essential for property transactions, banking, and becoming a tax filer in Pakistan.",
    href: "/services/ntn-registration",
    features: ["Individual NTN", "Business NTN", "Fast Processing"],
  },
  {
    icon: Calculator,
    title: "Business Registration",
    description: "Complete company registration services including sole proprietorship, partnership, and private limited company registration with SECP.",
    href: "/services/business-registration",
    features: ["Company Formation", "SECP Registration", "Partnership Deed"],
  },
  {
    icon: Receipt,
    title: "Sales Tax Registration",
    description: "GST registration and monthly sales tax return filing. Stay compliant with FBR and provincial revenue authorities.",
    href: "/services/sales-tax",
    features: ["GST Registration", "Monthly Returns", "Compliance Support"],
  },
  {
    icon: BarChart3,
    title: "Accounting Services",
    description: "Professional bookkeeping and accounting services. Monthly financial statements, payroll management, and financial advisory.",
    href: "/services/accounting",
    features: ["Bookkeeping", "Financial Statements", "Payroll Services"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-4">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Comprehensive Tax & Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From NTN registration to complete accounting services, we provide end-to-end solutions for Pakistani citizens worldwide. Our expert team ensures compliance and maximizes your tax benefits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to={service.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
