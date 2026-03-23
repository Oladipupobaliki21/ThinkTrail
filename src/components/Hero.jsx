import heroImage from "../assets/Hero.jpg"

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-50">
      
   
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Learn Without Limits
        </h1>

        <p className="mt-4 text-gray-600">
          Start, switch, or advance your career with expert-led courses.
        </p>

        <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-lg">
          Start Learning
        </button>
      </div>

    
      <div className="mt-10 md:mt-0">
        <img
          src={heroImage}
        
          className="w-full md:w-100"
        />
      </div>

    </section>
  );
}

export default Hero;