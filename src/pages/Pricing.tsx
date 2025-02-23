import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";

const Pricing = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-syne mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto font-jakarta">
              Choose the perfect plan for your agency's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-custom-orange/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <p className="text-4xl font-bold text-custom-orange mb-6">$999<span className="text-lg text-gray-400">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Up to 5 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Basic project management
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> 10 active projects
                </li>
              </ul>
              <Button className="w-full bg-custom-orange hover:bg-custom-orange/90">Get Started</Button>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border-2 border-custom-orange relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-custom-orange text-black px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <p className="text-4xl font-bold text-custom-orange mb-6">$1,999<span className="text-lg text-gray-400">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Up to 15 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Advanced project management
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Unlimited active projects
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Priority support
                </li>
              </ul>
              <Button className="w-full bg-custom-orange hover:bg-custom-orange/90">Get Started</Button>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-custom-orange/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-custom-orange mb-6">Custom</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Unlimited team members
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Custom solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">✓</span> Custom integrations
                </li>
              </ul>
              <Button className="w-full bg-custom-orange hover:bg-custom-orange/90">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      <AgencyShowcase />
      <Footer />
    </main>
  );
};

export default Pricing;
