import { Eye, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const businesses = [
  {
    name: "Lumina Wellness Studio",
    owner: "John Doe",
    sector: "Beauty",
    city: "New York",
    amount: "$255",
    date: "15 May 2020",
    sectorColor: "bg-pink-100 text-pink-500",
  },
  {
    name: "Zenith Yoga Center",
    owner: "Jane Smith",
    sector: "Fitness",
    city: "Los Angeles",
    amount: "$120",
    date: "22 June 2020",
    sectorColor: "bg-blue-100 text-blue-500",
  },
  {
    name: "Harmony Spa Retreat",
    owner: "Emily Johnson",
    sector: "Wellness",
    city: "Miami",
    amount: "$300",
    date: "8 July 2020",
    sectorColor: "bg-[#E8F7F7] text-[#169C9F]",
  },
  // ... add more as per image
];

export default function BusinessesManagement() {
  return (
    <div className=" min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Businesses Management
        </h1>
        <p className="text-xs text-slate-400 font-medium">
          Review and manage 24 pending registrations for new vendors.
        </p>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { l: "Pending", v: "24" },
          { l: "Approved Today", v: "125" },
          { l: "Rejected Today", v: "22" },
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
        <Tabs defaultValue="verification" className="w-full">
          <TabsList className="bg-transparent border-b border-slate-50 w-full justify-start rounded-none h-14 px-6 gap-8">
            <TabsTrigger
              value="verification"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#169C9F] data-[state=active]:text-[#169C9F] rounded-none bg-transparent shadow-none font-bold text-xs"
            >
              Verification (24)
            </TabsTrigger>
            <TabsTrigger
              value="suspended"
              className="rounded-none bg-transparent shadow-none font-bold text-xs text-slate-400"
            >
              Suspended
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="py-5 px-6 font-bold text-slate-800">
                Business Name
              </TableHead>
              <TableHead className="font-bold text-slate-800">Owner</TableHead>
              <TableHead className="font-bold text-slate-800">Sector</TableHead>
              <TableHead className="font-bold text-slate-800">City</TableHead>
              <TableHead className="font-bold text-slate-800">Amount</TableHead>
              <TableHead className="font-bold text-slate-800">
                Issue Date
              </TableHead>
              <TableHead className="font-bold text-slate-800 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {businesses.map((biz, i) => (
              <TableRow
                key={i}
                className="border-slate-50 hover:bg-slate-50/50"
              >
                <TableCell className="py-5 px-6 font-semibold text-slate-700">
                  {biz.name}
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {biz.owner}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${biz.sectorColor}`}
                  >
                    {biz.sector}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {biz.city}
                </TableCell>
                <TableCell className="font-bold text-slate-700">
                  {biz.amount}
                </TableCell>
                <TableCell className="text-sm text-slate-500">
                  {biz.date}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-3">
                    <Link
                      className="cursor-pointer"
                      href={`/businesse-management/${biz.name.toLowerCase().replace(/\s/g, "-")}`}
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
