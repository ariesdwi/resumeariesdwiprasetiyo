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
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium tracking-wide uppercase">
            {personalInfo.title}
          </h2>
          
          {/* Summary */}
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed text-lg">
            {personalInfo.summary}
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-gray-600 mb-12">
            <div className="flex items-center gap-2 justify-center text-sm font-medium">
              <span className="text-gray-400">📱</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-gray-900 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center text-sm font-medium">
              <span className="text-gray-400">✉️</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-gray-900 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center text-sm font-medium">
              <span className="text-gray-400">🌐</span>
              <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                {personalInfo.website}
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center text-sm font-medium">
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

          {/* Scroll indicator */}
          <div className="mt-8">
            <a href="#casha-overview" className="text-gray-400 hover:text-gray-600 transition-colors group">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-700 font-bold">Latest Project</span>
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