import { useState } from 'react'
import './App.css'
import Lista from './Lista'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Lista></Lista>
    </>
  )
}

export default App
