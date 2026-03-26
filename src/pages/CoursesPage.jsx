
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Explore Courses</h1>

   
      <div className="relative mb-6">
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

   
      <div className="flex flex-wrap gap-3 mb-8">
        {["All", "Development", "Design", "Marketing"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              category === cat
                ? "bg-green-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

     
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="hover:scale-105 transition duration-300"
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center mt-10 text-gray-500">
          <p>No courses found 😢</p>
        </div>
      )}
    </div>
  );
}

export default CoursesPage;


