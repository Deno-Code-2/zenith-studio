import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import GoogleMap from "@/components/GoogleMap";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Zenith Studio - Get In Touch</title>
        <meta name="description" content="Ready to start your project? Contact Zenith Studio today for a free consultation. We're here to help transform your digital vision into reality." />
        <link rel="canonical" href="https://www.zenith-studio.dev/contact" />
      </Helmet>
      <Header />
      <div className="pt-16">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6 font-cal">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 font-cal">
                  Contact Information
                </h2>
                <ContactDetails />
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-black mb-4 font-cal">
                Our Location
              </h2>
              <GoogleMap />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
