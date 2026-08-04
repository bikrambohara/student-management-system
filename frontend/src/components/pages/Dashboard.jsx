
import { CalendarDays, ChevronDown } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import StatsSection from "../dashboard/StatsSection";
import StudentGrowthChart from "../dashboard/StudentGrowthChart";

function Dashboard() {
  return (
    <DashboardLayout>
      <StatsSection />
      <StudentGrowthChart/>
    </DashboardLayout>
  );
}

export default Dashboard;