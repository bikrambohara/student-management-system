import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
const students = [
  {
    id: "STU00123",
    name: "John Doe",
    email: "john.doe@email.com",
    department: "Computer Science",
    date: "May 19, 2024",
    status: "Active",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: "STU00124",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    department: "Information Technology",
    date: "May 18, 2024",
    status: "Active",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "STU00125",
    name: "Michael Brown",
    email: "michael.b@email.com",
    department: "Mathematics",
    date: "May 17, 2024",
    status: "Active",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "STU00126",
    name: "Emily Davis",
    email: "emily.d@email.com",
    department: "Business Administration",
    date: "May 16, 2024",
    status: "Inactive",
    image: "https://i.pravatar.cc/100?img=48",
  },
  {
    id: "STU00127",
    name: "David Wilson",
    email: "david.w@email.com",
    department: "Electrical Engineering",
    date: "May 15, 2024",
    status: "Active",
    image: "https://i.pravatar.cc/100?img=13",
  },
];


const RecentStudents = () => {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-slate-300 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 p-5">
        <h2 className="font-semibold text-slate-800">Recent Students</h2>
        <button className="border-2 rounded-lg border-blue-200 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 cursor-pointer">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="bg-slate-50">
            <tr>
              {[
                "ID",
                "Name",
                "Email",
                "Department",
                "Admission Date",
                "Status",
              ].map((heading) =>(
                <th key={heading}
                className="px-5 py-3 text-left text-sm font-semibold text-slate-500">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}
              className="border-t border-slate-100 hover:bg-slate-400">
              <td className='px-5 py-3 text-sm text-slate-600 font-medium'>
                {student.id}
              </td>

              <td className="px-5 py-3">
                <div className='flex items-center gap-3'>
                      <img
                      src={student.image}
                      alt={student.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {student.name}
                    </span>
                </div>
              </td>
              <td className="px-5 py-3 text-xs text-slate-600 font-semibold text-[14px]">
                {student.email}
              </td>
              <td className="px-5 py-3 text-xs text-slate-600 font-semibold text-[14px]">
                {student.department}
              </td>
              <td className="px-5 py-3 text-xs text-slate-600 font-semibold text-[14px]">
                { student.date}
              </td>
              <td>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      student.status === "Active"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                  {student.status}
                </span> 
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 p-4">
      <p className="text-xs text-slate-500 font-semibold text-[13px]">Showing 1 to 5 of 5 students</p>
      <div className="flex gap-2">
        <button className="rounded-lg border-2 border-slate-600 cursor-pointer">
          <ChevronLeft size={18} />
        </button>
        <button className="h-8 w-8 rounded-lg bg-blue-600 text-sm text-white text-[14px]">1</button>
        <button className="h-8 w-8 rounded-lg bg-blue-600 text-sm text-white text-[14px]">2</button>
        <button className=" rounded-lg border-2 border-slate-600 cursor-pointer">
          <ChevronRight size={18} />
        </button>
         
      </div>
      </div>
      
    </div>
  )
}

export default RecentStudents
