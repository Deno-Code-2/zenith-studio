
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Clock, ArrowLeft, Calendar, Tag } from "lucide-react";
import { BlogPost as BlogPostType } from "@/types/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridPattern from "@/components/GridPattern";
import { Button } from "@/components/ui/button";

const fetchBlogPostBySlug = async (slug: string): Promise<BlogPostType | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    if (error.code === 'PGRST116') {
      return null; // No post found
    }
    throw error;
  }
  
  return data;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPostBySlug(slug || ''),
    enabled: !!slug
  });

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Fetch related posts if we have the current post
    const fetchRelatedPosts = async () => {
      if (post && post.tags && post.tags.length > 0) {
        // Get posts with similar tags
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .neq('id', post.id) // Exclude current post
          .order('published_at', { ascending: false })
          .limit(3);

        if (!error && data) {
          setRelatedPosts(data);
        }
      }
    };

    if (post) {
      fetchRelatedPosts();
    }
  }, [post]);

  // Function to format the content with paragraphs
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-6 text-gray-300 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        <GridPattern />
        <Header />
        <main className="pt-32 pb-20 px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-custom-orange border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-white font-jakarta">Loading blog post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        <GridPattern />
        <Header />
        <main className="pt-32 pb-20 px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl font-bold text-white mb-4 font-syne">Blog Post Not Found</h1>
            <p className="text-gray-300 mb-8 font-jakarta">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-custom-orange hover:bg-custom-orange/90 font-jakarta"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GridPattern />
      <Header />
      <main className="pt-32 pb-20 px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 text-gray-300 hover:text-white hover:bg-zinc-900 font-jakarta"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Articles
          </Button>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-1 rounded bg-custom-orange/10 text-custom-orange flex items-center"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-syne leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 mb-8 text-gray-400 font-jakarta">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.reading_time_minutes} min read</span>
            </div>
          </div>

          <div className="mb-12">
            <div className="aspect-[21/9] w-full overflow-hidden rounded-xl mb-10">
              <img 
                src={post.image_url} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="blog-content prose prose-invert max-w-none font-jakarta">
              {formatContent(post.content)}
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-syne font-bold">Written by</p>
                  <p className="text-gray-400 font-jakarta">{post.author}</p>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-custom-orange/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-custom-orange/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-custom-orange/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-8 font-syne">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div 
                    key={relatedPost.id} 
                    className="cursor-pointer group"
                    onClick={() => {
                      navigate(`/blog/${relatedPost.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-custom-orange/40 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedPost.image_url} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-2 font-syne group-hover:text-custom-orange transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-400 text-xs font-jakarta">
                            {new Date(relatedPost.published_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="text-gray-400 text-xs font-jakarta flex items-center">
                            <Clock size={12} className="mr-1" />
                            {relatedPost.reading_time_minutes} min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
