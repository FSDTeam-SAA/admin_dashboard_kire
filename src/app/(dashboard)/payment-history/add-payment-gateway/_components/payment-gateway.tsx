import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentGateway: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Header Area */}
      <header className="flex justify-between items-start mb-8 pt-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">
            Payment Gateway
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            Configure your platform&apos;s financial disbursement channels.
          </p>
        </div>
        <Button className="bg-[#00a39e] hover:bg-[#008c88] text-white rounded-lg px-6 h-11 font-medium shadow-sm transition-all">
          Connect Stripe
        </Button>
      </header>

      {/* Gateway List Card */}
      <Card className="border border-slate-100 shadow-sm bg-white rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Logo Container */}
              <div className="flex items-center justify-center border border-slate-100 rounded-lg p-3 w-20 h-12 bg-white">
                {/* Replace with actual Stripe logo SVG or Image component */}
                <span className="text-[#635bff] font-bold text-xl tracking-tight">
                  stripe
                </span>
              </div>

              {/* API Key / Masked ID */}
              <div className="font-mono text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                sk_live_51Mxxxxxxxxxxxxxxxxxxx
              </div>
            </div>

            {/* Action */}
            <Button
              variant="default"
              className="bg-[#00a39e] hover:bg-[#008c88] text-white px-6 h-10 font-medium"
            >
              Disconnect
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentGateway;
