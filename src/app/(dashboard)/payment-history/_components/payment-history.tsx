import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";

// --- Types ---

interface PaymentStatProps {
  label: string;
  value: string;
}

interface PaymentRecord {
  id: string;
  businessName: string;
  planName: string;
  amount: string;
  status: "CONFIRMED" | "PENDING" | "CANCELLED";
}

// --- Sub-Components ---

const StatBox: React.FC<PaymentStatProps> = ({ label, value }) => (
  <Card className="border-none shadow-sm bg-white rounded-xl">
    <CardContent className="p-6">
      <p className="text-slate-400 text-xs font-medium mb-2 uppercase tracking-tight">
        {label}
      </p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
    </CardContent>
  </Card>
);

const StatusBadge: React.FC<{ status: PaymentRecord["status"] }> = ({
  status,
}) => {
  const styles = {
    CONFIRMED: "bg-blue-50 text-blue-500 hover:bg-blue-50",
    PENDING: "bg-orange-50 text-orange-500 hover:bg-orange-50",
    CANCELLED: "bg-red-50 text-red-500 hover:bg-red-50",
  };

  return (
    <Badge
      className={`border-none font-bold text-[10px] px-3 py-1 rounded-full shadow-none ${styles[status]}`}
    >
      {status}
    </Badge>
  );
};

// --- Main Component ---

const PaymentHistory: React.FC = () => {
  const payments: PaymentRecord[] = [
    {
      id: "INV-1023",
      businessName: "Lumina Wellness Studio",
      planName: "Professional",
      amount: "$49",
      status: "CONFIRMED",
    },
    {
      id: "INV-1024",
      businessName: "Green Leaf Yoga",
      planName: "Professional",
      amount: "$35",
      status: "PENDING",
    },
    {
      id: "INV-1025",
      businessName: "Urban Fitness Hub",
      planName: "Professional",
      amount: "$60",
      status: "CONFIRMED",
    },
    {
      id: "INV-1026",
      businessName: "Zen Space Meditation",
      planName: "Professional",
      amount: "$40",
      status: "CANCELLED",
    },
    {
      id: "INV-1027",
      businessName: "Pure Harmony Massage",
      planName: "Professional",
      amount: "$70",
      status: "CONFIRMED",
    },
    {
      id: "INV-1028",
      businessName: "Vitality Nutrition",
      planName: "Professional",
      amount: "$55",
      status: "PENDING",
    },
    {
      id: "INV-1029",
      businessName: "Balanced Body Pilates",
      planName: "Professional",
      amount: "$45",
      status: "CONFIRMED",
    },
    {
      id: "INV-1030",
      businessName: "Sunshine Dance Studio",
      planName: "Professional",
      amount: "$50",
      status: "PENDING",
    },
    {
      id: "INV-1031",
      businessName: "Core Strength Training",
      planName: "Professional",
      amount: "$65",
      status: "CONFIRMED",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Header with Action Button */}
      <header className="flex justify-between items-start mb-8 pt-6">
        <h1 className="text-3xl font-serif font-bold text-slate-900">
          Payment History
        </h1>
        <Link href={`/payment-history/add-payment-gateway`}>
          <Button className="bg-[#00a39e] hover:bg-[#008c88] text-white rounded-lg px-6">
            Add Payment Gateway
          </Button>
        </Link>
      </header>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatBox label="Total Revenue" value="$128,450.00" />
        <StatBox label="Successful Payments" value="1,240" />
        <StatBox label="Pending Payouts" value="$12,00.00" />
      </div>

      {/* Data Table Card */}
      <Card className="border-none shadow-sm bg-white rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-100 h-14">
              <TableHead className="font-bold text-slate-800 pl-8">
                Invoice ID
              </TableHead>
              <TableHead className="font-bold text-slate-800">
                Business Name
              </TableHead>
              <TableHead className="font-bold text-slate-800">
                Plan Name
              </TableHead>
              <TableHead className="font-bold text-slate-800">Amount</TableHead>
              <TableHead className="font-bold text-slate-800 text-center">
                Status
              </TableHead>
              <TableHead className="font-bold text-slate-800 text-right pr-8">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((row) => (
              <TableRow
                key={row.id}
                className="border-slate-50 hover:bg-slate-50/50 transition-colors h-16"
              >
                <TableCell className="text-slate-600 pl-8 font-medium">
                  {row.id}
                </TableCell>
                <TableCell className="text-slate-600">
                  {row.businessName}
                </TableCell>
                <TableCell className="text-slate-600">{row.planName}</TableCell>
                <TableCell className="text-slate-600 font-semibold">
                  {row.amount}
                </TableCell>
                <TableCell className="text-center">
                  <StatusBadge status={row.status} />
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex justify-end gap-3">
                    <Link href={`/payment-history/adadfad`}>
                      <button className="text-[#00a39e] hover:bg-[#e6f6f4] p-1.5 rounded transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </Link>
                    <button className="text-red-400 hover:bg-red-50 p-1.5 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default PaymentHistory;
