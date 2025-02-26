
import { Button } from "@/components/ui/button";

const AgencyShowcase = () => {
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative min-h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg border border-neutral-800 bg-gradient-to-br from-black via-black/95 to-black">
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 md:p-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-syne text-white text-center">
              Ready to <span className="text-custom-orange">Transform</span> Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-white font-jakarta max-w-2xl text-center mb-8 md:mb-12">
              Take the first step towards <span className="text-custom-orange">digital success</span> with Zenith Studio by your side. Our team of <span className="text-custom-orange">experts</span> is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered.
            <p className="text-base md:text-lg text-white/90 font-jakarta mb-8">
              Let's embark on this transformative journey together.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="outline" className="font-jakarta">
                Get Started
              </Button>
              <Button variant="outline" className="font-jakarta">
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
