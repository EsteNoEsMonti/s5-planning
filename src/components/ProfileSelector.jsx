// components/ProfileSelector.jsx
import React from 'react'
import ProfileCard from './ProfileCard.jsx'
import { useProfiles } from '../contexts/ProfileContext.jsx'

const ProfileSelector = () => {
  const { profiles } = useProfiles()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black/90 text-white'>

      <h1 className='text-2xl font-bold mb-6' >¿Quién está viendo ahora?</h1>
      {/* contededor de cards */}
      <div className='flex flex-wrap gap-6 justify-center mx-10'>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} name={profile.name} avatar={profile.avatar} />
        ))}

        {/* add profile component */}
        <div className='flex flex-col items-center cursor-pointer'>
          <div className='w-24 h-24 flex items-center justify-center bg-gray-700 rounded-lg shadow-md'>
            <span className='text-4xl font-bold' >+</span>
          </div>
          <p className='mt-2 text-sm font-semibold'>Agregar perfil</p>
        </div>

      </div>

      <button className='mt-8 px-6 py-2 font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg'>
        Administrar perfiles
      </button>

    </div>
  )
}

export default ProfileSelector