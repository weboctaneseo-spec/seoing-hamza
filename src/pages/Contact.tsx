import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { StructuredData } from "@/components/StructuredData";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 300 1234567", "+92 21 1234567"],
    action: "tel:+923001234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@befiller.pk", "support@befiller.pk"],
    action: "mailto:info@befiller.pk",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Office 123, Business Plaza", "Shahrah-e-Faisal, Karachi"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 for International Clients", "Mon-Sat: 9AM-6PM PKT"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Befiller Pakistan Tax Services</title>
        <meta 
          name="description" 
          content="Contact Befiller for expert tax and accounting services. Available 24/7 for overseas Pakistanis. Call +92 300 1234567 or email info@befiller.pk." 
        />
      </Helmet>
      <StructuredData 
        type="contact"
        pageTitle="Contact Us - Befiller Pakistan Tax Services"
        pageDescription="Contact Befiller for expert tax and accounting services. Available 24/7 for overseas Pakistanis."
        pageUrl="https://befiller.pk/contact"
      />

      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions about tax filing or our services? Our expert team is here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <div className="bg-accent rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">Quick response for urgent queries</p>
                    <a 
                      href="https://wa.me/923001234567" 
                      className="text-primary font-semibold hover:underline"
                    >
                      +92 300 1234567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input 
                      placeholder="+92 XXX XXXXXXX" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Input 
                      placeholder="How can we help?" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your tax or accounting needs..." 
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
