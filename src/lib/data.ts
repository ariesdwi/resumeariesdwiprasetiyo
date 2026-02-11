// lib/data.ts
export interface Experience {
  position: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  features?: string[];
  role?: string;
  period?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  skills?: string[];
  icon?: string;
}

export interface Achievement {
  title: string;
  position: string;
  date: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
}

export const experiences: Experience[] = [
  {
    position: "Mobile Platform Engineer",
    company: "PT Bank Rakyat Indonesia",
    period: "June 2025 – Present",
    achievements: [
      "Led Composable Mobile App Platform using Flutter Atomic Design & Clean Architecture",
      "Authored 48-page technical research document establishing mobile development standards",
      "Built reusable Flutter component library with 100% test coverage for core features",
      "Reduced feature delivery time by 35% through modular architecture and code reviews",
      "Initiating iOS Native Composable Architecture with SwiftUI/UIKit for Q4 2025"
    ],
    technologies: ["Flutter", "Dart", "Swift", "SwiftUI", "Atomic Design", "Clean Architecture", "Modular Architecture", "Combine", "CI/CD"]
  },
  {
    position: "iOS Engineer",
    company: "PT PRIVY IDENTITAS DIGITAL",
    period: "March 2023 – November 2024",
    achievements: [
      "Developed modular Privy Contact and Signature modules using MVVM & Combine",
      "Implemented CI/CD pipeline with Fastlane for automated builds and deployments",
      "Migrated entire codebase to programmatic UI using Xcodegen for project generation",
      "Integrated Firebase Analytics for user behavior tracking and performance monitoring",
      "Optimized contact module with CoreData for local storage and offline capabilities",
      "Utilized SnapKit for efficient Auto Layout implementation"
    ],
    technologies: ["Swift", "MVVM", "Combine", "Modular Architecture", "Fastlane", "CI/CD", "Xcodegen", "Firebase Analytics", "CoreData", "SnapKit", "Programmatic UI"]
  },
  {
    position: "iOS Engineer",
    company: "PT DIGIASIA BIOS",
    period: "March 2021 – March 2023",
    achievements: [
      "Refactored legacy codebase to MVVM, improving performance by 40%",
      "Partnered with Product to define 15+ key feature requirements",
      "Reduced new developer onboarding time by 50% through documentation"
    ],
    technologies: ["Swift", "MVVM", "Programmatic UI"]
  },
  {
    position: "iOS Engineer",
    company: "PT BUANA VARIA KOMPUTAMA", 
    period: "December 2020 – November 2021",
    achievements: [
      "Led transition from storyboard to XIB-based UI development",
      "Launched critical update with 0 crash reports over 3 months",
      "Revamped 40% codebase from MVC to MVVM pattern"
    ],
    technologies: ["Swift", "XIB", "MVVM", "MVC"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Casha - Personal Finance",
    description: "AI-powered personal finance app with natural language transaction input, multi-currency support, and intelligent spending insights. Built with full-stack architecture from ground up.",
    technologies: ["SwiftUI", "Clean Architecture", "Nest.js", "Prisma", "PostgreSQL", "OpenAI API", "Next.js", "TypeScript", "Tailwind CSS"],
    appStoreUrl: "https://apps.apple.com/id/app/cashaapp/id6754607757",
    role: "Founder & Full-Stack Developer",
    period: "2024 – Present",
    features: [
      "AI-powered transaction categorization",
      "Natural language input processing",
      "Multi-currency support",
      "Real-time financial insights",
      "Secure local data storage"
    ]
  },
  {
    id: 2,
    title: "Karapan Sapi Apps",
    description: "iOS application for managing and tracking traditional bull racing events with real-time updates, participant management, and live scoring system. Built with modern iOS architecture patterns.",
    technologies: ["Swift", "UIKit", "MVVM", "Firebase", "Combine", "Core Data"],
    githubUrl: "#",
    features: [
      "Real-time event updates",
      "Participant management",
      "Live scoring system",
      "Offline capability"
    ]
  },
  {
    id: 3,
    title: "Spikap Apps",
    description: "Comprehensive public speaking and presentation coaching app with AI-powered feedback, progress tracking, and personalized learning paths. Features real-time speech analysis and performance metrics.",
    technologies: ["SwiftUI", "Combine", "Core ML", "CloudKit", "AVFoundation", "Speech Framework"],
    appStoreUrl: "#",
    githubUrl: "#",
    features: [
      "AI-powered feedback",
      "Real-time speech analysis",
      "Progress tracking",
      "Personalized learning"
    ]
  },
  {
    id: 4,
    title: "Awaro Apps",
    description: "Award and recognition platform for organizations to manage employee achievements, recognition programs, and performance tracking. Includes gamification elements to boost engagement.",
    technologies: ["Swift", "VIPER", "RxSwift", "REST API", "Core Data", "Push Notifications"],
    githubUrl: "#",
    features: [
      "Employee recognition",
      "Performance tracking",
      "Gamification",
      "Real-time notifications"
    ]
  },
  {
    id: 5,
    title: "Produku Apps",
    description: "Product management and inventory tracking application for small to medium businesses with barcode scanning, real-time sync, and multi-language support. Streamlines inventory management processes.",
    technologies: ["Swift", "MVVM", "Core Data", "AVFoundation", "CloudKit", "Localization"],
    appStoreUrl: "#",
    features: [
      "Barcode scanning",
      "Inventory management",
      "Real-time sync",
      "Multi-language support"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Mobile Development",
    items: ["Swift", "SwiftUI", "UIKit", "Flutter", "Dart", "React Native", "Objective-C"]
  },
  {
    category: "Architecture & Patterns",
    items: ["Clean Architecture", "MVVM", "Modular Architecture", "Atomic Design", "SOLID Principles", "Design Patterns", "Monorepo"]
  },
  {
    category: "State Management & Reactive",
    items: ["Combine", "RxSwift", "SwiftUI State", "Bloc Pattern", "Reactive Programming"]
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Nest.js", "Express.js", "REST API", "Prisma", "PostgreSQL"]
  },
  {
    category: "Web Development",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "React", "HTML/CSS"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Fastlane", "XcodeGen", "CI/CD", "CocoaPods", "SPM", "Bitbucket", "Makefile"]
  },
  {
    category: "AI & Cloud Services",
    items: ["OpenAI API", "Firebase", "Firebase Analytics", "Crashlytics", "Remote Config", "Cloud Messaging"]
  },
  {
    category: "Testing & Quality",
    items: ["Unit Testing", "Integration Testing", "UI Testing", "Dependency Injection", "Code Review", "Test Coverage"]
  },
  {
    category: "Development Practices",
    items: ["Agile/Scrum", "Code Review", "Technical Documentation", "Platform Engineering", "Modular Development"]
  },
  {
    category: "UI/UX & Design",
    items: ["Balsamiq", "Competitive Analysis", "UX Research", "Responsive Design", "Localization"]
  },
  {
    category: "Core Technologies",
    items: ["Data Persistence", "Networking", "Push Notifications", "Performance Optimization", "Multi-currency"]
  }
];

export const education: Education[] = [
  {
    institution: "Pertamina University, Jakarta Indonesia",
    degree: "Bachelor of Computer Science",
    period: "August 2016 – December 2020",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with comprehensive knowledge in computer science fundamentals.",
    skills: ["Algorithms", "Data Structures", "Software Engineering", "Computer Science", "OOP", "Database Systems"],
    icon: "🎓"
  },
  {
    institution: "Apple Developer Academy",
    degree: "iOS Development Program",
    period: "February 2020 – December 2021",
    description: "Intensive training in iOS development, Swift programming, and Apple ecosystem technologies. Hands-on experience with real-world projects.",
    skills: ["Swift", "UIKit", "iOS Development", "Xcode", "App Store", "Mobile Design", "Human Interface Guidelines"],
    icon: "📱"
  }
];

export const achievements: Achievement[] = [
  {
    title: "NATIONAL INNOVATION PROJECT COMPETITION 2019",
    position: "SECOND RUNNER UP",
    date: "October 2019",
    description: "Recognized for innovative project development and technical excellence in national-level competition."
  },
  {
    title: "NATIONAL INFORMATION TECHNOLOGY CREATIVE COMPETITION 2019",
    position: "SECOND RUNNER UP",
    date: "November 2019",
    description: "Awarded for creative IT solutions and outstanding performance in national technology competition."
  },
  {
    title: "HACKATHON TOYOTA FUNCODE 2019",
    position: "FINALIST",
    date: "December 2019",
    description: "Selected as finalist in Toyota's innovation hackathon, showcasing problem-solving skills and technical expertise."
  }
];

export const personalInfo: PersonalInfo = {
  name: "Aries Dwi Prasetiyo",
  title: "Senior iOS Engineer | Swift Enthusiast | Clean Architecture Advocate | SOLID Principles Practitioner",
  phone: "+62 812-3010-2023",
  email: "ariesdwiprasetiyo4@gmail.com",
  linkedin: "linkedin.com/in/aries-dwi-prasetiyo-39622412a",
  summary: "iOS Engineer with 4+ years of experience delivering scalable, modular, and high-performance apps using Swift, Combine, and Clean Architecture. Led major architecture transitions and optimized critical systems that improved app performance by up to 60% and reduced crash rates to near zero. Passionate about mentoring, modular design, and driving product impact through solid engineering practices."
};