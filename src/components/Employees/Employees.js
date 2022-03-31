import { FaSearch, FaPlus } from 'react-icons/fa'
import Employee from '../Employee/Employee'
import { items } from '../../dummyData'
import './Employees.scss'

const Employees = () => {
    return (
        <div className="body-container">
            <div className="wrapper">
                <div className="employee-action">
                    <div className="employee-action__search">
                        <input
                            type="text"
                            placeholder="Enter search keyword..."
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    <div className="employee-action__add">
                        <FaPlus style={{ color: '#fff' }} />
                    </div>
                </div>
                <div className="employee">
                    {items.map((item) => (
                        <Employee key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Employees
