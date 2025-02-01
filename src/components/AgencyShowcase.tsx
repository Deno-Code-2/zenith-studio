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
              Zenith Studio
            </h2>
            <p className="text-xl text-custom-orange/80 font-jakarta max-w-2xl text-center">
              Crafting digital experiences that elevate brands and inspire connections. 
              Where innovation meets design excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;