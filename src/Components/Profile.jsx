import { useState } from "react"


function Profile() {
    const [Profile, setProfile] = useState({
        name: " ",
        age:"",
    })

    

        const handleChange = (e) => {
            const { name, value } = e.target;
            setProfile((prevProfile) => ({
                ...prevProfile,   // Spread the previous state
                [name]: value,    // Dynamically update the field
          
            }));
        };
        

  return (
    <div>
        <h1>User Profile</h1>
        <div> 
            <label>Name:
            <input type= "text" name="name" value={Profile.name} onChange={handleChange}/>
        </label>
        </div>
       
       <div>
        <label>age:
            <input type= "text" name="age" value={Profile.age} onChange={handleChange}/>
        </label>
        </div>
        


        <h1>Profiles</h1>
        <ul>
            <li>Name: {Profile.name}</li>
            <li>Age: {Profile.age}</li>
        </ul>

    </div>
  )
}

export default Profile