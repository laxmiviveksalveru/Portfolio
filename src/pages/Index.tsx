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
  const currentUrl = personalInfo.website;
  const description = `${personalInfo.tagline} - Experienced AI/ML Engineer specializing in Machine Learning, Deep Learning, Computer Vision with expertise in Python, TensorFlow, AWS. Portfolio showcasing innovative machine learning projects and certifications.`;
  
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{personalInfo.name} - AI ML Engineer | Machine Learning Portfolio | Hyderabad</title>
        <meta name="title" content={`${personalInfo.name} - AI ML Engineer | Machine Learning Portfolio`} />
        <meta name="description" content={description} />
        <meta name="keywords" content={`AI Engineer, Machine Learning Engineer, Deep Learning, Computer Vision, NLP, Python Developer, TensorFlow, AWS, Portfolio, Hyderabad, KL University, ${personalInfo.name.replace(/\s+/g, " ")}`} />
        <meta name="author" content={personalInfo.name} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${personalInfo.name} - AI ML Engineer Portfolio`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${currentUrl}og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${personalInfo.name} - AI ML Engineer Portfolio`} />
        <meta property="og:site_name" content={`${personalInfo.name} Portfolio`} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={`${personalInfo.name} - AI ML Engineer Portfolio`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${currentUrl}og-image.jpg`} />
        <meta property="twitter:image:alt" content={`${personalInfo.name} - AI ML Engineer Portfolio`} />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        
        {/* Language and Character Set */}
        <meta httpEquiv="content-language" content="en" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      
      <SEOSchema />
      
      <main className="relative min-h-screen">
        {/* Three.js Background */}
        <ThreeScene />
        
        {/* Navigation */}
        <Navigation />
        <FloatingNav />
        
        {/* Page Sections */}
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <div className="space-y-0">
          <About />
          <Education />
          <Projects />
          <Certificates />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Index;