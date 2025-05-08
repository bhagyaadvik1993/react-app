import React, { useContext } from 'react';
import MyContext from '../App'

function ComponentA() {
    const { theme, toggleTheme } = useContext(MyContext);
  return (
    <div>
        <p>Theme: {theme}</p>
        <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )
}

export default ComponentA