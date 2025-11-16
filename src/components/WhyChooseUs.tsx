import { Shield, DollarSign, Headphones, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "Every villa is personally inspected and verified by our expert team"
    },
    {
      icon: DollarSign,
      title: "Best Price Guarantee",
      description: "We ensure you get the best rates with our price match promise"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for a worry-free vacation experience"
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Quick and easy booking process with instant confirmation"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our exceptional service and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
