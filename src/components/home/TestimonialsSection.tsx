import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    location: "Dubai, UAE",
    rating: 5,
    text: "As an overseas Pakistani living in Dubai, filing taxes back home was always a hassle. Befiller made it incredibly easy. Hamza and his team handled everything professionally.",
  },
  {
    name: "Fatima Malik",
    location: "London, UK",
    rating: 5,
    text: "I needed NTN registration urgently for a property purchase in Lahore. Abdul Hadi completed the process within 48 hours. Excellent service and communication throughout.",
  },
  {
    name: "Muhammad Raza",
    location: "Toronto, Canada",
    rating: 5,
    text: "Been using Befiller for 3 years now for my annual tax returns. Their team understands the complexities of overseas income and always ensures maximum tax savings.",
  },
  {
    name: "Aisha Siddiqui",
    location: "Jeddah, Saudi Arabia",
    rating: 5,
    text: "The business registration service was smooth and hassle-free. They handled all the SECP paperwork while I focused on my work. Highly recommended for busy professionals.",
  },
  {
    name: "Usman Ali",
    location: "New York, USA",
    rating: 5,
    text: "What impressed me most was their 24/7 availability. Despite the time difference, I always got prompt responses. True professionals who care about their clients.",
  },
  {
    name: "Sara Ahmed",
    location: "Sydney, Australia",
    rating: 5,
    text: "Filing taxes as a freelancer with international income seemed complicated until I found Befiller. They explained everything clearly and filed my returns perfectly.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-4">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied overseas Pakistanis who trust Befiller for their tax and accounting needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
