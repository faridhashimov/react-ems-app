import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppHeader from '../../components/AppHeader/AppHeader'
import Employees from '../../components/Employees/Employees'
import Employee from '../Employee/Employee'

const Home = () => {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route exact path="/" element={<Employees />} />
                <Route path="/employee/:id" element={<Employee />} />
            </Routes>
        </>
    )
}

export default Home
