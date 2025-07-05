import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-title mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey in technology and artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {personalInfo.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="glass card-hover border-glow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-accent font-semibold">
                        CGPA: {edu.cgpa}
                      </div>
                      <div className="text-muted-foreground">
                        {edu.duration}
                      </div>
                      {edu.location && (
                        <div className="text-sm text-muted-foreground">
                          {edu.location}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {edu.courses && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                        Key Courses
                      </h4>
                      <p className="text-foreground/80">
                        {edu.courses}
                      </p>
                    </div>
                  )}
                  
                  {edu.description && (
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                        Focus Areas
                      </h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Internship Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 hero-title">
              Professional Experience
            </h3>
            {personalInfo.internships.map((internship, index) => (
              <Card key={index} className="glass card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">
                        {internship.position}
                      </h4>
                      <p className="text-lg text-foreground">
                        {internship.company}
                      </p>
                      <p className="text-sm text-accent font-medium">
                        {internship.type}
                      </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-muted-foreground">
                        {internship.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}