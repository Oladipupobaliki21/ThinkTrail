import courses from "../data/courses";
import CourseCard from "./CourseCard";
import React from 'react'

const Courses = () => {
  return (
   <section className="px-6 md:px-20 py-16">
      
      <h2 className="text-3xl font-bold mb-8">
        Popular Courses
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </section>
  )
}

export default Courses