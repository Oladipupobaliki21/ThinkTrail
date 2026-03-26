
import courses from "../data/courses";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
   <section className="px-6 md:px-20 py-16">
      
      <h2 className="text-3xl font-bold mb-8">
        Popular Courses
      </h2>

  <div className="grid gap-6 md:grid-cols-3">
  {courses.slice(0, 3).map((course) => (
    <CourseCard key={course.id} course={course} />
  ))}
</div>

    </section>
  )
}

export default Courses