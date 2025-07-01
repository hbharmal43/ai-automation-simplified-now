
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours with a custom automation plan.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-slate-700">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Get Your Free Enterprise Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border-slate-600 text-white placeholder:text-slate-300"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-slate-600 text-white placeholder:text-slate-300"
              />
            </div>
          </div>
          
          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-white/10 border-slate-600 text-white placeholder:text-slate-300"
          />
          
          <Textarea
            name="message"
            placeholder="Tell us about your automation needs and current challenges..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-white/10 border-slate-600 text-white placeholder:text-slate-300"
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700"
            size="lg"
          >
            {isSubmitting ? "Sending..." : "Get Free Consultation"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
