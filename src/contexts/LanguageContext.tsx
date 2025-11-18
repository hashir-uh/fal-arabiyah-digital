import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.brands': 'Brands',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.top.title': 'Industrial Spare Parts',
    'hero.title': 'Your Partner in Industrial Spare Parts',
    'hero.subtitle': 'An established and popular company with an excellent track record for the best customer satisfaction. We have never been compromised on the quality and the service provided to customers at very competitive prices.',
    'hero.cta': 'Explore Products',
    'hero.contact': 'Contact Us',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.products': 'Quality Products',
    'hero.stats.customers': 'Happy Customers',
    'hero.quickContact': 'Quick Contact',
    
    // About
    'about.title': 'About',
    'about.titleHighlight': 'FAL ARABIYAH',
    'about.story.title': 'Our Story',
    'about.story.title.text': 'Located in Rail Street Batha, Riyadh, we have been supplying industrial materials with excellence for nearly a decade',
    'about.story.text': 'FAL ARABIYAH Trading Est. has been a trusted name in industrial spare parts for years. We specialize in providing high-quality products to industries across Saudi Arabia, maintaining the highest standards of service and reliability.',
    'about.values.title': 'Our Core Values',
    'about.values.subtitle': 'The principles that drive our commitment to excellence',
    'about.values.quality': 'Premium Quality',
    'about.values.qualityDesc': 'Only certified and tested products',
    'about.values.reliability': 'Reliable Service',
    'about.values.reliabilityDesc': 'On-time delivery and support',
    'about.values.precision': 'Precision',
    'about.values.precisionDesc': 'Meeting exact specifications and customer requirements',
    'about.values.expertise': 'Industry Expertise',
    'about.values.expertiseDesc': 'Years of specialized knowledge',
    'about.credentials.title': 'Our Credentials',
    'about.credentials.1': 'ISO Certified Quality Management',
    'about.credentials.2': 'Authorized Distributor for Leading Brands',
    'about.credentials.3': 'Extensive Product Range & Stock',
    'about.credentials.4': 'Technical Support & Consultation',
    'about.companyInfo.cr': 'Company Registration',
    'about.companyInfo.location': 'Location',
    'about.companyInfo.country': 'Country',
    'about.companyInfo.website': 'Website',
    
    // Products
    'products.title': 'Our',
    'products.titleHighlight': 'Products',
    'products.subtitle': 'Comprehensive range of industrial spare parts from world-renowned manufacturers',
    'products.items': 'Items',
    'products.viewDetails': 'View Details',
    'products.category.fire': 'Fire & Safety Equipment',
    'products.category.bearings': 'Bearings',
    'products.category.power': 'Power Transmission',
    'products.category.sealing': 'Sealing Solutions',
    'products.category.tools': 'Tools & Hardware',
    'products.category.hvac': 'HVAC & Refrigeration',
    'products.category.electrical': 'Electrical & Consumables',
    'products.category.pneumatic': 'Pneumatic Systems',
    'products.quality.title': 'Quality Sourced Products',
    'products.quality.text': 'All our products are sourced directly from authorized manufacturers and distributors, ensuring authenticity and reliability for your industrial needs.',
    
    // Brands
    'brands.title': 'Trusted',
    'brands.titleHighlight': 'Brands',
    'brands.subtitle': 'We partner with industry-leading manufacturers to bring you the best quality products',
    'brands.quality.text': 'As an authorized distributor of these premium brands, we guarantee 100% authentic products with full manufacturer warranties and technical support. Our extensive inventory ensures immediate availability for most products.',

    // Contact
    'contact.title': 'Get In',
    'contact.titleHighlight': 'Touch',
    'contact.subtitle': 'Have questions about our products? Our team is ready to assist you',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.address1': 'Rail Street, Batha',
    'contact.address2': 'Riyadh, Saudi Arabia',
    'contact.hours1': 'Saturday - Thursday',
    'contact.hours2': '8:00 AM - 6:00 PM',
    'contact.cta.title': 'Ready to Order?',
    'contact.cta.text': 'Contact us today for quotes, product availability, or technical specifications. Our experienced team is here to help you find the perfect industrial spare parts solution.',
    'contact.cta.call': 'Call Now',
    'contact.cta.email': 'Send Email',
    'contact.registration': 'FAL ARABIYAH TRADING EST. | CR: 1010726314 | Kingdom of Saudi Arabia',
    'contact.cr': 'CR: 1010726314',
    
    // Footer
    'footer.tagline': 'Your Partner in Industrial Spare Parts',
    'footer.description': 'Your trusted partner for industrial spare parts in Saudi Arabia. Quality products and excellent service since 2015.',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    'footer.titleHighlight': 'FAL ARABIYAH Trading Est',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.brands': 'العلامات التجارية',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.top.title': 'قطع غيار صناعية',
    'hero.title': 'شريكك في قطع الغيار الصناعية',
    'hero.subtitle': 'شركة عريقة ومشهورة، تتمتع بسجل حافل من النجاح في تحقيق رضا العملاء. نلتزم دائمًا بالجودة والخدمة المُقدمة لعملائنا بأسعار تنافسية للغاية.',
    'hero.cta': 'استكشف المنتجات',
    'hero.contact': 'اتصل بنا',
    'hero.stats.experience': 'سنوات من الخبرة',
    'hero.stats.products': 'منتجات عالية الجودة',
    'hero.stats.customers': 'عملاء راضون',
    'hero.quickContact': 'اتصال سريع',
    
    // About
    'about.title': 'حول',
    'about.titleHighlight': 'الفأل العربية',
    'about.story.title': 'قصتنا',
    'about.story.title.text': 'يقع مقرنا في شارع السكة الحديد، البطحاء، الرياض، ونقوم بتوريد المواد الصناعية بتميز منذ ما يقرب من عقد من الزمان',
    'about.story.text': 'الفأل العربية مؤسسة تجارية هي اسم موثوق في قطع الغيار الصناعية منذ سنوات. نحن متخصصون في توفير منتجات عالية الجودة للصناعات في جميع أنحاء المملكة العربية السعودية، مع الحفاظ على أعلى معايير الخدمة والموثوقية.',
    'about.values.title': 'قيمنا الأساسية',
    'about.values.subtitle': 'المبادئ التي تدفع التزامنا بالتميز',
    'about.values.quality': 'جودة متميزة',
    'about.values.qualityDesc': 'منتجات معتمدة ومختبرة فقط',
    'about.values.reliability': 'خدمة موثوقة',
    'about.values.reliabilityDesc': 'التسليم في الوقت المحدد والدعم',
    'about.values.precision': 'دقة',
    'about.values.precisionDesc': 'تلبية المواصفات الدقيقة ومتطلبات العملاء',
    'about.values.expertise': 'خبرة صناعية',
    'about.values.expertiseDesc': 'سنوات من المعرفة المتخصصة',
    'about.credentials.title': 'اعتماداتنا',
    'about.credentials.1': 'إدارة الجودة المعتمدة من ISO',
    'about.credentials.2': 'موزع معتمد للعلامات التجارية الرائدة',
    'about.credentials.3': 'مجموعة منتجات واسعة ومخزون',
    'about.credentials.4': 'الدعم الفني والاستشارات',
    'about.companyInfo.cr': 'سجل تجاري',
    'about.companyInfo.location': 'الموقع',
    'about.companyInfo.country': 'الدولة',
    'about.companyInfo.website': 'الموقع الإلكتروني',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.titleHighlight': '',
    'products.subtitle': 'مجموعة شاملة من قطع الغيار الصناعية من الشركات المصنعة ذات الشهرة العالمية',
    'products.items': 'عناصر',
    'products.viewDetails': 'عرض التفاصيل',
    'products.category.fire': 'معدات الحريق والسلامة',
    'products.category.bearings': 'المحامل',
    'products.category.power': 'نقل القدرة',
    'products.category.sealing': 'حلول الختم',
    'products.category.tools': 'الأدوات والمعدات',
    'products.category.hvac': 'التكييف والتبريد',
    'products.category.electrical': 'الكهربائية والمواد الاستهلاكية',
    'products.category.pneumatic': 'الأنظمة الهوائية',
    'products.quality.title': 'منتجات عالية الجودة',
    'products.quality.text': 'جميع منتجاتنا مصدرها مباشرة من الشركات المصنعة والموزعين المعتمدين، مما يضمن الأصالة والموثوقية لاحتياجاتك الصناعية.',
    
    // Brands
    'brands.title': 'علامات تجارية',
    'brands.titleHighlight': 'موثوقة',
    'brands.subtitle': 'نتعاون مع الشركات المصنعة الرائدة في الصناعة لنقدم لك أفضل المنتجات',
    'brands.quality.text': 'بصفتنا موزعًا معتمدًا لهذه العلامات التجارية الفاخرة، نضمن منتجات أصلية 100% مع ضمان كامل من الشركة المصنعة ودعم فني. يضمن مخزوننا الواسع توفر معظم المنتجات فورًا.',
    
    // Contact
    'contact.title': 'تواصل',
    'contact.titleHighlight': 'معنا',
    'contact.subtitle': 'هل لديك أسئلة حول منتجاتنا؟ فريقنا جاهز لمساعدتك',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.hours': 'ساعات العمل',
    'contact.address1': 'شارع الريل، البطحاء',
    'contact.address2': 'الرياض، المملكة العربية السعودية',
    'contact.hours1': 'السبت - الخميس',
    'contact.hours2': '8:00 صباحًا - 6:00 مساءً',
    'contact.cta.title': 'هل أنت مستعد للطلب؟',
    'contact.cta.text': 'اتصل بنا اليوم للحصول على عروض الأسعار أو توافر المنتجات أو المواصفات الفنية. فريقنا ذو الخبرة هنا لمساعدتك في العثور على الحل المثالي لقطع الغيار الصناعية.',
    'contact.cta.call': 'اتصل الآن',
    'contact.cta.email': 'أرسل بريد إلكتروني',
    'contact.registration': 'فال العربية مؤسسة تجارية | س.ت: 1010726314 | المملكة العربية السعودية',
    'contact.cr': 'س.ت: 1010726314',
    
    // Footer
    'footer.tagline': 'شريكك في قطع الغيار الصناعية',
    'footer.description': 'شريككم الموثوق لقطع الغيار الصناعية في المملكة العربية السعودية. منتجات عالية الجودة وخدمة ممتازة منذ عام ٢٠١٥.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.followUs': 'تابعنا',
    'footer.titleHighlight': 'فال العربية مؤسسة تجارية',
    'footer.rights': 'جميع الحقوق محفوظة.',
  }
};
