import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Sobre nosotros</h1>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300"
      >
        Back to Home
      </button>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300"
      >
        Back to Ruta Anterior
      </button>
    </div>
  )
}

export default About