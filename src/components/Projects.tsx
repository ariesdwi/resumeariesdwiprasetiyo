// components/Projects.tsx
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Project Portfolio</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          iOS Applications and Mobile Solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-sm p-6 bg-white hover:border-gray-300 transition-colors">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-medium text-sm">
                      {getProjectIcon(project.title)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      iOS Application
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.features && (
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                {project.appStoreUrl && (
                  <a 
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-2 rounded-sm hover:bg-gray-800 transition-colors font-medium text-xs uppercase tracking-wide"
                  >
                    App Store
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 rounded-sm hover:bg-gray-50 transition-colors font-medium text-xs uppercase tracking-wide"
                  >
                    Source Code
                  </a>
                )}
                {!project.appStoreUrl && !project.githubUrl && (
                  <span className="flex-1 bg-gray-100 text-gray-500 text-center py-2 rounded-sm font-medium text-xs uppercase tracking-wide">
                    In Development
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 border border-gray-200 rounded-sm p-8 bg-gray-50">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-900">Project Impact & Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="text-2xl font-bold text-gray-900 mb-1">4+</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Projects</div>
              <div className="text-gray-500 text-xs mt-1">Completed</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="text-2xl font-bold text-gray-900 mb-1">60%</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Performance</div>
              <div className="text-gray-500 text-xs mt-1">Improvement</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="text-2xl font-bold text-gray-900 mb-1">0%</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Crash Rate</div>
              <div className="text-gray-500 text-xs mt-1">In Production</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="text-2xl font-bold text-gray-900 mb-1">4</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Industries</div>
              <div className="text-gray-500 text-xs mt-1">Served</div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-center mb-6 text-gray-900">Development Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 text-sm">🏗️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Clean Architecture</h4>
              <p className="text-gray-600 text-xs">Modular, scalable codebases following SOLID principles</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 text-sm">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Performance Focus</h4>
              <p className="text-gray-600 text-xs">Optimized for speed, efficiency, and user experience</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-sm bg-white">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gray-600 text-sm">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Quality Assurance</h4>
              <p className="text-gray-600 text-xs">Rigorous testing and code review processes</p>
            </div>
          </div>
        </div>

        {/* Industry Experience */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-6 text-gray-900">Industry Experience</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              'Traditional Sports & Events',
              'Education & Public Speaking', 
              'Corporate Recognition',
              'Inventory Management',
              'Banking & Finance',
              'Digital Identity'
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
    </section>
  )
}

// Helper function for project icons
function getProjectIcon(projectTitle: string) {
  const icons: { [key: string]: string } = {
    'Karapan Sapi': '🐂',
    'Spikap': '🎤',
    'Awaro': '🏆',
    'Produku': '📦'
  }
  
  for (const [key, icon] of Object.entries(icons)) {
    if (projectTitle.includes(key)) {
      return icon
    }
  }
  
  return '📱'
}