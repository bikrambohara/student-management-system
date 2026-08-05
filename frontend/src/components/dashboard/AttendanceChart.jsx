import React from 'react'
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Present", value: 87, color: "#2563eb" },
  { name: "Absent", value: 10, color: "#22c55e" },
  { name: "Late", value: 3, color: "#f59e0b" },
];


const AttendanceChart = () => {
  return (
    <div className = "rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex mb-3 items-center justify-between">
        <h2 className ="font-semibold text-slate-800"> Attendance Percentage</h2>
        <select className="rounded-lg border-2 border-slate-400 px-3 py-2 text-xs outline-none cursor-pointer">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="relative h-70 w-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={65}
                outerRadius={88}
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-slate-900">87%</p>
            <p className="text-sm text-slate-500">Average</p>
          </div>
        </div>

        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex min-w-32 items-center justify-between gap-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-sm text-slate-600">{item.name}</span>
              </div>

              <span className="text-sm font-semibold text-slate-800">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
      
   
  )
}

export default AttendanceChart
