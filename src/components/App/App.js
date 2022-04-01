import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader'
import Employees from '../Employees/Employees'
import './App.scss'
import '../../responsive.scss'
import Employee from '../../pages/Employee/Employee'

function App() {
    return (
        <Router>
            <AppHeader />
            <Routes>
                <Route exact path="/" element={<Employees />}/>
                <Route path="/employee/:id" element={<Employee />}/>
            </Routes>
        </Router>
    )
}

export default App
