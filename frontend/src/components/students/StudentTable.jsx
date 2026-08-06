import React from "react";
import { Eye, Edit, Trash } from "lucide-react";

const StudentTable = ({ students }) => {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* Table Header */}
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Photo
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Student ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Phone
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Department
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Semester
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-t border-slate-200 transition hover:bg-slate-50"
              >
                <td className="px-6 py-4 text-sm text-slate-600">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>

                <td className="px-6 py-4 text-sm font-medium text-slate-700">
                  {student.id}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {student.name}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {student.email}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {student.phone}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {student.department}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {student.semester}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-amber-200 text-amber-600 transition hover:bg-amber-50"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;