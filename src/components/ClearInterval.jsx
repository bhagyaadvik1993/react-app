import React, { useState, useEffect } from 'react'

function ClearInterval() {
    const[seconds, setSeconds] = useState(0);

    useEffect( () =>{
        const interval = setInterval(() => {
            setSeconds((prevCount) => prevCount + 1)
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
  return (
    <div>
        <p>Seconds: {seconds}</p>
    </div>
  )
}

export default ClearInterval