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
//     <div className="px-6 md:px-20 py-10">
      
//      {course.image && (
//   <img
//     src={course.image}
//     alt={course.title}
//     className="w-full max-w-md rounded-lg"
//   />
// )}

//       <h1 className="text-3xl font-bold mt-6">
//         {course.title}
//       </h1>

//       <p className="text-gray-600 mt-2">
//         {course.lessons} Lessons • {course.duration}
//       </p>

//       <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-lg">
//         Enroll Now
//       </button>
//   <div className="mt-10">
//   <h2 className="text-2xl font-bold mb-4">
//     Course Content
//   </h2>

//   <ul className="space-y-3">
//     {course.content.map((lesson) => (
//       <li
//         key={lesson.id}
//         className="p-3 border rounded-lg flex justify-between items-center"
//       >
//         <span>{lesson.title}</span>

//        <Link
//        to={`/player/${course.id}/${lesson.id}`}
//        className="text-green-900 text-sm"
//       >
//          ▶ Play
//       </Link>
//       </li>
//     ))}
//   </ul>
//   </div>
//     </div>


<div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-10">
  
  {/* LEFT SIDE */}
  <div>
    <h1 className="text-3xl font-bold">
      {course.title}
    </h1>

    <p className="text-gray-600 mt-3">
      {course.lessons} Lessons • {course.duration}
    </p>

    {/* Curriculum */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Course Content
      </h2>

      {course.content.map((lesson) => (
        <Link
          key={lesson.id}
          to={`/player/${course.id}/${lesson.id}`}
          className="flex justify-between p-3 border rounded-lg mb-2 hover:bg-gray-50"
        >
          <span>{lesson.title}</span>
          <span className="text-primary">▶</span>
        </Link>
      ))}
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="bg-white shadow-lg rounded-xl p-5">
    <img src={course.image} className="rounded-lg" />

    <button className="w-full mt-5 bg-primary text-white py-3 rounded-lg">
      Enroll Now
    </button>

    <p className="text-sm text-gray-500 mt-3">
      Full lifetime access
    </p>
  </div>

</div>
    
  );
}

export default CourseDetails;