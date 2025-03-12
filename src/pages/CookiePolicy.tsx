import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative pt-32">
        <div className="container mx-auto px-8 lg:px-16 py-20">
          <h1 className="text-4xl font-bold mb-8 text-black font-syne">
            Cookie <span className="text-custom-orange">Policy</span>
          </h1>
          <div className="prose prose-lg max-w-none text-black font-jakarta space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">1. Introduction</h2>
              <p className="text-gray-300">
                This Cookie Policy explains how Zenith Studio ("we", "us", or "our") uses cookies and similar technologies on our website. This policy provides you with clear and comprehensive information about the cookies we use and the purposes for using them.
              </p>
              <p className="text-gray-300 mt-4">
                By continuing to use our website, you are agreeing to our use of cookies as described in this Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">2. What Are Cookies?</h2>
              <p className="text-gray-300">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
              </p>
              <p className="text-gray-300 mt-4">
                Cookies cannot harm your device, and they don't contain any personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">3. Types of Cookies We Use</h2>
              <p className="text-gray-300">
                We use different types of cookies for various purposes:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">3.1 Essential Cookies</h3>
              <p className="text-gray-300">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">3.2 Performance Cookies</h3>
              <p className="text-gray-300">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">3.3 Functionality Cookies</h3>
              <p className="text-gray-300">
                These cookies allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">3.4 Targeting/Advertising Cookies</h3>
              <p className="text-gray-300">
                These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">4. Third-Party Cookies</h2>
              <p className="text-gray-300">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Analytics cookies (e.g., Google Analytics)</li>
                <li>Social media cookies (e.g., Facebook, Twitter, LinkedIn)</li>
                <li>Advertising cookies (e.g., Google AdSense)</li>
                <li>Marketing automation cookies (e.g., HubSpot)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">5. Cookie Management</h2>
              <p className="text-gray-300">
                Most web browsers allow some control of most cookies through browser settings. You can set your browser to block or alert you about these cookies, but some parts of the site will not function properly if you do so.
              </p>
              <p className="text-gray-300 mt-4">
                To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">5.1 How to Manage Cookies in Different Browsers</h3>
              <p className="text-gray-300">
                Here are links to instructions for managing cookies in common web browsers:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-custom-orange hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-custom-orange hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-custom-orange hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-custom-orange hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">6. Changes to This Cookie Policy</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in technology, law, or our data practices. Any changes will become effective when we post the revised policy on our website. We encourage you to periodically review this page for the latest information on our cookie practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">7. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <p className="text-gray-300 mt-2">
                <strong>Email:</strong> privacy@zenithstudio.com<br />
                <strong>Address:</strong> 123 Innovation Street, Tech Valley, CA 94025
              </p>
            </section>

            <p className="text-gray-400 italic">
              Last updated: June 15, 2023
            </p>
          </div>
        </div>
      </div>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default CookiePolicy;
