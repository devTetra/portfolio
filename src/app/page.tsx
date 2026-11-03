import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main
      id="top"
      className="relative cursor-default mx-auto flex min-h-screen w-full max-w-7xl flex-col overflow-hidden bg-bg text-fg"
    >
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
