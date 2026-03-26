
import { useState, useEffect } from "react";
import courses from "../data/courses";

function Dashboard() {
  const [progress, setProgress] = useState({}); 

  const updateProgress = () => {
    const newProgress = {};
    courses.forEach((course) => {
      newProgress[course.id] = course.content
        .filter(
          (lesson) =>
            localStorage.getItem(`course-${course.id}-lesson-${lesson.id}`) ===
            "completed"
        )
        .map((l) => l.id);
    });
    setProgress(newProgress);
  };

  useEffect(() => {
    updateProgress(); 
    window.addEventListener("storage", updateProgress); 
    return () => window.removeEventListener("storage", updateProgress);
  }, []);

  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold">Your Learning Dashboard</h1>

      <div className="mt-8 space-y-6">
        {courses.map((course) => {
          const completedLessons = progress[course.id] || [];

          return (
            <div key={course.id} className="p-5 border rounded-lg">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 mt-2">
                {completedLessons.length} / {course.content.length} lessons completed
              </p>

              <ul className="mt-3 space-y-2">
                {completedLessons.map((lessonId) => {
                  const lesson = course.content.find((l) => l.id === lessonId);
                  return (
                    <li key={lessonId} className="text-green-600">
                      ✅ {lesson?.title}
                    </li>
                  );
                })}
              </ul>

              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{
                    width: `${(completedLessons.length / course.content.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;