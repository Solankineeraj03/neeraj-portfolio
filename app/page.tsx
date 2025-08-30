import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Publications />   {/* <-- new */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

