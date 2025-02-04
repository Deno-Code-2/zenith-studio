import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-text font-syne">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-text font-jakarta">
            <h2>1. Information Collection</h2>
            <p>We collect information that you provide directly to us.</p>
            
            <h2>2. Use of Information</h2>
            <p>We use the information we collect to provide and improve our services.</p>
            
            <h2>3. Information Sharing</h2>
            <p>We do not sell or share your personal information with third parties.</p>
            
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your information.</p>
            
            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;