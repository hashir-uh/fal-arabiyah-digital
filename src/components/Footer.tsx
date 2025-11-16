import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-dark text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Rajdhani']">
              FAL ARABIYAH
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Your trusted partner for industrial spare parts in Riyadh. 
              Quality products and excellent service since 2015.
            </p>
            <p className="text-sm text-primary-foreground/60">
              C.R: 1010726314
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-['Rajdhani']">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Brands", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-['Rajdhani']">
              Contact Us
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
                  Rail Street, Batha<br />
                  Riyadh, Saudi Arabia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} FAL ARABIYAH Trading Est. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              Website: <a href="https://www.falarabiya.com" className="text-accent hover:underline">www.falarabiya.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
