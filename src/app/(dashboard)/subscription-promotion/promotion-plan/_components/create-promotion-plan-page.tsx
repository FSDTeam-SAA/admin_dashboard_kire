import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

// Assuming you have a basic shadcn setup
// The layout is designed to be full-width as per previous requests.
const CreatePromotionPlanPage: React.FC = () => {
  return (
    <div className="w-full bg-[#f1f7f6] min-h-screen">
      {/* Page Header (Matching the previous screen's style) */}
      <header className="mb-8 pt-6">
        <h1 className="text-4xl font-serif font-bold text-slate-900">
          Subscription & Promotion
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          Define how your platform generates revenue and manage vendor tiers.
        </p>
      </header>

      {/* Main Content Card */}
      <Card className="border border-slate-200 shadow-sm bg-white rounded-lg">
        <CardContent className="p-8 space-y-8">
          {/* Section Header */}
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            Create Promotion Plan
          </h2>

          {/* Form Fields Container */}
          <div className="space-y-6">
            {/* Plan Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="planName"
                className="font-semibold text-slate-800 text-sm"
              >
                Plan Name
              </Label>
              <Input
                id="planName"
                placeholder="e.g. Summer Flash Sale 2024"
                className="border-slate-300 focus:ring-[#00a39e] focus:border-[#00a39e] placeholder:text-slate-400"
              />
            </div>

            {/* Short Description */}
            <div className="space-y-1.5">
              <Label
                htmlFor="shortDescription"
                className="font-semibold text-slate-800 text-sm"
              >
                Short Description
              </Label>
              <Textarea
                id="shortDescription"
                placeholder="Briefly describe the purpose of this promotion..."
                className="border-slate-300 focus:ring-[#00a39e] focus:border-[#00a39e] placeholder:text-slate-400 min-h-[120px] resize-none"
              />
            </div>

            {/* Duration and Price Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* Duration (Days) */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="duration"
                  className="font-semibold text-slate-800 text-sm"
                >
                  Duration (Days)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  defaultValue={7}
                  className="border-slate-300 focus:ring-[#00a39e] focus:border-[#00a39e]"
                />
              </div>

              {/* Price (USD) */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="price"
                  className="font-semibold text-slate-800 text-sm"
                >
                  Price (USD)
                </Label>
                <div className="relative">
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="border-slate-300 focus:ring-[#00a39e] focus:border-[#00a39e] placeholder:text-slate-400"
                  />
                  {/* Currency Symbol Placeholder if needed, but not in your image */}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons Container */}
      <div className="flex justify-end gap-3 pt-8 pb-10">
        <Button
          variant="outline"
          className="px-6 border-[#00a39e] text-[#00a39e] hover:bg-slate-50 h-10 font-medium"
        >
          Cancel
        </Button>
        <Button className="px-6 bg-[#00a39e] hover:bg-[#008c88] text-white h-10 font-medium">
          Create Plan
        </Button>
      </div>
    </div>
  );
};

export default CreatePromotionPlanPage;
