
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";
import { Features } from "@/components/ui/features-4";
import { Shield, Calendar, FileText, Phone, Users, Heart } from "lucide-react";

const MedicalWebsiteDesign = () => {
  const medicalFeatures = [
    {
      icon: <Shield className="size-4" />,
      title: "HIPAA Compliant",
      description: "Secure, compliant design that protects patient privacy and meets healthcare regulations."
    },
    {
      icon: <Calendar className="size-4" />,
      title: "Online Booking",
      description: "Integrated appointment scheduling system for easy patient booking and management."
    },
    {
      icon: <FileText className="size-4" />,
      title: "Patient Portal",
      description: "Secure patient portals for accessing medical records, test results, and communication."
    },
    {
      icon: <Phone className="size-4" />,
      title: "Telemedicine Ready",
      description: "Built-in telemedicine capabilities for virtual consultations and remote patient care."
    },
    {
      icon: <Users className="size-4" />,
      title: "Trust Building",
      description: "Professional design with doctor credentials, testimonials, and certifications."
    },
    {
      icon: <Heart className="size-4" />,
      title: "Patient Experience",
      description: "User-friendly interface designed for patients of all ages and technical abilities."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Medical Website Design | Zenith Studio</title>
        <meta name="description" content="Professional medical website design services for healthcare providers and medical practices." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Medical Website Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              Professional medical website design services that build trust with patients and streamline your healthcare practice.
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
          title="Healthcare Websites That Patients Trust"
          description="We design medical websites that comply with healthcare regulations, build patient trust, and streamline your practice operations."
          features={medicalFeatures}
        />

        {/* Content Section */}
        <div id="learn-more" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• HIPAA-compliant design</li>
                    <li>• Patient portal integration</li>
                    <li>• Appointment booking systems</li>
                    <li>• Service showcase pages</li>
                    <li>• Doctor profile sections</li>
                    <li>• Patient testimonials</li>
                    <li>• Medical forms integration</li>
                    <li>• Emergency contact features</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Mobile-responsive design</li>
                    <li>• Fast loading speeds</li>
                    <li>• SEO optimization</li>
                    <li>• Security compliance</li>
                    <li>• Insurance information</li>
                    <li>• Location and hours</li>
                    <li>• Health blog integration</li>
                    <li>• Social media integration</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our Medical Web Design?</h3>
                <p className="text-gray-600 font-jakarta">
                  We understand the unique needs of healthcare providers and create websites that build trust, improve patient experience, 
                  and help grow your practice while maintaining the highest standards of security and compliance.
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

export default MedicalWebsiteDesign;
