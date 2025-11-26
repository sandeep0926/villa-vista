import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface Villa {
  id: number;
  title: string;
  location: string;
  price: string;
  coordinates: { lat: number; lng: number };
}

interface MapViewProps {
  villas: Villa[];
  selectedVilla: number | null;
  onSelectVilla: (id: number | null) => void;
}

const MapView = ({ villas, selectedVilla, onSelectVilla }: MapViewProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full bg-secondary/30 rounded-2xl overflow-hidden border border-border">
      {/* Map Placeholder with Interactive Pins */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        {/* India Map SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M400,100 L450,150 L480,200 L500,280 L480,350 L450,400 L400,450 L350,480 L300,450 L280,400 L260,350 L280,280 L300,200 L350,150 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>

        {/* Villa Pins */}
        <div className="absolute inset-0">
          {villas.map((villa, index) => {
            // Simple positioning based on index for demonstration
            const positions = [
              { top: "25%", left: "60%" },  // Goa
              { top: "35%", left: "40%" },  // Rajasthan
              { top: "70%", left: "45%" },  // Kerala
              { top: "15%", left: "50%" },  // Himachal
              { top: "45%", left: "55%" },  // Maharashtra
              { top: "20%", left: "55%" },  // Uttarakhand
            ];

            const position = positions[index % positions.length];

            return (
              <div
                key={villa.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: position.top, left: position.left }}
                onClick={() => onSelectVilla(villa.id)}
                onMouseEnter={() => onSelectVilla(villa.id)}
              >
                {/* Pin */}
                <div
                  className={`relative transition-all duration-300 ${
                    selectedVilla === villa.id
                      ? 'scale-125 z-50'
                      : 'scale-100 hover:scale-110'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      selectedVilla === villa.id
                        ? 'bg-primary text-primary-foreground ring-4 ring-primary/30'
                        : 'bg-white text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    <MapPin className="h-5 w-5" />
                  </div>

                  {/* Price Tag */}
                  <div
                    className={`absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all ${
                      selectedVilla === villa.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="bg-white text-foreground px-3 py-1.5 rounded-lg shadow-lg border border-border font-semibold text-sm">
                      {villa.price}
                    </div>
                    <div className="w-2 h-2 bg-white border-r border-b border-border transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </div>

                  {/* Hover Card */}
                  {selectedVilla === villa.id && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl border border-border p-3 z-50">
                      <div className="text-sm font-semibold text-foreground mb-1 line-clamp-1">
                        {villa.title}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {villa.location}
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {villa.price} <span className="text-muted-foreground font-normal">/ night</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pulse animation */}
                <div
                  className={`absolute inset-0 rounded-full bg-primary animate-ping opacity-20 ${
                    selectedVilla === villa.id ? 'block' : 'hidden'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-secondary transition-colors border border-border">
            <span className="text-lg font-bold text-foreground">+</span>
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-secondary transition-colors border border-border">
            <span className="text-lg font-bold text-foreground">−</span>
          </button>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 border border-border">
          <div className="text-xs font-semibold text-foreground mb-2">Legend</div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Villa Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
