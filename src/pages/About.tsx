import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            About DOBEU
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering businesses through innovative technology solutions
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              DOBEU was founded with a simple mission: to make cutting-edge technology accessible 
              to businesses of all sizes. We believe that every organization deserves world-class 
              digital solutions that drive growth and innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team combines decades of experience in web development, software engineering, 
              and strategic consulting to deliver solutions that not only meet today's needs but 
              anticipate tomorrow's challenges.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-material">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
                  <p className="text-muted-foreground">
                    We listen first, then create solutions tailored to your unique business goals 
                    and challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-material">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Innovation-Driven</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of technology trends to bring you the most modern and effective 
                    solutions available.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-material">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Quality Obsessed</h3>
                  <p className="text-muted-foreground">
                    Every project undergoes rigorous testing and quality assurance to ensure 
                    flawless performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-material">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Partnership Minded</h3>
                  <p className="text-muted-foreground">
                    We build long-term relationships, providing ongoing support and guidance as 
                    your business evolves.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="gradient-hero rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? We're here to help.
            </p>
            <Button asChild size="lg" className="shadow-material-lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
