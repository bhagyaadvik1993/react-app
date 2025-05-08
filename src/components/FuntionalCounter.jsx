import React, { useState } from 'react'

function FuntionalCounter() {
    const[count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount((preCount) => preCount + 1);
    }
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={incrementCounter}>Increment</button>
    </div>
  )
}

export default FuntionalCounter
