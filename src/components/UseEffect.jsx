import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`Value of counter is: ${count}`);
    },[count])
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect