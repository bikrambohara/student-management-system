// import React from 'react'
// import {courses} from "../../data/courses";
// import { Edit, Trash } from "lucide-react";

// function CourseTable() {
//   return (
//     <div className="bg-white border border-slate-300 rounded-xl overflow-hidden">
//         <table className="w-full">
//             <thead className="bg-slate-100">
//                 <tr>
//                     <th className="tableHead">Course Code</th>
//                     <th className="tableHead">Course Name</th>
//                     <th className='tableHead'>Credits</th>
//                     <th className="tableHead">Department</th>
//                     <th className="tableHead">Semester</th>
//                     <th className="tableHead">Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {courses.map((course)=>(
//                     <tr key={course.code} className="border-t">
//                         <td className="tableData text-blue-600 font-medium">{course.code}</td>
//                         <td className="tableData">{course.name}</td>
//                         <td className="tableData">{course.credits}</td>
//                         <td className="tableData">{course.department}</td>
//                         <td className="tableData">
//                             <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">{course.semester}</span>
//                         </td>
//                         <td className="tableData">
//                             <div>
//                                 <img src={course.image} className="h-8,w-8 rounded-full"/>
//                                 <span>{course.teacher}</span>
//                             </div>
//                         </td>

//                         <td className="tableData">
//                             <div className="flex gap-2">
//                                 <button className='border p-2 rounded-lg text-blue-600'>
//                                     <Edit size={15}/>
//                                 </button>
//                                 <button className='border p-2 rounded-lg text-red-500'>
//                                     <Trash size={15}/>
//                                 </button>

//                             </div>
//                         </td>

//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default CourseTable



import React, { useState, useMemo } from 'react'
import { courses as initialCourses } from "../../data/courses";
import { Edit, Trash, Check, ChevronsUpDown } from "lucide-react";

const semesterStyles = {
  "1st Semester": "bg-blue-100 text-blue-600",
  "2nd Semester": "bg-green-100 text-green-600",
  "3rd Semester": "bg-purple-100 text-purple-600",
  "4th Semester": "bg-orange-100 text-orange-600",
};

const columns = [
  { key: "code", label: "Course Code" },
  { key: "name", label: "Course Name" },
  { key: "credits", label: "Credits" },
  { key: "department", label: "Department" },
  { key: "semester", label: "Semester" },
  { key: "teacher", label: "Teacher" },
];

function CourseTable() {
  const [courses, setCourses] = useState(initialCourses);
  const [editingCode, setEditingCode] = useState(null);
  const [draft, setDraft] = useState({});
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  const sortedCourses = useMemo(() => {
    if (!sortKey) return courses;
    const sorted = [...courses].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === "number") return valA - valB;
      return String(valA).localeCompare(String(valB));
    });
    return sortDir === "asc" ? sorted : sorted.reverse();
  }, [courses, sortKey, sortDir]);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function startEdit(course) {
    setEditingCode(course.code);
    setDraft(course);
  }

  function saveEdit() {
    setCourses((prev) => prev.map((c) => (c.code === editingCode ? draft : c)));
    setEditingCode(null);
  }

  function deleteCourse(code) {
    if (confirm(`Delete course ${code}?`)) {
      setCourses((prev) => prev.filter((c) => c.code !== code));
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="tableHead select-none cursor-pointer text-left text-xs font-semibold text-slate-500 px-6 py-3"
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  <ChevronsUpDown
                    size={13}
                    className={sortKey === col.key ? "text-slate-700" : "text-slate-300"}
                  />
                </div>
              </th>
            ))}
            <th className="tableHead text-left text-xs font-semibold text-slate-500 px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCourses.map((course) => {
            const isEditing = editingCode === course.code;
            return (
              <tr key={course.code} className="border-t border-slate-100">
                <td className="tableData text-blue-600 font-medium px-6 py-4">{course.code}</td>

                <td className="tableData px-6 py-4">
                  {isEditing ? (
                    <input
                      className="border rounded px-2 py-1 text-sm w-full"
                      value={draft.name}
                      onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    />
                  ) : (
                    course.name
                  )}
                </td>

                <td className="tableData px-6 py-4">
                  {isEditing ? (
                    <input
                      type="number"
                      className="border rounded px-2 py-1 text-sm w-16"
                      value={draft.credits}
                      onChange={(e) => setDraft({ ...draft, credits: Number(e.target.value) })}
                    />
                  ) : (
                    course.credits
                  )}
                </td>

                <td className="tableData px-6 py-4">{course.department}</td>

                <td className="tableData px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      semesterStyles[course.semester] ?? "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {course.semester}
                  </span>
                </td>

                <td className="tableData px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img src={course.image} className="h-8 w-8 rounded-full object-cover" />
                    <span>{course.teacher}</span>
                  </div>
                </td>

                <td className="tableData px-6 py-4">
                  <div className="flex gap-2">
                    {isEditing ? (
                      <button
                        onClick={saveEdit}
                        className="bg-green-50 p-2 rounded-lg text-green-600 hover:bg-green-100"
                        title="Save"
                      >
                        <Check size={15} />
                      </button>
                    ) : (
                      <button
                        onClick={() => startEdit(course)}
                        className="bg-blue-50 p-2 rounded-lg text-blue-600 hover:bg-blue-100"
                        title="Edit"
                      >
                        <Edit size={15} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteCourse(course.code)}
                      className="bg-red-50 p-2 rounded-lg text-red-500 hover:bg-red-100"
                      title="Delete"
                    >
                      <Trash size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}

          {sortedCourses.length === 0 && (
            <tr>
              <td colSpan={7} className="tableData text-center text-slate-400 py-6">
                No courses left.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;