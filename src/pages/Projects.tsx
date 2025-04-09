import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects | Zenith Studio</title>
        <meta name="description" content="Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence." />
        <meta property="og:title" content="Projects | Zenith Studio" />
        <meta property="og:description" content="Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenith-s.vercel.app/projects" />
        <link rel="canonical" href="https://zenith-s.vercel.app/projects" />
      </Helmet>
      
      <Header />
      <Toaster />

      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-custom-orange font-medium mb-2 block">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold font-syne mb-4">
              Explore Our <span className="text-custom-orange">Projects</span>
            </h1>
            <p className="text-gray-700">
              A curated selection of our most innovative and impactful digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Project Card - Replace with actual project data */}
            <div className="rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-syne">Project Title 1</h3>
                <p className="text-gray-700 font-jakarta">
                  Brief description of the project and its objectives.
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-syne">Project Title 2</h3>
                <p className="text-gray-700 font-jakarta">
                  Brief description of the project and its objectives.
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 font-syne">Project Title 3</h3>
                <p className="text-gray-700 font-jakarta">
                  Brief description of the project and its objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
