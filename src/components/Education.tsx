// components/Education.tsx
import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Education & Training</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Academic Foundation
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start justify-between p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-xl shrink-0">
                     {edu.icon}
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                     <p className="text-gray-700 font-medium mb-2">{edu.degree}</p>
                     <p className="text-gray-600 text-sm max-w-xl">{edu.description}</p>
                  </div>
               </div>
               <div className="mt-4 md:mt-0 md:text-right shrink-0">
                  <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                     {edu.period}
                  </span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}