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

export interface SkillGroup {
  level: string;
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
  website: string;
  summary: string;
}

export const experiences: Experience[] = [
  {
    position: "Mobile Platform Engineer",
    company: "PT Bank Rakyat Indonesia (BRI)",
    period: "June 2025 – Present",
    achievements: [
      "Leading mobile platform transformation for Indonesia's largest bank serving 140M+ customers",
      "Accelerated delivery speed by 35% by architecting and developing a cross-platform Mobile App Design System using Flutter and native iOS.",
      "Established mobile design system standards by creating a centralized component library portal for developers, including 3 foundational elements with 100+ variants and 7 components with 150+ variants."
    ],
    technologies: ["Flutter", "Dart", "Swift", "SwiftUI", "Atomic Design", "Clean Architecture", "CI/CD", "Modular Architecture"]
  },
  {
    position: "iOS Engineer",
    company: "PT Privy Identitas Digital",
    period: "March 2023 – November 2024",
    achievements: [
      "Delivered secure digital signature solutions for enterprise clients processing 500K+ documents monthly",
      "Accelerated feature development by 45% by architecting modular MVVM structure with Combine for Privy Contact and Signature modules",
      "Reduced deployment time by 70% by integrating Fastlane CI/CD pipeline, enabling daily releases",
      "Increased user retention by 25% through offline-first architecture using Core Data with sync logic",
      "Improved incident response time by 60% through Firebase Analytics and Crashlytics integration"
    ],
    technologies: ["Swift", "MVVM", "Combine", "Modular Architecture", "Fastlane", "XcodeGen", "Firebase", "CoreData", "SnapKit"]
  },
  {
    position: "iOS Engineer",
    company: "PT Digiasia Bios",
    period: "March 2020 – March 2023",
    achievements: [
      "Modernized legacy iOS application serving 100K+ active users in digital payment ecosystem",
      "Increased app performance by 40% by refactoring legacy MVC to MVVM architecture, reducing crash rate from 2.1% to 0.3%",
      "Reduced onboarding time for new developers by 50% through comprehensive technical documentation",
      "Shipped 15+ major features from design to production including payment integrations and KYC flows"
    ],
    technologies: ["Swift", "MVVM", "Programmatic UI", "RESTful APIs"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Casha - AI-Powered Personal Finance",
    description: "Architected and built production-ready finance app demonstrating modern iOS development with AI integration, serving as portfolio showcase for advanced iOS capabilities.",
    technologies: ["Swift", "SwiftUI", "Combine", "Clean Architecture", "Core Data", "CloudKit", "Alamofire", "AI API Integration"],
    appStoreUrl: "https://apps.apple.com/id/app/cashaapp/id6754607757",
    role: "Personal Project",
    period: "2024 – Present",
    features: [
      "Architected scalable Clean Architecture with modular monorepo enabling 80% code reusability",
      "Integrated AI-powered categorization reducing manual data entry by 70%",
      "Implemented offline-first data layer using Core Data sync"
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    level: "Expert",
    items: ["Swift", "SwiftUI", "UIKit", "Clean Architecture", "MVVM", "Combine", "Modular Architecture", "Git", "Fastlane", "CI/CD", "Firebase", "REST API", "Unit Testing", "Code Review"]
  },
  {
    level: "Advanced",
    items: ["Concurrency (async/await)", "Memory Management (ARC)", "VIPER", "Coordinator Pattern", "RxSwift", "GraphQL", "XcodeGen", "Debugging (LLDB)", "Keychain Security", "Agile/Scrum"]
  },
  {
    level: "Proficient",
    items: ["Flutter", "Dart", "Objective-C", "Node.js", "Nest.js", "OpenAI API", "Integration Testing", "Localization", "Dark Mode", "Figma", "Postman"]
  }
];

export const education: Education[] = [
  {
    institution: "Pertamina University, Jakarta Indonesia",
    degree: "Bachelor of Computer Science",
    period: "Aug 2016 – Dec 2020",
    description: "Focused on software engineering, algorithms, and data structures.",
    icon: "🎓"
  },
  {
    institution: "Apple Developer Academy",
    degree: "iOS Development Program",
    period: "Feb 2020 – Dec 2021",
    description: "Intensive hands-on training in Swift, UIKit, and Apple's Human Interface Guidelines. Selected from competitive cohort with focus on app design, development, and App Store deployment.",
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
    description: "Selected as finalist in Toyota's innovation hackathon."
  }
];

export const personalInfo: PersonalInfo = {
  name: "Aries Dwi Prasetiyo",
  title: "Senior iOS Engineer",
  phone: "+62 812-3010-2023",
  email: "ariesdwiprasetiyo4@gmail.com",
  linkedin: "linkedin.com/in/aries-dwi-prasetiyo-39622412a",
  website: "ariesdwiprasetiyo.site",
  summary: "A Senior iOS Engineer with 5+ years of experience specializing in design system architecture and modularization strategies. Expert in Swift, SwiftUI, UIKit, and applying SOLID principles to create scalable, maintainable codebases. Implement modular architectures that enhance code reusability and team productivity. Skilled in collaborating cross-functionally with Product, Design, QA, and Backend teams to deliver high-quality iOS applications. Strong advocate for clean architecture, separation of concerns, and establishing best practices that elevate code quality across engineering teams."
};