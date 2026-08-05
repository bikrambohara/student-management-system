import React from "react";
import {
  BookOpen,
  CalendarCheck,
  ClipboardList,
  UserPlus,
  Users,
} from "lucide-react";

const activities = [
  {
    title: "New student John Doe has been added.",
    time: "2 mins ago",
    icon: UserPlus,
    style: "bg-blue-100 text-blue-600",
  },
  {
    title: "Course React Basics was created.",
    time: "15 mins ago",
    icon: BookOpen,
    style: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Teacher Michael Smith updated profile.",
    time: "1 hour ago",
    icon: Users,
    style: "bg-violet-100 text-violet-600",
  },
  {
    title: "Attendance marked for CS101.",
    time: "2 hours ago",
    icon: CalendarCheck,
    style: "bg-orange-100 text-orange-500",
  },
  {
    title: "Marks updated for 5 students.",
    time: "3 hours ago",
    icon: ClipboardList,
    style: "bg-red-100 text-red-500",
  },
];

const RecentActivities = () => {
  return (
    <div className="rounded-xl border-2 border-slate-200 bg-zinc-400 p-5 shadow-sm">
      <h2 className="mb-5 font-semibold text-slate-800">Recent Activities</h2>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.title} className="flex gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${activity.style}`}
              >
                <Icon size={20} />
              </div>

              <div>
                <p className="text-xs font-medium leading-5 text-slate-700 text-[16px]">
                  {activity.title}
                </p>
                <p className="text-xs text-slate-400">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-6 text-sm font-medium text-blue-700 hover:underline cursor-pointer text-[16px]">
        View All Activities →
      </button>
    </div>
  );
};

export default RecentActivities;
