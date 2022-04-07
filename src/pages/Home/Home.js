import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppHeader from '../../components/AppHeader/AppHeader'
import Employees from '../../components/Employees/Employees'
import Employee from '../../pages/Employee/Employee'

const Home = () => {
    return (
        <>
            <AppHeader />
            <Employees />
        </>
    )
}

export default Home
