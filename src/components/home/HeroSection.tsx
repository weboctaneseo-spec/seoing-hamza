import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Users, FileCheck, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "FBR Registered Tax Consultants",
  "Serving 50,000+ Overseas Pakistanis",
  "Available 24/7 for International Clients",
];

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Clients" },
  { icon: FileCheck, value: "100,000+", label: "Tax Returns Filed" },
  { icon: Award, value: "10+ Years", label: "Experience" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional tax consultants in Pakistan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium">Pakistan's #1 Tax Filing Service for Expats</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Expert Tax & Accounting Services for{" "}
            <span className="text-gradient">Overseas Pakistanis</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up stagger-1">
            File your Pakistani taxes from anywhere in the world. Our qualified tax consultants Hamza & Abdul Hadi provide comprehensive tax filing, NTN registration, and business services across Pakistan.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-10 animate-slide-up stagger-2">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up stagger-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services/tax-filing">
                File Your Taxes Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-slide-up stagger-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <stat.icon className="w-6 h-6 text-secondary" />
                  <span className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
