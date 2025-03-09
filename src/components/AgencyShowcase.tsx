
import { Button } from "./ui/button";

const AgencyShowcase = () => {
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="relative min-h-[400px] w-full overflow-hidden rounded-lg border border-custom-orange/20 bg-gradient-to-br from-black via-custom-orange/10 to-black">
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 md:p-8 lg:p-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-syne text-white text-center">
              Ready to <span className="text-custom-orange">Transform</span> Your Digital Presence?
            </h2>
            <p className="text-lg text-white font-jakarta text-center mb-6">
              Take the first step towards <span className="text-custom-orange">digital success</span> with Zenith Studio by your side. Our team of <span className="text-custom-orange">experts</span> is eager to craft tailored solutions that drive growth for your business.
            </p>
            <p className="text-base text-white/90 font-jakarta mb-6 text-center">
              Let's embark on this transformative journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="bg-white text-black px-6 md:px-8 py-3 font-jakarta font-medium hover:bg-white/90 transition-colors">
                Get Started
              </Button>
              <Button variant="default" className="bg-transparent border border-white text-white px-6 md:px-8 py-3 font-jakarta font-medium hover:bg-white/10 transition-colors">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;
