import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const TeacherPagination = ({
  currentPage,
  setCurrentPage,
  totalTeachers,
  teachersPerPage,
}) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(totalTeachers / teachersPerPage);

  // Calculate showing range
  const start =
    totalTeachers === 0 ? 0 : (currentPage - 1) * teachersPerPage + 1;

  const end = Math.min(currentPage * teachersPerPage, totalTeachers);

  const pages = [];

  // If pages are 7 or less, show all pages
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // First page
    pages.push(1);

    // Show dots
    if (currentPage > 3) {
      pages.push("...");
    }

    // Middle pages
    const startPage = Math.max(2, currentPage - 1);

    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Show dots
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Last page
    pages.push(totalPages);
  }

  return (
    <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4">
      {/* Showing Information */}
      <p className="text-sm text-slate-500">
        Showing {start} to {end} of {totalTeachers} teachers
      </p>

      {/* Pagination Buttons */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className=" flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer" >
          <ChevronLeft size={16} />
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={index}
                className=" flex h-9 w-9 items-center justify-center text-slate-400 " >
                <MoreHorizontal size={16} />
              </span>
            );
          }

          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={` h-9 w-9 rounded-lg border text-sm font-medium transition cursor-pointer
                ${
                  currentPage === page
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 text-slate-600 hover:bg-slate-100"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className=" flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer " >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TeacherPagination;
