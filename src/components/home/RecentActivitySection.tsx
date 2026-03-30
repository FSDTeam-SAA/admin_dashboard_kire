import React from "react";
import {
  Calendar,
  UserPlus,
  CalendarX,
  Wallet,
  BarChart2,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const activities = [
  {
    icon: <Calendar className="w-4 h-4 text-slate-500" />,
    title: "New Booking: Luxury Spa Package",
    subtitle: "by Sarah Johnson • 2 mins ago",
    amount: "$120.00",
    status: "Confirmed",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    icon: <UserPlus className="w-4 h-4 text-slate-500" />,
    title: "New Vendor Registration",
    subtitle: "Eco-Friendly Cleaners LLC • 15 mins ago",
    status: "Pending Review",
    statusColor: "bg-slate-100 text-slate-500",
  },
  {
    icon: <CalendarX className="w-4 h-4 text-slate-500" />,
    title: "Booking Cancellation",
    subtitle: "Haircut appointment - Mike T. • 45 mins ago",
    amount: "$45.00",
    status: "Cancelled",
    statusColor: "bg-red-50 text-red-500",
  },
  {
    icon: <Wallet className="w-4 h-4 text-slate-500" />,
    title: "Payout Processed",
    subtitle: "Sent to Zenith Fitness Center • 2 hours ago",
    amount: "$2,450.00",
    status: "Paid",
    statusColor: "bg-[#E8F7F7] text-[#169C9F]",
  },
  {
    icon: <Calendar className="w-4 h-4 text-slate-500" />,
    title: "New Booking: Consultation",
    subtitle: "by Emma Watson • 3 hours ago",
    amount: "$85.00",
    status: "Confirmed",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
];

const topBusinesses = [
  {
    id: 1,
    name: "Urban Spa & Wellness",
    bookings: "48 bookings this week",
    growth: "+$2.4k",
  },
  {
    id: 2,
    name: "Glow Barbershop",
    bookings: "32 bookings this week",
    growth: "+$1.1k",
  },
  {
    id: 3,
    name: "Elite Auto Detailing",
    bookings: "24 bookings this week",
    growth: "+$0.9k",
  },
];

export default function RecentActivitySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* --- Recent Activity Column (2/3) --- */}
      <Card className="lg:col-span-2 rounded-[20px] border-slate-100 shadow-sm overflow-hidden bg-white">
        <div className="p-6 flex justify-between items-center border-b border-slate-50">
          <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
          <button className="text-sm font-bold text-[#169C9F] hover:underline">
            View all
          </button>
        </div>

        <div className="divide-y divide-slate-50">
          {activities.map((item, i) => (
            <div
              key={i}
              className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="text-right flex flex-col items-end gap-1.5">
                {item.amount && (
                  <p className="text-sm font-bold text-slate-700">
                    {item.amount}
                  </p>
                )}
                <span
                  className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tight ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* --- Sidebar Column (1/3) --- */}
      <div className="space-y-6">
        {/* Top Businesses */}
        <Card className="rounded-[20px] border-slate-100 shadow-sm p-6 bg-white">
          <h2 className="text-lg font-bold text-slate-900 mb-6">
            Top Businesses
          </h2>
          <div className="space-y-5">
            {topBusinesses.map((biz) => (
              <div key={biz.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    {biz.id}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">
                      {biz.name}
                    </p>
                    <p className="text-[10px] font-medium text-slate-400 mt-1">
                      {biz.bookings}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-bold text-[#169C9F]">{biz.growth}</p>
              </div>
            ))}
          </div>
          <Button className="w-full mt-8 bg-[#169C9F] hover:bg-[#138689] text-white font-bold h-11 rounded-xl">
            Vendor Reports
          </Button>
        </Card>

        {/* Usage Analytics */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#169C9F]">
            <BarChart2 size={18} />
            <span className="text-sm font-bold">Usage Analytics</span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">
            Platform load is optimal. Real-time updates active.
          </p>
          <div className="pt-2">
            <Progress value={65} className="h-2.5 bg-slate-100" />
            <div className="flex justify-between mt-2">
              <span className="text-[9px] font-bold text-slate-400 uppercase">
                Storage
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">
                65% Used
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
