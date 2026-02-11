import { useState } from 'react';
import profilePic from "../assets/images/profile.png";

export default function ProfilePicture() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <span className="text-4xl">👨‍💻</span>
          </div>
        ) : (
          <img 
            src={profilePic as any} 
            alt="Aries Dwi Prasetiyo"
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
    </div>
  );
}
