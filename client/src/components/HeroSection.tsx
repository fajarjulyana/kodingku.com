import { Button } from "@/components/ui/button";
import { Code, Terminal, Play } from "lucide-react";
import { SiPython, SiJavascript } from "react-icons/si";

export function HeroSection() {
  return (
    <section className="gradient-bg py-20 relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight" data-testid="text-hero-title">
                KodingKu
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed" data-testid="text-hero-description">
                Koding yang Terarah, Sukses yang Nyata
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="px-8 py-3 bg-white text-primary font-semibold hover:bg-gray-100"
                data-testid="button-start-learning"
              >
                Mulai Belajar
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-primary"
                data-testid="button-join-newsletter"
              >
                Bergabung Newsletter
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2" data-testid="language-python">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <SiPython className="text-blue-600" size={20} />
                </div>
                <span className="text-white font-medium">Python</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="language-javascript">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <SiJavascript className="text-black" size={16} />
                </div>
                <span className="text-white font-medium">JavaScript</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="language-c">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">C</span>
                </div>
                <span className="text-white font-medium">C/C++</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Programmer working on laptop" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-hero-programmer"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <Code className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
              <Terminal className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
