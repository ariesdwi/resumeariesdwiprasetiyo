import { useState } from 'react'
import iconcasha from "../assets/images/appIcon.png"
import screenshot1 from "../assets/images/1.png"
import screenshot2 from "../assets/images/2.png"
import screenshot3 from "../assets/images/3.png"
import screenshot4 from "../assets/images/4.png"
import screenshot5 from "../assets/images/5.png"
import screenshot6 from "../assets/images/6.png"

export default function CashaProject() {
  const [imageError, setImageError] = useState(false)

  const screenshots = [
    { src: screenshot1, alt: "Casha Transaction Input", description: "Chat-style transaction input" },
    { src: screenshot2, alt: "Casha Home Dashboard", description: "Financial overview dashboard" },
    { src: screenshot3, alt: "Casha Transactions", description: "Transaction history" },
    { src: screenshot4, alt: "Casha Reports", description: "Spending analytics" },
    { src: screenshot5, alt: "Casha Budget", description: "Budget management" },
    { src: screenshot6, alt: "All Currency", description: "Worldwide currency" }
  ]

  const appStoreUrl = "https://apps.apple.com/id/app/cashaapp/id6754607757";

  return (
    <section id="casha-project-section" className="pt-8 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Back to Home */}
        <div className="mb-8">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </a>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Banner Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-md border border-gray-200">
                    {imageError ? (
                      <span className="text-gray-600 font-bold text-3xl">💰</span>
                    ) : (
                      <img 
                        src={iconcasha as any}
                        alt='Casha App Icon'
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Casha</h1>
                    <p className="text-gray-600 text-lg">AI-Powered Personal Finance App</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Architected and built production-ready finance app demonstrating modern iOS development with AI integration. 
                  Featuring scalable Clean Architecture with modular monorepo enabling 80% code reusability across iOS and iPad.
                </p>

                {/* Key Features */}
                <div className="space-y-4 mb-8">
                   <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                         <span className="text-white text-[10px]">✓</span>
                      </div>
                      <p className="text-gray-700 text-sm">AI-powered categorization reducing manual data entry by 70%</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                         <span className="text-white text-[10px]">✓</span>
                      </div>
                      <p className="text-gray-700 text-sm">Offline-first data layer using Core Data sync for 100% functionality</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                         <span className="text-white text-[10px]">✓</span>
                      </div>
                      <p className="text-gray-700 text-sm">Modular monorepo architecture for high scalability</p>
                   </div>
                </div>

                {/* Tech Stack Badge */}
                <div className="flex flex-wrap gap-2 mb-8">
                   {['Swift', 'SwiftUI', 'Combine', 'Clean Architecture', 'Core Data', 'CloudKit', 'Alamofire', 'AI API Integration'].map(tech => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                         {tech}
                      </span>
                   ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold text-sm uppercase tracking-wide text-center shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    <span className="text-xl">📱</span>
                    <span>Download on App Store</span>
                  </a>
                  <a 
                    href="#demo"
                    className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide text-center flex items-center justify-center gap-3"
                  >
                    <span className="text-xl">🎬</span>
                    <span>Watch Demo</span>
                  </a>
                </div>
              </div>

              {/* All Screenshots Displayed in Clean Grid */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-items-center">
                    {screenshots.map((screenshot, index) => (
                      <div key={index} className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
                        <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                          <img 
                            src={screenshot.src as any}
                            alt={screenshot.alt}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <p className="text-center text-gray-600 text-xs mt-2 font-medium">{screenshot.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More sections can follow... */}
          <div id="demo" className="mt-16 text-center">
             <h2 className="text-2xl font-bold mb-8 text-gray-900">Watch it in Action</h2>
             <div className="max-w-4xl mx-auto aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/pVO5JuFUmlI"
                  title="Casha App Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}