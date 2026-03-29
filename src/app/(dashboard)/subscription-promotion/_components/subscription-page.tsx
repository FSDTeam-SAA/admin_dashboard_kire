import React from "react";
import { Check, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// --- Type Definitions ---

interface Feature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  tier: string;
  price: string;
  features: Feature[];
  highlighted?: boolean;
}

interface ControlRowProps {
  title: string;
  description: string;
  defaultChecked?: boolean;
}

// --- Components ---

const PlanCard: React.FC<PlanCardProps> = ({
  tier,
  price,
  features,
  highlighted = false,
}) => (
  <Card
    className={`relative border-2 ${highlighted ? "border-[#00a39e] shadow-lg" : "border-slate-200"}`}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00a39e] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
        Most Popular
      </div>
    )}
    <CardHeader className="pb-2">
      <div className="text-slate-500 text-sm mb-1">{tier}</div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-slate-900">${price}</span>
        <span className="text-slate-400 text-sm ml-1">/mo</span>
      </div>
    </CardHeader>
    <CardContent className="space-y-3 min-h-[160px]">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
          {f.included ? (
            <Check className="w-4 h-4 text-[#00a39e]" />
          ) : (
            <X className="w-4 h-4 text-slate-300" />
          )}
          <span>{f.text}</span>
        </div>
      ))}
    </CardContent>
    <CardFooter>
      <Button
        variant={highlighted ? "default" : "outline"}
        className={`w-full ${highlighted ? "bg-[#00a39e] hover:bg-[#008c88]" : "border-[#00a39e] text-[#00a39e] hover:bg-slate-50"}`}
      >
        Edit Plan
      </Button>
    </CardFooter>
  </Card>
);

const ControlRow: React.FC<ControlRowProps> = ({
  title,
  description,
  defaultChecked = false,
}) => (
  <div className="flex justify-between items-center p-6 bg-white">
    <div className="space-y-1">
      <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
    <Switch defaultChecked={defaultChecked} />
  </div>
);

const PromotionCard: React.FC = () => (
  <Card className="bg-white border-slate-200 shadow-sm">
    <CardContent className="pt-6">
      <h4 className="font-bold text-slate-900 text-sm">Pro Growth</h4>
      <div className="flex items-baseline gap-1 my-2">
        <span className="text-xl font-bold text-slate-900">$10</span>
        <span className="text-slate-400 text-[10px]">/ For 7 days</span>
      </div>
      <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
        Advanced tools for growing enterprises needing more insight.
      </p>
      <div className="flex gap-2">
        <Button
          size="sm"
          className="flex-1 bg-[#00a39e] hover:bg-[#008c88] text-xs h-8"
        >
          Edit
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 border-[#00a39e] text-[#00a39e] text-xs h-8"
        >
          Delete
        </Button>
      </div>
    </CardContent>
  </Card>
);

// --- Main Page ---

const SubscriptionPage: React.FC = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-slate-900">
          Subscription & Promotion
        </h1>
        <p className="text-slate-500 mt-2">
          Define how your platform generates revenue and manage vendor tiers.
        </p>
      </header>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900">
            Subscription Plans
          </h2>
          <div className="flex items-center gap-4">
            <Tabs defaultValue="monthly">
              <TabsList className="bg-slate-100 p-1">
                <TabsTrigger value="monthly" className="text-xs px-4">
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  className="text-xs px-4 text-slate-400"
                >
                  Yearly (Save 20%)
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button className="bg-[#00a39e] hover:bg-[#008c88]">
              <Plus className="w-4 h-4 mr-1" /> Add Plan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanCard
            tier="Basic"
            price="29"
            features={[
              { text: "Up to 10 products", included: true },
              { text: "Standard analytics", included: true },
              { text: "Custom domain", included: false },
            ]}
          />
          <PlanCard
            tier="Professional"
            price="79"
            highlighted
            features={[
              { text: "Unlimited products", included: true },
              { text: "Advanced analytics", included: true },
              { text: "Custom domain", included: true },
              { text: "Priority support", included: true },
            ]}
          />
          <PlanCard
            tier="Enterprise"
            price="199"
            features={[
              { text: "Everything in Pro", included: true },
              { text: "Dedicated account manager", included: true },
              { text: "API Access", included: true },
            ]}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Advanced Controls
        </h2>
        <Card className="overflow-hidden border-slate-200">
          <ControlRow
            title="Automatic Vendor Payouts"
            description="Enable automated balance transfer after 14 days of no dispute."
            defaultChecked
          />
          <div className="h-[1px] bg-slate-100 w-full" />
          <ControlRow
            title="Restrict Manual Adjustments"
            description="Only platform admins can manually override commission fees."
          />
          <div className="h-[1px] bg-slate-100 w-full" />
          <ControlRow
            title="Tiered Commission Cap"
            description="Cap maximum commission at $50 per transaction."
            defaultChecked
          />
        </Card>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900">Promotion</h2>
          <Link href={`/subscription-promotion/promotion-plan`}>
            <Button className="bg-[#00a39e] hover:bg-[#008c88]">
              Add Promotion
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <PromotionCard key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SubscriptionPage;
