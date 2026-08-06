import DashboardLayout from "../components/layout/DashboardLayout";

import StudentHeader from "../components/students/StudentHeader";
import StudentFilter from "../components/students/StudentFilter";
import StudentTable from "../components/students/StudentTable";
import StudentPagination from "../components/students/StudentPagination";


function Students(){


return (

<DashboardLayout>
    <StudentHeader/>
    <StudentFilter />


    <StudentTable />


    <StudentPagination />


</DashboardLayout>


)


}


export default Students;