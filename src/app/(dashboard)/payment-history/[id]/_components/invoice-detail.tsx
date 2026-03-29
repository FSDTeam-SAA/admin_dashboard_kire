import React from "react";
import { Download, Printer } from "lucide-react";
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

const InvoiceDetail: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Page Header */}
      <header className="mb-8 pt-6">
        <h1 className="text-3xl font-serif font-bold text-slate-900">
          Subscription & Promotion
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Define how your platform generates revenue and manage vendor tiers.
        </p>
      </header>

      <Card className="border-none shadow-sm bg-white rounded-xl overflow-hidden">
        <CardContent className="p-10">
          {/* Invoice Top Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">
                Invoice #INV-2024-001
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Issued on October 24, 2024
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#00a39e] hover:bg-[#008c88] text-white gap-2 h-10 px-4">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
              <Button
                variant="outline"
                className="border-[#00a39e] text-[#00a39e] hover:bg-slate-50 gap-2 h-10 px-4"
              >
                <Printer className="w-4 h-4" /> Print
              </Button>
            </div>
          </div>

          {/* Transaction Metadata */}
          <div className="flex justify-between items-center py-6 border-y border-slate-50 mb-10">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                Paid via Visa
              </p>
              <p className="text-xl font-bold text-slate-600 mt-1">
                Transaction ID: TXN_882910293
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-300 text-xs italic">
                Securely processed via Stripe
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Business Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">
                Business Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-400 text-xs">Business Name</p>
                  <p className="font-bold text-slate-900">
                    Acme Global Solutions
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Owner Name</p>
                  <p className="font-bold text-slate-900">Johnathon Doe</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Email Address</p>
                  <p className="font-bold text-slate-900">
                    j.doe@acmeglobal.com
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Phone</p>
                  <p className="font-bold text-slate-900">+1 (555) 234-5678</p>
                </div>
              </div>
            </div>

            {/* Subscription Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">
                Subscription Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-400 text-xs">Plan Name</p>
                  <p className="font-bold text-slate-900">Professional Plan</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Billing Cycle</p>
                  <p className="font-bold text-slate-900">Monthly</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Start Date</p>
                  <p className="font-bold text-slate-900">Jan 24, 2024</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Next Billing Date</p>
                  <p className="font-bold text-slate-900">Nov 24, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Breakdown Table */}
          <Table>
            <TableHeader className="bg-transparent border-none">
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="text-slate-400 font-medium">
                  Description
                </TableHead>
                <TableHead className="text-slate-400 font-medium text-right">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-50 hover:bg-transparent">
                <TableCell className="py-4 font-bold text-slate-700">
                  Professional Plan - October 2024
                </TableCell>
                <TableCell className="py-4 text-right font-bold text-slate-900">
                  $99.00
                </TableCell>
              </TableRow>
              <TableRow className="border-slate-50 hover:bg-transparent">
                <TableCell className="py-4 font-bold text-slate-700">
                  Tax (8%)
                </TableCell>
                <TableCell className="py-4 text-right font-bold text-slate-900">
                  $7.92
                </TableCell>
              </TableRow>
              <TableRow className="border-slate-50 hover:bg-transparent">
                <TableCell className="py-4 font-bold text-slate-700">
                  Seasonal Discount (10% Off)
                </TableCell>
                <TableCell className="py-4 text-right font-bold text-slate-900">
                  $9.90
                </TableCell>
              </TableRow>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="pt-6 pb-2 text-xl font-bold text-[#00a39e]">
                  Total Amount
                </TableCell>
                <TableCell className="pt-6 pb-2 text-right text-xl font-bold text-[#00a39e]">
                  $97.02
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceDetail;
