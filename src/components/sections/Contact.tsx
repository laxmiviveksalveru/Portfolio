import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contact() {
  const handleEmailClick = () => {
    window.open(`mailto:${personalInfo.contact.email}`, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(`https://${personalInfo.contact.linkedin}`, '_blank');
  };

  const handleGitHubClick = () => {
    window.open(`https://${personalInfo.contact.github}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personalInfo.contact.phone}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold hero-title mb-4 sm:mb-6">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to discuss opportunities or collaborate on exciting AI projects? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="glass card-hover cursor-pointer border-glow hover-glow-primary group"
                onClick={handleEmailClick}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-sm text-foreground/80 break-all">
                    {personalInfo.contact.email}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className="glass card-hover cursor-pointer border-glow hover-glow-primary group"
                onClick={handleLinkedInClick}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-accent">LinkedIn</h3>
                  <p className="text-sm text-foreground/80 break-all">
                    Professional Profile
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card 
                className="glass card-hover cursor-pointer border-glow hover-glow-primary group"
                onClick={handleGitHubClick}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary">GitHub</h3>
                  <p className="text-sm text-foreground/80">
                    Code Repository
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card 
                className="glass card-hover cursor-pointer border-glow hover-glow-primary group"
                onClick={handlePhoneClick}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-accent">Phone</h3>
                  <p className="text-sm text-foreground/80">
                    {personalInfo.contact.phone}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Location & Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Location */}
            <Card className="glass border-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Location</h3>
                <p className="text-lg text-foreground">
                  📍 {personalInfo.contact.location}
                </p>
                <p className="text-muted-foreground mt-2">
                  Open to remote opportunities and relocation
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="glass border-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Languages</h3>
                <div className="space-y-2">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {lang.language}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-gradient-primary hover-glow-primary px-8 py-4 text-lg font-medium"
              onClick={handleEmailClick}
            >
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}