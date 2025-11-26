import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Bed } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  featured?: boolean;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  rating, 
  reviews, 
  guests, 
  bedrooms,
  featured 
}: PropertyCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group overflow-hidden hover:shadow-medium transition-all duration-300 cursor-pointer"
      onClick={() => navigate('/villa/1')}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium text-sm">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviews})</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{guests} Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bedrooms} Beds</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground">/ night</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
