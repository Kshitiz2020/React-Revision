import {useEffect,useContext} from 'react'
import {FunctionContext} from '../App'

function BasicEffect() {
    
  const handleClick = useContext(FunctionContext)
    useEffect(() => {
        console.log("componetMountes")
    })
    return (
    <div>BasicEffect
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default BasicEffect