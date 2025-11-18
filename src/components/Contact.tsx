import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ["0114124198", "0566384950"],
      href: "tel:0114124198"
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ["falarabiya@outlook.com"],
      href: "mailto:falarabiya@outlook.com"
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [t('contact.address1'), t('contact.address2')],
      href: null
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: [t('contact.hours1'), t('contact.hours2')],
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Rajdhani']">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-2 hover:border-accent/50 transition-all hover:scale-105 shadow-soft hover:shadow-medium group"
            >
              <div className="text-center">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <info.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-['Rajdhani']">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  info.href ? (
                    <a 
                      key={detailIndex}
                      href={info.href}
                      className="block text-muted-foreground hover:text-accent transition-colors mb-1"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={detailIndex} className="text-muted-foreground mb-1">
                      {detail}
                    </p>
                  )
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-primary border-2 border-accent/20 shadow-strong">
          <div className="text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground font-['Rajdhani']">
              {t('contact.cta.title')}
            </h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('contact.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-glow transition-all hover:scale-105"
              >
                <a href="tel:0114124198">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('contact.cta.call')}
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-8 py-6 text-lg border-2 border-accent/50 hover:border-accent transition-all hover:scale-105"
              >
                <a href="mailto:falarabiya@outlook.com">
                  <Send className="mr-2 h-5 w-5" />
                  {t('contact.cta.email')}
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Company Registration Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {t('contact.registration')}
          </p>
        </div>
      </div>
    </section>
  );
};
