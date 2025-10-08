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
                {exp.technologies && (
                  <div className="ml-14 mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}