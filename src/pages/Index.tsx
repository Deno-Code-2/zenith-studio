
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import WallOfLoveSection from "@/components/Testimonials";

const Index = () => {
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
      </Helmet>
      <GridPattern />
      <Header />
      <div className="pt-24">
        <Hero />
        <TechStack />
        <Features />
        <Services />
        <RecentProjects />
        <WallOfLoveSection/>
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
