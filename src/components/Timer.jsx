import React, { useState } from 'react'

function Timer() {
    const[count, setCount] = useState(0);
    const timeRef = useRef(null);
    const startTime = () => {
        if(!timeRef.current){
           timeRef.current= setInterval( () => {
            setCount((prevCount) => prevCount + 1);
           }, 1000); 
        }
    };
    const stopTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    };
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={startTime}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer