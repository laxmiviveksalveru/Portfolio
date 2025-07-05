import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Hero section introducing Laxmi Vivek Salveru"
    >
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Name and Title */}
          <header className="space-y-3 sm:space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold hero-title leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              itemProp="name"
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              itemProp="jobTitle"
            >
              {personalInfo.title}
            </motion.p>
          </header>

          {/* Tagline with SEO keywords */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-foreground/80 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            itemProp="description"
          >
            Experienced AI/ML Engineer specializing in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, 
            and <strong>Computer Vision</strong>. Building innovative AI solutions with <strong>Python</strong>, 
            <strong>TensorFlow</strong>, and <strong>AWS Cloud Services</strong>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-primary hover-glow-primary px-6 sm:px-8 py-3 text-base sm:text-lg font-medium w-full sm:w-auto"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Contact Info Quick Access */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-muted-foreground px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <span className="break-all">{personalInfo.contact.email}</span>
            <span>{personalInfo.contact.location}</span>
            <span>{personalInfo.contact.phone}</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow Effects - Responsive */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/15 rounded-full blur-3xl" />
    </section>
  );
}