import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface OverviewCardProps {
  icon: LucideIcon;
  amount: string | number;
  title: string;
  iconBg?: string;
  iconColor?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  icon: Icon,
  amount,
  title,
  iconBg = "bg-purple-100",
  iconColor = "text-purple-600",
}) => {
  return (
    <Card className="flex flex-col p-4 gap-4">
      <div
        className={`flex items-center justify-center w-12 h-12 p-2 rounded-full ${iconBg} ${iconColor}`}
      >
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-sm text-muted-foreground">{title}</h4>
        <p className="text-xl font-semibold">{amount}</p>
      </div>
    </Card>
  );
};
export default OverviewCard;
