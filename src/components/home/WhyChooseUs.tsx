import { Shield, Clock, Globe, HeadphonesIcon, BadgeCheck, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "FBR Registered Experts",
    description: "Our tax consultants are registered with FBR and have extensive experience in Pakistani tax law.",
  },
  {
    icon: Globe,
    title: "Overseas Specialists",
    description: "We specialize in serving overseas Pakistanis, understanding the unique tax situations of expats.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Available around the clock to accommodate clients in different time zones worldwide.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account manager assigned to handle all your tax and accounting needs.",
  },
  {
    icon: BadgeCheck,
    title: "100% Accuracy",
    description: "We guarantee accurate tax filing with thorough review and verification processes.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Transparent and competitive pricing with no hidden fees. Value for money guaranteed.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-4">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Trusted by Thousands of Overseas Pakistanis
          </h2>
          <p className="text-muted-foreground text-lg">
            Hamza and Abdul Hadi bring over a decade of combined experience in taxation and accounting. We understand the challenges faced by overseas Pakistanis and provide tailored solutions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
