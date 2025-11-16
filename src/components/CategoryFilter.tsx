import { Mountain, Waves, Building2, Landmark, Trees } from "lucide-react";
import { useState } from "react";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Beach Retreats");

  const categories = [
    { name: "Mountain Escapes", icon: Mountain },
    { name: "Beach Retreats", icon: Waves },
    { name: "Urban Getaways", icon: Building2 },
    { name: "Heritage Trails", icon: Landmark },
    { name: "Wildlife Retreats", icon: Trees },
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Dreamy Getaways, Luxurious Stays
        </h2>
        <p className="text-xl text-muted-foreground">
          Your Next Escape Awaits at Our Handpicked Locations
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;
          
          return (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                isActive
                  ? "bg-[#1F3D72] border-[#1F3D72] text-white shadow-lg"
                  : "bg-white border-border text-[#1F3D72] hover:border-[#1F3D72] hover:shadow-md"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-[#1F3D72]'}`} />
              <span className="font-medium text-base whitespace-nowrap">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
