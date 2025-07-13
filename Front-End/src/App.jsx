import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {userRouter, authRouter} from "./routes/allroutes"
import { Routes, Route  } from 'react-router-dom'
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
 
    </Routes>
    </>
  )
}

export default App
