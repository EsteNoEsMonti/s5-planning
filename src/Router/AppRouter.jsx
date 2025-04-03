import React from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import ProfileSelector from '../components/ProfileSelector'
import ProfileDetail from '../components/ProfileDetail'
import ProfileCreate from '../components/ProfileCreate'
import ProfileEdit from '../components/ProfileEdit'

const AppRouter = () => {
  const navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/media' element={
          <>
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300"
            >
              navigate to about
            </button>

          </>
        } />
        <Route path='/about' element={<About />} />

        {/* rutas anidadas  */}
        <Route path="/nested-route" element={<Dashboard />}>
          <Route path="users" element={<p className="text-white">Users 🧑🏻‍💻</p>} />
          <Route path="settings" element={<p className="text-white">Settings ⚙️</p>} />
        </Route>

        {/* rutas dinámicas  */}
        <Route path='/profiles' element={<ProfileSelector />} />
        <Route path='/profiles/:id' element={<ProfileDetail />} />
        <Route path='/profiles/create-profile' element={<ProfileCreate />} />
        <Route path='/profiles/:id/edit' element={<ProfileEdit />} />

        {/* ruta no encontrada  - path="*" */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default AppRouter