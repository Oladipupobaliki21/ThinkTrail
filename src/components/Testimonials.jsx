import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      review: "This platform helped me improve my skills quickly!",
      image: "/Student1.jpg",
    },
    {
      name: "Micheal Steve",
      review: "Amazing courses and very easy to follow.",
      image: "/Student2.jpg",
    },
    {
      name: "Jane Smith",
      review: "I landed a job after learning here!",
      image: "/Student3.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Students Say
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
}

export default Testimonials;