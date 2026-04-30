"use client";
import React, { useState } from "react";
import { User, Shield, Lock, Key, Bell, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import SecuritySettings from "./_components/SettingInfo";
import UpdateProfile from "./_components/update-profile";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");

  const tabs = [
    {
      id: "profile" as const,
      label: "Profile Settings",
      icon: User,
      description: "Manage your personal information and preferences",
    },
    {
      id: "security" as const,
      label: "Security Settings",
      icon: Shield,
      description: "Update your password and security preferences",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-[#1A2E35] font-medium mb-3">
          Account Settings
        </h1>
        <p className="text-gray-500 text-base">
          Manage your account settings, profile information, and security
          preferences
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#E8EDED] mb-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "group relative px-6 py-3 text-sm font-medium transition-all duration-200 rounded-t-xl",
                  "flex items-center gap-2",
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-[#1A2E35] hover:bg-gray-50",
                )}
              >
                <Icon
                  size={18}
                  className={cn(
                    "transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-gray-400 group-hover:text-gray-600",
                  )}
                />
                <span>{tab.label}</span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area with Animation */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
        {activeTab === "profile" && <UpdateProfile />}
        {activeTab === "security" && <SecuritySettings />}
      </div>
    </div>
  );
};

export default Page;
