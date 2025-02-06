import {createContext,useState} from 'react'


  const userContext = createContext(); // Create a context object
function UserContext({children}) {

  const [user, setUser] = useState({name: "John Doe", age: 30}); // Create a state variable

  const updateUser = (name, age) => { // Create a function to update the user state variable
    setUser({name, age});
  };
  return (
    <userContext.Provider value={{user, updateUser}}>
      {children}
      </userContext.Provider>
  )
}

export  {UserContext, userContext}; // Export the context object and the context provider