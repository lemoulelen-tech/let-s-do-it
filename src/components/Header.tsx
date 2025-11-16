import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PulseOpsIT
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              to="/hipaa-compliance"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              HIPAA Compliance
            </NavLink>
            <NavLink
              to="/ehr-uptime"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              EHR & Uptime
            </NavLink>
            <NavLink
              to="/data-security"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Data Security & BDR
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button size="sm" onClick={scrollToCTA}>
              Free HIPAA Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <NavLink
              to="/"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              activeClassName="text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/hipaa-compliance"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              activeClassName="text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              HIPAA Compliance
            </NavLink>
            <NavLink
              to="/ehr-uptime"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              activeClassName="text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              EHR & Uptime
            </NavLink>
            <NavLink
              to="/data-security"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              activeClassName="text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Data Security & BDR
            </NavLink>
            <div className="pt-3">
              <Button
                size="sm"
                className="w-full"
                onClick={(e) => {
                  scrollToCTA(e);
                  setMobileMenuOpen(false);
                }}
              >
                Free HIPAA Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
