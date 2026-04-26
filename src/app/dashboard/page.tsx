import { BookingChart } from "@/components/home/BookingChart";
import DashboardStats from "@/components/home/DashboardStats";
import RecentActivitySection from "@/components/home/RecentActivitySection";

const DashboardPage = () => {
  return (
    <div className="space-y-[24px]">
      <DashboardStats />
      <div className="grid grid-cols-1 gap-6">
        <BookingChart />
      </div>
      <RecentActivitySection />
    </div>
  );
};

export default DashboardPage;
