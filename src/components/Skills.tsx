// components/Skills.tsx
import { skillGroups } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Technical Skills</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Expertise & Proficiency Levels
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    group.level === 'Expert' ? 'bg-gray-900 text-white' : 
                    group.level === 'Advanced' ? 'bg-gray-200 text-gray-900' : 
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <span className="text-xs font-bold uppercase">{group.level[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{group.level}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Methodologies & Communication */}
          <div className="mt-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Core Competencies</h4>
                   <ul className="grid grid-cols-1 gap-2">
                      {['Platform Engineering', 'CI/CD Automation', 'System Architecture', 'Technical Mentorship'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                           <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div>
                   <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Languages</h4>
                   <div className="flex gap-6">
                      <div>
                         <p className="text-sm font-bold text-gray-900">Bahasa Indonesia</p>
                         <p className="text-xs text-gray-500">Native</p>
                      </div>
                      <div>
                         <p className="text-sm font-bold text-gray-900">English</p>
                         <p className="text-xs text-gray-500">Professional Fluency</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}