import { createContext } from "react";
import BasicEffect from "./Components/BasicEffect";

import FetchDataEffect from "./Components/FetchDataEffect";

export const FunctionContext = createContext();
function App() {



  const handleClick = ()=>{
    console.log("clickedCOntext");
  }
  return (
    <>
   <FunctionContext.Provider value={handleClick}>
     <BasicEffect />
  
     <FetchDataEffect />
    </FunctionContext.Provider >
    </>
  );
}

export default App;
