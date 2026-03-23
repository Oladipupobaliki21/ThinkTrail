function FeatureCard({ title, description, icon}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      
      <div className="text-green-900 text-3xl mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;