// components/About.tsx
import { personalInfo } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">About Me</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Experienced iOS Engineer Specializing in Scalable Applications
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Professional Journey</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                {personalInfo.summary}
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-8">
                Passionate about mentoring, modular design, and driving product impact through solid engineering practices. 
                I believe in writing clean, maintainable code and following SOLID principles to create exceptional user experiences.
              </p>

              {/* Core Values */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Core Principles</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs">⚡</span>
                    </div>
                    <span className="text-gray-700 text-sm">Performance Excellence</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs">🏗️</span>
                    </div>
                    <span className="text-gray-700 text-sm">Clean Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs">🔧</span>
                    </div>
                    <span className="text-gray-700 text-sm">SOLID Principles</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs">👥</span>
                    </div>
                    <span className="text-gray-700 text-sm">Team Mentoring</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Facts */}
            <div className="border border-gray-200 rounded-sm p-6 bg-white">
              <h4 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Professional Highlights</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold text-sm">4+</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Years Experience</p>
                    <p className="text-gray-600 text-xs">iOS & Mobile Development</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold text-sm">10+</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Projects Completed</p>
                    <p className="text-gray-600 text-xs">Across Various Industries</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold text-sm">0%</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Crash Rate</p>
                    <p className="text-gray-600 text-xs">In Production Apps</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold text-sm">60%</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Performance Gain</p>
                    <p className="text-gray-600 text-xs">Through Optimization</p>
                  </div>
                </div>
              </div>

              {/* Tech Expertise */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Core Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {['Swift', 'UIKit', 'Combine', 'MVVM', 'Clean Architecture', 'SOLID'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-16 border border-gray-200 rounded-sm p-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 text-center">Current Focus & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Flutter Development</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Expanding cross-platform expertise at Bank Rakyat Indonesia
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🏗️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Modular Architecture</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Building scalable and maintainable iOS codebases
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">👨‍💼</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technical Leadership</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Mentoring teams and driving engineering excellence
                </p>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="mt-12 text-center">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Development Methodology</h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {[
                'Test-Driven Development',
                'Agile Methodology', 
                'Code Reviews',
                'Continuous Integration',
                'Performance Monitoring',
                'User-Centric Design'
              ].map((method) => (
                <span 
                  key={method}
                  className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}