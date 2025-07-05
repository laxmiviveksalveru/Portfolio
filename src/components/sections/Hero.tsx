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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold hero-title"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-muted-foreground font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {personalInfo.title}
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-primary hover-glow-primary px-8 py-3 text-lg font-medium"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Contact Info Quick Access */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <span>{personalInfo.contact.email}</span>
            <span>{personalInfo.contact.location}</span>
            <span>{personalInfo.contact.phone}</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
    </section>
  );
}