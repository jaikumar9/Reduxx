import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRef } from "react";
import './App.css'

function App() {
  const countRef = useRef(0);
  const increment = () => {
    countRef.current += 1;
    console.log(`Current count: ${countRef.current}`);
  };
  return (
    <>

    <div>
      <button onClick={increment}>Increment</button>
    </div>

    </>
  )
}

export default App
