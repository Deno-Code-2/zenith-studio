import { useEffect } from "react";
import { gsap } from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    gsap.from(".blog-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development.",
      date: "March 15, 2024",
      category: "Technology"
    },
    {
      title: "Designing for Impact",
      excerpt: "How to create designs that drive user engagement and conversion.",
      date: "March 12, 2024",
      category: "Design"
    },
    {
      title: "Optimizing Performance",
      excerpt: "Best practices for building fast and efficient web applications.",
      date: "March 10, 2024",
      category: "Development"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white mb-12 font-syne">
          Latest <span className="text-custom-orange">Insights</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-card bg-black border border-custom-orange/20 rounded-xl p-6 hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="text-sm text-custom-orange mb-4">{post.category}</div>
              <h2 className="text-xl font-bold text-white mb-4 font-syne">{post.title}</h2>
              <p className="text-gray-400 mb-4 font-jakarta">{post.excerpt}</p>
              <div className="text-sm text-gray-500">{post.date}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;