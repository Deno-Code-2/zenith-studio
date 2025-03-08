
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string;
  reading_time: number;
  created_at: string;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
  return data || [];
};

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

  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Header />
        <div className="w-12 h-12 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <main className="container mx-auto px-4 py-20 mt-24 text-center">
          <h1 className="text-3xl font-bold text-white">Error loading blog posts</h1>
          <p className="text-gray-400 mt-4">Please try again later</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20 mt-24">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-12 font-syne">
          Latest <span className="text-custom-orange">Insights</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts && blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id}
              className="blog-card bg-black border border-custom-orange/20 rounded-xl overflow-hidden hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-custom-orange mb-4">{post.category}</div>
                <h2 className="text-xl font-bold text-white mb-4 font-syne hover:text-custom-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 font-jakarta">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{formatDate(post.created_at)}</div>
                  <div className="text-sm text-gray-500">{post.reading_time} min read</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
