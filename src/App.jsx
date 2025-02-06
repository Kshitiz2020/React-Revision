
import UserProfile from './Components/UserProfile'
import {UserContext} from './Components/UserContext'

function App() {
  return (
    <UserContext>
      <UserProfile />
    </UserContext>
  )
}

export default App