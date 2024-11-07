import { useState } from 'react'
import './App.css'

function App() {
let [counter,setCounter] = useState(5);
//  let counter = 5;
 
let increaseValue = () =>{
 counter =  counter + 1
 setCounter(counter)
 } 

 let decreaseValue =() => {
  if(counter<1 && counter==0){
    setCounter(0);
  } 
  else{setCounter(counter-1)}
  
 }



  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <button onClick = {decreaseValue}>Decrease value </button>
    </>
  )
}

export default App
