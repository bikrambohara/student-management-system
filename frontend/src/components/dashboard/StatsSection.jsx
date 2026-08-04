import {
  Users,
  UserRound,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronDown,
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
    <>
      {/* Dashboard Heading */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Welcome back, Admin! Here's what's happening in your system today.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
          {/* <CalendarDays size={18} className="text-slate-600" /> */}

          <input
            type="date"
            className="border-none bg-transparent text-sm text-slate-700 outline-none"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>
    </>
  );
}

export default StatsSection;
