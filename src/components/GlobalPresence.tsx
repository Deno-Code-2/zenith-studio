
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

export default function GlobalPresence() {
  return (
    <section className="py-16 dark:bg-black bg-white w-full">
      <Container>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bold text-3xl md:text-5xl mb-4 font-syne">
            Our Global <span className="text-green-500">Presence</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto pb-8">
            Working across borders and time zones to deliver exceptional digital solutions to our clients worldwide.
          </p>
        </div>
        
        <WorldMap
          lineColor="#2D6A4F"
          dots={[
            // USA to Dubai
            {
              start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              end: { lat: 25.2048, lng: 55.2708 }, // Dubai
            },
            // Dubai to India
            {
              start: { lat: 25.2048, lng: 55.2708 }, // Dubai
              end: { lat: 20.5937, lng: 78.9629 }, // India
            },
            // India to USA
            {
              start: { lat: 20.5937, lng: 78.9629 }, // India
              end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            },
          ]}
        />
      </Container>
    </section>
  );
}
