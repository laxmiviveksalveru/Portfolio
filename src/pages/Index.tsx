import { ThreeScene } from "@/components/ThreeScene";
import { Navigation } from "@/components/Navigation";
import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="relative">
      {/* Three.js Background */}
      <ThreeScene />
      
      {/* Navigation */}
      <Navigation />
      <FloatingNav />
      
      {/* Page Sections */}
      <div id="home">
        <Hero />
      </div>
      <About />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Index;