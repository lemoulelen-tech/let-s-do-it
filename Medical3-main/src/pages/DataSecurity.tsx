import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { HardDrive, Shield, Flame, Users, AlertCircle, Lock } from "lucide-react";

const DataSecurity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TrustBar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
              <AlertCircle className="h-5 w-5" />
              <span className="font-semibold">Ransomware, Fire, or Flood</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Recover Your Practice in{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hours, Not Weeks
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We ensure the confidentiality, integrity, and availability of your ePHI—the three
              pillars of HIPAA's Security Rule.
            </p>
            <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
              <a href="#cta-section">Schedule Your Free Assessment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Threat Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Threats Are Real and Growing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-medium border-destructive/20">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Lock className="h-12 w-12 text-destructive" />
                  </div>
                  <CardTitle className="text-center text-destructive">Ransomware</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    Healthcare is the <strong>#1 target</strong> for ransomware attacks. Average
                    ransom: <strong>$140,000</strong>. Average downtime: <strong>19 days</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-warning/20">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Flame className="h-12 w-12 text-warning" />
                  </div>
                  <CardTitle className="text-center text-warning">Disasters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    Fire, flood, or equipment failure can destroy on-site data. Without proper
                    backups, <strong>60% of businesses never recover</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-primary/20">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center text-primary">Human Error</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    <strong>95% of breaches</strong> involve human error. Phishing, weak passwords,
                    and accidental deletions are constant threats.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Data Security & Recovery Services
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Comprehensive protection and rapid recovery when you need it most.
            </p>

            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <HardDrive className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Business Continuity Planning (BCP)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A disaster recovery plan isn't optional—it's a HIPAA requirement. We help you
                    define and test your Recovery Time Objective (RTO).
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>RTO Definition:</strong> How quickly do you need to be operational
                        after an incident?
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>RPO Definition:</strong> How much data can you afford to lose?
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Regular Testing:</strong> We test your recovery procedures quarterly
                        to ensure they actually work
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Documentation:</strong> Complete disaster recovery plans that satisfy
                        HIPAA requirements
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Immutable Backup & Encryption</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ransomware can't encrypt what it can't touch. Our immutable backup strategy
                    guarantees a clean copy of your data.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>3-2-1 Rule:</strong> 3 copies of data, on 2 different media types, with
                        1 copy offsite
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>Immutable Storage:</strong> Backups that cannot be modified or deleted
                        by ransomware
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>Encryption at Rest:</strong> All backups are encrypted to HIPAA
                        standards (AES-256)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>Continuous Monitoring:</strong> Automated verification that backups are
                        completing successfully
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Security Awareness Training</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Your staff is your first line of defense. We train them to recognize and avoid the
                    most common threats.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>Phishing Simulations:</strong> Regular testing to identify vulnerable
                        staff members
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>HIPAA Training:</strong> Annual security and privacy training required
                        by law
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>Password Best Practices:</strong> Training on creating and managing
                        strong passwords
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>Incident Reporting:</strong> Clear procedures for reporting suspicious
                        activity
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Focus Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our Technical Approach
            </h2>
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  The 3-2-1 Rule with Immutable Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-primary">3 Copies of Your Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Your primary data plus two backups. This ensures redundancy even if one backup
                      fails.
                    </p>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-secondary">
                      2 Different Media Types
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      One on local storage (fast recovery) and one on cloud storage (off-site
                      protection). This protects against hardware failure.
                    </p>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-accent">1 Copy Off-Site</h3>
                    <p className="text-sm text-muted-foreground">
                      Cloud-based backup protects against physical disasters like fire or flood.
                      Encrypted and immutable to prevent ransomware attacks.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      Immutable Storage: The Ransomware Shield
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Immutable backups use write-once-read-many (WORM) technology. Once written, the
                      data cannot be modified or deleted for a specified period (typically 30-90 days).
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This means even if ransomware infiltrates your network and encrypts your primary
                      data and local backups, it <strong>cannot touch your immutable backups</strong>.
                      You always have a clean copy to restore from.
                    </p>
                  </div>
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

export default DataSecurity;
