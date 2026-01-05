import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="hero-gradient text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+92 300 1234567</span>
            </a>
            <a href="mailto:info@befiller.pk" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@befiller.pk</span>
            </a>
          </div>
          <p className="hidden md:block">Trusted by 50,000+ Overseas Pakistanis</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">B</span>
              </div>
              <span className="font-heading font-bold text-2xl text-primary">Befiller</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary">
                  Services <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link to={service.href}>{service.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary">
                  Cities <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {cities.map((city) => (
                    <DropdownMenuItem key={city.href} asChild>
                      <Link to={city.href}>{city.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/tax-calculator"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/tax-calculator") ? "text-primary" : "text-foreground"
                }`}
              >
                Tax Calculator
              </Link>

              <Link
                to="/ntn-verification"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/ntn-verification") ? "text-primary" : "text-foreground"
                }`}
              >
                NTN Verification
              </Link>

              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/services/tax-filing">File Taxes Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <nav className="container py-6 space-y-4">
              <Link to="/" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <div className="py-2">
                <p className="font-semibold text-primary mb-2">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block py-1.5 pl-4 text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="py-2">
                <p className="font-semibold text-primary mb-2">Cities</p>
                {cities.map((city) => (
                  <Link
                    key={city.href}
                    to={city.href}
                    className="block py-1.5 pl-4 text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
              <Link to="/tax-calculator" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>
                Tax Calculator
              </Link>
              <Link to="/ntn-verification" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>
                NTN Verification
              </Link>
              <Link to="/about" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/services/tax-filing">File Taxes Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
