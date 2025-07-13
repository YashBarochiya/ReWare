import { useState } from 'react'
import './App.css'
import { Routes, Route  } from 'react-router-dom'

import SignUpComponent from "./pages/SignUpComponent"
import LoginComponent from "./pages/LoginComponent"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>

        <Route
          path="/login"
          element={<LoginComponent />}
        />
        <Route
          path='/signup'
          element={<SignUpComponent/>}
        />
 
    </Routes>
    </>
  )
}

export default App
