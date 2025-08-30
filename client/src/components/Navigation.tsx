import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useToast } from "@/hooks/use-toast";
import { Code, Home, GraduationCap, Book, Bookmark, MessageSquare, Moon, Sun, Menu } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [location] = useLocation();

  const handleThemeToggle = () => {
    toggleTheme();
    toast({
      title: "Berhasil!",
      description: theme === "dark" ? "Mode terang diaktifkan" : "Mode gelap diaktifkan",
    });
  };

  const navigationItems = [
    { path: "/", icon: Home, label: "Beranda" },
    { path: "/kelas", icon: GraduationCap, label: "Kelas" },
    { path: "/tutorial", icon: Book, label: "Tutorial" },
    { path: "/playground", icon: Code, label: "Playground" },
  ];

  return (
    <nav className="bg-card/95 dark:bg-card/95 border-b border-border sticky top-0 z-40 backdrop-blur-sm" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="text-primary-foreground" size={16} />
              </div>
              <span className="text-xl font-bold text-foreground">KodingKu</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center space-x-2 transition-colors ${
                      isActive 
                        ? "text-primary font-medium" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <a 
                href="https://discord.gg/kodingku" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-discord"
              >
                <SiDiscord size={16} />
                <span>Discord</span>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button 
              className="hidden md:block"
              data-testid="button-newsletter"
            >
              Bergabung Newsletter
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              data-testid="button-mobile-menu"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
