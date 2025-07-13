import {Navigate } from "react-router-dom"
import LoginComponent from "../pages/LoginComponent"
import SignUpComponent from "../pages/SignUpComponent"

const authRouter = [
    {path:"/login", element: <LoginComponent />},
    {path:"/signup", element: <SignUpComponent />},
]
const userRouter =[]

export {authRouter,userRouter}