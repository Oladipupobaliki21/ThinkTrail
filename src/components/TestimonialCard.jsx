function TestimonialCard({ name, review, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      
      <p className="text-gray-600 italic">
        "{review}"
      </p>

      <div className="flex items-center mt-4 gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <h4 className="font-semibold">
          {name}
        </h4>
      </div>

    </div>
  );
}

export default TestimonialCard;