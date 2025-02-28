
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Search, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@/types/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridPattern from "@/components/GridPattern";

gsap.registerPlugin(ScrollTrigger);

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
  
  return data || [];
};

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts
  });

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Animation for blogs
    const tl = gsap.timeline();
    
    gsap.from(".blog-title", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%"
      }
    });

    gsap.from(".blog-card", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".blog-grid",
        start: "top 80%"
      }
    });
  }, []);

  const filteredPosts = blogPosts?.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GridPattern />
      <Header />
      <main className="pt-32 pb-20 px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto blog-section">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-syne blog-title">
            Our <span className="text-custom-orange">Insights</span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl text-lg mb-12 font-jakarta">
            Explore our latest thoughts, industry insights, and technical expertise through our collection of articles written by our team of experts.
          </p>
          
          <div className="relative max-w-xl mb-16">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-3 px-12 rounded-lg bg-zinc-900 text-white border border-zinc-800 focus:outline-none focus:border-custom-orange font-jakarta"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-custom-orange border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white font-jakarta">Loading blog posts...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400 font-jakarta">Error loading blog posts. Please try again later.</p>
            </div>
          ) : filteredPosts && filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="blog-card cursor-pointer group"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-custom-orange/40 transition-all duration-300">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs font-medium px-2.5 py-1 rounded bg-custom-orange/10 text-custom-orange flex items-center"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 font-syne group-hover:text-custom-orange transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 font-jakarta text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
                        <span className="text-gray-400 text-sm font-jakarta">
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="text-gray-400 text-sm font-jakarta flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.reading_time_minutes} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white font-jakarta">No blog posts found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
