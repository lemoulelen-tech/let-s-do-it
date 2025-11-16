import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { Server, Clock, DollarSign, Users, Zap, HeadphonesIcon } from "lucide-react";

const EHRUptime = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TrustBar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full mb-6">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Stop Losing $1,000 Per Hour to EHR Downtime</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your EHR Should Be a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tool, Not a Time Sink
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We put time back into patient slots. Proactive EHR management means your system works
              for you, not against you.
            </p>
            <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
              <a href="#cta-section">Get Your Free Assessment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Cost Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The True Cost of EHR Problems
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <DollarSign className="h-12 w-12 text-destructive" />
                  </div>
                  <CardTitle className="text-center text-destructive">Lost Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    Every hour of downtime costs <strong>$1,000+</strong> in missed appointments,
                    delayed billing, and staff overtime.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Users className="h-12 w-12 text-warning" />
                  </div>
                  <CardTitle className="text-center text-warning">Staff Frustration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    Slow systems, login issues, and constant workarounds lead to{" "}
                    <strong>burnout</strong> and high turnover.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Clock className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center text-primary">Patient Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    Delays, rescheduling, and long wait times damage your{" "}
                    <strong>reputation</strong> and patient satisfaction.
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
              Our EHR & Uptime Management Services
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              We take the burden of EHR management off your shoulders so you can focus on patient
              care.
            </p>

            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <HeadphonesIcon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Vendor Liaison Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We handle all communications with your EHR vendor so you don't have to waste time
                    on hold or navigating confusing support systems.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Single point of contact:</strong> We're your advocate with
                        eClinicalWorks, Athenahealth, TherapyNotes, and other vendors
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Ticket management:</strong> We open, track, and escalate support
                        tickets on your behalf
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Update coordination:</strong> We schedule and manage EHR updates
                        during off-hours to minimize disruption
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        <strong>Contract negotiations:</strong> We help you understand vendor pricing
                        and service level agreements
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Zap className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Proactive Performance Tuning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fast, responsive EHR systems mean providers can chart efficiently and spend more
                    time with patients.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>Load time optimization:</strong> We identify and fix slow-loading
                        screens and reports
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>Network performance:</strong> We ensure your internet and local
                        network can handle EHR traffic
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>Database maintenance:</strong> Regular cleanup of old data and logs to
                        keep your system running smoothly
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>
                        <strong>User workstation optimization:</strong> We configure computers for
                        optimal EHR performance
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Server className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Secure Remote Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Providers need to chart from home, hospitals, or while on call. We make it secure
                    and seamless.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>HIPAA-compliant VPN:</strong> Encrypted connections that meet all
                        compliance requirements
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>Multi-factor authentication:</strong> Secure access without
                        sacrificing convenience
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>Mobile device management:</strong> Secure tablets and phones for
                        on-the-go charting
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>
                        <strong>Remote desktop solutions:</strong> Access your full EHR environment
                        from anywhere
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supported EHR Systems */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              EHR Systems We Support
            </h2>
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">
                      Primary Care & Multi-Specialty
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>eClinicalWorks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>Athenahealth</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>Epic (ambulatory)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>Allscripts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>NextGen Healthcare</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-secondary">
                      Behavioral Health & Specialty
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="text-secondary">•</span>
                        <span>TherapyNotes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-secondary">•</span>
                        <span>SimplePractice</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-secondary">•</span>
                        <span>Kareo</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-secondary">•</span>
                        <span>DrChrono</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-secondary">•</span>
                        <span>Practice Fusion</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-muted-foreground">
                    Don't see your EHR system listed?{" "}
                    <a href="#cta-section" className="text-primary hover:underline font-semibold">
                      Contact us
                    </a>{" "}
                    - we likely support it or can quickly onboard.
                  </p>
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

export default EHRUptime;
