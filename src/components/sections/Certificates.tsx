import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certificates() {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-title mb-6">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise in AI and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {personalInfo.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full border-glow relative group">
                <CardContent className="p-6 space-y-4">
                  {/* Certificate Name */}
                  <h3 className="text-lg font-bold text-primary leading-tight">
                    {cert.name}
                  </h3>
                  
                  {/* Issuer */}
                  <div className="flex items-center justify-between">
                    <p className="text-foreground font-medium">
                      {cert.issuer}
                    </p>
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {cert.issuer.split(' ')[0]}
                    </Badge>
                  </div>
                  
                  {/* Validity/Year */}
                  <div className="text-sm text-muted-foreground">
                    {cert.validity ? (
                      <div>
                        <span className="font-medium">Valid: </span>
                        {cert.validity}
                      </div>
                    ) : (
                      <div>
                        <span className="font-medium">Issued: </span>
                        {cert.year}
                      </div>
                    )}
                  </div>

                  {/* Hover effect for active certificates */}
                  {cert.validity && cert.validity.includes('Present') && (
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    </div>
                  )}
                </CardContent>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {personalInfo.certificates.length}
              </div>
              <div className="text-muted-foreground">
                Total Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                {personalInfo.certificates.filter(cert => 
                  cert.validity && cert.validity.includes('Present')
                ).length}
              </div>
              <div className="text-muted-foreground">
                Currently Active
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {new Set(personalInfo.certificates.map(cert => cert.issuer)).size}
              </div>
              <div className="text-muted-foreground">
                Different Providers
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}