import { useState } from 'react'
import iconcasha from "../assets/images/appIcon.png"
import screenshot1 from "../assets/images/1.png"
import screenshot2 from "../assets/images/2.png"
import screenshot3 from "../assets/images/3.png"
import screenshot4 from "../assets/images/4.png"
import screenshot5 from "../assets/images/5.png"

export default function CashaOverview() {
  const [imageError, setImageError] = useState(false)

  const screenshots = [
    { src: screenshot1, alt: "Casha Transaction Input", description: "Chat-style transaction input" },
    { src: screenshot2, alt: "Casha Home Dashboard", description: "Financial overview dashboard" },
    { src: screenshot3, alt: "Casha Transactions", description: "Transaction history" },
    { src: screenshot4, alt: "Casha Reports", description: "Spending analytics" },
    { src: screenshot5, alt: "Casha Budget", description: "Budget management" }
  ]

  return (
    <section id="casha-overview" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Featured Project</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Latest Showcase - iOS Personal Finance
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Banner Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
                    {imageError ? (
                      <span className="text-gray-600 font-bold text-2xl">💰</span>
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
                    <h3 className="text-3xl font-bold text-gray-900">Casha</h3>
                    <p className="text-gray-600">AI-Powered Finance Management</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Architected and built production-ready finance app demonstrating modern iOS development with AI integration. 
                  Portfolio showcase for advanced iOS capabilities using SwiftUI and Clean Architecture.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    '80% Code Reusability',
                    '70% Less Manual Entry',
                    'Clean Architecture',
                    'AI-powered Categorization',
                    'Offline-first Data Layer',
                    'Modular Monorepo'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[10px]">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#casha-project-section"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm uppercase tracking-wide text-center shadow-md hover:shadow-lg"
                  >
                    View Technical Details
                  </a>
                  <a 
                    href="https://apps.apple.com/id/app/cashaapp/id6754607757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wide text-center"
                  >
                    View on App Store
                  </a>
                </div>
              </div>

              {/* Screenshots Banner */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Main iPhone Frame */}
                  <div className="relative mx-auto">
                    {/* iPhone Mockup */}
                    <div className="relative w-64 h-[550px] mx-auto">
                      {/* Screenshot Stack */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Background blurred screenshots */}
                        <div className="absolute -left-8 top-8 w-48 h-96 rounded-2xl shadow-2xl transform -rotate-6 opacity-80">
                          <img 
                            src={screenshots[0].src as any}
                            alt={screenshots[0].alt}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <div className="absolute -right-8 bottom-8 w-48 h-96 rounded-2xl shadow-2xl transform rotate-6 opacity-80">
                          <img 
                            src={screenshots[4].src as any}
                            alt={screenshots[4].alt}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        
                        {/* Main centered screenshot */}
                        <div className="relative w-56 h-[500px] rounded-[2rem] shadow-2xl border-[12px] border-gray-900 overflow-hidden z-10 bg-white">
                          <img 
                            src={screenshots[2].src as any}
                            alt={screenshots[2].alt}
                            className="w-full h-full object-cover"
                          />
                          {/* iPhone notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                        </div>
                      </div>
                    </div>
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