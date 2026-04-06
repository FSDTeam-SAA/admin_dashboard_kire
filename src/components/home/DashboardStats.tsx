"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {
  Users,
  Calendar,
  CalendarDays,
  Briefcase,
  LayoutGrid,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface DashboardOverviewResponse {
  statusCode: number;
  message: string;
  data: {
    success: boolean;
    message: string;
    data: {
      totalCustomers: number;
      totalBookings: number;
      todayBookings: number;
      totalBusinesses: number;
      totalServices: number;
    };
  };
}

const fetchDashboardOverview = async (
  token: string,
): Promise<DashboardOverviewResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/dashboard/overview`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard overview");
  }

  return response.json();
};

const formatNumber = (value: number) => value.toLocaleString();

export default function DashboardStats() {
  const session = useSession();
  const token = session.data?.user?.accessToken;

  const { data } = useQuery({
    queryKey: ["dashboard-overview"],
    queryFn: () => fetchDashboardOverview(token as string),
    enabled: !!token,
  });

  const overview = data?.data?.data;

  const stats = [
    {
      label: "Customers",
      value: formatNumber(overview?.totalCustomers ?? 0),
      icon: Users,
    },
    {
      label: "Total Bookings",
      value: formatNumber(overview?.totalBookings ?? 0),
      icon: CalendarDays,
    },
    {
      label: "Today Bookings",
      value: formatNumber(overview?.todayBookings ?? 0),
      icon: Calendar,
    },
    {
      label: "Businesses",
      value: formatNumber(overview?.totalBusinesses ?? 0),
      icon: Briefcase,
    },
    {
      label: "Services",
      value: formatNumber(overview?.totalServices ?? 0),
      icon: LayoutGrid,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  ">
      {stats.map((stat) => (
        <Card
          key={stat.label}
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
