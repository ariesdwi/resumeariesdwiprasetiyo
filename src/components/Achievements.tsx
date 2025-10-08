// components/Achievements.tsx
import { achievements } from '@/lib/data'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Achievements & Recognition</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Awards and Professional Milestones
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Competition Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 rounded-sm p-6 bg-white hover:border-gray-300 transition-colors">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-600 font-medium text-sm">
                      {getAchievementIcon(achievement.position)}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                    {achievement.title}
                  </h3>
                  <span className={`inline-block ${getPositionColor(achievement.position)} px-2 py-1 rounded text-xs font-medium uppercase tracking-wide`}>
                    {achievement.position}
                  </span>
                </div>
                <p className="text-gray-500 text-center mb-3 text-xs font-medium">
                  {achievement.date}
                </p>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Milestones */}
          <div className="border border-gray-200 rounded-sm p-8 mb-12 bg-gray-50">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-900">Professional Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">60% Performance Gain</h4>
                <p className="text-gray-600 text-xs">Architecture Optimization</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">35% Faster Delivery</h4>
                <p className="text-gray-600 text-xs">Modular Components</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">0% Crash Rate</h4>
                <p className="text-gray-600 text-xs">Production Applications</p>
              </div>
             
              <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm"> App Store Release</h4>
                <p className="text-gray-600 text-xs">Casha Finance App</p>
              </div>
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="border border-gray-200 rounded-sm p-8 bg-white">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">Technical Excellence</h3>
            <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              Consistently delivering high-quality iOS applications with performance optimizations, 
              achieving significant improvements and maintaining exceptional stability across multiple 
              production environments and projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Key Strengths */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Core Strengths</h4>
                <div className="space-y-3">
                  {[
                    'Clean Architecture Implementation',
                    'Performance Optimization',
                    'Code Quality & Standards',
                    'Team Leadership & Mentoring',
                    'Agile Development Practices',
                    'Cross-Platform Development',
                    'Platform Engineering'
                  ].map((strength, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">Development Methodologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'MVVM Architecture',
                    'SOLID Principles',
                    'TDD Approach',
                    'CI/CD Pipelines',
                    'Code Reviews',
                    'Agile Scrum',
                    'Modular Development'
                  ].map((method, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Recognition */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-center mb-4 text-gray-900 text-sm uppercase tracking-wide">Industry Impact</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Banking & Finance',
                  'Digital Identity',
                  'FinTech',
                  'Enterprise Solutions',
                  'Platform Engineering'
                ].map((industry, index) => (
                  <span 
                    key={index}
                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Career Progression */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Career Progression</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {[
                { year: '2020', role: 'iOS Engineer', company: 'PT BUANA VARIA' },
                { year: '2021', role: 'iOS Engineer', company: 'PT DIGIASIA BIOS' },
                { year: '2023', role: 'iOS Engineer', company: 'PT PRIVY ID' },
                { year: '2025', role: 'Mobile Platform Engineer', company: 'BANK RAKYAT' }
              ].map((step, index) => (
                <div key={index} className="border border-gray-200 rounded-sm px-4 py-3 bg-white text-center min-w-[140px]">
                  <div className="text-gray-900 font-bold text-sm mb-1">{step.year}</div>
                  <div className="text-gray-700 text-xs mb-1">{step.role}</div>
                  <div className="text-gray-500 text-xs">{step.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function for achievement icons
function getAchievementIcon(position: string) {
  if (position.includes('RUNNER UP')) return '2nd'
  if (position.includes('FINALIST')) return 'Final'
  if (position.includes('WINNER')) return '1st'
  return 'Award'
}

// Helper function for position badge colors
function getPositionColor(position: string) {
  if (position.includes('RUNNER UP')) return 'bg-gray-100 text-gray-700 border border-gray-300'
  if (position.includes('FINALIST')) return 'bg-gray-100 text-gray-700 border border-gray-300'
  if (position.includes('WINNER')) return 'bg-gray-100 text-gray-700 border border-gray-300'
  return 'bg-gray-100 text-gray-700 border border-gray-300'
}