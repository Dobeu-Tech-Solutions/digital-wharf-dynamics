import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
    marketingConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.smsConsent && formData.phone) {
      toast.error("Please consent to SMS communication if providing a phone number");
      return;
    }

    // Would send to backend in production
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      smsConsent: false,
      marketingConsent: false
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-material-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  {formData.phone && (
                    <div className="flex items-start space-x-2 p-4 bg-muted rounded-lg">
                      <Checkbox
                        id="sms"
                        checked={formData.smsConsent}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, smsConsent: checked as boolean })
                        }
                      />
                      <label htmlFor="sms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I consent to receive SMS messages from DOBEU regarding my inquiry and project updates. 
                        Message and data rates may apply. Reply STOP to opt out anytime.
                      </label>
                    </div>
                  )}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, marketingConsent: checked as boolean })
                      }
                    />
                    <label htmlFor="marketing" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I'd like to receive marketing emails about services, tips, and special offers.
                    </label>
                  </div>

                  <Button type="submit" className="w-full shadow-material" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-material">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@dobeu.cloud</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-material">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-material">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      San Francisco, CA<br />
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-material gradient-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Prefer to Schedule a Call?</h3>
                <p className="mb-6 opacity-90">
                  Book a free 30-minute consultation to discuss your project in detail.
                </p>
                <Button variant="secondary" size="lg" className="shadow-material">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
