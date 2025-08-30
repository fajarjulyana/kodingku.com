import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";

const featuredCourses = [
  {
    id: "flask-webapp",
    title: "Membuat Web App dengan Flask",
    description: "Pelajari cara membuat aplikasi web modern menggunakan Flask framework Python dari nol hingga deployment.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    price: "GRATIS",
    priceColor: "bg-primary text-primary-foreground",
    category: "PYTHON",
    duration: "4 jam",
    students: "1.2k siswa",
    rating: 4.8
  },
  {
    id: "javascript-es6",
    title: "JavaScript ES6+ Lengkap",
    description: "Kuasai JavaScript modern dengan ES6+, async/await, dan best practices untuk development.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    price: "PREMIUM",
    priceColor: "bg-amber-500 text-white",
    category: "JAVASCRIPT",
    duration: "6 jam",
    students: "890 siswa",
    rating: 4.9
  },
  {
    id: "react-beginner",
    title: "React.js untuk Pemula",
    description: "Bangun aplikasi web interaktif dengan React.js, komponen, hooks, dan state management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    price: "GRATIS",
    priceColor: "bg-primary text-primary-foreground",
    category: "REACT",
    duration: "8 jam",
    students: "2.1k siswa",
    rating: 4.7
  }
];

export function FeaturedCoursesSection() {
  return (
    <section className="py-16 bg-muted/30 dark:bg-muted/30" data-testid="featured-courses-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2" data-testid="text-courses-label">
            KURSUS UNGGULAN
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-courses-title">
            Tutorial Paling Populer
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-courses-subtitle">
            Dipilih langsung oleh komunitas programmer Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Card 
              key={course.id}
              className="rounded-xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
              data-testid={`card-course-${course.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.image}
                  alt={`${course.title} tutorial`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  data-testid={`img-course-${course.id}`}
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded ${course.priceColor}`} data-testid={`text-course-price-${course.id}`}>
                    {course.price}
                  </span>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded" data-testid={`text-course-category-${course.id}`}>
                    {course.category}
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

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 font-medium"
            data-testid="button-view-all-courses"
          >
            Lihat Semua Kursus
          </Button>
        </div>
      </div>
    </section>
  );
}
