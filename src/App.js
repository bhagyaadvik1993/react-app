import './App.css';
import Counter from './components/Counter';
import FuntionalCounter from './components/FuntionalCounter';
import Alert from './components/Alert';
import PreventDefault from './components/PreventDefault';
import UseEffect from './components/UseEffect';
import ClearInterval from './components/ClearInterval';
import FetchData from './components/FetchData';
//import { useState } from 'react';
import ComponentA from './components/ComponentA';
import React, { useState } from 'react';
import Form from './components/Reducer/Form';
import Parent from './components/SiblingCommunication/Parent';

const MyContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? ' dark': 'light'));
  }
  return (
    <div className="App">
      {/* <MyContext.Provider value={{theme, toggleTheme}}>
        <ComponentA />
      </MyContext.Provider> */}
      <Counter />
      <FuntionalCounter />
      <Alert />
      <PreventDefault />
      <UseEffect />
      <ClearInterval />
      <FetchData />
      <Form />
      <Parent />
    </div>
  );
}

export default App;
