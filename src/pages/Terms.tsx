import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className="absolute inset-x-0 -top-20 -bottom-20 text-gray-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)] -z-10"
        />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-text font-syne">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none text-text font-jakarta">
            <h2>1. Services</h2>
            <p>We provide digital marketing, web development, and design services.</p>
            
            <h2>2. Payment Terms</h2>
            <p>Payment terms are net 30 days from invoice date.</p>
            
            <h2>3. Intellectual Property</h2>
            <p>All intellectual property rights remain with the respective owners.</p>
            
            <h2>4. Confidentiality</h2>
            <p>We maintain strict confidentiality of all client information.</p>
            
            <h2>5. Project Timeline</h2>
            <p>Project timelines will be agreed upon in writing before project commencement.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;