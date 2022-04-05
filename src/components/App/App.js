import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader'
import Employees from '../Employees/Employees'
import './App.scss'
import '../../responsive.scss'
import Employee from '../../pages/Employee/Employee'
import Registration from '../../pages/Registration/Registration'
import Login from '../../pages/Login/Login'

function App() {
    return (
        <Router>
            <div className="App">
                {/* <AppHeader />
                <Routes>
                    <Route exact path="/" element={<Employees />} />
                    <Route path="/employee/:id" element={<Employee />} />
                </Routes> */}
                {/* <Registration /> */}
                <Login />
            </div>
        </Router>
    )
}

export default App
