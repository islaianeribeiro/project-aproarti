import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Products />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
