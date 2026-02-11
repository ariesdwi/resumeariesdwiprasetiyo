import React from 'react'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import CashaOverview from '@/components/CashaOverview'
import CashaProject from '@/components/CashaProject'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Header from '@/components/layout/Header'
import './index.css'

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <CashaOverview />
        <div id="casha-project-section">
          <CashaProject />
        </div>
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aries Dwi Prasetiyo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
