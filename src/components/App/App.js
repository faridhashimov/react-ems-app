import './App.scss'
import Registration from '../../pages/Registration/Registration'
import Login from '../../pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../../pages/Home/Home'
import Employee from '../../pages/Employee/Employee'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public Routes */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Registration />} />

                {/* Protected Routes */}
                <Route path="/" element={<Home />}>
                    <Route path="/employee/:id" element={<Employee />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
