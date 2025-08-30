import { 
  type User, 
  type InsertUser,
  type Course,
  type InsertCourse,
  type Tutorial,
  type InsertTutorial,
  type CodeSnippet,
  type InsertCodeSnippet,
  type Enrollment,
  type InsertEnrollment
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Course operations
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  getCoursesByCategory(category: string): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Tutorial operations
  getTutorials(): Promise<Tutorial[]>;
  getTutorial(id: string): Promise<Tutorial | undefined>;
  getTutorialsByCategory(category: string): Promise<Tutorial[]>;
  createTutorial(tutorial: InsertTutorial): Promise<Tutorial>;
  
  // Code snippet operations
  getCodeSnippets(): Promise<CodeSnippet[]>;
  getCodeSnippet(id: string): Promise<CodeSnippet | undefined>;
  getCodeSnippetsByUser(userId: string): Promise<CodeSnippet[]>;
  createCodeSnippet(snippet: InsertCodeSnippet): Promise<CodeSnippet>;
  
  // Enrollment operations
  getEnrollmentsByUser(userId: string): Promise<Enrollment[]>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;
  private tutorials: Map<string, Tutorial>;
  private codeSnippets: Map<string, CodeSnippet>;
  private enrollments: Map<string, Enrollment>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.tutorials = new Map();
    this.codeSnippets = new Map();
    this.enrollments = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample courses
    const sampleCourses: Course[] = [
      {
        id: "flask-webapp",
        title: "Membuat Web App dengan Flask",
        description: "Pelajari cara membuat aplikasi web modern menggunakan Flask framework Python dari nol hingga deployment.",
        category: "python",
        level: "intermediate",
        duration: "4 jam",
        price: "free",
        imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: 48,
        studentsCount: 1200,
        createdAt: new Date()
      },
      {
        id: "javascript-es6",
        title: "JavaScript ES6+ Lengkap",
        description: "Kuasai JavaScript modern dengan ES6+, async/await, dan best practices untuk development.",
        category: "javascript",
        level: "intermediate",
        duration: "6 jam",
        price: "premium",
        imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: 49,
        studentsCount: 890,
        createdAt: new Date()
      },
      {
        id: "react-beginner",
        title: "React.js untuk Pemula",
        description: "Bangun aplikasi web interaktif dengan React.js, komponen, hooks, dan state management.",
        category: "react",
        level: "beginner",
        duration: "8 jam",
        price: "free",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: 47,
        studentsCount: 2100,
        createdAt: new Date()
      }
    ];

    sampleCourses.forEach(course => {
      this.courses.set(course.id, course);
    });

    // Sample tutorials
    const sampleTutorials: Tutorial[] = [
      {
        id: "python-intro",
        title: "Pengenalan Python Programming",
        content: "Memulai perjalanan programming dengan Python - bahasa yang mudah dipelajari dan powerful.",
        description: "Tutorial dasar untuk memahami Python programming dari nol.",
        category: "python",
        difficulty: "pemula",
        readTime: "5 menit baca",
        views: 2100,
        published: true,
        createdAt: new Date()
      },
      {
        id: "javascript-variables",
        title: "Memahami Variables dan Data Types di JavaScript",
        content: "Pelajari cara mendeklarasikan variables dan berbagai tipe data dalam JavaScript ES6+.",
        description: "Tutorial tentang variables dan data types JavaScript.",
        category: "javascript",
        difficulty: "pemula",
        readTime: "7 menit baca",
        views: 1800,
        published: true,
        createdAt: new Date()
      }
    ];

    sampleTutorials.forEach(tutorial => {
      this.tutorials.set(tutorial.id, tutorial);
    });
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser,
      role: insertUser.role || "student", 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Course operations
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getCoursesByCategory(category: string): Promise<Course[]> {
    return Array.from(this.courses.values()).filter(
      course => course.category === category
    );
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = {
      ...insertCourse,
      price: insertCourse.price || "free",
      imageUrl: insertCourse.imageUrl || null,
      rating: insertCourse.rating || null,
      studentsCount: insertCourse.studentsCount || null,
      id,
      createdAt: new Date()
    };
    this.courses.set(id, course);
    return course;
  }

  // Tutorial operations
  async getTutorials(): Promise<Tutorial[]> {
    return Array.from(this.tutorials.values()).filter(tutorial => tutorial.published);
  }

  async getTutorial(id: string): Promise<Tutorial | undefined> {
    return this.tutorials.get(id);
  }

  async getTutorialsByCategory(category: string): Promise<Tutorial[]> {
    return Array.from(this.tutorials.values()).filter(
      tutorial => tutorial.category === category && tutorial.published
    );
  }

  async createTutorial(insertTutorial: InsertTutorial): Promise<Tutorial> {
    const id = randomUUID();
    const tutorial: Tutorial = {
      ...insertTutorial,
      views: insertTutorial.views || null,
      published: insertTutorial.published || null,
      id,
      createdAt: new Date()
    };
    this.tutorials.set(id, tutorial);
    return tutorial;
  }

  // Code snippet operations
  async getCodeSnippets(): Promise<CodeSnippet[]> {
    return Array.from(this.codeSnippets.values()).filter(snippet => snippet.isPublic);
  }

  async getCodeSnippet(id: string): Promise<CodeSnippet | undefined> {
    return this.codeSnippets.get(id);
  }

  async getCodeSnippetsByUser(userId: string): Promise<CodeSnippet[]> {
    return Array.from(this.codeSnippets.values()).filter(
      snippet => snippet.authorId === userId
    );
  }

  async createCodeSnippet(insertSnippet: InsertCodeSnippet): Promise<CodeSnippet> {
    const id = randomUUID();
    const snippet: CodeSnippet = {
      ...insertSnippet,
      description: insertSnippet.description || null,
      authorId: insertSnippet.authorId || null,
      isPublic: insertSnippet.isPublic || null,
      id,
      createdAt: new Date()
    };
    this.codeSnippets.set(id, snippet);
    return snippet;
  }

  // Enrollment operations
  async getEnrollmentsByUser(userId: string): Promise<Enrollment[]> {
    return Array.from(this.enrollments.values()).filter(
      enrollment => enrollment.userId === userId
    );
  }

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
    const id = randomUUID();
    const enrollment: Enrollment = {
      ...insertEnrollment,
      progress: insertEnrollment.progress || null,
      completed: insertEnrollment.completed || null,
      id,
      enrolledAt: new Date()
    };
    this.enrollments.set(id, enrollment);
    return enrollment;
  }
}

export const storage = new MemStorage();
