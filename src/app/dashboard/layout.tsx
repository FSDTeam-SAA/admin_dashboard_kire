import Header from "@/components/sheared/Header";
import Sidebar from "@/components/sheared/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen relative bg-[#F0F9F8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <div className="sticky top-0 z-10 ">
          <Header />
        </div>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default layout;
