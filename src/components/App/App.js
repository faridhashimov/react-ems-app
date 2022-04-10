import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from '../../context/authProvider'

import {
    EmployeePage,
    RegistrationPage,
    LoginPage,
    HomePage,
    Page404,
    ProfilePage,
} from '../../pages'

import './App.scss'

function App() {
    // const { auth } = useContext(AuthContext)
    // console.log(auth.user)

    return (
        <Routes>
            <Route path="user" element={<ProfilePage />} />
            {/* <Route
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
            <Route
                path="employee/:id"
                element={
                    auth.user ? (
                        <EmployeePage />
                    ) : (
                        <Navigate to="/login" replace={true} />
                    )
                }
            />
            <Route path="*" element={<Page404 />} /> */}
        </Routes>
    )
}

export default App
