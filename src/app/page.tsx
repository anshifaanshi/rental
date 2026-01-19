import HeroSection from "./home/Hero";
import ScrollTextAnimation from './home/ScrollTextAnimation'
import VisionSection from "./home/VisionSection";
import TestimonialsSection from "./home/TestimonialSection";
import BikeDemo from "./home/BikeDemo";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <ScrollTextAnimation/>
    <VisionSection/>
    <TestimonialsSection/>
 <BikeDemo/>
    <Footer/>
  </>
  );
}
