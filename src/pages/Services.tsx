
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Sheets, Mail, Users, Bot, BarChart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Sheets className="h-12 w-12 text-green-600" />,
      title: "Google Sheets Automation",
      description: "Transform your spreadsheets into powerful, self-updating databases that sync with your business tools automatically.",
      useCase: "Perfect for inventory tracking, financial reporting, and data collection that updates in real-time without manual input.",
      priceRange: "$500 - $2,000",
      features: ["Auto-sync with CRM", "Real-time data updates", "Custom formulas & triggers", "Multi-sheet workflows"]
    },
    {
      icon: <Mail className="h-12 w-12 text-blue-600" />,
      title: "Email & Report Automation",
      description: "Automatically generate and send personalized reports, follow-ups, and notifications based on your business triggers.",
      useCase: "Ideal for weekly reports, client updates, and follow-up sequences that maintain consistent communication.",
      priceRange: "$300 - $1,500",
      features: ["Scheduled reports", "Dynamic content", "Multi-channel delivery", "Performance tracking"]
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Client Intake + CRM Sync",
      description: "Streamline your client onboarding with automated data collection, verification, and CRM integration.",
      useCase: "Essential for consultants and service providers who need seamless client data flow from first contact to project delivery.",
      priceRange: "$400 - $1,800",
      features: ["Form automation", "Data validation", "CRM integration", "Client portals"]
    },
    {
      icon: <Bot className="h-12 w-12 text-orange-600" />,
      title: "AI GPT Summaries & Workflows",
      description: "Leverage GPT to automatically summarize documents, emails, and data while triggering smart business workflows.",
      useCase: "Perfect for processing large volumes of text, generating insights, and making data-driven decisions automatically.",
      priceRange: "$600 - $3,000",
      features: ["Content summarization", "Smart categorization", "Decision triggers", "Custom AI prompts"]
    },
    {
      icon: <BarChart className="h-12 w-12 text-indigo-600" />,
      title: "Dashboards & Data Visualizations",
      description: "Create stunning, real-time dashboards that transform your raw data into actionable business insights.",
      useCase: "Ideal for tracking KPIs, monitoring business performance, and presenting data to stakeholders in real-time.",
      priceRange: "$800 - $4,000",
      features: ["Real-time updates", "Interactive charts", "Custom metrics", "Mobile responsive"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-slate-900">AutomateFlow</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/services" className="text-orange-600 font-medium">Services</Link>
          </div>
          <Link to="/#contact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Our Automation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our specialized automation solutions designed to transform specific areas of your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale bg-white shadow-xl border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-slate-900 mb-4">{service.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Badge className="bg-orange-100 text-orange-800 text-sm px-3 py-1">
                    {service.priceRange}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900 mb-1">Use Case</div>
                        <div className="text-sm text-blue-700">{service.useCase}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-slate-900 mb-3">What's Included:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                      Book This Service
                    </Button>
                    <Button variant="outline" className="flex-1">
                      See Example
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation and we'll help you identify the best automation opportunities for your business.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
