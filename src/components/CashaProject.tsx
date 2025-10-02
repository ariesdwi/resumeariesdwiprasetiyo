// components/CashaProject.tsx
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
import screenshot6 from "../public/images/6.png"

export default function CashaProject() {
  const [imageError, setImageError] = useState(false)

  const screenshots = [
    { src: screenshot1, alt: "Casha Transaction Input", description: "Chat-style transaction input" },
    { src: screenshot2, alt: "Casha Home Dashboard", description: "Financial overview dashboard" },
    { src: screenshot3, alt: "Casha Transactions", description: "Transaction history" },
    { src: screenshot4, alt: "Casha Reports", description: "Spending analytics" },
    { src: screenshot5, alt: "Casha Budget", description: "Budget management" },
    { src: screenshot6, alt: "Set Up Currency", description: "All Currency" },
  ]

  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Banner Section - Clean Layout Like Reference */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-md border border-gray-200">
                    {imageError ? (
                      <span className="text-gray-600 font-bold text-3xl">💰</span>
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
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Casha</h1>
                    <p className="text-gray-600 text-lg">Your money, organized automatically.</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Stay on top of weekly, monthly, yearly goals with smart expense tracking 
                  and beautiful analytics. Just chat or snap, Casha does the rest.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-gray-900 font-bold text-lg">SwiftUI</div>
                    <div className="text-gray-500 text-xs">Framework</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-gray-900 font-bold text-lg">AI-Powered</div>
                    <div className="text-gray-500 text-xs">Features</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-gray-900 font-bold text-lg">Free</div>
                    <div className="text-gray-500 text-xs">Download</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://apps.apple.com/app/casha-your-finance-companion"
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
                  {/* Main Screenshot Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-items-center">
                    {/* Row 1 */}
                    <div className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
                      <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                        <Image 
                          src={screenshots[0].src}
                          alt={screenshots[0].alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs mt-2 font-medium">New Transaction</p>
                    </div>
                    
                    <div className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
                      <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                        <Image 
                          src={screenshots[1].src}
                          alt={screenshots[1].alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs mt-2 font-medium">Dashboard</p>
                    </div>
                    
                    <div className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
                      <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                        <Image 
                          src={screenshots[2].src}
                          alt={screenshots[2].alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs mt-2 font-medium">Transactions</p>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
                      <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                        <Image 
                          src={screenshots[3].src}
                          alt={screenshots[3].alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs mt-2 font-medium">Reports</p>
                    </div>
                    
                    <div className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300 md:col-start-2">
                      <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                        <Image 
                          src={screenshots[4].src}
                          alt={screenshots[4].alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs mt-2 font-medium">Budget</p>
                    </div>

                      <div className="w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
                      <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden bg-white">
                        <Image 
                          src={screenshots[5].src}
                          alt={screenshots[5].alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs mt-2 font-medium">Budget</p>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm border border-white">
                      <p className="text-gray-700 text-sm font-medium">💬 Chat Input</p>
                    </div>
                    <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm border border-white">
                      <p className="text-gray-700 text-sm font-medium">📸 Snap Receipts</p>
                    </div>
                    <div className="p-3 bg-white/80 rounded-lg backdrop-blur-sm border border-white">
                      <p className="text-gray-700 text-sm font-medium">📊 Smart Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative: Single Row Layout */}
          {/*
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-16 p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image src={iconcasha} alt="Casha App Icon" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Casha</h1>
                    <p className="text-gray-600">Your money, organized automatically.</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">Stay on top of weekly, monthly, yearly goals.</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium">Download</a>
                  <a href="#" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium">Learn More</a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {screenshots.map((screenshot, index) => (
                    <div key={index} className="flex-shrink-0 w-48">
                      <div className="rounded-2xl shadow-lg border-4 border-white overflow-hidden">
                        <Image src={screenshot.src} alt={screenshot.alt} className="w-full h-auto" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🤖</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">AI-Powered</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Smart categorization from natural language and receipt images
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Smart Analytics</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beautiful charts and insights for informed financial decisions
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">💬</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Simple Input</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Chat-style natural language transaction input
              </p>
            </div>
          </div>

          {/* Rest of your existing content remains the same */}
          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-3">Project Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">The Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Build a modern, scalable personal finance app with AI-powered features while maintaining 
                    clean architecture, offline capability, and seamless user experience across different platforms.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">The Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Casha implements a modular monorepo architecture with SwiftUI, Clean Architecture, and AI integration. 
                    The app features real-time expense tracking, intelligent categorization, and beautiful data visualizations 
                    while maintaining strict separation of concerns and testability.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'AI-powered expense categorization from natural language',
                    'Receipt image processing to structured expense data',
                    'Real-time expense tracking with Core Data persistence',
                    'Offline-first architecture with CloudKit synchronization',
                    'Beautiful charts and spending insights using Swift Charts',
                    'Modular monorepo architecture for scalability',
                    'Biometric authentication and bank-level security',
                    'Cross-platform compatibility (iOS + iPAD)'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-sm transition-colors">
                      <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Demo */}
            <div id="demo">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-3">Application Demo</h2>
              <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-lg">
                <div className="aspect-video bg-gray-100">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Casha App Demo - Personal Finance iOS Application"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Demo Highlights</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>•</span>
                      <span>AI Expense Categorization</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>•</span>
                      <span>Receipt Image Processing</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>•</span>
                      <span>Real-time Charts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>•</span>
                      <span>Offline Functionality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The rest of your existing component remains unchanged */}
          {/* ... */}
        </div>
      </div>
    </section>
  )
}