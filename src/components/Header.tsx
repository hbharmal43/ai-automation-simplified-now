
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo/logo_.png";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center md:ml-2 lg:ml-4" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Quoraflo logo"
            className="h-9 md:h-10 lg:h-12 w-auto object-contain"
            loading="eager"
            draggable={false}
          />
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/services') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Services
          </Link>
          <Link 
            to="/how-it-works" 
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/how-it-works') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Process
          </Link>
          <Link 
            to="/use-cases" 
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/use-cases') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Use Cases
          </Link>
          <Link 
            to="/contact" 
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${isActive('/contact') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Contact
          </Link>
        </div>
        <Link to="/contact">
          <Button className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg shadow-card hover:shadow-elegant">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
