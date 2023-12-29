import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)
  
  const addValue=() =>{
    if(counter >= 25){
      counter='Invalid'
    }
    else{
      counter=counter+1
    setCounter(counter)
    }
    
  }

  const Decreaseval=() =>{
    if(counter <= 0){
      console.log("NIL")
    }else{
      counter=counter-1
    setCounter(counter)
    }
    
  }

  return (
    <>
            <h1>Welcome Abhinav</h1>
            <h2>Lets Get Started & Count: {counter}</h2>

            <button
            onClick={addValue}
            >Add value:</button>
            <br />
            <button
            onClick={Decreaseval}
            >remove value</button>


           
    </>
  )
}

export default App
