import DashboardLayout from "../components/layout/DashboardLayout";

import CourseHeader from "../components/courses/CourseHeader";
import CourseFilter from "../components/courses/CourseFilter";
import CourseTable from "../components/courses/CourseTable";
import CoursePagination from "../components/courses/CoursePagination";


function Courses(){

return(

<DashboardLayout>


<CourseHeader/>


<CourseFilter/>


<CourseTable/>


<CoursePagination/>


</DashboardLayout>

)

}


export default Courses;