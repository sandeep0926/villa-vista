import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  subtitle?: string;
  properties: number;
}

const DestinationCard = ({ image, title, subtitle, properties }: DestinationCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${title}`);
  };

  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300" onClick={handleClick}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          {subtitle && (
            <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{subtitle}</span>
            </div>
          )}
          <p className="text-sm font-medium">{properties} Properties Available</p>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
