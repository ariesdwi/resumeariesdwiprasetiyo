// components/Experience.tsx
import { experiences } from '../lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Professional Experience</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Career Progression in iOS and Mobile Development
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-gray-200 rounded-sm p-6 bg-white hover:border-gray-300 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  {/* Position and Company */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-gray-600 font-medium text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{exp.position}</h3>
                        <p className="text-gray-700 font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Period */}
                  <div className="lg:text-right">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="ml-14">
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Key Contributions</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="ml-14 mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {getTechnologiesByRole(exp.position).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Highlights */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="text-lg font-semibold text-center mb-8 text-gray-900">Career Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🏦</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Banking & Finance</h4>
                <p className="text-gray-600 text-xs">Flutter Development</p>
                <p className="text-gray-500 text-xs mt-1">Current Role</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🔐</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Digital Identity</h4>
                <p className="text-gray-600 text-xs">iOS Engineering</p>
                <p className="text-gray-500 text-xs mt-1">Privy ID</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Multiple Industries</h4>
                <p className="text-gray-600 text-xs">Diverse Experience</p>
                <p className="text-gray-500 text-xs mt-1">4+ Companies</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">👥</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Team Leadership</h4>
                <p className="text-gray-600 text-xs">3 Teams Mentored</p>
                <p className="text-gray-500 text-xs mt-1">Code Reviews</p>
              </div>
            </div>
          </div>

          {/* Technical Progression */}
          <div className="mt-12 border border-gray-200 rounded-sm p-8 bg-gray-50">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">Technical Progression</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Early Career Focus */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Foundation & Growth</h4>
                <div className="space-y-3">
                  {[
                    'MVC to MVVM Architecture Migration',
                    'Storyboard to Programmatic UI Transition',
                    'Basic to Advanced Swift Proficiency',
                    'Foundation in Clean Code Principles'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-xs">→</span>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Expertise */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Advanced Expertise</h4>
                <div className="space-y-3">
                  {[
                    'Clean Architecture Implementation',
                    'Combine & Reactive Programming',
                    'Modular App Development',
                    'Cross-Platform Flutter',
                    'Team Leadership & Mentoring'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-xs">★</span>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Impact */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-center mb-4 text-gray-900 text-sm uppercase tracking-wide">Industry Impact</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  '60% Performance Improvements',
                  '0% Crash Rate Maintenance',
                  '35% Faster Feature Delivery',
                  '50% Onboarding Time Reduction'
                ].map((impact, index) => (
                  <span 
                    key={index}
                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium"
                  >
                    {impact}
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

// Helper function for technologies by role
function getTechnologiesByRole(position: string) {
  if (position.includes('Flutter')) {
    return ['Flutter', 'Dart', 'Firebase', 'REST API', 'CI/CD']
  }
  if (position.includes('Privy')) {
    return ['Swift', 'Combine', 'MVVM', 'Modular Architecture', 'REST API']
  }
  if (position.includes('DIGIASIA')) {
    return ['Swift', 'UIKit', 'MVVM', 'Core Data', 'Push Notifications']
  }
  if (position.includes('BUANA')) {
    return ['Swift', 'UIKit', 'XIB', 'MVC/MVVM', 'REST API']
  }
  return ['Swift', 'iOS', 'Mobile Development']
}