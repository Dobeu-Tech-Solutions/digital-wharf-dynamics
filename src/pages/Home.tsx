import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Palette, Zap, Users, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Transform Your Digital Vision
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert web development, software solutions, and strategic consulting 
            to elevate your business in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-material-lg text-lg">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-material text-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose DOBEU?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-material hover:shadow-material-lg transition-material">
              <CardContent className="p-6">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Modern Development</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technologies and best practices for scalable, maintainable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-material hover:shadow-material-lg transition-material">
              <CardContent className="p-6">
                <Palette className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Beautiful Design</h3>
                <p className="text-muted-foreground">
                  User-centric designs that combine aesthetics with exceptional functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-material hover:shadow-material-lg transition-material">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Optimized performance ensuring your applications run smoothly at scale.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-material hover:shadow-material-lg transition-material">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Dedicated professionals committed to bringing your vision to life.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-material hover:shadow-material-lg transition-material">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth Focused</h3>
                <p className="text-muted-foreground">
                  Strategic solutions designed to scale with your business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-material hover:shadow-material-lg transition-material">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security and reliability you can trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-material-lg text-lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
