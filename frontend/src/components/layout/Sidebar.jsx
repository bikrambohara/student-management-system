import React from 'react'
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  Building2,
  ChartNoAxesColumn,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    icon: Users,
  },
  {
    name: "Teachers",
    icon: GraduationCap,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Attendance",
    icon: CalendarCheck,
  },
  {
    name: "Marks",
    icon: ClipboardList,
  },
  {
    name: "Departments",
    icon: Building2,
  },
  {
    name: "Reports",
    icon: ChartNoAxesColumn,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-57 border-r border-slate-200 bg-gradient-to-br from-[#061b43] via-[#05255a] to-[#031638]">
        <div className = "flex h-25 items-center justify-center  border-b border-slate-700" >
           <img src = "/logo.png"
               alt="Student Management System Logo"
                className="h-23 w-50 mt-4 object-contain "/>
      </div>

      <nav className="space-y-2 p-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition cursor-pointer ${
                index === 0
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </button>
          );
        })}

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-red-50 hover:text-red-600 cursor-pointer">
          <LogOut size={19} />
          Logout
        </button>
        </nav>

        <div className = " absolute bottom-5 left-2  rounded-xl border border-slate-200 bg-slate-400 p-4 ">
          <div className = "mb-3 flex items-center gap-2 ">
            <GraduationCap className="text-blue-600 " size={30} />
            <div>
              <p className = "text-sm font-semibold text-slate-800"> Need Help?</p>
              <p className = "text-xs text-slate-300 font-semibold">Check our documentation</p>
            </div>
          </div>
           <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
          View Docs
        </button>
        </div>
      
    </div>
  )
}

export default Sidebar


