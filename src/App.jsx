import { Routes, Route, Navigate } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import Player from "./pages/Player";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // ✅ ADD THIS

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />
      

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
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

      {/* ✅ Dashboard Route (THIS WAS MISSING) */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;