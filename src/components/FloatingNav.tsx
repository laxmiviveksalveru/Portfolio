import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quickNavItems = [
  { name: "Home", href: "#home", icon: "🏠" },
  { name: "About", href: "#about", icon: "👨‍💻" },
  { name: "Projects", href: "#projects", icon: "🚀" },
  { name: "Contact", href: "#contact", icon: "📧" },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
      
      // Find active section
      const sections = ["home", "about", "education", "projects", "certificates", "contact"];
      const current = sections.find(section => {
        if (section === "home" && window.scrollY < 100) return true;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
        >
          <div className="flex flex-col space-y-3">
            {quickNavItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full glass flex items-center justify-center text-xl transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary/20 glow-primary border-primary/30"
                    : "border-border/30 hover:border-primary/50"
                }`}
                title={item.name}
              >
                {item.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}