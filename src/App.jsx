import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import CourseDetails from "./pages/CourseDetails";
import Player from "./pages/Player";
import Dashboard from "./pages/Dashboard";

function App() {
 return(
   <Routes>
    <Route path="/"element= {<Home /> }/>
    <Route path="/courses" element  = {<CoursesPage />} />
    <Route path="/course/:id" element = {<CourseDetails />} />
    <Route path="/player/:courseId/:lessonId" element={<Player />}/>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
 )
  

}

export default App;