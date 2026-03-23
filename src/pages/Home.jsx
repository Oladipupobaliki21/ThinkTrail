import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Courses/>
    <Features/>
    <Testimonials/>
    <CTA/>
    <Footer/>
    </>
  );
}

export default Home;