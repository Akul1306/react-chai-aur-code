import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = (false);
  const[password,setPassword] = (""); 

  const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%&*{}[]():;><,.?/~`"

  for (let i = 0; i <= str.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)

    pass = str.charAt(char);
    
  }

  setPassword(pass)
  }, [length,charAllowed,numberAllowed,setPassword]);

  return (
    <>

     <div className = 'w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 bg-gray text-red-500'>test</div>
    </>
  )
}

export default App
