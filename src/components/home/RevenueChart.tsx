"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: "Feb", total: 400, color: "#a5d8d9" },
  { name: "Mar", total: 600, color: "#a5d8d9" },
  { name: "Apr", total: 500, color: "#a5d8d9" },
  { name: "May", total: 600, color: "#a5d8d9" },
  { name: "Jun", total: 800, color: "#5bb6b8" }, // Mid teal
  { name: "Jul", total: 600, color: "#a5d8d9" },
  { name: "Aug", total: 1000, color: "#44a4a6" }, // Darker teal
  { name: "Sep", total: 600, color: "#a5d8d9" },
  { name: "Oct", total: 800, color: "#5bb6b8" },
  { name: "Nov", total: 1100, color: "#379395" }, // Deepest teal
  { name: "Dec", total: 1300, color: "#2d8587" }, // Highlighted
  { name: "Jan", total: 500, color: "#169C9F" },
];

export function RevenueChart() {
  return (
    <div className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-sm">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Revenue</h2>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Track total revenue, platform commission, and payouts over time.
          </p>
        </div>

        <Select defaultValue="yearly">
          <SelectTrigger className="w-24 h-9 text-xs bg-white border-slate-200 rounded-lg font-bold text-slate-600">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yearly">Yearly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Chart Section */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -40, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#F1F5F9"
              strokeDasharray="0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              dy={15}
            />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-slate-100 rounded-xl shadow-lg">
                      <p className="text-sm font-bold text-[#169C9F]">
                        ${payload[0].value}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="total"
              radius={[6, 6, 6, 6]} // Rounded top and bottom
              barSize={32}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
