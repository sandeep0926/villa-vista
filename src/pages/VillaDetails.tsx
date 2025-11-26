import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Star, Users, Bed, Bath, Home, Wifi, Car, 
  Tv, Wind, Coffee, Waves, ChevronLeft, ChevronRight,
  Calendar, Shield, CheckCircle2, Heart
} from "lucide-react";
import BookingCard from "@/components/BookingCard";
import ReviewSection from "@/components/ReviewSection";

const VillaDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Sample villa data
  const villa = {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "North Goa, India",
    price: 15000,
    rating: 4.9,
    reviews: 127,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
    ],
    description: "Experience the ultimate beachfront luxury in this stunning villa. Wake up to breathtaking ocean views, enjoy your private pool, and indulge in world-class amenities. Perfect for families and groups seeking an unforgettable coastal retreat.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Waves, label: "Private Pool" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Tv, label: "Smart TV" },
      { icon: Car, label: "Free Parking" },
      { icon: Coffee, label: "Full Kitchen" },
      { icon: Home, label: "Beach Access" },
      { icon: Users, label: "Chef Services" }
    ],
    houseRules: [
      "Check-in: After 2:00 PM",
      "Check-out: Before 11:00 AM",
      "No smoking inside the villa",
      "Pets allowed with prior approval",
      "Parties/events allowed with prior approval"
    ],
    host: {
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      joinedYear: 2019,
      verified: true
    },
    coordinates: {
      lat: 15.2993,
      lng: 74.1240
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % villa.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + villa.images.length) % villa.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Hero Image Section */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8 group">
            <img
              src={villa.images[currentImageIndex]}
              alt={villa.title}
              className="w-full h-full object-cover"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {villa.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {villa.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                  index === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-border'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header with Title and Wishlist */}
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-3">
                    {villa.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-foreground">{villa.rating}</span>
                      <span>({villa.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-5 w-5" />
                      <span>{villa.location}</span>
                    </div>
                  </div>
                  {/* Villa Quick Info */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-medium">{villa.guests} Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span className="font-medium">{villa.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="font-medium">{villa.bathrooms} Bathrooms</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full flex-shrink-0"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
              </div>

              {/* Description */}
              <div className="bg-secondary/50 p-6 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Villa</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{villa.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Villa Amenities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {villa.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-medium text-foreground text-lg">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* House Rules */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">House Rules</h2>
                <div className="space-y-3">
                  {villa.houseRules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Info */}
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={villa.host.image}
                      alt={villa.host.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {villa.host.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                        <Shield className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Hosted by {villa.host.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Hosting since {villa.host.joinedYear}
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Contact Host
                </Button>
              </div>

              {/* Reviews */}
              <ReviewSection rating={villa.rating} totalReviews={villa.reviews} />
            </div>

            {/* Booking Card - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingCard price={villa.price} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VillaDetails;
