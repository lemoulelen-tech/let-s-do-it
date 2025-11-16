import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-section" className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Get Your Free 7-Point HIPAA Vulnerability Snapshot
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Within 24 hours, you'll receive a short written summary of your risk exposure, including EHR access risks, staff compliance gaps, and data backup vulnerabilities.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 shadow-strong hover:scale-105 transition-transform"
          asChild
        >
          <a
            href="https://calendly.com/pulseopsit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule Your Free 7-Point Snapshot</span>
          </a>
        </Button>
        <p className="mt-4 text-sm text-primary-foreground/80">
          No obligation • 24-hour turnaround • Written deliverable
        </p>
      </div>
    </section>
  );
};

export default CTASection;
