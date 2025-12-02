import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Check, ShoppingCart } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  base_price: number;
  features: any;
  add_ons: any;
  is_active: boolean;
}

export default function Shop() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("category");

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load services",
        variant: "destructive",
      });
      return;
    }

    setServices(data || []);
    setLoading(false);
  };

  const handlePurchase = async (serviceId: string, basePrice: number) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase services",
        variant: "destructive",
      });
      return;
    }

    // Create purchase record
    const { error } = await supabase.from("purchases").insert({
      user_id: user.id,
      service_id: serviceId,
      amount: basePrice,
      payment_type: "stripe",
      status: "pending",
      selected_add_ons: [],
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create purchase. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Purchase Initiated",
      description: "Redirecting to payment...",
    });

    // TODO: Integrate with Stripe when ready
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      website: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      software: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      learning: "bg-green-500/10 text-green-500 border-green-500/20",
      consulting: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      optimization: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    };
    return colors[category.toLowerCase()] || "bg-muted text-muted-foreground";
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 flex items-center justify-center">
        <p className="text-muted-foreground">Loading services...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-muted-foreground">Choose the perfect solution for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="shadow-material hover:shadow-material-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className={getCategoryColor(service.category)}>
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{service.name}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="text-3xl font-bold text-primary">
                  ${service.base_price.toLocaleString()}
                </div>
                
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Includes:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.add_ons && service.add_ons.length > 0 && (
                  <div className="pt-4 border-t space-y-2">
                    <p className="text-sm font-semibold">Available Add-ons:</p>
                    <ul className="space-y-1">
                      {service.add_ons.map((addon, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {addon.name} (+${addon.price})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handlePurchase(service.id, service.base_price)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Purchase Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {services.length === 0 && (
          <Card className="shadow-material">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No services available at this time</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
