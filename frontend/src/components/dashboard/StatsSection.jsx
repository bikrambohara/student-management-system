import {
  Users,
  UserRound,
  BookOpen,
  Building2,
} from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    title: "Total Students",
    value: "1,256",
    percentage: "12.5%",
    icon: Users,
    iconStyle: "bg-blue-100 text-blue-600",
  },
  {
    title: "Total Teachers",
    value: "128",
    percentage: "8.3%",
    icon: UserRound,
    iconStyle: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Total Courses",
    value: "84",
    percentage: "5.6%",
    icon: BookOpen,
    iconStyle: "bg-orange-100 text-orange-500",
  },
  {
    title: "Total Departments",
    value: "16",
    percentage: "3.2%",
    icon: Building2,
    iconStyle: "bg-violet-100 text-violet-600",
  },
];

function StatsSection() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}

export default StatsSection;