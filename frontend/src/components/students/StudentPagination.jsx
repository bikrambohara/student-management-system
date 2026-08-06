import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const StudentPagination = ({
  currentPage,
  setCurrentPage,
  totalStudents,
  studentsPerPage,
}) => {
  const totalPages = Math.ceil(totalStudents / studentsPerPage);

  const start = (currentPage - 1) * studentsPerPage + 1;
  const end = Math.min(currentPage * studentsPerPage, totalStudents);

  const pages = [];

  if (totalPages <= 7) {
    // Show all pages
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // First pages
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4">

      {/* Left */}
      <p className="text-sm text-slate-500">
        Showing {start} to {end} of {totalStudents} students
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="flex h-9 w-9 items-center justify-center text-slate-400"
            >
              <MoreHorizontal size={16} />
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`h-9 w-9 rounded-lg border text-sm font-medium transition ${
                currentPage === page
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>

      </div>
    </div>
  );
};

export default StudentPagination;