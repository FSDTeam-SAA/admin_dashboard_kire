"use client";

import { Mail, Phone, MapPin, CheckCircle2, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function BusinessDetails() {
  return (
    <div className=" min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#0D3B3F]">
            Business Details
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium text-slate-400">
              Application ID:
            </span>
            <span className="text-xs font-bold text-slate-600">APP-992841</span>
            <span className="text-slate-300 mx-1">•</span>
            <span className="text-xs font-medium text-slate-400">
              Submitted Oct 24, 2023
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          className="border-[#169C9F] text-[#169C9F] hover:bg-[#E8F7F7] font-bold px-8 h-10 rounded-xl"
        >
          Block
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8 rounded-[24px] border-slate-100 shadow-sm bg-white">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              General Information
            </h2>

            <div className="grid grid-cols-2 gap-y-6 mb-8">
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">
                  Business Name
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  Lumina Wellness Studio
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">
                  Business Category
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  Wellness, Massage, Facial
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">
                  Phone Number
                </p>
                <p className="text-sm font-semibold text-slate-700 font-mono">
                  US-99120-BL
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-800">
                Business Description
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 font-medium">
                Lumina Wellness Studio is a sanctuary designed to help you
                disconnect from the chaos of daily life and reconnect with
                yourself. Founded in 2018, we combine ancient healing traditions
                with modern wellness technologies to provide a holistic approach
                to health and beauty. Lumina Wellness Studio is a sanctuary
                designed to help you disconnect from the chaos of daily life and
                reconnect with yourself. Founded in 2018, we combine ancient
                healing traditions with modern wellness technologies to provide
                a holistic approach to health and beauty.
              </p>
            </div>
          </Card>

          {/* Photo Preview Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h2 className="text-xl font-bold text-slate-800 font-serif">
                Photo Preview
              </h2>
              <p className="text-xs font-bold text-slate-400">
                4 images uploaded
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-[20px]">
                <Image
                  width={600}
                  height={400}
                  src={`/business.png`}
                  alt="Main view"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#169C9F] text-white hover:bg-[#169C9F] border-none text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
                  Cover
                </Badge>
              </div>

              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[16px] overflow-hidden"
                >
                  <Image
                    width={200}
                    height={200}
                    src={`/business.png`}
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-8">
          <Card className="p-8 rounded-[24px] border-slate-100 shadow-sm bg-white">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Contact Point
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <Avatar className="w-14 h-14 ring-2 ring-slate-50">
                <AvatarImage src="/api/placeholder/60/60" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-bold text-slate-800 leading-tight">
                  Marcus Sterling
                </p>
                <p className="text-xs font-medium text-slate-400">
                  CEO & Founder
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-300 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    m.sterling@skylinerentals.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-300 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    +1 (206) 555-0192
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-300 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    4th Ave, Seattle, WA 98101, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Assessment Box */}
            <div className="mt-10 p-6 rounded-[20px] border border-slate-50 bg-[#FBFDFD]">
              <div className="flex justify-between items-center mb-4">
                <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest">
                  Risk Assessment
                </p>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <p className="text-xs font-bold text-slate-500">
                  Automated Score
                </p>
                <p className="text-xl font-black text-[#169C9F]">92/100</p>
              </div>
              <Progress
                value={92}
                className="h-2.5 bg-slate-100 rounded-full [&>div]:bg-[#169C9F]"
              />

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#169C9F]" />
                  <span className="text-[11px] font-medium text-slate-400">
                    Business license matches legal entity
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#169C9F]" />
                  <span className="text-[11px] font-medium text-slate-400">
                    Contact person identity verified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-slate-300" />
                  <span className="text-[11px] font-medium text-slate-400">
                    Insurance policy expires in 45 days
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
