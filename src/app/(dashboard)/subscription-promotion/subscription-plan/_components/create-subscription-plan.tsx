import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const CreateSubscriptionPlan: React.FC = () => {
  const features = [
    "Custom Branding",
    "API Access",
    "Priority Support",
    "Advanced Analytics",
    "SMS Notifications",
    "Multiple Locations",
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Header */}
      <header className="mb-8 pt-6">
        <h1 className="text-3xl font-serif font-bold text-[#1e293b]">
          Subscription & Promotion
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Define how your platform generates revenue and manage vendor tiers.
        </p>
      </header>

      {/* Main Plan Card */}
      <Card className="border-none shadow-sm bg-white rounded-xl overflow-hidden mb-6">
        <CardContent className="p-8 space-y-8">
          <h2 className="text-2xl font-serif font-bold text-[#1e293b]">
            Create Subscription Plan
          </h2>

          <div className="space-y-6">
            {/* Plan Name */}
            <div className="space-y-2">
              <Label
                htmlFor="planName"
                className="text-sm font-semibold text-slate-700"
              >
                Plan Name
              </Label>
              <Input
                id="planName"
                placeholder="e.g. Summer Flash Sale 2024"
                className="h-11 border-slate-200 focus:ring-[#00a39e]"
              />
            </div>

            {/* Short Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-semibold text-slate-700"
              >
                Short Description
              </Label>
              <Textarea
                id="description"
                placeholder="Briefly describe the purpose of this promotion..."
                className="min-h-[100px] border-slate-200 resize-none focus:ring-[#00a39e]"
              />
            </div>

            {/* Type and Price Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Plan Type
                </Label>
                <div className="h-11 flex items-center px-4 rounded-md border border-slate-200 bg-slate-50/50 text-slate-600 text-sm">
                  Professional
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">
                  Price (USD)
                </Label>
                <Input
                  type="text"
                  placeholder="$ 0.00"
                  className="h-11 border-slate-200 focus:ring-[#00a39e]"
                />
              </div>
            </div>

            {/* Features Toggle Section */}
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-sm font-bold text-slate-800">Features</h3>
                <p className="text-xs text-slate-400">
                  Toggle enabled features for this plan
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-colors"
                  >
                    <Checkbox
                      id={feature}
                      className="border-slate-300 data-[state=checked]:bg-[#00a39e] data-[state=checked]:border-[#00a39e]"
                    />
                    <label
                      htmlFor={feature}
                      className="text-xs font-medium text-slate-500 cursor-pointer"
                    >
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Commission Settings Card */}
      <Card className="border-none shadow-sm bg-white rounded-xl overflow-hidden mb-8">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#1e293b]">
            Commission Settings
          </h2>

          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700">
              Platform Commission
            </Label>
            <div className="relative">
              <Input
                defaultValue="5"
                className="h-11 bg-[#f0f9f9] border-none focus:ring-1 focus:ring-[#00a39e] pr-10"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                %
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Percentage charged on each booking made through the platform.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Actions */}
      <div className="flex justify-end pb-10">
        <Button className="bg-[#00a39e] hover:bg-[#008c88] text-white px-8 h-11 rounded-lg font-semibold shadow-md transition-all">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default CreateSubscriptionPlan;
