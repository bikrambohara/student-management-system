import DashboardLayout from "../components/layout/DashboardLayout";

// import TeacherHeader from "../components/teachers/TeacherHeader";
import TeacherFilter from "../components/teachers/TeacherFilter";
import TeacherGrid from "../components/teachers/TeacherGrid";

import TeacherPagination from "../components/teachers/TeacherPagination";


function Teachers(){

return(

<DashboardLayout>


    {/* <TeacherHeader/> */}


    <TeacherFilter/>


    <TeacherGrid/>


    <TeacherPagination/>


</DashboardLayout>


)

}


export default Teachers;