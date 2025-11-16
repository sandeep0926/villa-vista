import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  properties: number;
  subtitle?: string;
}

const DestinationCard = ({ image, title, properties, subtitle }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5" />
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              {subtitle && <p className="text-white/80 text-sm mt-1">{subtitle}</p>}
            </div>
          </div>
          <p className="text-white/90 text-sm">{properties} {properties === 1 ? 'Villa' : 'Villas'}</p>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
