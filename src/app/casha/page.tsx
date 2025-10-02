// app/casha/page.tsx
import CashaProject from '@/components/CashaProject'

export const metadata = {
  title: 'Casha - Personal Finance App | Aries Dwi Prasetiyo',
  description: 'Casha - A modern iOS personal finance application built with SwiftUI and Clean Architecture by Aries Dwi Prasetiyo',
}

export default function CashaPage() {
  return (
    <div className="min-h-screen bg-white">
      <CashaProject />
    </div>
  )
}