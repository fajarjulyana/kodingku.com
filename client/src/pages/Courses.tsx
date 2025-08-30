import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const allCourses = [
  {
    id: "python-basics",
    title: "Python untuk Pemula",
    description: "Dasar-dasar Python programming dari nol hingga bisa membuat program sederhana.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    price: "GRATIS",
    category: "PYTHON",
    duration: "3 jam",
    students: "3.2k siswa",
    rating: 4.9,
    level: "Pemula"
  },
  {
    id: "web-fundamentals",
    title: "Web Development Fundamentals",
    description: "Belajar HTML, CSS, dan JavaScript untuk membuat website modern dan responsif.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    price: "GRATIS",
    category: "WEB",
    duration: "5 jam",
    students: "2.8k siswa",
    rating: 4.8,
    level: "Pemula"
  },
  {
    id: "react-advanced",
    title: "React.js Advanced",
    description: "Teknik lanjutan React.js dengan hooks, context, dan state management modern.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    price: "PREMIUM",
    category: "REACT",
    duration: "12 jam",
    students: "1.5k siswa",
    rating: 4.7,
    level: "Lanjutan"
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-courses">
      <Navigation />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-courses-page-title">
              Semua Kelas Programming
            </h1>
            <p className="text-muted-foreground text-lg mb-8" data-testid="text-courses-page-subtitle">
              Pilih kelas sesuai level dan minat programming Anda
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Cari kelas programming..."
                className="pl-10 py-3"
                data-testid="input-search-courses"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map((course) => (
              <Card 
                key={course.id}
                className="rounded-xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                data-testid={`card-course-${course.id}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image}
                    alt={`${course.title} course`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    data-testid={`img-course-${course.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      course.price === "GRATIS" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-amber-500 text-white"
                    }`} data-testid={`text-course-price-${course.id}`}>
                      {course.price}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded" data-testid={`text-course-category-${course.id}`}>
                      {course.category}
                    </span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded" data-testid={`text-course-level-${course.id}`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors" data-testid={`text-course-title-${course.id}`}>
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`text-course-description-${course.id}`}>
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="text-muted-foreground" size={12} />
                        <span className="text-xs text-muted-foreground" data-testid={`text-course-duration-${course.id}`}>
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="text-muted-foreground" size={12} />
                        <span className="text-xs text-muted-foreground" data-testid={`text-course-students-${course.id}`}>
                          {course.students}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-amber-500 fill-current" size={14} />
                      <span className="text-sm font-medium text-foreground" data-testid={`text-course-rating-${course.id}`}>
                        {course.rating}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" data-testid="button-load-more-courses">
              Muat Lebih Banyak Kelas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}
