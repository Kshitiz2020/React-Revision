import { useState} from 'react'

function ShoppingList() {
const [items, setItems] = useState([])
    const[name, setName] = useState(" ")
    const[quantity, setQuantity] = useState(" ")


    const handleSubmit = (e) => {e.preventDefault()  

        if(!name || !quantity) return;

        const newItem = {name:name, quantity:quantity}
        setItems(PreValue => [...PreValue, newItem])
        setName('')
        setQuantity('')
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>   
            <h1>Shopping List</h1> 
            <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Enter quantity'/>
            <button>Add</button>

            {items.map((item,index)=>
            <li key={index}>Name:{item.name} - Quantity:{item.quantity}</li>)}
             </form>
    </div>
  )
}

export default ShoppingList