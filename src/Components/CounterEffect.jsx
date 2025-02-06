import { useState, useEffect } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  function countHandler() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Logs the count whenever it updates
 return (
    <div> 
      <p>Count: {count}</p>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
}

export default CounterEffect;
