import React, { useState } from "react";
import { Search, Filter, RotateCcw } from "lucide-react";

const StudentFilter = () => {
  const [filters, setFilters] = useState({
    search: "",
    department: "All Departments",
    semester: "All Semesters",
    status: "All Statuses",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFilters({
      search: "",
      department: "All Departments",
      semester: "All Semesters",
      status: "All Statuses",
    });
  };

  const handleFilter = () => {
    console.log(filters);

    // Later you can send filters to parent or API
  };

  return (
    <div className="rounded-xl border-2 border-slate-300  p-5 bg-gray-200 mb-5">
      <div className="grid gap-3 md:grid-cols-6">
        {/* Search */}
        <div className="relative md:col-span-2">
          <h2 className="text-[16px] font-medium text-slate-700">Search</h2>
          <Search className="absolute left-3 top-9 text-slate-400" size={18} />

          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search by name, ID, email or phone"
            className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {/* Department */}
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-medium text-slate-700">Department</h2>

          <select
            name="department"
            value={filters.department}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 cursor-pointer">
            <option>All Departments</option>
            <option>BCSIT</option>
            <option>BBA</option>
            <option>BCA</option>
            <option>Finance</option>
          </select>
        </div>

        {/* Semester */}
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-medium text-slate-700">Semester</h2>
          <select
            name="semester"
            value={filters.semester}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 cursor-pointer" >
            <option>All Semesters</option>
            <option>Semester 1</option>
            <option>Semester 2</option>
            <option>Semester 3</option>
            <option>Semester 4</option>
            <option>Semester 5</option>
            <option>Semester 6</option>
            <option>Semester 7</option>
            <option>Semester 8</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-medium text-slate-700">Status</h2>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 cursor-pointer"
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Graduated</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleFilter}
            className=" flex  h-10 mt-6 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 cursor-pointer"
          >
            <Filter size={14} />
            Filter
          </button>

          <button
            onClick={handleReset}
            className="flex h-10 mt-6 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-white hover:bg-slate-500 cursor-pointer bg-slate-700"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFilter;
