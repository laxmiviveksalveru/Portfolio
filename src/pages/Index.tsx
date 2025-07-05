import { ThreeScene } from "@/components/ThreeScene";
import { Navigation } from "@/components/Navigation";
import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { SEOSchema } from "@/components/SEOSchema";
import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/data/personal";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} - AI ML Engineer | Portfolio</title>
        <meta name="description" content={`${personalInfo.tagline} - Explore my projects in ${personalInfo.skills["AI/ML"].join(", ")}`} />
        <link rel="canonical" href="https://laxmiviveksalveru.github.io/" />
      </Helmet>
      
      <SEOSchema />
      
      <main className="relative">
        {/* Three.js Background */}
        <ThreeScene />
        
        {/* Navigation */}
        <Navigation />
        <FloatingNav />
        
        {/* Page Sections */}
        <section id="home">
          <Hero />
        </section>
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
};

export default Index;