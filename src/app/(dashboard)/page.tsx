import { BookingChart } from "@/components/home/BookingChart";
import DashboardStats from "@/components/home/DashboardStats";
import { RevenueChart } from "@/components/home/RevenueChart";
import { UpcomingAppointments } from "@/components/home/UpcomingAppointments";

const page = () => {
  return (
    <div className="space-y-[24px]">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
        <BookingChart />
        <RevenueChart />
      </div>
      <UpcomingAppointments />
    </div>
  );
};

export default page;
