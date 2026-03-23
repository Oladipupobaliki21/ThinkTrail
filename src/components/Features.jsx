import FeatureCard from "./FeatureCard";
import { FaUserGraduate, FaClock, FaLockOpen } from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry experts around the world.",
      icon: <FaUserGraduate/>,
    },
    {
      title: "Flexible Learning",
      description: "Learn anytime at your own pace.",
      icon: <FaClock/>,
    },
    {
      title: "Lifetime Access",
      description: "Access courses anytime forever.",
      icon: <FaLockOpen/>,
    },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-20 py-16">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
}

export default Features;