import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Clock, Eye } from "lucide-react";

const tutorials = [
  {
    id: "python-intro",
    title: "Pengenalan Python Programming",
    description: "Memulai perjalanan programming dengan Python - bahasa yang mudah dipelajari dan powerful.",
    readTime: "5 menit baca",
    views: "2.1k",
    category: "Python",
    difficulty: "Pemula",
    publishDate: "2 hari lalu"
  },
  {
    id: "javascript-variables",
    title: "Memahami Variables dan Data Types di JavaScript",
    description: "Pelajari cara mendeklarasikan variables dan berbagai tipe data dalam JavaScript ES6+.",
    readTime: "7 menit baca",
    views: "1.8k",
    category: "JavaScript",
    difficulty: "Pemula",
    publishDate: "5 hari lalu"
  },
  {
    id: "html-structure",
    title: "Struktur Dasar HTML untuk Web Development",
    description: "Memahami elemen-elemen dasar HTML dan cara membuat struktur halaman web yang semantic.",
    readTime: "4 menit baca",
    views: "3.2k",
    category: "HTML",
    difficulty: "Pemula",
    publishDate: "1 minggu lalu"
  },
  {
    id: "css-flexbox",
    title: "Menguasai CSS Flexbox untuk Layout Modern",
    description: "Tutorial lengkap CSS Flexbox untuk membuat layout responsif dan modern dengan mudah.",
    readTime: "10 menit baca",
    views: "1.5k",
    category: "CSS",
    difficulty: "Menengah",
    publishDate: "3 hari lalu"
  },
  {
    id: "python-functions",
    title: "Functions dan Modules di Python",
    description: "Cara membuat functions yang reusable dan mengorganisir kode dengan modules di Python.",
    readTime: "8 menit baca",
    views: "912",
    category: "Python",
    difficulty: "Menengah",
    publishDate: "6 hari lalu"
  },
  {
    id: "git-basics",
    title: "Git Version Control untuk Programmer Pemula",
    description: "Pelajari dasar-dasar Git untuk mengelola kode dan berkolaborasi dengan tim developer.",
    readTime: "12 menit baca",
    views: "2.7k",
    category: "Git",
    difficulty: "Pemula",
    publishDate: "4 hari lalu"
  }
];

const categories = ["Semua", "Python", "JavaScript", "HTML", "CSS", "Git"];
const difficulties = ["Semua Level", "Pemula", "Menengah", "Lanjutan"];

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-tutorial">
      <Navigation />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-tutorial-page-title">
              Tutorial Programming
            </h1>
            <p className="text-muted-foreground text-lg mb-8" data-testid="text-tutorial-page-subtitle">
              Artikel dan panduan step-by-step untuk belajar programming
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-foreground mr-2">Kategori:</span>
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "Semua" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid={`filter-category-${category.toLowerCase()}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-foreground mr-2">Level:</span>
              {difficulties.map((difficulty) => (
                <Badge 
                  key={difficulty}
                  variant={difficulty === "Semua Level" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid={`filter-difficulty-${difficulty.toLowerCase().replace(' ', '-')}`}
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tutorial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <Card 
                key={tutorial.id}
                className="hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer group"
                data-testid={`card-tutorial-${tutorial.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" data-testid={`text-tutorial-category-${tutorial.id}`}>
                        {tutorial.category}
                      </Badge>
                      <Badge 
                        variant="outline"
                        className={
                          tutorial.difficulty === "Pemula" ? "border-green-500 text-green-600" :
                          tutorial.difficulty === "Menengah" ? "border-yellow-500 text-yellow-600" :
                          "border-red-500 text-red-600"
                        }
                        data-testid={`text-tutorial-difficulty-${tutorial.id}`}
                      >
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                    <Book className="text-muted-foreground" size={20} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight" data-testid={`text-tutorial-title-${tutorial.id}`}>
                    {tutorial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`text-tutorial-description-${tutorial.id}`}>
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span data-testid={`text-tutorial-read-time-${tutorial.id}`}>{tutorial.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span data-testid={`text-tutorial-views-${tutorial.id}`}>{tutorial.views}</span>
                      </div>
                    </div>
                    <span data-testid={`text-tutorial-date-${tutorial.id}`}>{tutorial.publishDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" data-testid="button-load-more-tutorials">
              Muat Lebih Banyak Tutorial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}
