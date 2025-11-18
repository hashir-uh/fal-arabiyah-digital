import { Card } from "@/components/ui/card";
import { Award, Target, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Award,
      title: t('about.values.quality'),
      description: t('about.values.qualityDesc')
    },
    {
      icon: Target,
      title: t('about.values.precision'),
      description: t('about.values.precisionDesc')
    },
    {
      icon: TrendingUp,
      title: t('about.values.expertise'),
      description: t('about.values.expertiseDesc')
    },
    {
      icon: Shield,
      title: t('about.values.reliability'),
      description: t('about.values.reliabilityDesc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Rajdhani']">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.story.title.text')}
          </p>
        </div>

        {/* Company Introduction */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-12 bg-card border-2 hover:border-accent/50 transition-all shadow-medium hover:shadow-strong">
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-['Rajdhani']">
                {t('about.story.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.story.text')}
              </p>
              
              {/* Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('about.companyInfo.cr')}</p>
                  <p className="font-semibold text-primary">C.R: 1010726314</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('about.companyInfo.location')}</p>
                  <p className="font-semibold text-primary">{t('contact.address1')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('about.companyInfo.country')}</p>
                  <p className="font-semibold text-primary">{t('contact.address2')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t('about.companyInfo.website')}</p>
                  <p className="font-semibold text-primary">www.falarabiyah.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-['Rajdhani']">
            {t('about.values.title')}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.values.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:bg-accent/5 border-2 hover:border-accent/50 transition-all hover:scale-105 shadow-soft hover:shadow-medium group"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <value.icon className="h-7 w-7 text-accent-foreground" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3 font-['Rajdhani']">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
