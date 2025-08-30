import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, RotateCcw, Copy, Terminal, Palette, Zap, Bug, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const defaultPythonCode = `# Program sederhana untuk menghitung luas lingkaran
import math

def hitung_luas_lingkaran(radius):
    return math.pi * radius ** 2

# Input dari user
r = float(input("Masukkan radius lingkaran: "))

# Hitung dan tampilkan hasil
luas = hitung_luas_lingkaran(r)
print(f"Luas lingkaran dengan radius {r} adalah: {luas:.2f}")`;

export function CodePlayground() {
  const [code, setCode] = useState(defaultPythonCode);
  const [output, setOutput] = useState("Masukkan radius lingkaran: 5\nLuas lingkaran dengan radius 5.0 adalah: 78.54\n\nProcess finished with exit code 0");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const runCode = async () => {
    setIsRunning(true);
    toast({
      title: "Menjalankan kode...",
      description: "Mohon tunggu sebentar",
    });

    // Simulate code execution delay
    setTimeout(() => {
      setOutput("Masukkan radius lingkaran: 7\nLuas lingkaran dengan radius 7.0 adalah: 153.94\n\nProcess finished with exit code 0");
      setIsRunning(false);
      toast({
        title: "Berhasil!",
        description: "Kode berhasil dijalankan",
      });
    }, 2000);
  };

  const resetCode = () => {
    setCode(defaultPythonCode);
    setOutput("Masukkan radius lingkaran: 5\nLuas lingkaran dengan radius 5.0 adalah: 78.54\n\nProcess finished with exit code 0");
    toast({
      title: "Reset berhasil",
      description: "Kode dikembalikan ke contoh default",
    });
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Disalin!",
      description: "Output berhasil disalin ke clipboard",
    });
  };

  const features = [
    {
      icon: Palette,
      title: "Syntax Highlighting",
      description: "Kode berwarna untuk mudah dibaca",
      color: "bg-primary"
    },
    {
      icon: Zap,
      title: "Real-time Execution",
      description: "Jalankan kode langsung di browser",
      color: "bg-emerald-500"
    },
    {
      icon: Bug,
      title: "Error Detection",
      description: "Deteksi error dengan penjelasan",
      color: "bg-amber-500"
    },
    {
      icon: Share,
      title: "Share Code",
      description: "Bagikan kode dengan teman",
      color: "bg-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-background" data-testid="code-playground-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2" data-testid="text-playground-label">
            CODING PLAYGROUND
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-playground-title">
            Coba Kode Langsung di Browser
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-playground-subtitle">
            Praktikkan kode tanpa perlu install software apapun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="rounded-xl overflow-hidden" data-testid="card-code-editor">
              <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-secondary-foreground font-medium" data-testid="text-file-name">
                    main.py
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    onClick={runCode}
                    disabled={isRunning}
                    className="px-3 py-1 text-xs font-medium"
                    data-testid="button-run-code"
                  >
                    <Play size={12} className="mr-1" />
                    {isRunning ? "Menjalankan..." : "Jalankan"}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={resetCode}
                    className="px-3 py-1 text-xs font-medium"
                    data-testid="button-reset-code"
                  >
                    <RotateCcw size={12} className="mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 bg-transparent border-none outline-none resize-none code-editor text-sm text-foreground font-mono"
                  placeholder="Tulis kode Python di sini..."
                  data-testid="textarea-code-editor"
                />
              </div>
            </Card>

            <Card className="rounded-xl overflow-hidden" data-testid="card-output">
              <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
                <div className="flex items-center space-x-2">
                  <Terminal size={16} className="text-secondary-foreground" />
                  <span className="text-secondary-foreground font-medium" data-testid="text-output-label">
                    Output
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyOutput}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-copy-output"
                >
                  <Copy size={12} />
                </Button>
              </div>
              <div className="p-4 bg-black text-green-400 font-mono text-sm min-h-32" data-testid="text-code-output">
                <pre className="whitespace-pre-wrap">{output}</pre>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-xl" data-testid="card-editor-features">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-features-title">
                  Fitur Code Editor
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3" data-testid={`feature-${index}`}>
                        <div className={`w-8 h-8 ${feature.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="text-white" size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white" data-testid="card-learning-tips">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" data-testid="text-tips-title">
                  Tips Belajar Efektif
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-300">✓</span>
                    <span>Praktik setiap hari minimal 30 menit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-300">✓</span>
                    <span>Tulis kode dengan tangan dulu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-300">✓</span>
                    <span>Bergabung dengan komunitas KodingKu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-300">✓</span>
                    <span>Buat proyek kecil untuk latihan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
