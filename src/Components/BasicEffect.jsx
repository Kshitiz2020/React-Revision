import {useEffect} from 'react'

function BasicEffect() {
    
    useEffect(() => {
        console.log("componetMountes")
    })
    return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect