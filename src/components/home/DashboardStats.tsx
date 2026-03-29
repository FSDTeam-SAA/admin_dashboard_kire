import {
  Users,
  Calendar,
  Briefcase,
  LayoutGrid,
  DollarSign,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "Customers", value: "128", icon: Users },
  { label: "Today Bookings", value: "1,482", icon: Calendar },
  { label: "Businesses", value: "150", icon: Briefcase },
  { label: "Services", value: "215", icon: LayoutGrid },
  { label: "Revenue", value: "$42,500", icon: DollarSign },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 bg-[#F8FAFB]">
      {stats.map((stat, i) => (
        <Card
          key={i}
          className="p-5 border-none shadow-sm rounded-2xl bg-white flex flex-col gap-4"
        >
          {/* Icon Header */}
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#E8F7F7]">
            <stat.icon className="w-5 h-5 text-[#169C9F]" />
          </div>

          {/* Label and Value */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-400">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {stat.value}
            </h3>
          </div>
        </Card>
      ))}
    </div>
  );
}
