import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

const DestinationVillas = () => {
  const { destination } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");

  // Sample villas data - would come from API/database
  const allVillas = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
      title: "Luxury Beachfront Villa",
      location: "North Goa, Goa",
      price: "₹15,000",
      rating: 4.9,
      reviews: 127,
      guests: 8,
      bedrooms: 4,
      featured: true,
      destination: "Goa"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      title: "Beach Villa in South Goa",
      location: "South Goa, Goa",
      price: "₹14,500",
      rating: 4.9,
      reviews: 201,
      guests: 10,
      bedrooms: 5,
      featured: true,
      destination: "Goa"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      title: "Heritage Villa in Udaipur",
      location: "Udaipur, Rajasthan",
      price: "₹18,000",
      rating: 4.8,
      reviews: 94,
      guests: 6,
      bedrooms: 3,
      featured: true,
      destination: "Rajasthan"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
      title: "Royal Villa in Jaipur",
      location: "Jaipur, Rajasthan",
      price: "₹20,000",
      rating: 4.7,
      reviews: 89,
      guests: 8,
      bedrooms: 4,
      featured: true,
      destination: "Rajasthan"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
      title: "Backwater Villa in Alleppey",
      location: "Alleppey, Kerala",
      price: "₹12,000",
      rating: 5.0,
      reviews: 156,
      guests: 10,
      bedrooms: 5,
      featured: true,
      destination: "Kerala"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087",
      title: "Spice Plantation Villa",
      location: "Munnar, Kerala",
      price: "₹11,500",
      rating: 4.8,
      reviews: 167,
      guests: 8,
      bedrooms: 4,
      featured: true,
      destination: "Kerala"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074",
      title: "Mountain Villa in Manali",
      location: "Manali, Himachal Pradesh",
      price: "₹14,000",
      rating: 4.7,
      reviews: 82,
      guests: 6,
      bedrooms: 3,
      featured: true,
      destination: "Himachal Pradesh"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070",
      title: "Luxury Villa in Shimla",
      location: "Shimla, Himachal Pradesh",
      price: "₹15,500",
      rating: 5.0,
      reviews: 134,
      guests: 6,
      bedrooms: 3,
      featured: true,
      destination: "Himachal Pradesh"
    }
  ];

  // Filter villas by destination
  const destinationVillas = allVillas.filter(
    villa => villa.destination.toLowerCase() === destination?.toLowerCase()
  );

  const displayedVillas = destinationVillas.filter(villa =>
    villa.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    villa.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">India</span>
              <span>/</span>
              <span className="text-sm font-medium text-foreground">{destination}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Villas in {destination}
            </h1>
            <p className="text-xl text-muted-foreground">
              {displayedVillas.length} properties available
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search villas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under ₹10,000</SelectItem>
                  <SelectItem value="medium">₹10,000 - ₹15,000</SelectItem>
                  <SelectItem value="high">Above ₹15,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Villa Grid */}
          {displayedVillas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedVillas.map((villa) => (
                <PropertyCard key={villa.id} {...villa} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No villas found in {destination}</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationVillas;
