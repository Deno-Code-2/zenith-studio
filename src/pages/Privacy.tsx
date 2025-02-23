import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPattern } from "@/components/magicui/grid-pattern";
import AgencyShowcase from "@/components/AgencyShowcase";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Privacy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Animation for grid pattern
    gsap.fromTo(".grid-pattern",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      }
    );

    // Section animations
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // List item animations
    gsap.utils.toArray("ul li").forEach((item: any, index) => {
      gsap.fromTo(item,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        }
      );
    });

  }, []);

  return (
    <div className="min-h-screen bg-custom-orange" ref={containerRef}>
      <Header />
      <div className="relative overflow-hidden">
        <GridPattern
          width={1200}
          height={1000}
          className="grid-pattern absolute inset-x-0 -top-20 -bottom-20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)] -z-10"
        />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-white font-syne animate-fade-in">
            Privacy Policy <span className="text-2xl block mt-2">Zenith Studio</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-text font-jakarta space-y-6">
            {/* Introduction Section */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">1. Introduction</h2>
              <p>At Zenith Studio, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you use our services, visit our website (www.zenithstudio.com), or engage with our digital platforms.</p>
            </section>

            {/* Expanded Information Collection */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">2. Information Collection</h2>
              <p>We collect both personal and non-personal information through:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Account registration forms</li>
                <li>Service usage analytics (via Plausible Analytics)</li>
                <li>Client onboarding processes</li>
                <li>Marketing campaign interactions</li>
                <li>Customer support communications</li>
                <li>Cookies and tracking technologies</li>
              </ul>
              <p className="mt-4">Data types include: Names, email addresses, billing information, IP addresses, device information, and service usage patterns.</p>
            </section>

            {/* Enhanced Data Usage Section */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">3. Use of Information</h2>
              <p>Your information helps us:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Deliver and improve our SaaS solutions</li>
                <li>Personalize client experiences</li>
                <li>Process transactions securely (Stripe/PayPal)</li>
                <li>Develop new features and services</li>
                <li>Comply with legal obligations (GDPR/CCPA)</li>
                <li>Prevent fraudulent activities</li>
              </ul>
            </section>

            {/* Data Sharing with Animations */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">4. Data Sharing & Third Parties</h2>
              <p>We may share information with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Payment processors (Stripe, PayPal)</li>
                <li>Cloud service providers (AWS, Vercel)</li>
                <li>Marketing platforms (HubSpot, Mailchimp)</li>
                <li>Analytics tools (Google Analytics, Hotjar)</li>
                <li>Legal authorities when required</li>
              </ul>
              <p className="mt-4">All third parties are GDPR-compliant and subject to strict data processing agreements.</p>
            </section>

            {/* Enhanced Data Protection */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">5. Data Protection Measures</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3+ for data in transit</li>
                <li>Regular penetration testing</li>
                <li>Role-based access control</li>
                <li>Biometric authentication systems</li>
                <li>Automated vulnerability scanning</li>
              </ul>
            </section>

            {/* User Rights Section */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">6. Your Rights</h2>
              <p>Under global privacy regulations, you can:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Request access to your data</li>
                <li>Demand data portability (JSON/CSV)</li>
                <li>Withdraw consent for processing</li>
                <li>Request permanent deletion</li>
                <li>Object to automated decisions</li>
                <li>Lodge complaints with authorities</li>
              </ul>
            </section>

            {/* Additional Sections */}
            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">7. Data Retention</h2>
              <p>We retain personal data for 3 years post-termination of services, except for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Financial records (7 years)</li>
                <li>Legal disputes (until resolution)</li>
                <li>Anonymized analytics data (indefinitely)</li>
              </ul>
            </section>

            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">8. International Transfers</h2>
              <p>Zenith Studio utilizes EU-US Data Privacy Framework compliant providers. All cross-border transfers implement:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Standard Contractual Clauses</li>
                <li>Data encryption in transit</li>
                <li>Jurisdiction-specific storage</li>
              </ul>
            </section>

            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">9. Policy Updates</h2>
              <p>Last modified: September 2024. We notify changes through:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>In-app notifications</li>
                <li>Email announcements</li>
                <li>Website banners</li>
                <li>Social media updates</li>
              </ul>
            </section>

            <section ref={(el) => el && sectionRefs.current.push(el)}>
              <h2 className="text-2xl font-bold mb-4 font-syne">10. Contact Us</h2>
              <p>Data Protection Officer:<br />
              Email: dpo@zenithstudio.com<br />
              Postal: Zenith Studio Ltd, Data Protection Office<br />
              123 Privacy Lane, Tech Valley, CA 94016</p>
            </section>
          </div>
        </div>
      </div>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Privacy;