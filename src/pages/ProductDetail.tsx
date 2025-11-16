import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const productData: Record<string, any> = {
  "fire-safety": {
    title: { en: "Fire & Safety Equipment", ar: "معدات الحريق والسلامة" },
    description: {
      en: "Comprehensive range of safety equipment to protect your workforce and comply with safety regulations.",
      ar: "مجموعة شاملة من معدات السلامة لحماية القوى العاملة والامتثال للوائح السلامة."
    },
    products: [
      { name: { en: "Safety Boots & Shoes", ar: "أحذية وجزمات السلامة" }, spec: "Steel toe, slip-resistant" },
      { name: { en: "Safety Cones & Helmets", ar: "أقماع وخوذات السلامة" }, spec: "High visibility, impact resistant" },
      { name: { en: "Safety Goggles & Vests", ar: "نظارات وسترات السلامة" }, spec: "UV protection, reflective" },
      { name: { en: "Safety Harness & Uniforms", ar: "حزام السلامة والزي الموحد" }, spec: "Load tested, certified" },
      { name: { en: "Fire Blanket & Extinguisher", ar: "بطانية الحريق والمطفأة" }, spec: "Fire rated, tested" },
      { name: { en: "Warning Tape & Lights", ar: "شريط التحذير والأضواء" }, spec: "Weatherproof, bright" },
      { name: { en: "Ear Plugs & Protection", ar: "سدادات الأذن والحماية" }, spec: "Noise reduction rated" }
    ],
    features: {
      en: ["Certified Safety Standards", "Durable Materials", "Comfortable Design", "Wide Size Range"],
      ar: ["معايير سلامة معتمدة", "مواد متينة", "تصميم مريح", "مجموعة واسعة من الأحجام"]
    }
  },
  "bearings": {
    title: { en: "Bearings", ar: "المحامل" },
    description: {
      en: "Premium quality bearings from world-leading manufacturers for all industrial applications.",
      ar: "محامل عالية الجودة من الشركات المصنعة الرائدة عالميًا لجميع التطبيقات الصناعية."
    },
    products: [
      { name: { en: "SKF Bearings", ar: "محامل SKF" }, spec: "High precision, long life" },
      { name: { en: "FAG Bearings", ar: "محامل FAG" }, spec: "German engineering" },
      { name: { en: "INA Bearings", ar: "محامل INA" }, spec: "Needle roller bearings" },
      { name: { en: "Koyo Bearings", ar: "محامل Koyo" }, spec: "Japanese quality" },
      { name: { en: "NACHI Bearings", ar: "محامل NACHI" }, spec: "High load capacity" },
      { name: { en: "TIMKEN Bearings", ar: "محامل TIMKEN" }, spec: "Tapered roller bearings" },
      { name: { en: "UBS Bearings", ar: "محامل UBS" }, spec: "Cost-effective solutions" }
    ],
    features: {
      en: ["Original Equipment Quality", "Technical Support Available", "Full Range Available", "Quick Delivery"],
      ar: ["جودة المعدات الأصلية", "الدعم الفني متاح", "مجموعة كاملة متوفرة", "تسليم سريع"]
    }
  },
  "power-transmission": {
    title: { en: "Power Transmission", ar: "نقل القدرة" },
    description: {
      en: "Complete range of belts and transmission components for efficient power transfer.",
      ar: "مجموعة كاملة من الأحزمة ومكونات النقل لنقل الطاقة بكفاءة."
    },
    products: [
      { name: { en: "Timing Belts", ar: "أحزمة التوقيت" }, spec: "Precision synchronous drive" },
      { name: { en: "Optibelt Products", ar: "منتجات Optibelt" }, spec: "Premium quality belts" },
      { name: { en: "BANDO Belts", ar: "أحزمة BANDO" }, spec: "Japanese technology" },
      { name: { en: "MITSUBOSHI Belts", ar: "أحزمة MITSUBOSHI" }, spec: "High performance" },
      { name: { en: "Cyclo Systems", ar: "أنظمة Cyclo" }, spec: "Speed reducers" },
      { name: { en: "V-Belts", ar: "أحزمة V" }, spec: "Standard & heavy duty" },
      { name: { en: "Belt Drives", ar: "محركات الحزام" }, spec: "Complete systems" }
    ],
    features: {
      en: ["Low Maintenance", "High Efficiency", "Long Service Life", "Wide Application Range"],
      ar: ["صيانة منخفضة", "كفاءة عالية", "عمر خدمة طويل", "نطاق تطبيق واسع"]
    }
  },
  "sealing-solutions": {
    title: { en: "Sealing Solutions", ar: "حلول الختم" },
    description: {
      en: "Professional sealing materials for all types of industrial applications.",
      ar: "مواد ختم احترافية لجميع أنواع التطبيقات الصناعية."
    },
    products: [
      { name: { en: "Rubber Sheet", ar: "ورقة مطاطية" }, spec: "Various thickness & grades" },
      { name: { en: "Paper Gasket", ar: "حشية ورقية" }, spec: "High temperature resistant" },
      { name: { en: "Silicon Rubber", ar: "مطاط السيليكون" }, spec: "Food grade available" },
      { name: { en: "Plastic Teflon", ar: "تفلون بلاستيكي" }, spec: "Chemical resistant" },
      { name: { en: "Graphite Products", ar: "منتجات الجرافيت" }, spec: "Extreme temperature" },
      { name: { en: "PTFE Components", ar: "مكونات PTFE" }, spec: "Non-stick properties" },
      { name: { en: "Sealing Gaskets", ar: "حشيات الختم" }, spec: "Custom sizes available" }
    ],
    features: {
      en: ["Temperature Resistant", "Chemical Resistant", "Custom Cutting Service", "Quality Certified"],
      ar: ["مقاوم للحرارة", "مقاوم للمواد الكيميائية", "خدمة القطع المخصصة", "معتمد الجودة"]
    }
  },
  "tools-hardware": {
    title: { en: "Tools & Hardware", ar: "الأدوات والمعدات" },
    description: {
      en: "Professional grade tools and hardware for industrial and construction use.",
      ar: "أدوات ومعدات احترافية للاستخدام الصناعي والبناء."
    },
    products: [
      { name: { en: "STANLEY Tools", ar: "أدوات STANLEY" }, spec: "Lifetime warranty" },
      { name: { en: "Drill Bits", ar: "لقم الحفر" }, spec: "HSS & carbide" },
      { name: { en: "Measuring Meters", ar: "أجهزة القياس" }, spec: "Digital & analog" },
      { name: { en: "Shovels", ar: "الجواريف" }, spec: "Heavy duty construction" },
      { name: { en: "FatMax Blades", ar: "شفرات FatMax" }, spec: "Extra sharp, durable" },
      { name: { en: "Hand Tools", ar: "الأدوات اليدوية" }, spec: "Professional quality" },
      { name: { en: "Power Tools", ar: "الأدوات الكهربائية" }, spec: "Industrial grade" }
    ],
    features: {
      en: ["Professional Grade", "Warranty Included", "Ergonomic Design", "Wide Selection"],
      ar: ["درجة احترافية", "الضمان مشمول", "تصميم مريح", "اختيار واسع"]
    }
  },
  "hvac": {
    title: { en: "HVAC & Refrigeration", ar: "التكييف والتبريد" },
    description: {
      en: "Complete HVAC and refrigeration solutions for commercial and industrial applications.",
      ar: "حلول كاملة للتكييف والتبريد للتطبيقات التجارية والصناعية."
    },
    products: [
      { name: { en: "Freon Gas", ar: "غاز الفريون" }, spec: "R22, R134a, R410a" },
      { name: { en: "Compressors", ar: "الضواغط" }, spec: "Scroll & reciprocating" },
      { name: { en: "Copper Coils", ar: "ملفات النحاس" }, spec: "Various diameters" },
      { name: { en: "Cooling Systems", ar: "أنظمة التبريد" }, spec: "Complete units" },
      { name: { en: "AC Parts", ar: "قطع التكييف" }, spec: "All brands" },
      { name: { en: "Refrigeration Components", ar: "مكونات التبريد" }, spec: "Commercial grade" }
    ],
    features: {
      en: ["Energy Efficient", "Eco-Friendly Options", "Technical Support", "Installation Service Available"],
      ar: ["موفر للطاقة", "خيارات صديقة للبيئة", "الدعم الفني", "خدمة التركيب متاحة"]
    }
  },
  "electrical": {
    title: { en: "Electrical & Consumables", ar: "الكهربائية والمواد الاستهلاكية" },
    description: {
      en: "Essential electrical supplies and consumables for industrial maintenance.",
      ar: "مستلزمات كهربائية ومواد استهلاكية أساسية للصيانة الصناعية."
    },
    products: [
      { name: { en: "Electric Tape", ar: "شريط كهربائي" }, spec: "Insulated, various colors" },
      { name: { en: "Abrasive Paper", ar: "ورق كاشط" }, spec: "Various grits" },
      { name: { en: "Sand Paper", ar: "ورق صنفرة" }, spec: "Waterproof available" },
      { name: { en: "Stretch Film", ar: "فيلم تمدد" }, spec: "Industrial strength" },
      { name: { en: "Hand Tape", ar: "شريط يدوي" }, spec: "Heavy duty" },
      { name: { en: "Insulation Materials", ar: "مواد العزل" }, spec: "Fire rated" }
    ],
    features: {
      en: ["Bulk Quantities Available", "Competitive Pricing", "Fast Delivery", "Quality Assured"],
      ar: ["كميات كبيرة متوفرة", "أسعار تنافسية", "تسليم سريع", "مضمون الجودة"]
    }
  },
  "pneumatic": {
    title: { en: "Pneumatic Systems", ar: "الأنظمة الهوائية" },
    description: {
      en: "Complete pneumatic solutions for automation and compressed air systems.",
      ar: "حلول هوائية كاملة للأتمتة وأنظمة الهواء المضغوط."
    },
    products: [
      { name: { en: "Pneumatic Fittings", ar: "تركيبات هوائية" }, spec: "Push-to-connect" },
      { name: { en: "Pneumatic Pipes", ar: "أنابيب هوائية" }, spec: "Polyurethane & nylon" },
      { name: { en: "Air Systems", ar: "أنظمة الهواء" }, spec: "Complete solutions" },
      { name: { en: "Connectors", ar: "موصلات" }, spec: "Quick release" },
      { name: { en: "Valves", ar: "صمامات" }, spec: "Solenoid & manual" },
      { name: { en: "Controllers", ar: "وحدات التحكم" }, spec: "Programmable logic" }
    ],
    features: {
      en: ["High Pressure Rating", "Leak-Free Design", "Easy Installation", "Modular Systems"],
      ar: ["تصنيف ضغط عالي", "تصميم خالي من التسرب", "تركيب سهل", "أنظمة معيارية"]
    }
  }
};

export default function ProductDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  const product = category ? productData[category] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/#products')}
          className="mb-8 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === 'en' ? 'Back to Products' : 'العودة إلى المنتجات'}
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Info */}
          <div>
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {language === 'en' ? 'Product Category' : 'فئة المنتج'}
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6 font-['Rajdhani']">
              {product.title[language]}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description[language]}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 font-['Rajdhani']">
                {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.features[language].map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2">
                <a href="tel:0114124198">
                  <Phone className="h-5 w-5" />
                  {language === 'en' ? 'Call for Quote' : 'اتصل للحصول على عرض أسعار'}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a href="mailto:falarabiya@outlook.com">
                  <Mail className="h-5 w-5" />
                  {language === 'en' ? 'Email Inquiry' : 'استفسار عبر البريد الإلكتروني'}
                </a>
              </Button>
            </div>
          </div>

          {/* Product List */}
          <div>
            <Card className="p-6 bg-card border-2">
              <h3 className="text-2xl font-bold text-primary mb-6 font-['Rajdhani']">
                {language === 'en' ? 'Available Products' : 'المنتجات المتاحة'}
              </h3>
              <div className="space-y-4">
                {product.products.map((item: any, index: number) => (
                  <div 
                    key={index}
                    className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.name[language]}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.spec}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-primary text-primary-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 font-['Rajdhani']">
              {language === 'en' ? 'Need Technical Specifications?' : 'تحتاج إلى مواصفات فنية؟'}
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              {language === 'en' 
                ? 'Our technical team can provide detailed specifications, compatibility information, and professional advice for your specific requirements.'
                : 'يمكن لفريقنا الفني تقديم مواصفات مفصلة ومعلومات التوافق والمشورة المهنية لمتطلباتك المحددة.'}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">
                {language === 'en' ? 'Contact Our Experts' : 'اتصل بخبرائنا'}
              </a>
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
