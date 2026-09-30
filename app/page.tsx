import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import PhotoGrid from "@/components/PhotoGrid";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Quote />
      <PhotoGrid />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}