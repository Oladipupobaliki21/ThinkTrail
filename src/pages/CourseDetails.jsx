import { useParams } from "react-router-dom";
import courses from "../data/courses";
import { Link } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === parseInt(id)
  );




  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="px-6 md:px-20 py-10">
      
     {course.image && (
  <img
    src={course.image}
    alt={course.title}
    className="w-full max-w-md rounded-lg"
  />
)}

      <h1 className="text-3xl font-bold mt-6">
        {course.title}
      </h1>

      <p className="text-gray-600 mt-2">
        {course.lessons} Lessons • {course.duration}
      </p>

      <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-lg">
        Enroll Now
      </button>
  <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Course Content
  </h2>

  <ul className="space-y-3">
    {course.content.map((lesson) => (
      <li
        key={lesson.id}
        className="p-3 border rounded-lg flex justify-between items-center"
      >
        <span>{lesson.title}</span>

       <Link
       to={`/player/${course.id}/${lesson.id}`}
       className="text-green-900 text-sm"
      >
         ▶ Play
      </Link>
      </li>
    ))}
  </ul>
  </div>
    </div>
    
  );
}

export default CourseDetails;