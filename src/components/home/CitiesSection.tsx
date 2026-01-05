import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  { name: "Karachi", description: "Pakistan's financial hub", href: "/cities/karachi" },
  { name: "Lahore", description: "Cultural capital", href: "/cities/lahore" },
  { name: "Islamabad", description: "Federal capital", href: "/cities/islamabad" },
  { name: "Rawalpindi", description: "Twin city services", href: "/cities/rawalpindi" },
  { name: "Faisalabad", description: "Industrial center", href: "/cities/faisalabad" },
  { name: "Multan", description: "South Punjab hub", href: "/cities/multan" },
];

export const CitiesSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-4">SERVICE LOCATIONS</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Tax Services Across Pakistan
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive tax and accounting services in all major cities of Pakistan. Our local expertise combined with global reach ensures seamless service for overseas Pakistanis.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city, index) => (
            <Link
              key={index}
              to={city.href}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all text-center border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{city.name}</h3>
              <p className="text-sm text-muted-foreground">{city.description}</p>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/cities/karachi"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Service Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
