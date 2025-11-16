import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { Shield, FileCheck, Lock, Building, AlertTriangle } from "lucide-react";

const HIPAACompliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TrustBar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">$175,000 Fines for a Single HIPAA Violation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get HIPAA-Proofed by a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Manhattan Specialist
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Compliance is not a Checklist—It's a Full-Time Job. We are your dedicated Business
              Associate.
            </p>
            <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
              <a href="#cta-section">Schedule Your Free HIPAA Risk Assessment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Stakes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Stakes Are Higher Than Ever
            </h2>
            <div className="bg-muted p-8 rounded-lg shadow-medium mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                HIPAA violations aren't just about fines. They trigger:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-destructive font-bold mr-2">•</span>
                  <span>
                    <strong>Legal exposure:</strong> Class-action lawsuits from affected patients
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive font-bold mr-2">•</span>
                  <span>
                    <strong>Reputation damage:</strong> Loss of patient trust and referrals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive font-bold mr-2">•</span>
                  <span>
                    <strong>Business interruption:</strong> Mandatory breach notifications and
                    remediation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive font-bold mr-2">•</span>
                  <span>
                    <strong>Practice closure:</strong> Severe violations can shut down your business
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-primary mb-4">
                Don't wait for an audit or breach to discover your vulnerabilities.
              </p>
              <p className="text-lg text-muted-foreground">
                Initial Project Fee: <span className="font-bold text-foreground">$5,500 - $9,000</span>{" "}
                for complete HIPAA compliance setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The 3 Pillars of HIPAA Safeguards
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Our comprehensive approach ensures every aspect of HIPAA compliance is covered.
            </p>

            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileCheck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Administrative Safeguards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The policies and procedures that govern how ePHI is handled and protected.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Security Management Process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Assigned Security Responsibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Workforce Security Training</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Information Access Management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Security Awareness Training</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Security Incident Procedures</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Contingency Planning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Regular Risk Analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Lock className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Technical Safeguards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The technology and systems that protect ePHI and control access to it.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Unique User Identification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Emergency Access Procedures</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Automatic Logoff</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Encryption & Decryption</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Audit Controls & Logging</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Multi-Factor Authentication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Data Integrity Monitoring</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Transmission Security (TLS/VPN)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Building className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Physical Safeguards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The physical measures and controls that protect systems and facilities containing
                    ePHI.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Facility Access Controls</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Workstation Use Policies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Workstation Security</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Device & Media Controls</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Secure Device Disposal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Data Backup Procedures</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Environmental Controls</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Visitor Access Logs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BAA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-strong border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-center">
                  Our Commitment: Comprehensive Business Associate Agreement (BAA)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  As your IT provider, we handle ePHI and are legally required to sign a BAA. This
                  isn't optional—it's mandatory for HIPAA compliance.
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">Our BAA guarantees that we will:</p>
                  <ul className="text-left space-y-2 max-w-2xl mx-auto">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Implement appropriate safeguards to protect the confidentiality, integrity, and
                        availability of your ePHI
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Report any security incidents or breaches to you within the required timeframe
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Ensure our subcontractors also comply with HIPAA requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        Make our internal practices and records available for HHS compliance reviews
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default HIPAACompliance;
