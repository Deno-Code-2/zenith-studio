import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Building2, MessageSquareMore } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";

const About = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section with adjusted padding */}
      <section className="pt-32 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-custom-orange font-jakarta">About</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-syne">
              Empowering Your Online Presence<br />
              Discover the <span className="text-orange-500">Zenith Studio</span> Difference Today!
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Zenith Studio is more than a digital agency; we're your partner in online success. With a commitment to excellence and a passion for innovation, we offer a full suite of services designed to elevate your brand and expand your reach.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/My-Logo.png"
              alt="Team"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-syne">Founded</h3>
              <p className="text-gray-300">
                Founded with vision and innovation, ensuring exceptional digital solutions.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-syne">162 Websites</h3>
              <p className="text-gray-300">
                Successfully crafted over 162 websites, delivering exceptional digital solutions worldwide.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-syne">260 Clients</h3>
              <p className="text-gray-300">
                Proudly served over 260 clients, delivering top-notch digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white font-syne">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At Zenith Studio, our mission is to empower businesses and startups with innovative digital solutions that drive growth and success. We believe in the transformative power of technology and design, and we are committed to helping our clients harness this power to achieve their goals.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a focus on quality, innovation, and customer satisfaction, we aim to be a trusted partner for businesses looking to thrive in the digital world. We are driven by a passion for excellence and a commitment to helping our clients succeed.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-navy-800 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Best Team</h3>
                  <p className="text-gray-300">
                    Our diverse, skilled team is dedicated to crafting exceptional digital solutions for every client.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-navy-800 rounded-lg">
                  <Building2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Building Startups</h3>
                  <p className="text-gray-300">
                    Empowering startups through innovative digital solutions that drive growth, engagement, and success in the market.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-navy-800 rounded-lg">
                  <MessageSquareMore className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-300">
                    Our customer support is top-notch, ensuring that every client receives personalized, attentive service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AgencyShowcase />
      <Footer />
    </main>
  );
};

export default About;
