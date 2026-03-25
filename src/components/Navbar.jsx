import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 shadow-sm">
      
      <h1 className="text-xl font-bold text-green-900">
        ThinkTrail
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-700">
          <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
      </ul>

      <button className="bg-green-900 text-white px-4 py-2 rounded-lg">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;