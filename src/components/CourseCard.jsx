import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      
     <img
  src={course.image}
  alt={course.title}
  className="rounded-lg"
/>

      <p className="text-sm text-gray-500">
        {course.lessons} Lessons • {course.duration}
      </p>

      <Link
        to={`/course/${course.id}`}
        className="text-green-900 mt-3 inline-block"
      >
        View Course →
      </Link>
    </div>
  );
}
export default CourseCard