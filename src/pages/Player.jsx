import { useParams } from "react-router-dom";
import courses from "../data/courses";

function Player() {
  const { courseId, lessonId } = useParams();

  const course = courses.find(
    (c) => c.id === parseInt(courseId)
  );

  const lesson = course.content.find(
    (l) => l.id === parseInt(lessonId)
  );

  return (
    <div className="px-6 md:px-20 py-10">
      
      <h1 className="text-2xl font-bold">
        {lesson.title}
      </h1>

      <div className="mt-6 bg-black h-64 flex items-center justify-center text-white">
        Video Player
      </div>

    </div>
  );
}

export default Player;