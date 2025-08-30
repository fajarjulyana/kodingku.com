import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { CodePlayground } from "@/components/CodePlayground";
import { FeaturedCoursesSection } from "@/components/FeaturedCoursesSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Navigation />
      <HeroSection />
      <CategorySection />
      <RoadmapSection />
      <CodePlayground />
      <FeaturedCoursesSection />
      <StatsSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}
