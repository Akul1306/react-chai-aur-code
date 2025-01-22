import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"Akul",
    age:21
  }

  return (
  <>
     <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind check</h1>
     <Card hobby1 = "Travel" hobby2 = "Trek" hobby3 = "Mountain"/>
     <Card   userName = "Akul" hobby1 = "Badminton" hobby2 = "Volleyball" hobby3 = "Cricket"/>
    </>
  )
}

export default App
