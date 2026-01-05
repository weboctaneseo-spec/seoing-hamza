import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  { name: "Tax Filing", href: "/services/tax-filing" },
  { name: "NTN Registration", href: "/services/ntn-registration" },
  { name: "Business Registration", href: "/services/business-registration" },
  { name: "Sales Tax Registration", href: "/services/sales-tax" },
  { name: "Accounting Services", href: "/services/accounting" },
];

const cities = [
  { name: "Karachi", href: "/cities/karachi" },
  { name: "Lahore", href: "/cities/lahore" },
  { name: "Islamabad", href: "/cities/islamabad" },
  { name: "Rawalpindi", href: "/cities/rawalpindi" },
  { name: "Faisalabad", href: "/cities/faisalabad" },
  { name: "Multan", href: "/cities/multan" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Refund Policy", href: "/refund-policy" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-xl">B</span>
              </div>
              <span className="font-heading font-bold text-2xl text-background">Befiller</span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Pakistan's trusted tax and accounting partner for overseas Pakistanis. Expert services by Hamza & Abdul Hadi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-background/70 hover:text-secondary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link to={city.href} className="text-background/70 hover:text-secondary transition-colors">
                    Tax Services in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-background/70">+92 300 1234567</p>
                  <p className="text-background/70">+92 21 1234567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <p className="text-background/70">info@befiller.pk</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <p className="text-background/70">
                  Office 123, Business Plaza,<br />
                  Shahrah-e-Faisal, Karachi
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Befiller. All rights reserved. Owned by Hamza & Abdul Hadi.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-background/60 text-sm hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
