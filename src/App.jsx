import { ProfileProvider } from "./contexts/ProfileContext"
import AppRouter from "./Router/AppRouter"

function App() {
  return (
    <ProfileProvider>
      <AppRouter />
    </ProfileProvider>
  )
}

export default App
