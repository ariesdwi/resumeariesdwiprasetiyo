// components/Hero.tsx
import { personalInfo } from '@/lib/data'
import ProfilePicture from './ProfilePicture'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <ProfilePicture />
          
          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="text-gray-700">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-lg md:text-xl text-gray-600 mb-6 font-medium tracking-wide uppercase">
            Senior iOS Engineer
          </h2>
          
          {/* Summary */}
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed text-base">
            {personalInfo.summary}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <a 
              href="#contact" 
              className="bg-gray-900 text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-sm hover:bg-gray-50 transition-colors font-medium text-sm uppercase tracking-wide"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              className="text-gray-600 hover:text-gray-900 px-6 py-3 transition-colors font-medium text-sm uppercase tracking-wide flex items-center gap-2"
            >
              Download CV
              <span className="text-base">↓</span>
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-gray-600 mb-12">
            <div className="flex items-center gap-2 justify-center text-sm">
              <span className="text-gray-400">📱</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-gray-900 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center text-sm">
              <span className="text-gray-400">✉️</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-gray-900 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center text-sm">
              <span className="text-gray-400">💼</span>
              <a 
                href={`https://${personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-b border-gray-200 py-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">4+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">60%</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Performance Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">0%</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Crash Rate</div>
              </div>
            </div>
          </div>

          {/* Expertise Highlights */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Swift', 'Clean Architecture', 'iOS Development', 'SOLID Principles', 'Flutter', 'Team Leadership'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium uppercase tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16">
            <a href="#about" className="text-gray-400 hover:text-gray-600 transition-colors group">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-700">Explore More</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}