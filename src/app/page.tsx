// app/page.tsx
import Hero from '@/components/Hero'

import Experience from '@/components/Experience'
import CashaOverview from '@/components/CashaOverview'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'


export default function Home() {
  return (
    <div>
      <Hero />
       <CashaOverview />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
    </div>
  )
}