import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Code2,
  Bot,
  Wrench,
  LayoutDashboard,
  BarChart3,
  Compass,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

const ServicesSection = () => {
  const tabs: Tab[] = [
    {
      value: "mvp",
      icon: <Code2 className="h-auto w-4 shrink-0" />,
      label: "MVP in 5 Weeks",
      content: {
        badge: "Fast Development",
        title: "From idea to MVP in under 5 weeks.",
        description:
          "We help visionary founders build, iterate, and launch production-ready MVPs in weeks — not months.",
        buttonText: "Start a Project",
        imageSrc: "/images/MVP.png",
        imageAlt: "MVP development illustration",
      },
    },
    {
      value: "ai",
      icon: <Bot className="h-auto w-4 shrink-0" />,
      label: "AI Integrations",
      content: {
        badge: "Smarter Products",
        title: "Bring AI into your product experience.",
        description:
          "From smart automation to AI chat, we seamlessly integrate powerful intelligence into your product.",
        buttonText: "Start a Project",
        imageSrc: "/images/AI.png",
        imageAlt: "AI service illustration",
      },
    },
    {
      value: "maintenance",
      icon: <Wrench className="h-auto w-4 shrink-0" />,
      label: "3-Month Maintenance",
      content: {
        badge: "Free Support",
        title: "We’ve got your back post-launch.",
        description:
          "All projects include 3 months of free bug fixes, performance monitoring, and updates. Zero stress.",
        buttonText: "Start a Project",
        imageSrc: "/images/3.png",
        imageAlt: "Maintenance support illustration",
      },
    },
    {
      value: "design",
      icon: <LayoutDashboard className="h-auto w-4 shrink-0" />,
      label: "UI/UX Design",
      content: {
        badge: "Beautiful Interfaces",
        title: "Designs that convert, not just look good.",
        description:
          "We craft stunning, responsive, user-centered designs that turn visitors into customers.",
        buttonText: "Start a Project",
        imageSrc: "/images/UI-UX.png",
        imageAlt: "UI/UX design service",
      },
    },
    {
      value: "growth",
      icon: <BarChart3 className="h-auto w-4 shrink-0" />,
      label: "Growth & Analytics",
      content: {
        badge: "Scale Confidently",
        title: "Track, analyze, and scale faster.",
        description:
          "We set you up with analytics dashboards, growth tracking, and KPIs that fuel long-term success.",
        buttonText: "Start a Project",
        imageSrc: "/images/GA.png",
        imageAlt: "Growth service illustration",
      },
    },
    {
      value: "strategy",
      icon: <Compass className="h-auto w-4 shrink-0" />,
      label: "Product Strategy",
      content: {
        badge: "Founder Focused",
        title: "Turn your vision into a roadmap.",
        description:
          "We help define the right features, tech stack, and roadmap to launch faster — and smarter.",
        buttonText: "Start a Project",
        imageSrc: "/images/PS.png",
        imageAlt: "Product strategy illustration",
      },
    },
  ];

  // Helper to highlight specific tab labels
  const highlightLabel = (label: string) => {
    const highlightWords = [
      "MVP in 5 Weeks",
      "AI Integrations",
      "3-Month Maintenance",
      "UI/UX Design",
      "Growth & Analytics",
      "Product Strategy",
    ];
    return highlightWords.includes(label) ? (
      <span className="text-green-500">{label}</span>
    ) : (
      label
    );
  };

  return (
    <section className="py-32" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            <span className="text-black">Our </span>
            <span className="text-green-500">Services</span>
          </h1>
          <p className="text-muted-foreground">
            We help founders build{" "}
            <span className="text-green-500 font-semibold">AI-powered products</span>{" "}
            — fast. From strategy and design to{" "}
            <span className="text-green-500">MVP delivery and scale.</span>
          </p>
        </div>

        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-wrap justify-center gap-4 sm:flex-row md:gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon}
                {highlightLabel(tab.label)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge
                    variant="outline"
                    className="w-fit bg-background text-green-500 border-green-500"
                  >
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl text-green-500">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>

                  {tab.content.buttonText === "Start a Project" ? (
                    <a
                      href="https://cal.com/zenithstudio/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="mt-2.5 w-fit gap-2 bg-green-500 hover:bg-green-600 text-white"
                        size="lg"
                      >
                        Start a Project
                      </Button>
                    </a>
                  ) : (
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  )}
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
