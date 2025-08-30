import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone } from "lucide-react";
import { SiPython } from "react-icons/si";

const roadmaps = [
  {
    id: "web",
    title: "Web Developer",
    subtitle: "Menjadi fullstack web developer",
    icon: Globe,
    iconColor: "bg-orange-500",
    steps: [
      { title: "HTML & CSS Dasar", subtitle: "Struktur dan styling web", completed: true },
      { title: "JavaScript ES6+", subtitle: "Programming logic & DOM", completed: true },
      { title: "React.js Framework", subtitle: "Modern UI development", completed: false },
      { title: "Backend & Database", subtitle: "Node.js & MongoDB", completed: false },
    ],
    available: true
  },
  {
    id: "python",
    title: "Python Developer",
    subtitle: "Backend & Data Science",
    icon: SiPython,
    iconColor: "bg-blue-600",
    steps: [
      { title: "Python Fundamentals", subtitle: "Syntax & OOP concepts", completed: true },
      { title: "Flask/Django", subtitle: "Web framework basics", completed: true },
      { title: "Data Science", subtitle: "Pandas, NumPy, Matplotlib", completed: false },
      { title: "Machine Learning", subtitle: "Scikit-learn & TensorFlow", completed: false },
    ],
    available: true
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    subtitle: "Android & iOS Apps",
    icon: Smartphone,
    iconColor: "bg-green-600",
    steps: [
      { title: "Java/Kotlin Dasar", subtitle: "Programming fundamentals", completed: true },
      { title: "Android Studio", subtitle: "UI/UX & Activities", completed: false },
      { title: "Flutter/React Native", subtitle: "Cross-platform apps", completed: false },
      { title: "Deployment", subtitle: "Play Store & App Store", completed: false },
    ],
    available: false
  }
];

export function RoadmapSection() {
  return (
    <section className="py-16 bg-muted/30 dark:bg-muted/30" data-testid="roadmap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2" data-testid="text-roadmap-label">
            ROADMAP
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-roadmap-title">
            Jalur Pembelajaran Terstruktur
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-roadmap-subtitle">
            Ikuti roadmap yang telah dirancang khusus untuk pemula
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon;
            return (
              <Card key={roadmap.id} className="rounded-xl" data-testid={`card-roadmap-${roadmap.id}`}>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${roadmap.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`text-roadmap-title-${roadmap.id}`}>
                      {roadmap.title}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`text-roadmap-subtitle-${roadmap.id}`}>
                      {roadmap.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {roadmap.steps.map((step, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-4 relative roadmap-connector"
                        data-testid={`roadmap-step-${roadmap.id}-${index}`}
                      >
                        <div className={`w-8 h-8 ${step.completed ? 'bg-primary' : 'bg-muted'} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-xs font-bold ${step.completed ? 'text-white' : 'text-muted-foreground'}`}>
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    variant={roadmap.available ? "default" : "outline"}
                    disabled={!roadmap.available}
                    data-testid={`button-start-roadmap-${roadmap.id}`}
                  >
                    {roadmap.available ? "Mulai Roadmap Ini" : "Segera Hadir"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
