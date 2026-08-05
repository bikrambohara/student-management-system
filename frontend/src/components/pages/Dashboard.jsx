
// import { CalendarDays, ChevronDown } from "lucide-react";
// import DashboardLayout from "../layout/DashboardLayout";
// import StatsSection from "../dashboard/StatsSection";
// import StudentGrowthChart from "../dashboard/StudentGrowthChart";
// import AttendanceChart from "../dashboard/AttendanceChart";

// function Dashboard() {
//   return (
//     <DashboardLayout>
//       <StatsSection />
//       <StudentGrowthChart/>
//       <AttendanceChart/>
//     </DashboardLayout>
//   );
// }

// export default Dashboard;



import DashboardLayout from "../layout/DashboardLayout";
import StatsSection from "../dashboard/StatsSection";
import StudentGrowthChart from "../dashboard/StudentGrowthChart";
import AttendanceChart from "../dashboard/AttendanceChart";
import QuickActions from "../dashboard/QuickActions";

function Dashboard() {
  return (
    <DashboardLayout>
      <StatsSection />

      <section className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-14">
        {/* Student Growth */}
        <div className="lg:col-span-7">
          <StudentGrowthChart />
        </div>

        {/* Attendance */}
        <div className="lg:col-span-4">
          <AttendanceChart />
        </div>
        <div className="lg:col-span-3">
        <QuickActions/>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;