import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">HOME</h1>
      <Link to="/about" className='text-yellow-300 hover:underline mb-2' >
        Go to /about
      </Link>

      <button
        onClick={() => navigate('/about')}
        className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
      >
        Navigate to /about
      </button>

      <button
        onClick={() => navigate('/media')}
        className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
      >
        Navigate to /media
      </button>

      <button
        onClick={() => navigate('/nested-route')}
        className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
      >
        Navigate to /nested-route (Dashboard)
      </button>

      <button
        onClick={() => navigate('/not-found')}
        className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
      >
        Navigate to /not-found
      </button>
      
      <button
        onClick={() => navigate('/not-found')}
        className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
      >
        Navigate to /not-found
      </button>
      <button
        onClick={() => navigate('/profiles')}
        className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
      >
        Navigate to /profiles
      </button>

    </div>
  )
}

export default Home