function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      
      <img
        src={course.image}
        alt={course.title}
        className="rounded-lg w-full h-40 object-cover"
      />

      <h3 className="mt-3 font-semibold text-lg">
        {course.title}
      </h3>

      <p className="text-sm text-gray-500">
        {course.lessons} Lessons • {course.duration}
      </p>

      <button className="mt-3 text-green-900 font-medium">
        View Course →
      </button>
    </div>
  );
}

export default CourseCard;