import {Navigate } from "react-router-dom"
import LoginComponent from "../pages/LoginComponent"

const authRouter = [
    {path:"/login", element: <LoginComponent />},
]
const userRouter =[]

export {authRouter,userRouter}