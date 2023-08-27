import { useState } from 'react'
import './App.css'
import Login from '../components/Login/Login'

function App() {
  const [display, setDisplay] = useState(<Login/>)

  return (
      <>
        <Login/>
      </>
  )
}

export default App
