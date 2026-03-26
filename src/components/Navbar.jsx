import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 shadow-sm gap-4">
      
      <h1 className="text-xl font-bold text-green-900">
        ThinkTrail
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-700">
          <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
      </ul>
      <ul className="flex gap-4">
       <Link
          to="/login" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </Link>
          <Link to="/signup" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Sign Up
          </Link>
      </ul>
    </nav>
  );
}

export default Navbar;