import { Card } from "@/components/ui/card";
import { Award, Target, TrendingUp, Shield } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality industrial spare parts"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meeting exact specifications and customer requirements"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Staying ahead with the latest industrial solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Trusted partner for 9+ years in the industry"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Rajdhani']">
            About <span className="text-gradient">FAL ARABIYAH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in Rail Street Batha, Riyadh, we have been supplying industrial materials with excellence for nearly a decade
          </p>
        </div>

        {/* Company Introduction */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-12 bg-card border-2 hover:border-accent/50 transition-all shadow-medium hover:shadow-strong">
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-['Rajdhani']">
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                FAL ARABIYAH Trading Est. has been in business for the past 9 years, 
                specializing in supplying high-quality industrial materials. We are an 
                established and popular company with an excellent track record for the 
                best customer satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We have never compromised on the quality and service provided to our 
                customers, always ensuring the most competitive prices in the market. 
                Our commitment to excellence has made us the preferred choice for 
                industrial spare parts in Riyadh and beyond.
              </p>
              
              {/* Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company Registration</p>
                  <p className="font-semibold text-primary">C.R: 1010726314</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-primary">Rail Street, Batha, Riyadh</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Country</p>
                  <p className="font-semibold text-primary">Kingdom of Saudi Arabia</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Website</p>
                  <p className="font-semibold text-primary">www.falarabiya.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-['Rajdhani']">
            Our Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that drive our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:bg-accent/5 border-2 hover:border-accent/50 transition-all hover:scale-105 shadow-soft hover:shadow-medium group"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
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
