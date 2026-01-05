import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to File Your Pakistani Taxes?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get expert tax advice from Hamza & Abdul Hadi. Our team is ready to help you with all your tax and accounting needs. Contact us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services/tax-filing">
                Start Tax Filing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5" />
                Book Free Call
              </Link>
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <MessageCircle className="w-5 h-5 text-secondary" />
            <span className="text-primary-foreground">
              WhatsApp us at{" "}
              <a href="https://wa.me/923001234567" className="font-semibold text-secondary hover:underline">
                +92 300 1234567
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
