import React from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { month: "Jan", students: 580 },
  { month: "Feb", students: 640 },
  { month: "Mar", students: 720 },
  { month: "Apr", students: 750 },
  { month: "May", students: 780 },
  { month: "Jun", students: 880 },
  { month: "Jul", students: 940 },
  { month: "Aug", students: 1050 },
  { month: "Sep", students: 1140 },
  { month: "Oct", students: 1200 },
  { month: "Nov", students: 1240 },
  { month: "Dec", students: 1300 },
];

const StudentGrowthChart = () => {
  return (
    <div className =" rounded-xl border-2 border-slate-200 bg-slate-200 p-5 shadow-sm">
      <div className = "mb-5 flex items-center justify-center ">
        <h2 className="font-semibold text-slate-800">Student Growth</h2>
        <select className ="rounded-lg border-2 border-slate-300 px-3 py-2 text-sm outline-none font-semibold cursor-pointer ">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className='h-67'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" fontSize={12} />
            <YAxis fontSize={12} />
             <Tooltip />

              <Line
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                fill: "#ffffff",
                stroke: "#2563eb",
                strokeWidth: 2,
              }}
            />
           </LineChart>
        </ResponsiveContainer>

      </div>
      
    </div>
  )
}

export default StudentGrowthChart
