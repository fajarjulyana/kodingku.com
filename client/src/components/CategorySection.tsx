import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, GitBranch } from "lucide-react";
import { SiPython, SiJavascript, SiHtml5 } from "react-icons/si";

const categories = [
  {
    id: "python",
    title: "Python Programming",
    subtitle: "Dasar hingga mahir",
    description: "Pelajari Python dari nol hingga bisa membuat aplikasi web dan data science.",
    icon: SiPython,
    iconColor: "bg-blue-600",
    tutorials: 24,
    color: "python"
  },
  {
    id: "javascript",
    title: "JavaScript Modern",
    subtitle: "ES6+ dan Framework",
    description: "Kuasai JavaScript modern dengan ES6+, React, dan Node.js untuk full-stack development.",
    icon: SiJavascript,
    iconColor: "bg-yellow-500",
    tutorials: 18,
    color: "javascript"
  },
  {
    id: "cpp",
    title: "C/C++ Programming",
    subtitle: "Fundamental & Algoritma",
    description: "Pelajari dasar programming dengan C/C++ dan konsep algoritma data struktur.",
    iconText: "C",
    iconColor: "bg-blue-600",
    tutorials: 15,
    color: "cpp"
  },
  {
    id: "web",
    title: "Web Development",
    subtitle: "HTML, CSS, JavaScript",
    description: "Membangun website dari dasar dengan HTML, CSS, dan JavaScript modern.",
    icon: SiHtml5,
    iconColor: "bg-orange-500",
    tutorials: 32,
    color: "web"
  },
  {
    id: "database",
    title: "Database & SQL",
    subtitle: "MySQL, PostgreSQL",
    description: "Pelajari manajemen database dan query SQL untuk aplikasi modern.",
    icon: Database,
    iconColor: "bg-green-600",
    tutorials: 12,
    color: "database"
  },
  {
    id: "git",
    title: "Git & DevOps",
    subtitle: "Version Control & Deploy",
    description: "Kuasai Git untuk version control dan dasar-dasar DevOps deployment.",
    icon: GitBranch,
    iconColor: "bg-red-500",
    tutorials: 8,
    color: "git"
  }
];

export function CategorySection() {
  return (
    <section className="py-16 bg-background" data-testid="category-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2" data-testid="text-category-label">
            KATEGORI
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-category-title">
            Mau belajar apa hari ini?
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-category-subtitle">
            Temukan tutorial berdasarkan minatmu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className="hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer group"
                data-testid={`card-category-${category.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${category.iconColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {Icon ? (
                        <Icon className="text-white" size={20} />
                      ) : (
                        <span className="text-white font-bold">{category.iconText}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground" data-testid={`text-category-title-${category.id}`}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-category-subtitle-${category.id}`}>
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-category-description-${category.id}`}>
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded" data-testid={`text-tutorials-count-${category.id}`}>
                      {category.tutorials} Tutorial
                    </span>
                    <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
