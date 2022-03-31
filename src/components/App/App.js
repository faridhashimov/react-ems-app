import AppHeader from '../AppHeader/AppHeader'
import Employees from '../Employees/Employees'
import './App.scss'
import '../../responsive.scss'

function App() {
    return (
        <div className="App">
            <AppHeader />
            <Employees />
        </div>
    )
}

export default App
