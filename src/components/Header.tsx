
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full glass backdrop-blur-lg border-b border-border/50 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-gradient hover-scale">
          Quoraflo
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-all duration-300 font-medium ${isActive('/') ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`transition-all duration-300 font-medium ${isActive('/services') ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
          >
            Services
          </Link>
          <Link 
            to="/how-it-works" 
            className={`transition-all duration-300 font-medium ${isActive('/how-it-works') ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
          >
            Process
          </Link>
          <Link 
            to="/use-cases" 
            className={`transition-all duration-300 font-medium ${isActive('/use-cases') ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
          >
            Use Cases
          </Link>
          <Link 
            to="/contact" 
            className={`transition-all duration-300 font-medium ${isActive('/contact') ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
          >
            Contact
          </Link>
        </div>
        <Link to="/contact">
          <Button className="bg-gradient-primary border-0 text-primary-foreground font-semibold shadow-elegant hover:shadow-glow hover-scale">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
