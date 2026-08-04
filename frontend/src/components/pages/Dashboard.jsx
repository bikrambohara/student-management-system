
import { CalendarDays, ChevronDown } from "lucide-react";
import DashboardLayout from "../layout/DashboardLayout";
import StatsSection from "../dashboard/StatsSection";

function Dashboard() {
  return (
    <DashboardLayout>
      <StatsSection />
    </DashboardLayout>
  );
}

export default Dashboard;