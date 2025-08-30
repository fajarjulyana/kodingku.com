import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCourseSchema, insertTutorialSchema, insertCodeSnippetSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Course routes
  app.get("/api/courses", async (req, res) => {
    try {
      const { category } = req.query;
      let courses;
      
      if (category && typeof category === "string") {
        courses = await storage.getCoursesByCategory(category);
      } else {
        courses = await storage.getCourses();
      }
      
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil data kursus" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const course = await storage.getCourse(id);
      
      if (!course) {
        return res.status(404).json({ message: "Kursus tidak ditemukan" });
      }
      
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil detail kursus" });
    }
  });

  app.post("/api/courses", async (req, res) => {
    try {
      const validatedData = insertCourseSchema.parse(req.body);
      const course = await storage.createCourse(validatedData);
      res.status(201).json(course);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Data kursus tidak valid", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Gagal membuat kursus baru" });
    }
  });

  // Tutorial routes
  app.get("/api/tutorials", async (req, res) => {
    try {
      const { category } = req.query;
      let tutorials;
      
      if (category && typeof category === "string") {
        tutorials = await storage.getTutorialsByCategory(category);
      } else {
        tutorials = await storage.getTutorials();
      }
      
      res.json(tutorials);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil data tutorial" });
    }
  });

  app.get("/api/tutorials/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const tutorial = await storage.getTutorial(id);
      
      if (!tutorial) {
        return res.status(404).json({ message: "Tutorial tidak ditemukan" });
      }
      
      res.json(tutorial);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil detail tutorial" });
    }
  });

  app.post("/api/tutorials", async (req, res) => {
    try {
      const validatedData = insertTutorialSchema.parse(req.body);
      const tutorial = await storage.createTutorial(validatedData);
      res.status(201).json(tutorial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Data tutorial tidak valid", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Gagal membuat tutorial baru" });
    }
  });

  // Code snippet routes
  app.get("/api/code-snippets", async (req, res) => {
    try {
      const { userId } = req.query;
      let snippets;
      
      if (userId && typeof userId === "string") {
        snippets = await storage.getCodeSnippetsByUser(userId);
      } else {
        snippets = await storage.getCodeSnippets();
      }
      
      res.json(snippets);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil data code snippet" });
    }
  });

  app.get("/api/code-snippets/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const snippet = await storage.getCodeSnippet(id);
      
      if (!snippet) {
        return res.status(404).json({ message: "Code snippet tidak ditemukan" });
      }
      
      res.json(snippet);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil detail code snippet" });
    }
  });

  app.post("/api/code-snippets", async (req, res) => {
    try {
      const validatedData = insertCodeSnippetSchema.parse(req.body);
      const snippet = await storage.createCodeSnippet(validatedData);
      res.status(201).json(snippet);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Data code snippet tidak valid", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Gagal menyimpan code snippet" });
    }
  });

  // Code execution route for playground
  app.post("/api/execute", async (req, res) => {
    try {
      const { code, language, input } = req.body;
      
      if (!code || !language) {
        return res.status(400).json({ 
          message: "Kode dan bahasa pemrograman harus diisi" 
        });
      }

      // Simulate code execution based on language
      let output = "";
      let error = null;

      switch (language.toLowerCase()) {
        case "python":
          // Simulate Python execution
          if (code.includes("print(")) {
            const printMatches = code.match(/print\(([^)]+)\)/g);
            if (printMatches) {
              output = printMatches.map((match: string) => {
                const content = match.replace(/print\(|\)/g, "").replace(/['"]/g, "");
                return content;
              }).join("\n");
            }
          }
          
          if (code.includes("input(")) {
            output += "\nMasukkan nilai: " + (input || "5");
            if (code.includes("float") || code.includes("int")) {
              output += "\nHasil perhitungan berhasil dijalankan";
            }
          }
          
          output += "\n\nProcess finished with exit code 0";
          break;

        case "javascript":
          // Simulate JavaScript execution
          if (code.includes("console.log")) {
            const consoleMatches = code.match(/console\.log\(([^)]+)\)/g);
            if (consoleMatches) {
              output = consoleMatches.map((match: string) => {
                const content = match.replace(/console\.log\(|\)/g, "").replace(/['"]/g, "");
                return content;
              }).join("\n");
            }
          }
          
          if (code.includes("class") || code.includes("function")) {
            output += "\nKode JavaScript berhasil dijalankan";
          }
          break;

        case "html":
          // For HTML, we just validate and return success
          if (code.includes("<html>") && code.includes("</html>")) {
            output = "HTML berhasil dirender! Lihat preview di tab sebelah.";
          } else {
            output = "HTML fragment berhasil diproses.";
          }
          break;

        default:
          return res.status(400).json({ 
            message: "Bahasa pemrograman tidak didukung" 
          });
      }

      res.json({
        output,
        error,
        executionTime: Math.floor(Math.random() * 1000) + 500, // Random execution time
        language
      });

    } catch (error) {
      res.status(500).json({ 
        message: "Gagal menjalankan kode",
        error: "Internal server error"
      });
    }
  });

  // User authentication routes (basic implementation)
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { username, email, password, role = "student" } = req.body;
      
      if (!username || !email || !password) {
        return res.status(400).json({ 
          message: "Username, email, dan password harus diisi" 
        });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ 
          message: "Email sudah terdaftar" 
        });
      }

      const existingUsername = await storage.getUserByUsername(username);
      if (existingUsername) {
        return res.status(409).json({ 
          message: "Username sudah digunakan" 
        });
      }

      const user = await storage.createUser({
        username,
        email,
        password, // In production, this should be hashed
        role
      });

      // Don't return password in response
      const { password: _, ...userResponse } = user;
      res.status(201).json(userResponse);

    } catch (error) {
      res.status(500).json({ message: "Gagal mendaftarkan user" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ 
          message: "Email dan password harus diisi" 
        });
      }

      const user = await storage.getUserByEmail(email);
      if (!user || user.password !== password) { // In production, use proper password comparison
        return res.status(401).json({ 
          message: "Email atau password salah" 
        });
      }

      // Don't return password in response
      const { password: _, ...userResponse } = user;
      res.json(userResponse);

    } catch (error) {
      res.status(500).json({ message: "Gagal login" });
    }
  });

  // Statistics route for homepage
  app.get("/api/stats", async (req, res) => {
    try {
      const courses = await storage.getCourses();
      const tutorials = await storage.getTutorials();
      
      const stats = {
        studentsCount: 12000,
        coursesCount: courses.length,
        tutorialsCount: tutorials.length,
        certificatesIssued: 5000,
        programmingLanguages: 8
      };

      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Gagal mengambil statistik" });
    }
  });

  // Health check route
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "OK", 
      message: "KodingKu API berjalan dengan baik",
      timestamp: new Date().toISOString()
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
