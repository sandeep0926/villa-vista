import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapView from "@/components/MapView";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Map, List } from "lucide-react";

const VillaMap = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [selectedVilla, setSelectedVilla] = useState<number | null>(null);

  const villas = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
      title: "Luxury Beachfront Villa",
      location: "North Goa, India",
      price: "₹15,000",
      rating: 4.9,
      reviews: 127,
      guests: 8,
      bedrooms: 4,
      coordinates: { lat: 15.2993, lng: 74.1240 },
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      title: "Heritage Villa in Udaipur",
      location: "Udaipur, Rajasthan",
      price: "₹18,000",
      rating: 4.8,
      reviews: 94,
      guests: 6,
      bedrooms: 3,
      coordinates: { lat: 24.5854, lng: 73.7125 },
      featured: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
      title: "Backwater Villa",
      location: "Alleppey, Kerala",
      price: "₹12,000",
      rating: 5.0,
      reviews: 156,
      guests: 10,
      bedrooms: 5,
      coordinates: { lat: 9.4981, lng: 76.3388 },
      featured: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074",
      title: "Mountain Villa Retreat",
      location: "Manali, Himachal Pradesh",
      price: "₹14,000",
      rating: 4.7,
      reviews: 82,
      guests: 6,
      bedrooms: 3,
      coordinates: { lat: 32.2432, lng: 77.1892 },
      featured: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      title: "Luxury Villa in Alibaug",
      location: "Alibaug, Maharashtra",
      price: "₹16,000",
      rating: 4.9,
      reviews: 143,
      guests: 8,
      bedrooms: 4,
      coordinates: { lat: 18.6414, lng: 72.8722 }
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      title: "Hill Station Villa",
      location: "Mussoorie, Uttarakhand",
      price: "₹13,000",
      rating: 4.8,
      reviews: 118,
      guests: 6,
      bedrooms: 3,
      coordinates: { lat: 30.4598, lng: 78.0644 }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Explore Villas on Map
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse {villas.length} properties across India
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                onClick={() => setViewMode("map")}
                className="gap-2"
              >
                <Map className="h-4 w-4" />
                Map
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                onClick={() => setViewMode("list")}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                List
              </Button>
            </div>
          </div>

          {viewMode === "map" ? (
            <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-250px)]">
              {/* Map View */}
              <div className="order-2 lg:order-1 h-full">
                <MapView
                  villas={villas}
                  selectedVilla={selectedVilla}
                  onSelectVilla={setSelectedVilla}
                />
              </div>

              {/* Villa Cards List */}
              <div className="order-1 lg:order-2 overflow-y-auto h-full space-y-4 pr-2">
                {villas.map((villa) => (
                  <div
                    key={villa.id}
                    className={`transition-all ${
                      selectedVilla === villa.id ? 'ring-2 ring-primary rounded-lg' : ''
                    }`}
                    onMouseEnter={() => setSelectedVilla(villa.id)}
                    onMouseLeave={() => setSelectedVilla(null)}
                  >
                    <PropertyCard {...villa} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villas.map((villa) => (
                <PropertyCard key={villa.id} {...villa} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VillaMap;
