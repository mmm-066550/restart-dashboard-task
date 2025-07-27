import MainSidebar from "@/components/MainSidebar";
import MainHeader from "@/components/MainHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-screen bg-gray-50 flex">
      <MainSidebar />
      <div className="flex flex-col w-full">
        <MainHeader />
        <div className="px-24 py-12 w-full  overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
