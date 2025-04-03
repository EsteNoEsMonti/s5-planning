import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext()

export const useProfiles = () => useContext(ProfileContext)

const API = "https://67e8bd1920e3af747c41de76.mockapi.io/api/v1/profiles"

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchProfiles = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(API)
      setProfiles(data)
    } catch (error) {
      console.error("Error al hacer el fetch a profiles", error)
    } finally {
      setLoading(false)
    }
  }

  // POST fn
  const createProfile = async (profile) => {
    const { data } = await axios.post(API, profile)
    console.log('data -> ', data)
    setProfiles((prev) => [...prev, data])
  }

  // PUT fn
  const updateProfile = async (id, updatedData) => {
    const { data } = await axios.put(`${API}/${id}`, updatedData)
    setProfiles((prev) =>
      prev.map((profile) => (profile.id === id ? data : profile))
    )
  }

  // DELETE fn

  useEffect(() => {
    fetchProfiles()
  }, [])

  return (
    <ProfileContext.Provider value={{ profiles, loading, createProfile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}