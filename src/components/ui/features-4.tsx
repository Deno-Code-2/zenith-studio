
import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

interface FeaturesProps {
  title?: string;
  description?: string;
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export function Features({ 
  title = "The foundation for creative teams management", 
  description = "Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.",
  features = [
    {
      icon: <Zap className="size-4" />,
      title: "Faaast",
      description: "It supports an entire helping developers and innovate."
    },
    {
      icon: <Cpu className="size-4" />,
      title: "Powerful", 
      description: "It supports an entire helping developers and businesses."
    },
    {
      icon: <Fingerprint className="size-4" />,
      title: "Security",
      description: "It supports an helping developers businesses."
    },
    {
      icon: <Pencil className="size-4" />,
      title: "Customization",
      description: "It supports helping developers and businesses innovate."
    },
    {
      icon: <Settings2 className="size-4" />,
      title: "Control",
      description: "It supports helping developers and businesses innovate."
    },
    {
      icon: <Sparkles className="size-4" />,
      title: "Built for AI",
      description: "It supports helping developers and businesses innovate."
    }
  ]
}: FeaturesProps) {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex items-center gap-2">
                                {feature.icon}
                                <h3 className="text-sm font-medium">{feature.title}</h3>
                            </div>
                            <p className="text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
