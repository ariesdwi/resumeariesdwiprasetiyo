// components/Skills.tsx
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Technical Expertise</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Technologies and Methodologies for iOS Development
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skillCategory, index) => (
              <div key={index} className="border border-gray-200 rounded-sm p-6 bg-white hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">{skillCategory.category}</h3>
                <div className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 py-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Proficiency Levels */}
          <div className="border border-gray-200 rounded-sm p-8 bg-gray-50 mb-12">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-900">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">iOS Development</h4>
                <p className="text-gray-600 text-xs">Swift, UIKit, SwiftUI</p>
                <div className="mt-2 text-xs text-gray-500">Expert</div>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🏗️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Architecture</h4>
                <p className="text-gray-600 text-xs">Clean, MVVM, SOLID</p>
                <div className="mt-2 text-xs text-gray-500">Expert</div>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Performance</h4>
                <p className="text-gray-600 text-xs">Optimization, Debugging</p>
                <div className="mt-2 text-xs text-gray-500">Advanced</div>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">👥</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Leadership</h4>
                <p className="text-gray-600 text-xs">Mentoring, Code Reviews</p>
                <div className="mt-2 text-xs text-gray-500">Advanced</div>
              </div>
            </div>
          </div>

          {/* Development Methodologies */}
          <div className="border border-gray-200 rounded-sm p-8 bg-white mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">Development Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Engineering Principles</h4>
                <div className="space-y-3">
                  {[
                    'Test-Driven Development (TDD)',
                    'Continuous Integration/Deployment',
                    'Agile & Scrum Methodologies',
                    'Code Review Standards',
                    'Performance Monitoring',
                    'Security Best Practices'
                  ].map((principle, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Xcode', 'Git', 'Fastlane', 'Firebase', 
                    'CocoaPods', 'SPM', 'JIRA', 'Slack',
                    'Figma', 'Postman', 'Charles Proxy'
                  ].map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Flutter', 'Dart', 'Server-Side Swift', 
                    'Machine Learning', 'AR/VR Development'
                  ].map((learning, index) => (
                    <span 
                      key={index}
                      className="border border-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {learning}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="border border-gray-200 rounded-sm p-8 bg-white">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-gray-50">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-sm">ID</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Bahasa Indonesia</h4>
                <p className="text-gray-600 text-xs">Native Proficiency</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-300 rounded-full h-1.5">
                    <div className="bg-gray-700 h-1.5 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-gray-50">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-sm">EN</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">English</h4>
                <p className="text-gray-600 text-xs">Professional Fluency</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-300 rounded-full h-1.5">
                    <div className="bg-gray-700 h-1.5 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Communication */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-center mb-4 text-gray-900 text-sm uppercase tracking-wide">Professional Communication</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Technical Documentation',
                  'Team Collaboration',
                  'Client Presentations',
                  'Code Review Feedback',
                  'Project Planning',
                  'Mentoring & Training'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}