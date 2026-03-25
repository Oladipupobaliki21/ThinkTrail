import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import courses from "../data/courses";

function Player() {
  const { courseId, lessonId } = useParams();

  const course = courses.find(
    (c) => c.id === parseInt(courseId)
  );

  const lesson = course.content.find(
    (l) => l.id === parseInt(lessonId)
  );

  const [completed, setCompleted] = useState(false);

  // ✅ PUT IT HERE (inside component)
  useEffect(() => {
    const saved = localStorage.getItem(
      `course-${courseId}-lesson-${lessonId}`
    );

    if (saved === "completed") {
      setCompleted(true);
    }
  }, [courseId, lessonId]);

  const handleComplete = () => {
    localStorage.setItem(
      `course-${courseId}-lesson-${lessonId}`,
      "completed"
    );
    setCompleted(true);
  };

  return (
    <div className="px-6 md:px-20 py-10">
      
      <h1 className="text-2xl font-bold">
        {lesson.title}
      </h1>

      <div className="mt-6 bg-black h-64 flex items-center justify-center text-white">
        Video Player
      </div>

      <button
        onClick={handleComplete}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Mark as Completed
      </button>

      {completed && (
        <p className="text-green-600 mt-3">
          ✅ Completed
        </p>
      )}

    </div>
  );
}

export default Player;