import HeroSection from "./home/Hero";
import ScrollTextAnimation from './home/ScrollTextAnimation'
import VisionSection from "./home/VisionSection";
import TestimonialsSection from "./home/TestimonialSection";
import ScrollZoomSection from "./home/ScrollZoomSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <ScrollTextAnimation/>
    <VisionSection/>
    <TestimonialsSection/>
    <ScrollZoomSection/>
    <Footer/>
  </>
  );
}
