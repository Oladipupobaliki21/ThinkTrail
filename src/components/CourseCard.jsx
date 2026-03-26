import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    // Go to first lesson of the course
    if (course.content && course.content.length > 0) {
      navigate(`/player/${course.id}/${course.content[0].id}`);
    } else {
      alert("No lessons available for this course yet.");
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="font-semibold">{course.title}</h2>
      <p className="text-sm text-gray-600">
        {course.lessons} Lessons • {course.duration}
        {course.content && course.content.length > 0 ? (
          <span className="text-green-600 ml-2">Available</span>
        ) : (
          <span className="text-red-600 ml-2">Coming Soon</span>
        )}
        <img src={course.image} className="w-full h-40 object-cover rounded-lg mt-3" />
      </p>
      
      <button
        onClick={handleViewCourse}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
      >
        View Course
      </button>
    </div>
  );
}
export default CourseCard;