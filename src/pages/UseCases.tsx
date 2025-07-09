import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Share2, Package, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const UseCases = () => {
  const useCases = [
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "🧾 Client Intake + GPT Summary",
      workflow: "Tally Form → GPT-4 Summary → Google Sheet → Welcome Email",
      useCase: "A business coach wanted summarized client notes + automated replies.",
      tags: ["Coaching", "Client Management", "AI Summary"]
    },
    {
      icon: <Share2 className="h-10 w-10 text-purple-600" />,
      title: "📰 Blog to LinkedIn + Instagram",
      workflow: "Notion (or Google Doc) → GPT → 3 LinkedIn posts + 1 IG caption",
      subWorkflow: "Auto-published via Zapier",
      useCase: "A content creator wanted to repurpose her long-form content into daily social posts.",
      tags: ["Content Marketing", "Social Media", "Repurposing"]
    },
    {
      icon: <Package className="h-10 w-10 text-green-600" />,
      title: "🛒 Order Status to Email + Sheet",
      workflow: "Shopify order → Google Sheet tracker → GPT writes delivery update → Email sent to customer",
      useCase: "A boutique seller wanted to automate status updates and reduce support queries.",
      tags: ["E-commerce", "Customer Service", "Order Management"]
    },
    {
      icon: <BarChart className="h-10 w-10 text-orange-600" />,
      title: "📊 Weekly Team Insights via GPT",
      workflow: "Google Sheet (logs) → GPT → Weekly email digest to founder",
      useCase: "A startup founder wanted a Monday morning summary of what happened last week.",
      tags: ["Analytics", "Team Management", "Reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Real Automations We've Built
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just imagine — here's what's possible (or can be built for you).
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">💼 Success Stories & Workflows</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've transformed businesses with custom automation solutions that save time and increase efficiency.
            </p>
          </div>
          
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <Card key={index} className="max-w-4xl mx-auto hover-scale bg-white shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      {useCase.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-slate-900 mb-3">{useCase.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {useCase.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-medium text-blue-900 mb-2">Workflow:</div>
                    <div className="text-blue-800 font-mono text-sm mb-2">{useCase.workflow}</div>
                    {useCase.subWorkflow && (
                      <div className="text-blue-700 text-sm">{useCase.subWorkflow}</div>
                    )}
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-medium text-green-900 mb-2">Use case:</div>
                    <div className="text-green-800 text-sm">{useCase.useCase}</div>
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
          <h2 className="text-3xl font-bold mb-6">✨ Want one of these in your business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We can build custom automations like these tailored to your specific needs and workflows.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-4">AutoGenix</div>
              <p className="text-gray-400">
                Enterprise-scale AI automation for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Workflow Automation</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Data Processing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">AI Integration</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Enterprise Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-sm text-gray-500">
              © 2024 AutoGenix. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UseCases;
