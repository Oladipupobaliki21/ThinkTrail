import { Routes, Route, Navigate } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import Player from "./pages/Player";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/courses"
        element={
          <PrivateRoute>
            <CoursesPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/player/:courseId/:lessonId"
        element={
          <PrivateRoute>
            <Player />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;