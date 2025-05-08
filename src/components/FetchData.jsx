import React, { useEffect, useState } from 'react'

function FetchData() {
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data)=> {
            console.log(data);
            setData(data)})
        .catch((error)=> setError(error));
    }, []);
    if(error){
        return <p>Error: {error.message}</p>
    }
  return (
    <div>
        <h1>FetchData: </h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchData