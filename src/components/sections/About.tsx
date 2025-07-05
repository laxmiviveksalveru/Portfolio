import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20 relative"
      aria-labelledby="about-heading"
      itemScope 
      itemType="https://schema.org/Person"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold hero-title mb-4 sm:mb-6"
          >
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            <span itemProp="jobTitle">AI ML Engineer</span> with hands-on experience in <strong>machine learning</strong>, 
            <strong>computer vision</strong>, and <strong>cloud technologies</strong>. Passionate about creating intelligent solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p 
                className="text-foreground/80 leading-relaxed text-base sm:text-lg"
                itemProp="description"
              >
                I am seeking a challenging position in a reputed organization where I can learn new skills, 
                expand my knowledge, and leverage my experience in <strong>artificial intelligence</strong> and <strong>machine learning</strong>.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Currently pursuing <span itemProp="alumniOf">{personalInfo.education[0].degree} at {personalInfo.education[0].institution}</span> 
                with a CGPA of <strong>{personalInfo.education[0].cgpa}</strong>. My coursework includes <em>{personalInfo.education[0].courses}</em>. 
                I have hands-on experience with <strong>cloud platforms</strong>, <strong>machine learning frameworks</strong>, and <strong>computer vision technologies</strong>.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Card className="glass card-hover">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
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