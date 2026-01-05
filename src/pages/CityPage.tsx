import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, FileText, Building2, Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CTASection } from "@/components/home/CTASection";

const cityData: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  population: string;
  taxOffice: string;
}> = {
  karachi: {
    name: "Karachi",
    description: "Pakistan's largest city and financial hub",
    longDescription: "Karachi, the city of lights, is Pakistan's largest metropolitan and the economic powerhouse of the nation. Home to the Karachi Stock Exchange and headquarters of major banks and corporations, Karachi generates a significant portion of Pakistan's tax revenue. Befiller provides comprehensive tax and accounting services to individuals and businesses throughout Karachi, from Clifton to Korangi, Defence to North Nazimabad.",
    population: "15 million+",
    taxOffice: "Regional Tax Office, Karachi",
  },
  lahore: {
    name: "Lahore",
    description: "Cultural capital and business center",
    longDescription: "Lahore, the heart of Pakistan, is not just the cultural capital but also a thriving business center. From the bustling markets of Anarkali to the corporate offices on Mall Road, Lahore's economy is diverse and dynamic. Befiller offers tailored tax solutions for Lahore's salaried professionals, business owners, and overseas Lahoris who need expert tax filing services in their hometown.",
    population: "12 million+",
    taxOffice: "Regional Tax Office, Lahore",
  },
  islamabad: {
    name: "Islamabad",
    description: "Federal capital with diplomatic community",
    longDescription: "Islamabad, the beautiful capital city, is home to government institutions, diplomatic missions, and a growing IT sector. The city's unique position as the federal capital means its residents often deal with complex tax situations, especially those in government service or working with international organizations. Befiller specializes in handling the specific tax requirements of Islamabad's diverse professional community.",
    population: "2 million+",
    taxOffice: "Regional Tax Office, Islamabad",
  },
  rawalpindi: {
    name: "Rawalpindi",
    description: "Twin city with military and commercial significance",
    longDescription: "Rawalpindi, the twin city of Islamabad, has its own distinct economic identity with a mix of military establishments, commercial markets, and small businesses. From Raja Bazaar to Saddar, Rawalpindi's traders and professionals need reliable tax services. Befiller provides accessible tax filing and business registration services for Rawalpindi's entrepreneurs and salaried individuals.",
    population: "4 million+",
    taxOffice: "Regional Tax Office, Rawalpindi",
  },
  faisalabad: {
    name: "Faisalabad",
    description: "Industrial hub and textile capital",
    longDescription: "Faisalabad, known as the Manchester of Pakistan, is the industrial backbone of the nation. The city's textile industry generates massive employment and business activity. Befiller understands the unique tax challenges of manufacturers, traders, and factory owners in Faisalabad. Our expert team handles GST registration, sales tax returns, and corporate tax filing for businesses of all sizes.",
    population: "7 million+",
    taxOffice: "Regional Tax Office, Faisalabad",
  },
  multan: {
    name: "Multan",
    description: "South Punjab's commercial center",
    longDescription: "Multan, the city of saints, is South Punjab's commercial and agricultural hub. Known for its mangoes, cotton, and handicrafts, Multan's economy is driven by agriculture and trade. Befiller provides comprehensive tax services for Multan's farmers, traders, and professionals. We help with agricultural income declarations, NTN registration, and business tax compliance.",
    population: "5 million+",
    taxOffice: "Regional Tax Office, Multan",
  },
};

const services = [
  { icon: FileText, name: "Income Tax Filing", description: "Complete tax return filing for individuals and businesses" },
  { icon: Building2, name: "NTN Registration", description: "Fast NTN registration with FBR" },
  { icon: Calculator, name: "Business Registration", description: "Company formation and SECP registration" },
];

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityInfo = city ? cityData[city.toLowerCase()] : null;

  if (!cityInfo) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find information for this city.</p>
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
        <title>Tax Filing Services in {cityInfo.name} - Befiller Pakistan</title>
        <meta 
          name="description" 
          content={`Expert tax filing, NTN registration, and accounting services in ${cityInfo.name}. Befiller provides professional tax solutions for individuals and businesses in ${cityInfo.name}, Pakistan.`}
        />
        <meta name="keywords" content={`tax filing ${cityInfo.name}, NTN registration ${cityInfo.name}, tax consultant ${cityInfo.name}, FBR ${cityInfo.name}`} />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              Tax Services in {cityInfo.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Professional Tax & Accounting Services in {cityInfo.name}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {cityInfo.description}. Get expert tax filing, NTN registration, and business accounting services from Befiller's qualified consultants.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+923001234567">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* City Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Tax Services in {cityInfo.name}, Pakistan
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cityInfo.longDescription}
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a salaried professional working in {cityInfo.name}, a business owner operating in the city, or an overseas Pakistani with property and investments in {cityInfo.name}, Befiller is your trusted tax partner. Our team of FBR-registered consultants ensures complete compliance while maximizing your tax benefits.
              </p>

              {/* Services */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Our Services in {cityInfo.name}
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                    <service.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Why Choose Befiller in {cityInfo.name}?
              </h3>
              <ul className="space-y-4">
                {[
                  `Local expertise combined with knowledge of ${cityInfo.name}'s business environment`,
                  "FBR registered tax consultants with years of experience",
                  "Fast processing - NTN registration within 48 hours",
                  "Dedicated support for overseas Pakistanis with interests in " + cityInfo.name,
                  "Competitive and transparent pricing with no hidden fees",
                  "24/7 availability for international clients",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-accent rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  {cityInfo.name} Quick Facts
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Population</span>
                    <span className="font-semibold text-foreground">{cityInfo.population}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">FBR Office</span>
                    <span className="font-semibold text-foreground text-right text-sm">{cityInfo.taxOffice}</span>
                  </li>
                </ul>
                <div className="space-y-4">
                  <Button variant="default" className="w-full" asChild>
                    <Link to="/services/tax-filing">
                      File Taxes Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Contact Us</Link>
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

export default CityPage;
