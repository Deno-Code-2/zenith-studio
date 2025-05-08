
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import RecentProjects from "@/components/RecentProjects";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import WallOfLoveSection from "@/components/Testimonials";
import { useEffect } from "react";
import Bookacall from "@/components/Book-a-call";
import ServicesSection from "@/components/service";
import GlobalPresence from "@/components/GlobalPresence";
import FAQ from "@/components/FAQ";
import PricingPage from "@/components/pricing";
import ClientStats from "@/components/ClientStats";

const Index = () => {
  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-4771BVNJVP');
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Helmet>
        <title>Zenith Studio | Web Development & Digital Solutions Agency</title>
        <meta name="description" content="Zenith Studio offers premium web development, mobile app development, SEO optimization, and digital transformation services for businesses of all sizes." />
        <meta name="keywords" content="web development, mobile app, digital agency, SEO services, web design, digital transformation" />
        <link rel="canonical" href="https://www.zenith-studio.dev/" />
        <meta property="og:title" content="Zenith Studio | Web Development & Digital Solutions" />
        <meta property="og:description" content="Transform your digital presence with our comprehensive web development and digital marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zenith-studio.dev/" />
        <meta property="og:image" content="https://www.zenith-studio.dev/images/Zenith Studio.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4771BVNJVP"></script>
      </Helmet>
      <GridPattern />
      <ClientStats />
      <Header />
      <div className="pt-16">
        <Hero />
        <TechStack />
        <section id="features">
          <Features />
        </section>
        <section id="services">
          <ServicesSection/>
        </section>
        <section id="recent-work">
          <RecentProjects />
        </section>
        <section id="pricing">
          <PricingPage />
        </section>
        <Bookacall/>
        <section id="testimonials">
          <WallOfLoveSection/>
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <GlobalPresence />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
