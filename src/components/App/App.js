import './App.scss'
import Registration from '../../pages/Registration/Registration'
import Login from '../../pages/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Employee from '../../pages/Employee/Employee'
import { useContext } from 'react'
import AuthContext from '../../context/authProvider'

function App() {
    const { auth } = useContext(AuthContext)
    console.log(auth.user)

    return (
        <Routes>
            <Route
                path="/"
                element={
                    auth.user ? (
                        <Navigate to="/home" replace={true} />
                    ) : (
                        <Registration />
                    )
                }
            />
            <Route
                path="login"
                element={
                    auth.user ? (
                        <Navigate to="/home" replace={true} />
                    ) : (
                        <Login />
                    )
                }
            />
            <Route
                path="home"
                element={
                    auth.user ? (
                        <Home />
                    ) : (
                        <Navigate to="/login" replace={true} />
                    )
                }
            />
            <Route path="employee/:id" element={<Employee />} />
        </Routes>
    )
}

export default App
