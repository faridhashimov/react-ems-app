import './App.scss'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import EmployeePage from '../../pages/EmployeePage/EmployeePage'
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
                        <RegistrationPage />
                    )
                }
            />
            <Route
                path="login"
                element={
                    auth.user ? (
                        <Navigate to="/home" replace={true} />
                    ) : (
                        <LoginPage />
                    )
                }
            />
            <Route
                path="home"
                element={
                    auth.user ? (
                        <HomePage />
                    ) : (
                        <Navigate to="/login" replace={true} />
                    )
                }
            />
            <Route path="employee/:id" element={<EmployeePage />} />
        </Routes>
    )
}

export default App
