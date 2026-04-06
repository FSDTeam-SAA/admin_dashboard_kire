import { BookingChart } from "@/components/home/BookingChart";
import DashboardStats from "@/components/home/DashboardStats";
import RecentActivitySection from "@/components/home/RecentActivitySection";
// import { RevenueChart } from "@/components/home/RevenueChart";

const page = () => {
  return (
    <div className="space-y-[24px]">
      <DashboardStats />
      <div className="grid grid-cols-1 gap-6">
        <BookingChart />
        {/* <RevenueChart /> */}
      </div>
      <RecentActivitySection />
    </div>
  );
};

export default page;
