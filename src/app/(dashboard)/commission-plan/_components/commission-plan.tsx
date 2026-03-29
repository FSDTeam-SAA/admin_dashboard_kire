import React from "react";
import { CreditCard, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// --- Types ---

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

interface BookingData {
  planName: string;
  type: string;
  value: string;
  status: "ACTIVE" | "INACTIVE";
}

// --- Sub-Components ---

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
  <Card className="border-none shadow-sm bg-white rounded-xl">
    <CardContent className="p-6">
      <div className="bg-[#f0f9f9] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
    </CardContent>
  </Card>
);

// --- Main Component ---

const CommissionPlan: React.FC = () => {
  const bookings: BookingData[] = Array(6).fill({
    planName: "Enterprise",
    type: "Percentage",
    value: "10%",
    status: "ACTIVE",
  });

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Page Title */}
      <header className="mb-8 pt-6">
        <h1 className="text-3xl font-serif font-bold text-slate-900">
          Commission Plan
        </h1>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Commission Earned"
          value="$128,450.00"
          icon={<CreditCard className="w-5 h-5 text-[#00a39e]" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$42,300.00"
          icon={<TrendingUp className="w-5 h-5 text-[#00a39e]" />}
        />
        <StatCard
          title="Average Commission Rate"
          value="10%"
          icon={<BarChart3 className="w-5 h-5 text-[#00a39e]" />}
        />
      </div>

      {/* Recent Bookings Table */}
      <Card className="border-none shadow-sm bg-white rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h2 className="text-sm font-bold text-slate-800">Recent Bookings</h2>
        </div>
        <Table>
          <TableHeader className="bg-white">
            <TableRow className="hover:bg-transparent border-slate-100">
              <TableHead className="font-bold text-slate-900 h-12">
                Plan Name
              </TableHead>
              <TableHead className="font-bold text-slate-900 h-12">
                Type
              </TableHead>
              <TableHead className="font-bold text-slate-900 h-12">
                Value
              </TableHead>
              <TableHead className="font-bold text-slate-900 h-12 text-right pr-8">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((row, index) => (
              <TableRow
                key={index}
                className="border-slate-50 hover:bg-slate-50/50 transition-colors"
              >
                <TableCell className="py-4 text-slate-600">
                  {row.planName}
                </TableCell>
                <TableCell className="py-4 text-slate-600">
                  {row.type}
                </TableCell>
                <TableCell className="py-4 text-slate-600">
                  {row.value}
                </TableCell>
                <TableCell className="py-4 text-right pr-8">
                  <Badge
                    variant="secondary"
                    className="bg-[#e6f6f4] text-[#00a39e] border-none font-bold text-[10px] px-2.5 py-0.5"
                  >
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default CommissionPlan;
