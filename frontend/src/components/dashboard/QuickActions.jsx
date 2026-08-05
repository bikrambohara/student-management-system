import React from 'react'
import { BookOpen, UserPlus, Users } from "lucide-react";

const actions = [
  {
    title: "Add Student",
    icon: UserPlus,
    style: "border-blue-200 bg-blue-50 text-blue-600",
  },
  {
    title: "Add Teacher",
    icon: Users,
    style: "border-emerald-200 bg-emerald-50 text-emerald-600",
  },
  {
    title: "Add Course",
    icon: BookOpen,
    style: "border-orange-200 bg-orange-50 text-orange-500",
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-xl border-2 border-slate-300 bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-slate-800">Quick Actions</h2>
      
      <div className="space-y-3 cursor-p">
        {actions.map((action) => {
          const Icon = action.icon;
          return(
            <button
            key ={action.title}
            className ={`flex w-full  items-center justify-center gap-2 rounded-lg border py-3 text-sm font-medium transition hover:opacity-80 cursor-pointer ${action.style}`}>
              <Icon size={18} /> +{action.title}
            </button>
          )
        })}

      </div>
    </div>
  )
}

export default QuickActions
