import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Shield, 
  Cog, 
  Wrench, 
  Hammer,
  HardHat,
  Zap,
  Wind,
  ArrowRight
} from "lucide-react";
import productsImage from "@/assets/products-bg.jpg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Products = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  const productCategories = [
    {
      icon: Shield,
      title: "Fire & Safety Equipment",
      slug: "fire-safety",
      items: [
        "Safety Boots & Shoes",
        "Safety Cones & Helmets",
        "Safety Goggles & Vests",
        "Safety Harness & Uniforms",
        "Fire Blanket & Extinguisher",
        "Warning Tape & Lights",
        "Ear Plugs & Protection"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Settings,
      title: "Bearings",
      slug: "bearings",
      items: [
        "SKF Bearings",
        "FAG Bearings",
        "INA Bearings",
        "Koyo Bearings",
        "NACHI Bearings",
        "TIMKEN Bearings",
        "UBS Bearings"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cog,
      title: "Power Transmission",
      slug: "power-transmission",
      items: [
        "Timing Belts",
        "Optibelt Products",
        "BANDO Belts",
        "MITSUBOSHI Belts",
        "Cyclo Systems",
        "V-Belts",
        "Belt Drives"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "Sealing Solutions",
      slug: "sealing-solutions",
      items: [
        "Rubber Sheet",
        "Paper Gasket",
        "Silicon Rubber",
        "Plastic Teflon",
        "Graphite Products",
        "PTFE Components",
        "Sealing Gaskets"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Hammer,
      title: "Tools & Hardware",
      slug: "tools-hardware",
      items: [
        "STANLEY Tools",
        "Drill Bits",
        "Measuring Meters",
        "Shovels",
        "FatMax Blades",
        "Hand Tools",
        "Power Tools"
      ],
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Wind,
      title: "HVAC & Refrigeration",
      slug: "hvac",
      items: [
        "Freon Gas",
        "Compressors",
        "Copper Coils",
        "Cooling Systems",
        "AC Parts",
        "Refrigeration Components"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Electrical & Consumables",
      slug: "electrical",
      items: [
        "Electric Tape",
        "Abrasive Paper",
        "Sand Paper",
        "Stretch Film",
        "Hand Tape",
        "Insulation Materials"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: HardHat,
      title: "Pneumatic Systems",
      slug: "pneumatic",
      items: [
        "Pneumatic Fittings",
        "Pneumatic Pipes",
        "Air Systems",
        "Connectors",
        "Valves",
        "Controllers"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${productsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Rajdhani']">
            Our <span className="text-gradient">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of industrial spare parts and equipment for all your needs
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-2 hover:border-accent/50 transition-all hover:scale-105 shadow-soft hover:shadow-strong group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Icon */}
              <div className="mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-primary mb-4 font-['Rajdhani'] group-hover:text-accent transition-colors">
                {category.title}
              </h3>

              {/* Product Items */}
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Item Count Badge */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  {category.items.length} {t('products.items')}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/products/${category.slug}`)}
                  className="text-accent hover:text-accent/80 gap-1 px-2"
                >
                  {t('products.viewDetails')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-hero border-2 border-accent/20 shadow-strong">
            <p className="text-primary-foreground text-lg leading-relaxed">
              <span className="font-bold text-accent">All products</span> are sourced from 
              trusted manufacturers and come with <span className="font-bold text-accent">quality assurance</span>. 
              We maintain competitive pricing while never compromising on quality.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
