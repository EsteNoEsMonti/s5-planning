import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'

const ProfileEdit = () => {
  // estados
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [error, setError] = useState('')

  // otros hooks
  const navigate = useNavigate()
  const { profiles, updateProfile } = useProfiles()
  const { id } = useParams()

  useEffect(() => {
    const currentProfile = profiles.find((profile) => profile.id === id)
    if (currentProfile) {
      setName(currentProfile.name)
      setAvatar(currentProfile.avatar)
    }
  }, [profiles, id])


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name.trim() === '' || avatar.trim() === '') {
      setError('Please fill in all fields')
      return
    }

    try {
      await updateProfile(id, { name, avatar })
      navigate(`/profiles/${id}`)
    } catch (err) {
      setError('Error updating profile')
      console.log('err -> ', err)
    }
  }

  return (
    <div className='min-h-screen bg-gray-800'>
      <h2 className='text-2xl font-bold text-center text-white mb-4'>
        Update Profile
      </h2>
      {error && (
        <p className='bg-red-500 text-white p-2 rounded mb-4'>
          {error}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4'
      >
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='p-2 rounded bg-gray-700 text-white'
        />
        <input
          type='text'
          placeholder='URL Avatar'
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className='p-2 rounded bg-gray-700 text-white'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200'
        >
          Update Profile
        </button>

        <button
          onClick={() => navigate('/profiles')}
          className='bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-200'
        >
          Back to Profiles
        </button>


      </form>
    </div>
  )
}

export default ProfileEdit