import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getPortfolioProjects, PortfolioProject } from "@/services/github";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

export function Projects() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const portfolioProjects = await getPortfolioProjects();
        setProjects(portfolioProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);
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

        {loading ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="glass card-hover h-full border-glow relative overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="h-8 bg-secondary/50 rounded animate-pulse mb-2" />
                    <div className="h-4 bg-secondary/30 rounded animate-pulse w-24 mb-2" />
                    <div className="h-3 bg-secondary/30 rounded animate-pulse w-32" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="h-4 bg-secondary/30 rounded animate-pulse" />
                      <div className="h-4 bg-secondary/30 rounded animate-pulse w-3/4" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-6 bg-secondary/30 rounded-full animate-pulse w-16" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Card className="glass border-red-500/30">
              <CardContent className="pt-6">
                <p className="text-red-400 mb-4">
                  Failed to load projects from GitHub: {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  Try Again
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass card-hover h-full border-glow relative overflow-hidden group">
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
                    <div className="flex items-center gap-2 mb-2">
                      {project.status && (
                        <Badge variant="outline" className="w-fit text-accent border-accent/30">
                          {project.status}
                        </Badge>
                      )}
                      {project.stars > 0 && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-3 h-3" />
                          <span>{project.stars}</span>
                        </div>
                      )}
                      {project.forks > 0 && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <GitFork className="w-3 h-3" />
                          <span>{project.forks}</span>
                        </div>
                      )}
                    </div>
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

                    {/* GitHub Repository Button */}
                    <div className="pt-2 flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View Repository
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        )}

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