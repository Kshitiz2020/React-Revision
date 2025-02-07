
import UserProfile from './Components/UserProfile'
import {UserContext} from './Components/UserContext'
import UpdatedUser from './Components/UpdatedUser'


function App() {
  return (
    <UserContext>
      <UserProfile />
      <UpdatedUser />
    </UserContext>
  )
}

export default App