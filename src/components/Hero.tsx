import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-navy/90 via-primary/80 to-industrial-steel/70 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/30 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/10 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        {/* Top Banner */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-block px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full shadow-glow">
            <p className="text-primary-foreground font-bold tracking-wider text-sm md:text-base font-['Rajdhani']">
              {t('hero.title').toUpperCase()}
            </p>
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 font-['Rajdhani'] leading-tight">
            {t('about.titleHighlight')}
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gradient mb-8 font-['Rajdhani']">
            {t('hero.title')}
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg shadow-glow transition-all hover:scale-105"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary-foreground/80 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              {t('hero.contact')}
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/80">
            <a href="tel:0114124198" className="flex items-center gap-2 hover:text-accent transition-colors group">
              <div className="p-2 bg-primary-foreground/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-medium">0114124198</span>
            </a>
            <a href="mailto:falarabiya@outlook.com" className="flex items-center gap-2 hover:text-accent transition-colors group">
              <div className="p-2 bg-primary-foreground/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              <span className="font-medium">falarabiya@outlook.com</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { value: "9+", label: "Years Experience" },
            { value: "1000+", label: "Products" },
            { value: "100%", label: "Quality Assured" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10 hover:border-accent/50 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-['Rajdhani']">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
