import { Users, Book, Award, Code } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Pelajar Aktif",
    color: "bg-primary"
  },
  {
    icon: Book,
    value: "150+",
    label: "Tutorial",
    color: "bg-emerald-500"
  },
  {
    icon: Award,
    value: "5K+",
    label: "Sertifikat Diterbitkan",
    color: "bg-amber-500"
  },
  {
    icon: Code,
    value: "8",
    label: "Bahasa Programming",
    color: "bg-blue-500"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-background" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
