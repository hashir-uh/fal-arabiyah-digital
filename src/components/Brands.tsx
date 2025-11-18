import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Brands = () => {
  const { t } = useLanguage();
  
  const brands = [
    { name: "SKF", category: "Bearings" },
    { name: "FAG", category: "Bearings" },
    { name: "INA", category: "Bearings" },
    { name: "Koyo", category: "Bearings" },
    { name: "NACHI", category: "Bearings" },
    { name: "TIMKEN", category: "Bearings" },
    { name: "UBS", category: "Bearings" },
    { name: "optibelt", category: "Power Transmission" },
    { name: "BANDO", category: "Power Transmission" },
    { name: "MITSUBOSHI", category: "Power Transmission" },
    { name: "cyclo", category: "Power Transmission" },
    { name: "STANLEY", category: "Tools" },
    { name: "FatMax", category: "Tools" }
  ];

  return (
    <section id="brands" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Rajdhani']">
            {t('brands.title')} <span className="text-gradient">{t('brands.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('brands.subtitle')}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {brands.map((brand, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-2 hover:border-accent/50 transition-all hover:scale-105 shadow-soft hover:shadow-medium group cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2 font-['Rajdhani'] group-hover:text-gradient transition-all">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {brand.category}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Statement */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/20 shadow-medium">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary font-['Rajdhani']">
              {t('about.credentials.2')}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('brands.quality.text')}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
