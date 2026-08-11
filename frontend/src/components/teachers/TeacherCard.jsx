import { Mail, Phone, Edit, Trash } from "lucide-react";

function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <h3 className="mt-3 text-lg font-semibold text-slate-800">
          {teacher.name}
        </h3>

        <p className="text-sm text-blue-600">{teacher.department}</p>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Mail size={16} />
          <span>{teacher.email}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Phone size={16} />
          <span>{teacher.phone}</span>
        </div>

        <div className="text-center">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              teacher.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {teacher.status}
          </span>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-blue-200 py-2 text-sm text-blue-600 hover:bg-blue-50 cursor-pointer">
          <Edit size={16} />
          Edit
        </button>

        <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-red-200 py-2 text-sm text-red-500 hover:bg-red-50 cursor-pointer">
          <Trash size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default TeacherCard;
