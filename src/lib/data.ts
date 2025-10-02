// lib/data.ts
export interface Experience {
  position: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  features?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    position: "Mobile Developer",
    company: "PT Bank Rakyat Indonesia",
    period: "June 2025 – Present",
    achievements: [
      "Reduced feature delivery time by 35% by establishing scalable Combine pipelines and modular components",
      "Conducted weekly code reviews across 3 iOS teams, raising overall code quality and test coverage",
      "Collaborated with PMs and QA to define milestones and ensure on-time delivery with >95% sprint completion rate"
    ]
  },
  {
    position: "iOS Engineer",
    company: "PT PRIVY IDENTITAS DIGITAL",
    period: "March 2023 – November 2024",
    achievements: [
      "Spearheaded the design and implementation of a modular Privy Contact Module and Privy Manage Signature with Combine and MVVM",
      "Integrated synchronize contact and managing list of signature features",
      "Improved code maintainability and team collaboration through modular architecture"
    ]
  },
  {
    position: "iOS Engineer",
    company: "PT DIGIASIA BIOS",
    period: "March 2021 – March 2023",
    achievements: [
      "Refactored legacy codebase using MVVM and migrating UI Programatically, leading to a 40% improvement in performance and maintainability",
      "Partnered with Product to define and clarify 15+ key feature requirements, resulting in faster development cycles",
      "Documented core architecture and reusable modules, reducing onboarding time for new developers by 50%"
    ]
  },
  {
    position: "iOS Engineer",
    company: "PT BUANA VARIA KOMPUTAMA",
    period: "December 2020 – November 2021",
    achievements: [
      "Led a project-wide transition from storyboard-based development to fully XIB UI",
      "Launched a critical update with 0 crash reports over 3 months, significantly enhancing user trust",
      "Boosted code readability and scalability by introducing consistent code conventions and component reuse",
      "Revamped 40% codebase from MVC to MVVM Design Pattern"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    category: "Core Technologies",
    items: ["Swift", "UIKit", "Combine", "RxSwift", "SwiftUI", "Objective-C"]
  },
  {
    category: "Architecture & Patterns",
    items: ["MVVM", "Clean Architecture", "VIPER", "SOLID Principles", "Design Patterns"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Fastlane", "XcodeGen", "CocoaPods", "SPM", "Makefile"]
  },
  {
    category: "Firebase",
    items: ["Firebase Distribution", "Analytics", "Crashlytics", "Remote Config", "Cloud Messaging"]
  },
  {
    category: "Development Practices",
    items: ["CI/CD", "Unit Testing", "UI Testing", "Code Review", "Agile/Scrum"]
  },
  {
    category: "Other Skills",
    items: ["Networking", "Data Persistence", "Localization", "Push Notifications", "Performance Optimization"]
  }
];

// Education data
export const education = [
  {
    institution: "Pertamina University, Jakarta Indonesia",
    degree: "Bachelor of Computer Science",
    period: "August 2016 – December 2020",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with comprehensive knowledge in computer science fundamentals."
  },
  {
    institution: "Student of Apple Developer Academy",
    degree: "iOS Development Program",
    period: "February 2020 – December 2021",
    description: "Intensive training in iOS development, Swift programming, and Apple ecosystem technologies. Hands-on experience with real-world projects."
  }
];

// Achievements data
export const achievements = [
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

// Personal info
export const personalInfo = {
  name: "Aries Dwi Prasetiyo",
  title: "Senior iOS Engineer | Swift Enthusiast | Clean Architecture Advocate | SOLID Principles Practitioner",
  phone: "+62 812-3010-2023",
  email: "ariesdwiprasetiyo4@gmail.com",
  linkedin: "linkedin.com/in/aries-dwi-prasetiyo-39622412a",
  summary: "iOS Engineer with 4+ years of experience delivering scalable, modular, and high-performance apps using Swift, Combine, and Clean Architecture. Led major architecture transitions and optimized critical systems that improved app performance by up to 60% and reduced crash rates to near zero. Passionate about mentoring, modular design, and driving product impact through solid engineering practices."
};