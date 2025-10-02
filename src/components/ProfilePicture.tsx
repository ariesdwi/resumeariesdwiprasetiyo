// components/ProfilePicture.tsx
'use client'

import { personalInfo } from '@/lib/data'
import { useState } from 'react'
import Image from "next/image";
import profile from "../public/images/profile.png"


export default function ProfilePicture() {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-3xl font-bold border-2 border-gray-300">
        {personalInfo.name.split(' ').map(n => n[0]).join('')}
      </div>
    )
  }

  return (
    <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-8 overflow-hidden border-2 border-gray-300">
      <Image 
        src={profile}
        alt={personalInfo.name}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

