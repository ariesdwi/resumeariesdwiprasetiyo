// components/CashaOverview.tsx
'use client'

import Link from 'next/link'
import Image from "next/image"
import { useState } from 'react'

// Import your Casha app icon and screenshots
import iconcasha from "../public/images/appIcon.png"
import screenshot1 from "../public/images/1.png"
import screenshot2 from "../public/images/2.png"
import screenshot3 from "../public/images/3.png"
import screenshot4 from "../public/images/4.png"
import screenshot5 from "../public/images/5.png"

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
          Current Focus - Casha iOS Application
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
                      <Image 
                        src={iconcasha}
                        alt='Casha App Icon'
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Casha</h3>
                    <p className="text-gray-600">Smart Personal Finance Tracking</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  A modern iOS application that transforms how you manage money. Track expenses, 
                  set budgets, and gain financial insights with an intuitive, beautiful interface 
                  built using SwiftUI and Clean Architecture.
                </p>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Natural language transactions',
                    'Smart budget tracking',
                    'Beautiful analytics',
                    'Real-time insights',
                    'Secure & private',
                    'Goal setting'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/casha"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm uppercase tracking-wide text-center shadow-md hover:shadow-lg"
                  >
                    View Project Details
                  </Link>
                  <a 
                    href="https://apps.apple.com/app/casha-your-finance-companion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wide text-center"
                  >
                    Download on App Store
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
                          <Image 
                            src={screenshots[0].src}
                            alt={screenshots[0].alt}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <div className="absolute -right-8 bottom-8 w-48 h-96 rounded-2xl shadow-2xl transform rotate-6 opacity-80">
                          <Image 
                            src={screenshots[4].src}
                            alt={screenshots[4].alt}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        
                        {/* Main centered screenshot */}
                        <div className="relative w-56 h-[500px] rounded-[2rem] shadow-2xl border-[12px] border-gray-900 overflow-hidden z-10">
                          <Image 
                            src={screenshots[2].src}
                            alt={screenshots[2].alt}
                            className="w-full h-full object-cover"
                          />
                          {/* iPhone notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot Indicators */}
                  <div className="flex justify-center gap-3 mt-8">
                    {screenshots.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === 2 ? 'bg-gray-900' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Store Style Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Smart Analytics</h4>
              <p className="text-gray-600 text-sm">Beautiful reports and spending insights</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Easy Budgeting</h4>
              <p className="text-gray-600 text-sm">Set and track financial goals effortlessly</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">💬</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Simple Input</h4>
              <p className="text-gray-600 text-sm">Chat-style natural language transactions</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">SwiftUI</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Modern Framework</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">Clean Arch</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Scalable Architecture</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">iOS 14+</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Platform Support</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-2">Free</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">No Cost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}