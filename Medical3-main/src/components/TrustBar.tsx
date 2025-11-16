import { Shield, Award, MapPin } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-muted border-y border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">CHSE Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Manhattan Focused</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
