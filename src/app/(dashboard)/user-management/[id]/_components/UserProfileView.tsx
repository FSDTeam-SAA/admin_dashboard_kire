import React from "react";
import { Mail, Phone, MapPin, UserPlus, Calendar, LogIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const bookings = [
  {
    business: "Deep Tissue Massage",
    service: "Massage",
    time: "60 min",
    status: "CONFIRMED",
    color: "bg-blue-50 text-blue-500",
  },
  {
    business: "Swedish Massage",
    service: "Massage",
    time: "50 min",
    status: "PENDING",
    color: "bg-orange-50 text-orange-500",
  },
  {
    business: "Hot Stone Therapy",
    service: "Massage",
    time: "75 min",
    status: "CONFIRMED",
    color: "bg-blue-50 text-blue-500",
  },
  {
    business: "Aromatherapy Massage",
    service: "Massage",
    time: "60 min",
    status: "CANCELED",
    color: "bg-red-50 text-red-500",
  },
  {
    business: "Sports Massage",
    service: "Massage",
    time: "90 min",
    status: "CONFIRMED",
    color: "bg-blue-50 text-blue-500",
  },
];

export default function UserProfileView() {
  return (
    <div className=" min-h-screen font-sans">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif font-bold text-slate-900">
          Alex Johnson
        </h1>
        <Button className="bg-[#169C9F] hover:bg-[#138689] text-white px-6 rounded-xl font-bold">
          Suspend Account
        </Button>
      </div>

      {/* Main Profile Header Card */}
      <Card className="p-6 rounded-[20px] border-slate-100 shadow-sm bg-white mb-8">
        <div className="flex items-center gap-6">
          <Avatar className="w-20 h-20 ring-4 ring-slate-50">
            <AvatarImage src="/api/placeholder/80/80" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-slate-800">Alex Johnson</h2>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-500 text-[10px] font-bold uppercase">
                Customer
              </span>
              <span className="px-2 py-0.5 rounded bg-[#E8F7F2] text-[#169C9F] text-[10px] font-bold uppercase inline-flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-[#169C9F]" /> Active
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400">
              <div className="flex items-center gap-2 text-xs font-medium">
                <Mail size={14} /> alex.johnson@example.com
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Phone size={14} /> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <MapPin size={14} /> New York, USA
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Bookings & Saved Businesses */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="rounded-[20px] border-slate-100 shadow-sm bg-white overflow-hidden">
            <div className="p-6 border-b border-slate-50">
              <h3 className="font-bold text-slate-800">Recent Bookings</h3>
            </div>
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="text-xs font-bold text-slate-500">
                    Business Name
                  </TableHead>
                  <TableHead className="text-xs font-bold text-slate-500">
                    Service
                  </TableHead>
                  <TableHead className="text-xs font-bold text-slate-500">
                    Date & Time
                  </TableHead>
                  <TableHead className="text-xs font-bold text-slate-500 text-right">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-sm font-semibold text-slate-700">
                      {booking.business}
                    </TableCell>
                    <TableCell className="text-sm text-slate-500">
                      {booking.service}
                    </TableCell>
                    <TableCell className="text-sm text-slate-500">
                      {booking.time}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`px-2 py-1 rounded text-[9px] font-black tracking-tight ${booking.color}`}
                      >
                        {booking.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <div>
            <h3 className="font-bold text-slate-800 mb-4">Saved Businesses</h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="flex gap-4 px-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/view.jpg`}
                      alt="Business Logo"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Glow Beauty Bar
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Beauty • West Village
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Information Panels */}
        <div className="space-y-8">
          <Card className="p-6 rounded-[20px] border-slate-100 shadow-sm bg-white">
            <h3 className="font-bold text-slate-800 mb-4">Basic Information</h3>
            <div className="space-y-4">
              {[
                { l: "Full Name", v: "Alex Johnson" },
                { l: "Email Address", v: "alex.johnson@example.com" },
                { l: "Phone Number", v: "+1 (555) 123-4567" },
                { l: "Registration Date", v: "Oct 12, 2023" },
                { l: "Last Login", v: "2 hours ago" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    {item.l}
                  </p>
                  <p className="text-sm font-semibold text-slate-600 mt-0.5">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 rounded-[20px] border-slate-100 shadow-sm bg-white">
            <h3 className="font-bold text-slate-800 mb-4">Booking Overview</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: "Total Bookings", v: "42", c: "bg-slate-50" },
                { l: "Upcoming", v: "3", c: "bg-blue-50 text-blue-600" },
                { l: "Completed", v: "35", c: "bg-[#E8F7F2] text-[#169C9F]" },
                { l: "Cancelled", v: "4", c: "bg-red-50 text-red-500" },
              ].map((stat, i) => (
                <div key={i} className={`p-4 rounded-xl text-center ${stat.c}`}>
                  <p className="text-[8px] font-black uppercase mb-1 opacity-60">
                    {stat.l}
                  </p>
                  <p className="text-xl font-black">{stat.v}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="p-6 rounded-[20px] border-slate-100 shadow-sm bg-white">
            <h3 className="font-bold mb-4 text-slate-800">Account Activity</h3>
            <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
              {[
                {
                  icon: UserPlus,
                  text: "Account created",
                  date: "Oct 12, 2023 - 09:14 AM",
                  color: "bg-blue-50 text-blue-500",
                },
                {
                  icon: Calendar,
                  text: "Last booking",
                  date: "Nov 20, 2024 - 03:30 PM",
                  color: "bg-[#E8F7F2] text-[#169C9F]",
                },
                {
                  icon: LogIn,
                  text: "Last login date",
                  date: "Nov 24, 2024 - 11:22 AM",
                  color: "bg-orange-50 text-orange-500",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 relative z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}
                  >
                    <item.icon size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-800 leading-none">
                      {item.text}
                    </p>
                    <p className="text-[9px] font-medium text-slate-400 mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
