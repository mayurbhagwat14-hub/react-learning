import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //use state ek hook hai aagar apna ko kisi variable or value ko web page mai update hota dikhana ho toh apan ya 
  //hook use karta ya array ka form mai value deta hai or ek function hota hai
  let [counter, setCounter] = useState(5)



  const addvalue = ()=>{
    if(counter<20){
      counter = counter + 1;
      setCounter(counter);
    }
  }
  const removevalue = ()=>{
    if(counter>0){
      counter = counter - 1;
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>chai aur react</h1> 
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}>Add value {counter}</button>
    <br />
    <button onClick={removevalue}>Remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
