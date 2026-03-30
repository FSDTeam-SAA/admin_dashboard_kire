import { Eye } from "lucide-react";
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

const users = [
  {
    name: "John Doe",
    email: "john@email.com",
    type: "Business Owner",
    date: "15 May 2020",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    type: "Customer",
    date: "20 May 2021",
    status: "DEACTIVATE",
    statusColor: "bg-red-50 text-red-400",
  },
  {
    name: "John Doe",
    email: "john@email.com",
    type: "Business Owner",
    date: "15 May 2020",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    type: "Customer",
    date: "20 May 2021",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "John Doe",
    email: "john@email.com",
    type: "Business Owner",
    date: "15 May 2020",
    status: "DEACTIVATE",
    statusColor: "bg-red-50 text-red-400",
  },
  {
    name: "John Doe",
    email: "john@email.com",
    type: "Business Owner",
    date: "15 May 2020",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    type: "Customer",
    date: "20 May 2021",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    type: "Customer",
    date: "20 May 2021",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "John Doe",
    email: "john@email.com",
    type: "Business Owner",
    date: "15 May 2020",
    status: "DEACTIVATE",
    statusColor: "bg-red-50 text-red-400",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    type: "Customer",
    date: "20 May 2021",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "Jane Smith",
    email: "jane@email.com",
    type: "Customer",
    date: "20 May 2021",
    status: "ACTIVE",
    statusColor: "bg-[#E8F7F2] text-[#169C9F]",
  },
  {
    name: "John Doe",
    email: "john@email.com",
    type: "Business Owner",
    date: "15 May 2020",
    status: "DEACTIVATE",
    statusColor: "bg-red-50 text-red-400",
  },
];

export default function UsersManagement() {
  return (
    <div className=" min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Users Management</h1>
        <p className="text-xs text-slate-400 font-medium">
          Review and manage 12 pending vendor registrations.
        </p>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card className="p-6 rounded-xl border-slate-100 shadow-sm">
          <p className="text-xs font-medium text-slate-400 mb-2">
            Today&apos;s Bookings
          </p>
          <p className="text-2xl font-bold text-slate-800 tracking-tight">
            144
          </p>
        </Card>
        <Card className="p-6 rounded-xl border-slate-100 shadow-sm relative">
          <p className="text-xs font-medium text-slate-400 mb-2">
            Pending Approval
          </p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-800 tracking-tight">
              125
            </p>
            <span className="text-[10px] font-bold text-green-500 mb-1">
              + 36% ↑
            </span>
          </div>
        </Card>
        <Card className="p-6 rounded-xl border-slate-100 shadow-sm">
          <p className="text-xs font-medium text-slate-400 mb-2">
            Active Vendors
          </p>
          <p className="text-2xl font-bold text-slate-800 tracking-tight">22</p>
        </Card>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[20px] border border-slate-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="py-5 px-6 font-bold text-slate-800">
                Customer Name
              </TableHead>
              <TableHead className="font-bold text-slate-800">Email</TableHead>
              <TableHead className="font-bold text-slate-800">
                User Type
              </TableHead>
              <TableHead className="font-bold text-slate-800">
                Join Date
              </TableHead>
              <TableHead className="font-bold text-slate-800">Status</TableHead>
              <TableHead className="font-bold text-slate-800 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, i) => (
              <TableRow
                key={i}
                className="border-slate-50 hover:bg-slate-50/50"
              >
                <TableCell className="py-5 px-6 font-semibold text-slate-700">
                  {user.name}
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {user.email}
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {user.type}
                </TableCell>
                <TableCell className="text-sm text-slate-500">
                  {user.date}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tight ${user.statusColor}`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <Link
                      className="cursor-pointer"
                      href={`/user-management/${user.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <button className="text-slate-400 hover:text-[#169C9F] p-2 transition-colors">
                        <Eye size={18} />
                      </button>
                    </Link>
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
