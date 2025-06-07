
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  demo_url: string;
  purchase_url: string;
  category: string;
  rating: number;
  features: string[];
}

const Templates = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from('templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error) {
      console.error('Error fetching templates:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "all",
    ...Array.from(new Set(templates.map(template => template.category)))
  ];

  const filteredTemplates = selectedCategory === "all" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
        </div>
        <NewFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Templates | Zenith Studio</title>
        <meta name="description" content="Premium website templates designed for modern businesses. Ready-to-use templates that you can customize for your needs." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Premium Website Templates
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              Ready-to-use website templates designed for modern businesses. Get started quickly with our professionally crafted designs.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="container mx-auto px-4 py-8">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No templates found</h3>
              <p className="text-gray-600">Check back soon for new templates!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    {template.image_url ? (
                      <img 
                        src={template.image_url} 
                        alt={template.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-gray-400">No preview available</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-black font-syne">{template.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{template.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 font-jakarta">{template.description}</p>
                    
                    {template.features && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {template.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">${template.price}</span>
                      <div className="flex gap-2">
                        {template.demo_url && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a href={template.demo_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {template.purchase_url && (
                          <Button
                            size="sm"
                            asChild
                            className="bg-black text-white hover:bg-gray-800"
                          >
                            <a href={template.purchase_url} target="_blank" rel="noopener noreferrer">
                              Buy Now
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <NewFooter />
      </div>
    </main>
  );
};

export default Templates;
