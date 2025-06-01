
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import FAQComponent from "@/components/FAQ";

const FAQPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>FAQ | Zenith Studio</title>
        <meta name="description" content="Frequently asked questions about Zenith Studio's services and processes." />
      </Helmet>
      <div className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-syne">
            Frequently <span className="text-green-500">Asked Questions</span>
          </h1>
          <FAQComponent />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FAQPage;
