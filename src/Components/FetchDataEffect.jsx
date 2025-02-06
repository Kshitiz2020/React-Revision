import { useState, useEffect } from "react";

function FetchDataEffect() {
    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos")
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setData(data);
                setLoading(false);

            } catch (error) {setError(error.message)
                setLoading(false);}
            
        }
        fetchData();
        },[])
           
  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.map((d)=>(
            <div key={d.id}>
                <h3>{d.title}</h3>
                <p>{d.completed ? "Completed" : "Not Completed"}</p>
            </div> 
        ))}
    </div>
  )
}

export default FetchDataEffect