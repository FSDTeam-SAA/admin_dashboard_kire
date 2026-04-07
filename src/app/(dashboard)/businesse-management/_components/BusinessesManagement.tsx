"use client";

import { Eye, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface Business {
  _id: string;
  businessName: string;
  ownerId: {
    fullName: string;
  };
  sector: string;
  city: string;
  createdAt: string;
  status: string;
  totalStaff: number;
}

export default function BusinessesManagement() {
  const session = useSession();
  const token = session.data?.user?.accessToken || "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["businesses"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/businesses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.ok) throw new Error("Failed to fetch businesses");

      return res.json();
    },
    enabled: !!token,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  const businesses: Business[] = data?.data || [];

  return (
    <div className="min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Businesses Management
        </h1>
        <p className="text-xs text-slate-400 font-medium">
          Review and manage {businesses.length} business registrations.
        </p>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          {
            l: "Pending",
            v: businesses.filter((b) => b.status === "pending").length,
          },
          {
            l: "Activated",
            v: businesses.filter((b) => b.status === "activated").length,
          },
          { l: "Total", v: businesses.length },
        ].map((s, i) => (
          <Card key={i} className="p-6 rounded-xl border-slate-100 shadow-sm">
            <p className="text-xs font-medium text-slate-400 mb-2">{s.l}</p>
            <p className="text-2xl font-bold text-slate-800 tracking-tight">
              {s.v}
            </p>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[20px] border border-slate-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="py-5 px-6 font-bold text-slate-800">
                Business Name
              </TableHead>
              <TableHead className="font-bold text-slate-800">Owner</TableHead>
              <TableHead className="font-bold text-slate-800">Sector</TableHead>
              <TableHead className="font-bold text-slate-800">City</TableHead>
              <TableHead className="font-bold text-slate-800">Staff</TableHead>
              <TableHead className="font-bold text-slate-800">
                Created At
              </TableHead>
              <TableHead className="font-bold text-slate-800 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {businesses.map((biz) => (
              <TableRow
                key={biz._id}
                className="border-slate-50 hover:bg-slate-50/50"
              >
                <TableCell className="py-5 px-6 font-semibold text-slate-700">
                  {biz.businessName}
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {biz.ownerId.fullName}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight bg-[#E8F7F7] text-[#169C9F]`}
                  >
                    {biz.sector}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {biz.city}
                </TableCell>
                <TableCell className="font-bold text-slate-700">
                  {biz.totalStaff}
                </TableCell>
                <TableCell className="text-sm text-slate-500">
                  {new Date(biz.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-3">
                    <Link
                      className="cursor-pointer"
                      href={`/businesse-management/${biz._id}`}
                    >
                      <button className="text-[#169C9F] hover:bg-[#E8F7F7] p-2 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                    </Link>
                    <button className="text-red-400 hover:bg-red-50 p-2 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
