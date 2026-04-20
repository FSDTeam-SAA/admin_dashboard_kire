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
  businessEmail?: string;
  phoneNumber?: string;
  businessCategory?: string;
  ownerId: {
    fullName: string;
    _id?: string;
    email?: string;
    role?: string;
  };
  sector: string;
  city: string;
  createdAt: string;
  status: string;
  totalStaff: number;
  country?: string;
  description?: string;
  verification?: string;
  gallery?: Array<{
    url: string;
    publicId: string;
    uploadedAt: string;
  }>;
}

interface ApiResponse {
  statusCode: number;
  message: string;
  data: {
    items: Business[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
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

  // Extract businesses from API response: data.data.items
  let businesses: Business[] = [];
  let pagination = {
    total: 0,
    page: 1,
    totalPages: 1,
  };

  if (data?.data?.items && Array.isArray(data.data.items)) {
    businesses = data.data.items;
    if (data.data.meta) {
      pagination = {
        total: data.data.meta.total,
        page: data.data.meta.page,
        totalPages: data.data.meta.totalPages,
      };
    }
  }

  return (
    <div className="min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Businesses Management
        </h1>
        <p className="text-xs text-slate-400 font-medium">
          Viewing {businesses.length} of {pagination.total} total business
          registrations.
        </p>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          {
            l: "Pending",
            v: Array.isArray(businesses)
              ? businesses.filter((b) => b?.status === "pending").length
              : 0,
          },
          {
            l: "Activated",
            v: Array.isArray(businesses)
              ? businesses.filter((b) => b?.status === "activated").length
              : 0,
          },
          { l: "Total", v: Array.isArray(businesses) ? businesses.length : 0 },
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
        {!Array.isArray(businesses) || businesses.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="text-center space-y-4 max-w-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-[#E8F7F7] p-4 rounded-full">
                  <svg
                    className="w-12 h-12 text-[#169C9F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                No Businesses Yet
              </h3>
              <p className="text-slate-500 text-sm">
                There are no registered businesses to display. New business
                registrations will appear here.
              </p>
            </div>
          </div>
        ) : (
          // Table with data
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-slate-50">
                <TableHead className="py-5 px-6 font-bold text-slate-800">
                  Business Name
                </TableHead>
                <TableHead className="font-bold text-slate-800">
                  Owner
                </TableHead>
                <TableHead className="font-bold text-slate-800">
                  Sector
                </TableHead>
                <TableHead className="font-bold text-slate-800">City</TableHead>
                <TableHead className="font-bold text-slate-800">
                  Staff
                </TableHead>
                <TableHead className="font-bold text-slate-800">
                  Created At
                </TableHead>
                <TableHead className="font-bold text-slate-800 text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(businesses) &&
                businesses.map((biz) => (
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
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
