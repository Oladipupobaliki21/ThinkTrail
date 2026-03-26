import { Link } from "react-router-dom";

function Hero() {
  return (
 
    <section
  className="relative h-[90vh] flex items-center justify-center text-center text-white"
  style={{
    backgroundImage: "url('/Hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="absolute inset-0 bg-black/70 to-black/40"></div>


  <div className="relative z-10 px-6 max-w-2xl animate-fadeIn">
    
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Learn Skills to Boost Your Career
    </h1>

    <p className="mt-4 text-lg text-gray-200">
      Learn from experts and grow your skills with modern courses.
    </p>

    <div className="mt-6 flex justify-center gap-4">
      <Link
    to="/courses"
    className="bg-green-900 text-white px-6 py-3 rounded-lg"
  >
    Get Started
  </Link>

  <Link
    to="/courses"
    className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
  >
    Explore Courses
  </Link>
    </div>

  </div>
</section>
  );
}

export default Hero;