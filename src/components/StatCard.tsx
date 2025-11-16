import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-10 w-10 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-base text-white/80 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
