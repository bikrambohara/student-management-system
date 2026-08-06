import React, { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StudentHeader from "../components/students/StudentHeader";
import StudentFilter from "../components/students/StudentFilter";
import StudentTable from "../components/students/StudentTable";
import StudentPagination from "../components/students/StudentPagination";

import { students } from "../data/students";

const Students = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 5;

  const lastStudent = currentPage * studentsPerPage;
  const firstStudent = lastStudent - studentsPerPage;

  const currentStudents = students.slice(firstStudent, lastStudent);

  return (
    <DashboardLayout>
      <StudentHeader />

      <StudentFilter />

      <StudentTable students={currentStudents} />

      <StudentPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalStudents={students.length}
        studentsPerPage={studentsPerPage}
      />
    </DashboardLayout>
  );
};

export default Students;