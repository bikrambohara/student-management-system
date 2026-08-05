
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsSection from "../components/dashboard/StatsSection";
import StudentGrowthChart from "../components/dashboard/StudentGrowthChart";
import AttendanceChart from "../components/dashboard/AttendanceChart";
import QuickActions from "../components/dashboard/QuickActions";
import RecentStudents from "../components/dashboard/RecentStudents";
import RecentActivities from "../components/dashboard/RecentActivities";

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
          <QuickActions />
        </div>
      </section>

      <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <RecentStudents />
        </div>

        <div className="lg:col-span-3">
          <RecentActivities />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;

