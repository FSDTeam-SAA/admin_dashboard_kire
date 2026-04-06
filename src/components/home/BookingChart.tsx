"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ChartMode = "monthly" | "yearly";

interface BookingTrendResponse {
  statusCode: number;
  message: string;
  data: {
    success: boolean;
    message: string;
    data: {
      selectedYear: number;
      monthly: {
        month: number;
        monthName: string;
        totalBookings: number;
      }[];
      yearly: {
        year: number;
        totalBookings: number;
      }[];
    };
  };
}

type BookingTrendTooltipProps = {
  active?: boolean;
  payload?: readonly { payload: { name: string; total: number } }[];
};

const BookingTrendTooltip = ({ active, payload }: BookingTrendTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const point = payload[0]?.payload as { name: string; total: number };

  return (
    <div className="bg-white p-3 border border-slate-100 rounded-xl shadow-xl text-center">
      <p className="text-[10px] text-slate-400 font-bold uppercase">
        {point.name}
      </p>
      <p className="text-sm font-black text-[#169C9F]">
        {point.total.toLocaleString()}
      </p>
    </div>
  );
};

const fetchBookingTrend = async (
  token: string,
  year: number,
): Promise<BookingTrendResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/dashboard/bookings-trend?year=${year}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch booking trend");
  }

  return response.json();
};

export function BookingChart() {
  const currentYear = new Date().getFullYear();
  const [mode, setMode] = useState<ChartMode>("monthly");
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const session = useSession();
  const token = session.data?.user?.accessToken;

  const { data } = useQuery({
    queryKey: ["booking-trend", selectedYear],
    queryFn: () => fetchBookingTrend(token as string, selectedYear),
    enabled: !!token,
  });

  const trend = data?.data?.data;

  const monthData =
    trend?.monthly?.map((item) => ({
      name: item.monthName,
      total: item.totalBookings,
    })) ?? [];

  const yearData =
    trend?.yearly?.map((item) => ({
      name: String(item.year),
      total: item.totalBookings,
    })) ?? [];

  const chartData = mode === "monthly" ? monthData : yearData;

  const yearOptions = trend?.yearly?.length
    ? trend.yearly.map((item) => item.year)
    : [
        currentYear - 4,
        currentYear - 3,
        currentYear - 2,
        currentYear - 1,
        currentYear,
      ];

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm ">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Today Bookings</h2>
          <p className="text-xs text-slate-400 font-medium">
            Track booking trends by month and year.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={String(selectedYear)}
            onValueChange={(value) => setSelectedYear(Number(value))}
          >
            <SelectTrigger className="w-24 h-8 text-xs bg-slate-50 border-none rounded-lg font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {yearOptions.map((year) => (
                <SelectItem key={year} value={String(year)}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={mode}
            onValueChange={(value) => setMode(value as ChartMode)}
          >
            <SelectTrigger className="w-24 h-8 text-xs bg-slate-50 border-none rounded-lg font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#169C9F" stopOpacity={0.05} />
                <stop offset="95%" stopColor="#169C9F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="#F1F5F9"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip content={<BookingTrendTooltip />} />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#159A9C"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="#F0F9F8BF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
