import { Shield, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PulseOpsIT
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              HIPAA-Compliant IT Services for Manhattan Medical Practices
            </p>
            <div className="mt-4">
              <p className="text-xs font-semibold text-primary">
                Certified HIPAA Security Expert (CHSE)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/hipaa-compliance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a
                  href="/ehr-uptime"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  EHR & Uptime Management
                </a>
              </li>
              <li>
                <a
                  href="/data-security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Data Security & Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:support@pulseopsit.com"
                  className="hover:text-foreground transition-colors"
                >
                  support@pulseopsit.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Manhattan, New York<br />Serving Manhattan medical practices exclusively</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs text-muted-foreground text-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>CHSE Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Full BAA Provided</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Not affiliated with any EHR vendors</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PulseOpsIT. All rights reserved. Independent IT specialists serving Manhattan medical practices.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
