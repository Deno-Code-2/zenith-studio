import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const AgencyShowcase = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-custom-orange/20">
          <FlickeringGrid
            className="absolute inset-0 z-0"
            squareSize={4}
            gridGap={6}
            color="#E46534"
            maxOpacity={0.3}
            flickerChance={0.1}
            height={800}
            width={800}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-6xl font-bold mb-6 font-syne text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-custom-orange/80 font-jakarta max-w-2xl text-center mb-12">
              Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered.
            </p>
            <p className="text-lg text-white/90 font-jakarta mb-8">
              Let's embark on this transformative journey together.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-jakarta font-medium hover:bg-white/90 transition-colors">
                Get Started
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-jakarta font-medium hover:bg-white/10 transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;