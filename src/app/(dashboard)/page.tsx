import { BookingChart } from "@/components/home/BookingChart";
import { DashboardStats } from "@/components/home/DashboardStats";
import { UpcomingAppointments } from "@/components/home/UpcomingAppointments";


const page = () => {
  return (
    <div className="space-y-[24px]">
      <DashboardStats />
      <BookingChart />
      <UpcomingAppointments />
    </div>
  );
};

export default page;
