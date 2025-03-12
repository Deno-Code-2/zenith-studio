
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image_url: string;
  reading_time: number;
  created_at: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const fetchPost = async (): Promise<BlogPost | null> => {
    if (!id) return null;
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) {
      console.error('Error fetching blog post:', error);
      throw error;
    }
    
    return data;
  };
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: fetchPost,
    enabled: !!id
  });
  
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  useEffect(() => {
    if (!isLoading && !post && !error) {
      navigate('/blog');
      return;
    }
    
    window.scrollTo(0, 0);
  }, [id, navigate, post, isLoading, error]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Header />
        <div className="w-12 h-12 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-20 pt-32 text-center">
          <h1 className="text-3xl font-bold text-black">Blog post not found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="mt-8 text-custom-orange hover:text-custom-orange/80 transition-colors font-jakarta"
          >
            ← Back to all posts
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="text-custom-orange mb-4">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-syne">
              {post.title}
            </h1>
            <div className="flex justify-between items-center text-gray-500 mb-8 font-jakarta">
              <div>{formatDate(post.created_at)}</div>
              <div>{post.reading_time} min read</div>
            </div>
          </div>
          
          <div className="mb-10 aspect-video overflow-hidden rounded-xl flex items-center justify-center">
            <img 
              src={post.image_url} 
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <article 
            className="prose prose-lg max-w-none font-jakarta text-black"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <button 
              onClick={() => navigate('/blog')}
              className="text-custom-orange hover:text-custom-orange/80 transition-colors font-jakarta"
            >
              ← Back to all posts
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
