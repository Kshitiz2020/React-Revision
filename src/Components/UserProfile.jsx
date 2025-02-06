import {useContext} from 'react'

import {userContext} from './UserContext'
function UserProfile() {

  const  {user}= useContext(userContext)
  return (
    <div>
<h1>User Profile</h1>
<h2>Name: {user.name}</h2>
<h2>Age: {user.age}</h2>
    </div>
  )
}

export default UserProfile