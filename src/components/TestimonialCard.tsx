import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
  location: string;
}

const TestimonialCard = ({ name, image, rating, text, location }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-soft transition-all duration-300">
      <CardContent className="p-8">
        <Quote className="h-10 w-10 text-primary-light mb-4" />
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed italic">{text}</p>
        <div className="flex items-center gap-4">
          <img 
            src={image} 
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
