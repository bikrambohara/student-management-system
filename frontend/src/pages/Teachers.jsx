import React, { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import TeacherFilter from "../components/teachers/TeacherFilter";
import TeacherGrid from "../components/teachers/TeacherGrid";
import TeacherPagination from "../components/teachers/TeacherPagination";

import { teachers } from "../data/teachers";

function Teachers() {
  // Current page
  const [currentPage, setCurrentPage] = useState(1);

  // Show only 6 teachers per page
  const teachersPerPage = 6;

  // Calculate starting index
  const startIndex =
    (currentPage - 1) * teachersPerPage;

  // Get only teachers for current page
  const currentTeachers = teachers.slice(
    startIndex,
    startIndex + teachersPerPage
  );

  return (
    <DashboardLayout>

      {/* Teacher Filter */}
      <TeacherFilter />

      {/* Teacher Grid */}
      <TeacherGrid
        teachers={currentTeachers}
      />

      {/* Teacher Pagination */}
      <TeacherPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalTeachers={teachers.length}
        teachersPerPage={teachersPerPage}
      />

    </DashboardLayout>
  );
}

export default Teachers;