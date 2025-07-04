
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-900">AutoGenix</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-orange-600 font-medium' : 'text-gray-600 hover:text-orange-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors ${isActive('/services') ? 'text-orange-600 font-medium' : 'text-gray-600 hover:text-orange-600'}`}
          >
            Services
          </Link>
          <Link 
            to="/how-it-works" 
            className={`transition-colors ${isActive('/how-it-works') ? 'text-orange-600 font-medium' : 'text-gray-600 hover:text-orange-600'}`}
          >
            Process
          </Link>
          <Link 
            to="/use-cases" 
            className={`transition-colors ${isActive('/use-cases') ? 'text-orange-600 font-medium' : 'text-gray-600 hover:text-orange-600'}`}
          >
            Use Cases
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-orange-600 font-medium' : 'text-gray-600 hover:text-orange-600'}`}
          >
            Contact
          </Link>
        </div>
        <Link to="/contact">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
