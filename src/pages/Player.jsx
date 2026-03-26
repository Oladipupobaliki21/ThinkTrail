
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import courses from "../data/courses";

function Player() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(courseId));
  const lesson = course.content.find((l) => l.id === parseInt(lessonId));

  const [completed, setCompleted] = useState(false);

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


  const handleNextLesson = () => {
    const currentIndex = course.content.findIndex((l) => l.id === lesson.id);
    if (currentIndex < course.content.length - 1) {
      const nextLesson = course.content[currentIndex + 1];
      navigate(`/player/${course.id}/${nextLesson.id}`);
    } else {
      navigate("/"); 
    }
  };


  const handleBackHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
    
      <div className="flex-1 p-6 relative">
      
        <button
          onClick={handleBackHome}
          className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          ← Home
        </button>

        <h1 className="text-xl font-bold">{lesson.title}</h1>

        <div className="aspect-video mt-6">
          <iframe
            src={lesson.video}
            className="w-full h-full rounded-lg"
            title="Video Player"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

      
        <div className="mt-6">
          {!completed ? (
            <button
              onClick={handleComplete}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Mark as Completed
            </button>
          ) : (
            <div className="flex gap-3 items-center">
              <span className="text-green-600 font-semibold">✅ Completed</span>
              <button
                onClick={handleNextLesson}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Next Lesson
              </button>
            </div>
          )}
        </div>
      </div>

    
      <div className="w-full md:w-80 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="font-semibold mb-4">Course Content</h2>

        {course.content.map((l) => {
          const lessonCompleted =
            localStorage.getItem(`course-${courseId}-lesson-${l.id}`) ===
            "completed";

          return (
            <Link
              key={l.id}
              to={`/player/${course.id}/${l.id}`}
              className={` p-3 mb-2 rounded-lg hover:bg-gray-200 transition flex justify-between items-center ${
                lessonCompleted ? "bg-green-100" : "bg-white"
              }`}
            >
              <span>{l.title}</span>
              {lessonCompleted && <span className="text-green-600">✅</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Player;