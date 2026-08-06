import React from 'react'
import {Plus} from "lucide-react";

const StudentHeader = () => {
  return (
    <div className="mb-6 flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-semibold text-slate-800">Students</h1>
            <p className="text-[16px] font-semibold text-slate-500 mt-1">Dashboard  /  Students</p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-[16px] font-medium text-white hover:bg-blue-800 cursor-pointer">
            <Plus size={18}/>
            Add Student
        </button>
      
    </div>
  )
}

export default StudentHeader
