import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-title mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI and machine learning solutions I've developed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {personalInfo.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full border-glow relative overflow-hidden">
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-primary mb-2 pr-24">
                    {project.title}
                  </CardTitle>
                  {project.status && (
                    <Badge variant="outline" className="w-fit text-accent border-accent/30">
                      {project.status}
                    </Badge>
                  )}
                  {project.duration && (
                    <p className="text-sm text-muted-foreground">
                      {project.duration}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-secondary/30 hover:bg-secondary/70 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Interested in collaborating on AI projects?
          </p>
          <a 
            href={`mailto:${personalInfo.contact.email}`}
            className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-glow-primary transition-all"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}