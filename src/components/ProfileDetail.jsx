import React from 'react'
import { useParams } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'

const ProfileDetail = () => {
  console.log(useParams())
  const { id } = useParams()
  const { profiles } = useProfiles()

  const profile = profiles.find((p) => p.id === id)

  if (!profile) return <p>Perfil no encontrado 😿</p>

  return (
    <div className='flex'>
      <p>{profile.id}</p>
      <p>{profile.name}</p>
    </div>
  )
}

export default ProfileDetail