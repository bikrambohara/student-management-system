import React from "react";
import { NavLink } from "react-router-dom";

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
    path: "/"
  },
  { 
    name: "Students", 
    icon: Users,
    path: "/students"
  },
  { 
    name: "Teachers", 
    icon: GraduationCap,
    path: "/teachers"
  },
  { 
    name: "Courses", 
    icon: BookOpen,
    path: "/courses"
  },
  { 
    name: "Attendance", 
    icon: CalendarCheck,
    path: "/attendance"
  },
  { 
    name: "Marks", 
    icon: ClipboardList,
    path: "/marks"
  },
  { 
    name: "Departments", 
    icon: Building2,
    path: "/departments"
  },
  { 
    name: "Reports", 
    icon: ChartNoAxesColumn,
    path: "/reports"
  },
  { 
    name: "Settings", 
    icon: Settings,
    path: "/settings"
  },
];


const Sidebar = () => {

  return (

    <aside className="fixed left-0 top-0 flex w-58 flex-col border-r border-slate-700 bg-gradient-to-br from-[#061b43] via-[#05255a] to-[#031638]">


      {/* Logo */}
      <div className="flex items-center justify-center border-b border-slate-700 py-4">

        <img
          src="/logo.png"
          alt="Logo"
          className="h-20 w-auto object-contain"
        />

      </div>


      {/* Menu */}
      <nav className="flex-1 overflow-y-auto mt-2 p-2">


        {menuItems.map((item)=>{

          const Icon = item.icon;


          return (

            <NavLink
              key={item.name}
              to={item.path}

              className={({isActive}) =>
                `
                flex w-full items-center gap-3 rounded-lg px-4 py-3 
                text-sm font-medium transition cursor-pointer
                ${
                  isActive
                  ?
                  "bg-blue-600 text-white shadow-md"
                  :
                  "text-slate-300 hover:bg-white/10 hover:text-white"
                }
                `
              }
            >

              <Icon size={19}/>

              {item.name}

            </NavLink>

          )

        })}


        <button
          className="
          mt-2 flex w-full items-center gap-3 rounded-lg 
          px-4 py-3 text-sm font-medium text-slate-300 
          hover:bg-red-500/20 hover:text-red-400
          "
        >

          <LogOut size={19}/>

          Logout

        </button>


      </nav>



      {/* Help Card */}
      <div className="m-3 rounded-xl border border-slate-300 bg-slate-100 p-4">

        <div className="mb-3 flex items-center gap-3">

          <GraduationCap 
            className="text-blue-600" 
            size={30}
          />

          <div>

            <p className="text-sm font-semibold text-slate-800">
              Need Help?
            </p>

            <p className="text-xs text-slate-500">
              Check our documentation
            </p>

          </div>

        </div>


        <button 
          className="
          w-full rounded-lg bg-blue-600 py-2 
          text-sm font-medium text-white
          hover:bg-blue-700
          "
        >
          View Docs
        </button>


      </div>


    </aside>

  );

};


export default Sidebar;