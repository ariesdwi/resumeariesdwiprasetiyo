import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Code2, Globe, Cpu, Smartphone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const experiences = [
    {
      company: "PT Bank Rakyat Indonesia (BRI)",
      role: "Mobile Platform Engineer",
      period: "June 2025 – Present | Jakarta, Indonesia",
      highlights: [
        "Leading mobile platform transformation for 140M+ customers",
        "Accelerated delivery speed by 35% through a cross-platform Mobile App Design System (Flutter & iOS)",
        "Established design system standards with a centralized component library portal (100+ variants)",
        "Tech Stack: Flutter, Swift, SwiftUI, Atomic Design, Clean Architecture, CI/CD"
      ]
    },
    {
      company: "PT Privy Identitas Digital",
      role: "iOS Engineer",
      period: "March 2023 – November 2024 | Jakarta, Indonesia",
      highlights: [
        "Delivered secure digital signature solutions for enterprise clients (500K+ docs monthly)",
        "Accelerated development by 45% using modular MVVM with Combine",
        "Reduced deployment time by 70% via Fastlane CI/CD integration",
        "Increased user retention by 25% through offline-first architecture with Core Data sync",
        "Improved incident response time by 60% with Firebase and Crashlytics",
        "Tech Stack: Swift, Combine, Modular Architecture, Fastlane, CoreData, SnapKit"
      ]
    },
    {
      company: "PT Digiasia Bios",
      role: "iOS Engineer",
      period: "March 2020 – March 2023 | Jakarta, Indonesia",
      highlights: [
        "Modernized payment ecosystem app serving 100K+ active users",
        "Increased performance by 40% refactoring MVC to MVVM (Crashes: 2.1% → 0.3%)",
        "Reduced onboarding time by 50% through comprehensive technical documentation",
        "Shipped 15+ major features: Payment integrations, KYC flows, Transaction history",
        "Tech Stack: Swift, MVVM, Programmatic UI, RESTful APIs"
      ]
    }
  ];

  const featuredProject = {
    title: "Casha – AI-Powered Personal Finance App",
    description: "Production-ready finance app showcasing advanced iOS capabilities and AI integration.",
    link: "https://apps.apple.com/app/casha",
    details: [
      "Architected Clean Architecture with modular monorepo (80% code reusability)",
      "Integrated AI categorization reducing manual entry by 70%",
      "Implemented offline-first data layer using Core Data sync"
    ],
    tech: ["Swift", "SwiftUI", "Combine", "Clean Architecture", "Core Data", "OpenAI API"]
  };

  const skills = {
    expert: ["Swift", "SwiftUI", "UIKit", "Clean Architecture", "MVVM", "Combine", "Modular Architecture", "CI/CD", "Firebase", "Unit Testing"],
    advanced: ["Concurrency (async/await)", "VIPER", "Coordinator Pattern", "RxSwift", "GraphQL", "XcodeGen", "Keychain Security"],
    proficient: ["Flutter", "Dart", "Objective-C", "Node.js", "Nest.js", "OpenAI API", "Agile/Scrum"]
  };

  return (
    <div className="portfolio">
      <nav className="glass" style={{ position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: 'auto', padding: '0.75rem 2rem', zIndex: 100, display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '32px', width: '32px', borderRadius: '8px' }} />
        <a href="#about" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>About</a>
        <a href="#experience" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Experience</a>
        <a href="#project" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Projects</a>
        <a href="#skills" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Skills</a>
      </nav>

      <section className="hero" id="about">
        <div className="hero-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">AVAILABLE FOR NEW CHALLENGES</span>
            <h1>Aries Dwi Prasetiyo</h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
               Senior iOS Engineer
            </p>
            <p>
              Specializing in design system architecture and modularization strategies. 
              Architecting scalable, maintainable mobile ecosystems with a focus on Clean Architecture.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="mailto:ariesdwiprasetiyo4@gmail.com" className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                <Mail size={18} /> Email
              </a>
              <a href="https://linkedin.com" className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://ariesdwiprasetiyo.site" className="glass" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                <Globe size={18} /> Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="exp-grid">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                className="exp-card glass"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="exp-header">
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="date">{exp.period}</span>
                </div>
                <div className="exp-desc">
                  <ul>
                    {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="project" style={{ background: 'rgba(99, 102, 241, 0.03)' }}>
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <motion.div 
            className="glass" 
            style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{featuredProject.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{featuredProject.description}</p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {featuredProject.details.map((d, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                    <Zap size={18} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '4px' }} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {featuredProject.tech.map(t => <span key={t} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>{t}</span>)}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
               <a href={featuredProject.link} className="glass" style={{ padding: '2rem', display: 'inline-block', textDecoration: 'none', color: 'inherit' }}>
                  <Smartphone size={64} style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
                  <p style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View on App Store <ExternalLink size={16}/></p>
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             <div className="glass" style={{ padding: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}><Cpu size={20}/> Expert</h3>
                <div className="skills-grid" style={{ justifyContent: 'flex-start' }}>
                  {skills.expert.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
             </div>
             <div className="glass" style={{ padding: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}><Code2 size={20}/> Advanced</h3>
                <div className="skills-grid" style={{ justifyContent: 'flex-start' }}>
                  {skills.advanced.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-muted)' }}>© 2026 Aries Dwi Prasetiyo. Built with React + Vite + Vanilla CSS.</p>
      </footer>
    </div>
  );
};

export default App;
