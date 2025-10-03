import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)
  
  // let counter = 15
  
  const addValue = () =>{
    counter = counter + 1
    setCounter(counter)
    console.log("clicked" , counter);
    
  }
  
  const removeVal = () => {
    counter = counter - 1
    setCounter(counter)
    console.log("clicked",counter);
  }


  return (
    <>
     <h1>Chai or code with hooks</h1>
     <br />
     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <br />
     <button onClick={removeVal}>Remove Value {counter}</button>
    </>
  )
}

export default App
