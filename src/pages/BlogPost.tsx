
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
      date: "March 15, 2024",
      category: "Technology",
      image: "/lovable-uploads/My-Logo.png",
      content: `
        <p>The landscape of web development is constantly evolving, with new technologies and approaches emerging regularly. As we look to the future, several key trends are likely to shape the industry.</p>
        
        <h3>AI-Powered Development</h3>
        <p>Artificial intelligence is revolutionizing how websites are built. From AI-assisted coding to automated testing and deployment, developers can now focus more on creative problem-solving while AI handles repetitive tasks.</p>
        
        <h3>WebAssembly (WASM)</h3>
        <p>WebAssembly continues to gain traction, allowing developers to run high-performance code in browsers regardless of the language it was written in. This enables more complex applications to run smoothly on the web.</p>
        
        <h3>Edge Computing</h3>
        <p>Moving processing closer to users with edge computing is reducing latency and improving user experience. This distributed approach is particularly valuable for global applications that need consistent performance worldwide.</p>
        
        <h3>Micro-Frontends</h3>
        <p>Breaking down front-end architecture into smaller, independently deployable pieces is improving both development velocity and application maintainability for larger organizations.</p>
        
        <h3>Serverless Architectures</h3>
        <p>The continued evolution of serverless computing is changing how back-ends are built, allowing developers to focus on writing code rather than managing infrastructure.</p>
        
        <p>As these technologies mature, we can expect web development to become both more powerful and more accessible, enabling the creation of increasingly sophisticated web applications with less effort.</p>
      `
    },
    {
      id: 2,
      title: "Mastering UI/UX Design",
      excerpt: "Learn the principles and best practices for creating exceptional user experiences.",
      date: "March 12, 2024",
      category: "Design",
      image: "/lovable-uploads/My-Logo.png",
      content: `
        <p>Great user experience design is at the heart of successful digital products. Understanding the key principles and methodologies can significantly improve your design outcomes.</p>
        
        <h3>User-Centered Design</h3>
        <p>Always start with user research to understand the needs, goals, and pain points of your target audience. This foundation ensures you're solving real problems for real people.</p>
        
        <h3>Hierarchy and Visual Flow</h3>
        <p>Guide users through your interface by establishing clear visual hierarchy. Use size, color, contrast, and spacing to indicate importance and create a natural flow through the content.</p>
        
        <h3>Consistency is Key</h3>
        <p>Maintain consistency in design elements, interactions, and terminology throughout your application. This reduces cognitive load and helps users build mental models of how your product works.</p>
        
        <h3>Feedback and Affordances</h3>
        <p>Provide clear feedback for user actions and design elements that clearly communicate their functionality. Users should never be left wondering if an action was registered or what will happen when they interact with an element.</p>
        
        <h3>Accessibility as a Foundation</h3>
        <p>Design for all users from the start, including those with disabilities. This not only extends your product's reach but often results in better design for everyone.</p>
        
        <p>By applying these principles consistently and iterating based on user feedback, you can create interfaces that not only look beautiful but provide exceptional user experiences that drive engagement and satisfaction.</p>
      `
    },
    {
      id: 3,
      title: "Digital Marketing Strategies",
      excerpt: "Effective strategies to boost your online presence and reach your target audience.",
      date: "March 10, 2024",
      category: "Marketing",
      image: "/lovable-uploads/My-Logo.png",
      content: `
        <p>In today's digital landscape, having a well-crafted marketing strategy is essential for businesses of all sizes. Here are some effective approaches to consider:</p>
        
        <h3>Content Marketing</h3>
        <p>Create valuable, relevant content that addresses your audience's needs and questions. This builds trust, establishes authority, and drives organic traffic through search engines.</p>
        
        <h3>SEO Optimization</h3>
        <p>Optimize your website and content for search engines to improve visibility. Focus on relevant keywords, technical SEO, and quality backlinks to improve your rankings.</p>
        
        <h3>Social Media Marketing</h3>
        <p>Build a presence on platforms where your audience spends time. Develop a consistent posting schedule and engage authentically with followers rather than simply broadcasting messages.</p>
        
        <h3>Email Marketing</h3>
        <p>Despite being one of the oldest digital channels, email remains one of the most effective. Segment your audience and personalize communications to provide relevant content and offers.</p>
        
        <h3>Analytics and Iteration</h3>
        <p>Track performance across all channels and use data to inform decisions. Digital marketing allows for rapid testing and iteration—take advantage of this to continuously improve results.</p>
        
        <p>By implementing these strategies as part of a cohesive plan aligned with your business goals, you can effectively reach your target audience and drive meaningful results.</p>
      `
    },
    {
      id: 4,
      title: "How to Run a Successful Agency",
      excerpt: "Key insights and strategies for building and managing a thriving digital agency.",
      date: "March 8, 2024",
      category: "Business",
      image: "/lovable-uploads/My-Logo.png",
      content: `
        <p>Building and running a successful digital agency requires strategic planning, excellent service delivery, and continuous adaptation. Here are some key considerations:</p>
        
        <h3>Find Your Niche</h3>
        <p>Specializing in a specific industry or service allows you to develop deep expertise and stand out in a crowded market. It's often better to be known as the best at one thing than average at many.</p>
        
        <h3>Build Repeatable Processes</h3>
        <p>Document and standardize your workflows for client onboarding, project management, and service delivery. This improves efficiency, ensures consistent quality, and makes it easier to scale.</p>
        
        <h3>Focus on Client Results</h3>
        <p>Orient your services around measurable outcomes for clients rather than deliverables. This shifts the conversation from cost to value and positions you as a strategic partner rather than a vendor.</p>
        
        <h3>Develop Multiple Revenue Streams</h3>
        <p>Diversify beyond project-based work with retainers, productized services, or even SaaS offerings. This creates more predictable revenue and reduces the feast-or-famine cycle common in agency life.</p>
        
        <h3>Invest in Your Team</h3>
        <p>Your team is your greatest asset. Hire for culture fit as well as skills, provide opportunities for growth, and create an environment where talented people want to stay.</p>
        
        <p>Running an agency is challenging but rewarding. By implementing these strategies and remaining adaptable to market changes, you can build a sustainable business that delivers value to clients and provides a fulfilling environment for your team.</p>
      `
    },
    {
      id: 5,
      title: "Tech Stack for Modern SaaS Development",
      excerpt: "A comprehensive guide to choosing the right technologies for your SaaS project.",
      date: "March 5, 2024",
      category: "Technology",
      image: "/lovable-uploads/My-Logo.png",
      content: `
        <p>Selecting the right technology stack is crucial for SaaS success. Here's a guide to making informed choices for each layer of your application:</p>
        
        <h3>Front-End Technologies</h3>
        <p>Modern frameworks like React, Vue, and Angular provide component-based architectures that support rapid development and maintenance. Consider factors like developer availability, performance requirements, and specific use cases when making your choice.</p>
        
        <h3>Back-End Framework</h3>
        <p>Node.js, Django, Ruby on Rails, or Laravel each offer different advantages. Node.js excels at handling many concurrent connections, while Django provides robust built-in features for rapid development. Your team's expertise and specific requirements should guide this decision.</p>
        
        <h3>Database Selection</h3>
        <p>Consider both relational databases (PostgreSQL, MySQL) and NoSQL options (MongoDB, Firebase) based on your data structure needs. Many modern applications use a combination of database types for different aspects of the system.</p>
        
        <h3>Infrastructure and Deployment</h3>
        <p>Cloud platforms like AWS, Google Cloud, and Azure offer specialized services for SaaS applications. Containerization with Docker and orchestration with Kubernetes provide flexibility and scalability for growing applications.</p>
        
        <h3>Development Tools</h3>
        <p>Invest in CI/CD pipelines, monitoring solutions, and development environments that maximize productivity and quality. These supporting tools often make the difference between efficient and struggling development teams.</p>
        
        <p>Remember that the best stack is one that balances technical requirements with your team's expertise and the specific needs of your application. Don't chase trendy technologies without clear benefits for your specific situation.</p>
      `
    },
    {
      id: 6,
      title: "Monetizing Your SaaS Product",
      excerpt: "Exploring different revenue models and strategies to generate income from your SaaS.",
      date: "March 1, 2024",
      category: "Business",
      image: "/lovable-uploads/My-Logo.png",
      content: `
        <p>Developing an effective monetization strategy is essential for SaaS success. Here are some common models and considerations for implementation:</p>
        
        <h3>Subscription Models</h3>
        <p>The most common SaaS approach, subscription models provide predictable recurring revenue. Consider tiered pricing based on features, usage limits, or user counts to capture value across different customer segments.</p>
        
        <h3>Freemium Strategy</h3>
        <p>Offering a limited free version can accelerate user acquisition and create a pipeline for conversions to paid plans. The key is finding the right balance of value in the free tier—enough to demonstrate worth but with clear limitations that drive upgrades.</p>
        
        <h3>Usage-Based Pricing</h3>
        <p>Charging based on actual usage (API calls, storage, processing time) aligns costs with the value delivered. This model works well for infrastructure or platform services where usage varies significantly between customers.</p>
        
        <h3>Implementation Fees and Add-Ons</h3>
        <p>Consider one-time charges for implementation, customization, or premium support. These can provide additional revenue streams while keeping base subscription costs competitive.</p>
        
        <h3>Enterprise Agreements</h3>
        <p>Custom pricing for large organizations with specific needs can significantly increase average revenue per account. These agreements often include additional services, guarantees, or customizations beyond standard offerings.</p>
        
        <p>The most successful SaaS businesses regularly evaluate and refine their pricing strategy based on customer feedback, competitive positioning, and value delivered. Don't be afraid to adjust your approach as your product and market evolve.</p>
      `
    }
  ];

  const post = blogPosts.find(post => post.id === Number(id));

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    
    window.scrollTo(0, 0);
  }, [id, navigate, post]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="text-custom-orange mb-4">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-syne">
              {post.title}
            </h1>
            <div className="text-gray-500 mb-8 font-jakarta">{post.date}</div>
          </div>
          
          <div className="mb-10 aspect-video overflow-hidden rounded-xl flex items-center justify-center">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <article 
            className="prose prose-lg prose-invert max-w-none font-jakarta"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-neutral-800">
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
