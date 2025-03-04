import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.blog-card');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
      date: "March 15, 2024",
      category: "Technology",
      image: "/lovable-uploads/My-Logo.png"
    },
    {
      title: "Mastering UI/UX Design",
      excerpt: "Learn the principles and best practices for creating exceptional user experiences.",
      date: "March 12, 2024",
      category: "Design",
      image: "/lovable-uploads/My-Logo.png"
    },
    {
      title: "Digital Marketing Strategies",
      excerpt: "Effective strategies to boost your online presence and reach your target audience.",
      date: "March 10, 2024",
      category: "Marketing",
      image: "/lovable-uploads/My-Logo.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-12 font-syne">
          Latest <span className="text-custom-orange">Insights</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-card bg-black border border-custom-orange/20 rounded-xl overflow-hidden hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-custom-orange mb-4">{post.category}</div>
                <h2 className="text-xl font-bold text-white mb-4 font-syne hover:text-custom-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 font-jakarta">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
