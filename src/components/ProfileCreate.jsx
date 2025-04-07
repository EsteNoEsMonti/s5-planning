import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'

const ProfileCreate = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { createProfile } = useProfiles()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name.trim() === '' || avatar.trim() === '') {
      setError('Please fill in all fields')
      return
    }

    try {
      await createProfile({ name, avatar })
      navigate('/profiles')
    } catch (err) {
      setError('Error creating profile')
      console.log('err -> ', err)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-800'>
      <div className='max-w-md w-full p-6 rounded'>
        <h2 className='text-2xl font-bold text-center text-white mb-4'>
          Createa a new Profile
        </h2>
        {/* error  */}
        {error && (
          <p className="text-red-400 mb-2">{error}</p>
        )}
        {/* form  */}
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
            Create Profile
          </button>

          <button
            onClick={() => navigate('/profiles')}
            className='bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-200'
          >
            Back to Profiles
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileCreate