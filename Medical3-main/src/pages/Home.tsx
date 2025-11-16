import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { Shield, Server, HardDrive, AlertTriangle, Clock, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TrustBar />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Next HIPAA Breach or EHR Outage{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Will Cost You. I Prevent Both — Guaranteed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Specialized IT support for 1–8 provider Manhattan practices with full compliance oversight and real-time operational monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
                <a href="#cta-section">Get Your Free 7-Point Snapshot</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#services">View Our Services</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <strong className="text-foreground">Unlike most IT shops, we sign a full Business Associate Agreement</strong> with clear responsibilities and zero wiggle room.
            </p>
          </div>
        </div>
      </section>

      {/* Immediate Problems Checklist */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Most Manhattan Practices Call Me for One of Three Issues:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer" onClick={() => window.location.href = '#cta-section'}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Their EHR keeps freezing or crashing</CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer" onClick={() => window.location.href = '#cta-section'}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">They failed a HIPAA audit or got a warning</CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer" onClick={() => window.location.href = '#cta-section'}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Their previous IT provider stopped answering</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className="text-center mt-6">
              <Button size="lg" asChild>
                <a href="#cta-section">Book Your Free Snapshot</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EHR & Credentials Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-center mb-6 text-muted-foreground">
              Certified Expertise with the EHR Systems Manhattan Practices Use
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <p className="font-semibold text-lg">eClinicalWorks</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Athenahealth</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">DrChrono</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">TherapyNotes</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Experience with Manhattan practices including: <strong className="text-foreground">Cardiology • Internal Medicine • Mental Health • Dermatology • Primary Care</strong>
            </p>
          </div>
        </div>
      </section>

      {/* About/Credibility Story Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Why I Built PulseOpsIT
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-base leading-relaxed">
                After years working with Manhattan medical practices, I saw the same pattern repeat: general IT providers treating healthcare like any other business. The result? HIPAA violations from simple mistakes, EHR systems left unoptimized, and practices scrambling during audits.
              </p>
              <p className="text-base leading-relaxed mt-4">
                I earned my <strong className="text-foreground">Certified HIPAA Security Expert (CHSE)</strong> certification because healthcare IT demands specialization, not generalization. Your patient data isn't just "business data" — it's legally protected health information with serious consequences for mishandling.
              </p>
              <p className="text-base leading-relaxed mt-4">
                I've seen practices fined $175,000 for breaches that could have been prevented with proper safeguards. I've watched doctors lose entire days of revenue because their EHR crashed and no one knew how to fix it. That's why PulseOpsIT exists — to be the preventative compliance shield that small practices desperately need but rarely find.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="#cta-section">Request a HIPAA Readiness Review</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              The Hidden Costs of IT Neglect in Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20 shadow-medium">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                    <CardTitle className="text-destructive">HIPAA Violations</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    A single HIPAA breach can cost your practice{" "}
                    <span className="font-bold text-foreground">$175,000 in fines</span>, plus legal
                    fees, reputation damage, and potential practice closure.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-warning/20 shadow-medium">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-8 w-8 text-warning" />
                    <CardTitle className="text-warning">EHR Downtime</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Every hour of EHR downtime costs your practice{" "}
                    <span className="font-bold text-foreground">$1,000+ in lost revenue</span>, plus
                    frustrated staff and delayed patient care.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Anchoring Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Predictable Pricing for Peace of Mind
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most 1–8 provider practices invest <strong className="text-foreground">$1,000–$2,500/month</strong> for full HIPAA-aligned coverage, EHR management, and data protection.
            </p>
            <div className="bg-muted p-6 rounded-lg border border-border">
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Flat monthly pricing</strong> — No surprise invoices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>No billable hours</strong> — Unlimited support calls</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Initial project fee: $5,500–$9,000</strong> for full assessment and setup</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button size="lg" asChild>
                <a href="#cta-section">Chat About Your EHR Issues</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Three Pillars of Practice Protection
            </h2>
            <p className="text-base text-muted-foreground">
              We specialize exclusively in Manhattan medical practices, delivering enterprise-grade IT
              security and reliability without the enterprise complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">HIPAA Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Full Business Associate Agreement</li>
                  <li>• Administrative, Technical & Physical Safeguards</li>
                  <li>• Risk Analysis & Management</li>
                  <li>• Ongoing Staff Training</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/hipaa-compliance">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Book Your Free Snapshot</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Server className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">EHR & Uptime Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Vendor Liaison Management</li>
                  <li>• Proactive Performance Tuning</li>
                  <li>• Secure Remote Access</li>
                  <li>• eClinicalWorks, Athenahealth & More</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/ehr-uptime">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Book Your Free Snapshot</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <HardDrive className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">Data Security & Recovery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Business Continuity Planning</li>
                  <li>• Immutable Backup & Encryption</li>
                  <li>• Security Awareness Training</li>
                  <li>• Ransomware Protection</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/data-security">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Book Your Free Snapshot</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Manhattan Practices Choose PulseOpsIT
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">HIPAA-Focused Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Led by a Certified HIPAA Security Expert (CHSE) who understands the unique
                    compliance requirements of medical practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Server className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">EHR Specialist</h3>
                  <p className="text-sm text-muted-foreground">
                    We speak fluent eClinicalWorks, Athenahealth, TherapyNotes, and more. No more
                    translating between IT and your EHR vendor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Predictable Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Fixed monthly fees with no surprises. Initial project fee ranges from $5,500 -
                    $9,000, followed by tailored monthly support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proactive, Not Reactive</h3>
                  <p className="text-sm text-muted-foreground">
                    We monitor, maintain, and prevent issues before they become emergencies. Your IT
                    should be invisible, not a source of daily stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
