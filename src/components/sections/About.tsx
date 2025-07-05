import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-title mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {personalInfo.title} with hands-on experience in machine learning, 
            computer vision, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed text-lg">
                {personalInfo.tagline}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Currently pursuing {personalInfo.education[0].degree} at {personalInfo.education[0].institution} 
                with a CGPA of {personalInfo.education[0].cgpa}. My coursework includes {personalInfo.education[0].courses}. 
                I have hands-on experience with cloud platforms, machine learning frameworks, and computer vision technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="glass card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {personalInfo.certificates.length}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Certifications
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {Object.entries(personalInfo.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}