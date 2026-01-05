import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { StructuredData } from "@/components/StructuredData";

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "We ensure 100% accuracy in every tax return and financial document we prepare.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Your satisfaction is our priority. We go above and beyond to meet your needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous learning and improvement to deliver the best services.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "24/7 availability to serve overseas Pakistanis across all time zones.",
  },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - Befiller Pakistan Tax Consultants</title>
        <meta 
          name="description" 
          content="Learn about Befiller, founded by Hamza & Abdul Hadi. Expert tax consultants serving 50,000+ overseas Pakistanis with professional tax filing and accounting services." 
        />
      </Helmet>
      <StructuredData 
        type="about"
        pageTitle="About Us - Befiller Pakistan Tax Consultants"
        pageDescription="Learn about Befiller, founded by Hamza & Abdul Hadi. Expert tax consultants serving 50,000+ overseas Pakistanis."
        pageUrl="https://befiller.pk/about"
      />

      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              About Befiller
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Your trusted partner for tax and accounting services in Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold mb-4">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Founded by Experts, Driven by Purpose
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Befiller was founded by Hamza and Abdul Hadi, two experienced tax professionals who understood the challenges faced by overseas Pakistanis when dealing with tax matters in their home country. With over a decade of combined experience in taxation and accounting, they set out to create a service that bridges the gap between Pakistani tax regulations and the needs of expats worldwide.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our mission is simple: to make tax compliance easy, affordable, and accessible for every Pakistani citizen, no matter where they are in the world. We leverage technology and expertise to provide seamless services across Karachi, Lahore, Islamabad, and all major cities of Pakistan.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, Befiller serves over 50,000 clients globally, with a team of qualified tax consultants registered with FBR. We handle everything from individual tax returns to complex business registrations, always with a commitment to accuracy, transparency, and client satisfaction.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                </div>
              </div>
            </div>
            <div className="bg-accent rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Meet Our Founders</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-xl">H</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Hamza</h4>
                    <p className="text-sm text-primary mb-2">Co-Founder & Tax Consultant</p>
                    <p className="text-sm text-muted-foreground">
                      FBR registered tax consultant with expertise in individual and corporate taxation. Specializes in overseas Pakistani tax matters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Abdul Hadi</h4>
                    <p className="text-sm text-primary mb-2">Co-Founder & Accountant</p>
                    <p className="text-sm text-muted-foreground">
                      Certified accountant with extensive experience in business accounting, financial statements, and SECP compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold mb-4">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Befiller for their tax and accounting needs.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
