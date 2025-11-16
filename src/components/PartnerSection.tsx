import { Button } from "@/components/ui/button";

const PartnerSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-lg">
              PARTNER WITH US
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Let Your Second Home Welcome the World
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With Lost Traveller Villas, your second home becomes a curated escape expertly managed, 
              beautifully maintained, & thoughtfully shared.
            </p>
            
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 px-8 h-12 rounded-full font-medium"
            >
              Learn More
            </Button>
          </div>

          {/* Right Side - Image with Badges */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
                alt="Luxury villa at night"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Badges */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm">
                  <span className="text-primary font-bold">Tailored</span>{" "}
                  <span className="text-foreground">earnings, zero hassle.</span>
                </p>
              </div>
              
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm">
                  <span className="text-primary font-bold">Fully</span>{" "}
                  <span className="text-foreground">managed by experts.</span>
                </p>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm">
                  <span className="text-primary font-bold">Trusted</span>{" "}
                  <span className="text-foreground">by 350+ homeowners.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
