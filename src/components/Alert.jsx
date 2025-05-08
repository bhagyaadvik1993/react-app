import React from 'react'

function Alert() {
    const onClick = () => {
        alert('Button Cicked');
    };
  return (
    <div>
        <button onClick={onClick}>Click Me!</button>
    </div>
  )
}

export default Alert