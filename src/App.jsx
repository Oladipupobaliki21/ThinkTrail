import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import CourseDetails from "./pages/CourseDetails";
import Player from "./pages/Player";

function App() {
 return(
   <Routes>
    <Route path="/"element= {<Home /> }/>
    <Route path="/courses" element  = {<CoursesPage />} />
    <Route path="/course/:id" element = {<CourseDetails />} />
    <Route path="/player/:courseId/:lessonId" element={<Player />}/>
  </Routes>
 )
  

}

export default App;