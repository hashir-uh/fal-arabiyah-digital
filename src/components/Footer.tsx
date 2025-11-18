import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-dark text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Rajdhani']">
              {t('about.titleHighlight')}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <p className="text-sm text-primary-foreground/60">
              {t('contact.cr')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-['Rajdhani']">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {[
                { key: 'nav.home', href: 'home' },
                { key: 'nav.about', href: 'about' },
                { key: 'nav.products', href: 'products' },
                { key: 'nav.brands', href: 'brands' },
                { key: 'nav.contact', href: 'contact' }
              ].map((link) => (
                <li key={link.key}>
                  <a 
                    href={`#${link.href}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-['Rajdhani']">
              {t('hero.contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:0114124198" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                    0114124198
                  </a>
                  <a href="tel:0566384950" className="text-primary-foreground/80 hover:text-accent transition-colors block">
                    0566384950
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:falarabiya@outlook.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  falarabiya@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {t('contact.address1')}<br />
                  {t('contact.address2')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} {t('footer.titleHighlight')}. {t('footer.rights')}
            </p>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              Website: <a href="https://www.falarabiyah.com" className="text-accent hover:underline">www.falarabiyah.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
