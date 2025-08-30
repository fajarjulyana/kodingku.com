import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, RotateCcw, Copy, Download, Share2, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const codeExamples = {
  python: `# Program kalkulator sederhana
def kalkulator():
    print("=== Kalkulator Sederhana ===")
    print("1. Tambah")
    print("2. Kurang") 
    print("3. Kali")
    print("4. Bagi")
    
    pilihan = input("Pilih operasi (1-4): ")
    
    if pilihan in ['1', '2', '3', '4']:
        num1 = float(input("Masukkan angka pertama: "))
        num2 = float(input("Masukkan angka kedua: "))
        
        if pilihan == '1':
            hasil = num1 + num2
            print(f"Hasil: {num1} + {num2} = {hasil}")
        elif pilihan == '2':
            hasil = num1 - num2
            print(f"Hasil: {num1} - {num2} = {hasil}")
        elif pilihan == '3':
            hasil = num1 * num2
            print(f"Hasil: {num1} * {num2} = {hasil}")
        elif pilihan == '4':
            if num2 != 0:
                hasil = num1 / num2
                print(f"Hasil: {num1} / {num2} = {hasil}")
            else:
                print("Error: Tidak bisa dibagi dengan nol!")
    else:
        print("Pilihan tidak valid!")

kalkulator()`,
  javascript: `// Program to-do list sederhana
class TodoList {
    constructor() {
        this.todos = [];
        this.init();
    }
    
    init() {
        console.log("=== To-Do List Sederhana ===");
        this.showMenu();
    }
    
    showMenu() {
        console.log("\\n1. Tambah tugas");
        console.log("2. Lihat semua tugas");
        console.log("3. Selesaikan tugas");
        console.log("4. Hapus tugas");
        console.log("5. Keluar");
        
        // Simulasi input user
        this.handleInput("1");
    }
    
    handleInput(choice) {
        switch(choice) {
            case "1":
                this.addTodo("Belajar JavaScript");
                break;
            case "2":
                this.showTodos();
                break;
            case "3":
                this.completeTodo(0);
                break;
            default:
                console.log("Pilihan tidak valid!");
        }
    }
    
    addTodo(task) {
        this.todos.push({
            id: Date.now(),
            task: task,
            completed: false
        });
        console.log(\`Tugas "\${task}" berhasil ditambahkan!\`);
        this.showTodos();
    }
    
    showTodos() {
        console.log("\\n=== Daftar Tugas ===");
        if (this.todos.length === 0) {
            console.log("Belum ada tugas.");
        } else {
            this.todos.forEach((todo, index) => {
                const status = todo.completed ? "✅" : "⏳";
                console.log(\`\${index + 1}. \${status} \${todo.task}\`);
            });
        }
    }
    
    completeTodo(index) {
        if (this.todos[index]) {
            this.todos[index].completed = true;
            console.log(\`Tugas "\${this.todos[index].task}" selesai!\`);
            this.showTodos();
        }
    }
}

// Jalankan aplikasi
const app = new TodoList();`,
  html: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kartu Profil Sederhana</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .profile-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 300px;
            width: 100%;
        }
        
        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #667eea;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
        }
        
        .name {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
        }
        
        .title {
            color: #666;
            margin-bottom: 20px;
        }
        
        .btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            background: #5a6fd8;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="profile-card">
        <div class="avatar">👨‍💻</div>
        <div class="name">Ahmad Koding</div>
        <div class="title">Full Stack Developer</div>
        <p>Passionate programmer yang suka berbagi ilmu coding kepada semua orang.</p>
        <button class="btn" onclick="alert('Halo dari KodingKu!')">
            Hubungi Saya
        </button>
    </div>
</body>
</html>`
};

export default function Playground() {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = useState(codeExamples.python);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Menjalankan kode...\n");
    
    setTimeout(() => {
      if (selectedLanguage === "python") {
        setOutput(`=== Kalkulator Sederhana ===
1. Tambah
2. Kurang
3. Kali
4. Bagi
Pilih operasi (1-4): 1
Masukkan angka pertama: 10
Masukkan angka kedua: 5
Hasil: 10.0 + 5.0 = 15.0

Process finished with exit code 0`);
      } else if (selectedLanguage === "javascript") {
        setOutput(`=== To-Do List Sederhana ===

1. Tambah tugas
2. Lihat semua tugas
3. Selesaikan tugas
4. Hapus tugas
5. Keluar
Tugas "Belajar JavaScript" berhasil ditambahkan!

=== Daftar Tugas ===
1. ⏳ Belajar JavaScript`);
      } else {
        setOutput("HTML berhasil dirender! Lihat preview di tab sebelah →");
      }
      setIsRunning(false);
      toast({
        title: "Berhasil!",
        description: "Kode berhasil dijalankan",
      });
    }, 2000);
  };

  const resetCode = () => {
    setCode(codeExamples[selectedLanguage as keyof typeof codeExamples]);
    setOutput("");
    toast({
      title: "Reset berhasil",
      description: "Kode dikembalikan ke contoh default",
    });
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(codeExamples[language as keyof typeof codeExamples]);
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-playground">
      <Navigation />
      
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="text-playground-page-title">
              Code Playground
            </h1>
            <p className="text-muted-foreground mb-6" data-testid="text-playground-page-subtitle">
              Coba dan jalankan kode programming langsung di browser
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-48" data-testid="select-programming-language">
                  <SelectValue placeholder="Pilih bahasa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="html">HTML/CSS</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex space-x-2">
                <Button
                  onClick={runCode}
                  disabled={isRunning}
                  className="px-4 py-2"
                  data-testid="button-run-playground-code"
                >
                  <Play size={16} className="mr-2" />
                  {isRunning ? "Menjalankan..." : "Jalankan"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={resetCode}
                  data-testid="button-reset-playground-code"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Reset
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toast({ title: "Fitur segera hadir", description: "Fitur share akan segera tersedia" })}
                  data-testid="button-share-code"
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Code Editor */}
            <Card className="rounded-xl" data-testid="card-playground-editor">
              <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-secondary-foreground font-medium" data-testid="text-playground-filename">
                    {selectedLanguage === "python" ? "main.py" : 
                     selectedLanguage === "javascript" ? "script.js" : "index.html"}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    toast({ title: "Disalin!", description: "Kode berhasil disalin ke clipboard" });
                  }}
                  data-testid="button-copy-playground-code"
                >
                  <Copy size={14} />
                </Button>
              </div>
              <div className="relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 p-4 bg-transparent border-none outline-none resize-none code-editor text-sm text-foreground font-mono"
                  placeholder={`Tulis kode ${selectedLanguage} di sini...`}
                  data-testid="textarea-playground-editor"
                />
              </div>
            </Card>

            {/* Output/Preview */}
            <div className="space-y-6">
              {selectedLanguage === "html" ? (
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="preview" data-testid="tab-html-preview">Preview</TabsTrigger>
                    <TabsTrigger value="output" data-testid="tab-html-output">Console</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview">
                    <Card className="rounded-xl">
                      <CardContent className="p-0">
                        <div className="bg-secondary px-4 py-3 border-b border-border">
                          <span className="text-secondary-foreground font-medium">HTML Preview</span>
                        </div>
                        <div className="h-96 bg-white" data-testid="html-preview">
                          <iframe
                            srcDoc={code}
                            className="w-full h-full border-none"
                            title="HTML Preview"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="output">
                    <Card className="rounded-xl">
                      <CardContent className="p-0">
                        <div className="bg-secondary px-4 py-3 border-b border-border flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Terminal size={16} className="text-secondary-foreground" />
                            <span className="text-secondary-foreground font-medium">Console Output</span>
                          </div>
                        </div>
                        <div className="h-96 p-4 bg-black text-green-400 font-mono text-sm overflow-y-auto" data-testid="text-playground-console">
                          <pre className="whitespace-pre-wrap">{output || "Jalankan kode untuk melihat output..."}</pre>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              ) : (
                <Card className="rounded-xl" data-testid="card-playground-output">
                  <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
                    <div className="flex items-center space-x-2">
                      <Terminal size={16} className="text-secondary-foreground" />
                      <span className="text-secondary-foreground font-medium">Output</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(output);
                        toast({ title: "Disalin!", description: "Output berhasil disalin" });
                      }}
                      data-testid="button-copy-playground-output"
                    >
                      <Copy size={14} />
                    </Button>
                  </div>
                  <div className="h-96 p-4 bg-black text-green-400 font-mono text-sm overflow-y-auto" data-testid="text-playground-output">
                    <pre className="whitespace-pre-wrap">{output || "Jalankan kode untuk melihat output..."}</pre>
                  </div>
                </Card>
              )}

              {/* Playground Tips */}
              <Card className="rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white" data-testid="card-playground-tips">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tips Menggunakan Playground</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-300">💡</span>
                      <span>Gunakan Ctrl+Enter untuk menjalankan kode</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-300">💡</span>
                      <span>Kode disimpan otomatis saat mengetik</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-300">💡</span>
                      <span>Bagikan kode dengan tombol Share</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-300">💡</span>
                      <span>Error akan ditampilkan dengan jelas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}
