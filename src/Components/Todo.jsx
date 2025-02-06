import React, { useEffect, useState } from "react";

function Todo() {
  const [data, setData] = useState([]); // ✅ Ensuring initial state is an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json); // ✅ json is an array, so data stays an array
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // ✅ Show loading message while fetching data
  if (loading) return <p>Loading...</p>;

  // ✅ Show error message if fetching fails
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
      {
          data.map((item) => <li key={item.id}>{item.title}</li>)}
      
      </ul>
    </div>
  );
}

export default Todo;