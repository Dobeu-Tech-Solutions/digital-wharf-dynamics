import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Code2, BookOpen, MessageSquare, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom, responsive websites built with modern technologies",
      features: [
        "Custom design tailored to your brand",
        "Responsive across all devices",
        "SEO optimization included",
        "CMS integration available"
      ]
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Full-stack applications and custom software solutions",
      features: [
        "Web and mobile applications",
        "API development and integration",
        "Database design and optimization",
        "Cloud deployment and scaling"
      ]
    },
    {
      icon: BookOpen,
      title: "Learning & Training",
      description: "Technical training and knowledge transfer",
      features: [
        "Team training sessions",
        "Best practices workshops",
        "Technology assessments",
        "Documentation creation"
      ]
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Expert guidance for your technology decisions",
      features: [
        "Technology stack selection",
        "Architecture review",
        "Security audits",
        "Performance optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning & Optimization",
      description: "Long-term technology strategy and growth planning",
      features: [
        "Digital transformation roadmap",
        "Process optimization",
        "Cost analysis and reduction",
        "Scalability planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-material hover:shadow-material-lg transition-material">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="shadow-material-lg">
            <Link to="/contact">Get Started with a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
