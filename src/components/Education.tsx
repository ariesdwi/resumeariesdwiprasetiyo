// components/Education.tsx
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Education & Training</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Academic Foundation and Professional Development
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border border-gray-200 rounded-sm p-6 bg-white hover:border-gray-300 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Institution and Degree */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-gray-600 font-medium text-sm">
                          {getEducationIcon(edu.institution)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.institution}</h3>
                        <p className="text-gray-700 font-medium text-sm mb-2">{edu.degree}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                    
                    {/* Skills Gained */}
                    <div className="ml-14">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Key Learnings</h4>
                      <div className="flex flex-wrap gap-2">
                        {getSkillsByEducation(edu.institution).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Period */}
                  <div className="lg:text-right">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Highlights */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="text-lg font-semibold text-center mb-8 text-gray-900">Educational Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🎓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Bachelor's Degree</h4>
                <p className="text-gray-600 text-xs">Computer Science Foundation</p>
                <p className="text-gray-500 text-xs mt-1">Pertamina University</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Apple Certified</h4>
                <p className="text-gray-600 text-xs">iOS Development Specialist</p>
                <p className="text-gray-500 text-xs mt-1">Developer Academy</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">💼</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">4+ Years</h4>
                <p className="text-gray-600 text-xs">Professional Experience</p>
                <p className="text-gray-500 text-xs mt-1">Industry Practice</p>
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="mt-12 border border-gray-200 rounded-sm p-8 bg-gray-50">
            <h3 className="text-lg font-semibold text-center mb-6 text-gray-900">Continuous Professional Development</h3>
            <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              Committed to staying current with evolving technologies and best practices in mobile development 
              through ongoing learning and professional growth.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { name: 'SwiftUI', level: 'Advanced' },
                { name: 'Combine', level: 'Proficient' },
                { name: 'Clean Arch', level: 'Expert' },
                { name: 'Flutter', level: 'Learning' }
              ].map((tech, index) => (
                <div key={index} className="text-center p-3 border border-gray-200 rounded-sm bg-white">
                  <div className="text-gray-900 font-medium text-sm mb-1">{tech.name}</div>
                  <div className="text-gray-600 text-xs">{tech.level}</div>
                </div>
              ))}
            </div>

            {/* Current Focus Areas */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-center mb-4 text-gray-900 text-sm uppercase tracking-wide">Current Learning Focus</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {['Advanced Swift Concurrency', 'Flutter Architecture', 'Performance Optimization', 'CI/CD Pipelines'].map((topic) => (
                  <span 
                    key={topic}
                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Professional Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Apple Developer Academy Alumni',
                'iOS Development Specialist',
                'Clean Architecture Practitioner',
                'Agile Methodology Certified'
              ].map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-sm px-4 py-2 bg-white">
                  <span className="text-gray-700 text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function for education icons
function getEducationIcon(institution: string) {
  if (institution.includes('Pertamina')) return 'UNI'
  if (institution.includes('Apple')) return 'iOS'
  return 'EDU'
}

// Helper function for skills gained from each education
function getSkillsByEducation(institution: string) {
  if (institution.includes('Pertamina')) {
    return ['Algorithms', 'Data Structures', 'Software Engineering', 'Computer Science', 'OOP']
  }
  if (institution.includes('Apple')) {
    return ['Swift', 'UIKit', 'iOS Development', 'Xcode', 'App Store', 'Mobile Design']
  }
  return []
}