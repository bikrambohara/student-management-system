import { teachers } from "../../data/teachers";
import TeacherCard from "./TeacherCard";

function TeacherGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
        />
      ))}
    </div>
  );
}

export default TeacherGrid;