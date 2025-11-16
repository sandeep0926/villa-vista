import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center group cursor-pointer">
      <div className="mb-6 inline-flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Icon className="h-10 w-10 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
};

export default FeatureCard;
