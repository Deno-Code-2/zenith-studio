
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";
import { Features } from "@/components/ui/features-4";
import { UtensilsCrossed, MapPin, Clock, Camera, Star, Smartphone } from "lucide-react";

const RestaurantWebsiteDesign = () => {
  const restaurantFeatures = [
    {
      icon: <UtensilsCrossed className="size-4" />,
      title: "Interactive Menus",
      description: "Beautiful, mobile-friendly digital menus with mouth-watering food photography and descriptions."
    },
    {
      icon: <Clock className="size-4" />,
      title: "Online Reservations",
      description: "Integrated booking system for table reservations with real-time availability updates."
    },
    {
      icon: <Camera className="size-4" />,
      title: "Food Photography",
      description: "Stunning food galleries and professional photography that make dishes irresistible."
    },
    {
      icon: <MapPin className="size-4" />,
      title: "Location & Hours",
      description: "Clear location information, hours of operation, and Google Maps integration for easy navigation."
    },
    {
      icon: <Star className="size-4" />,
      title: "Customer Reviews",
      description: "Integrated review system and testimonials to build trust and showcase customer satisfaction."
    },
    {
      icon: <Smartphone className="size-4" />,
      title: "Online Ordering",
      description: "Seamless online ordering system for takeout and delivery with payment processing."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Restaurant Website Design | Zenith Studio</title>
        <meta name="description" content="Professional restaurant website design services to showcase your menu and attract more customers." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Restaurant Website Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              Delicious website designs that showcase your cuisine and drive more reservations for your restaurant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/zenithstudio/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors font-jakarta"
              >
                Get Started Today
              </a>
              <a
                href="#learn-more"
                className="border border-gray-300 text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors font-jakarta"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Features 
          title="Restaurant Websites That Drive Reservations"
          description="We create appetizing restaurant websites with online ordering, reservation systems, and stunning food photography that brings customers through your doors."
          features={restaurantFeatures}
        />

        {/* Content Section */}
        <div id="learn-more" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Interactive menu displays</li>
                    <li>• Online reservation systems</li>
                    <li>• Food gallery showcases</li>
                    <li>• Chef and team profiles</li>
                    <li>• Location and hours</li>
                    <li>• Customer reviews section</li>
                    <li>• Special events promotion</li>
                    <li>• Contact and directions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Mobile-optimized menus</li>
                    <li>• Online ordering integration</li>
                    <li>• Social media feeds</li>
                    <li>• SEO optimization</li>
                    <li>• Fast loading images</li>
                    <li>• Delivery integration</li>
                    <li>• Newsletter signup</li>
                    <li>• Multi-language support</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our Restaurant Web Design?</h3>
                <p className="text-gray-600 font-jakarta">
                  We create appetizing websites that capture the essence of your restaurant, showcase your delicious offerings, 
                  and make it easy for customers to find you, view your menu, and make reservations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <GlobalPresence />
        <NewCTA />
        <NewFooter />
      </div>
    </main>
  );
};

export default RestaurantWebsiteDesign;
