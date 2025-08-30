import { Code } from "lucide-react";
import { SiGithub, SiDiscord, SiYoutube, SiInstagram } from "react-icons/si";

const footerSections = [
  {
    title: "Pembelajaran",
    links: [
      { label: "Tutorial Python", href: "/tutorial/python" },
      { label: "Tutorial JavaScript", href: "/tutorial/javascript" },
      { label: "Tutorial Web", href: "/tutorial/web" },
      { label: "Tutorial Database", href: "/tutorial/database" }
    ]
  },
  {
    title: "Komunitas",
    links: [
      { label: "Discord Server", href: "https://discord.gg/kodingku" },
      { label: "Forum Diskusi", href: "/forum" },
      { label: "Study Group", href: "/study-group" },
      { label: "Mentoring", href: "/mentoring" }
    ]
  },
  {
    title: "Kontak",
    items: [
      "Email: hello@kodingku.com",
      "WhatsApp: 081804411937",
      "KP Pasirwangi RT01 RW11",
      "Kec. Lembang, Kab. Bandung Barat",
      "Jawa Barat 40391"
    ]
  }
];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/kodingku", label: "GitHub" },
  { icon: SiDiscord, href: "https://discord.gg/kodingku", label: "Discord" },
  { icon: SiYoutube, href: "https://youtube.com/kodingku", label: "YouTube" },
  { icon: SiInstagram, href: "https://instagram.com/kodingku", label: "Instagram" }
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2" data-testid="footer-logo">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="text-primary-foreground" size={16} />
              </div>
              <span className="text-xl font-bold text-secondary-foreground">KodingKu</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-description">
              Platform pembelajaran programming terbaik di Indonesia. Koding yang Terarah, Sukses yang Nyata.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-secondary-foreground" data-testid={`text-footer-section-title-${index}`}>
                {section.title}
              </h3>
              {section.links ? (
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-footer-${section.title.toLowerCase()}-${linkIndex}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2 text-sm">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground" data-testid={`text-contact-${itemIndex}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © 2024 KodingKu - Fajar Julyana. Semua hak cipta dilindungi. Dibuat dengan ❤️ untuk programmer Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
