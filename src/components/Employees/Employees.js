import { FaSearch, FaPlus } from 'react-icons/fa'
import Employee from '../Employee/Employee'
import './Employees.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Employees = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/employees')
                setData(res.data)
                console.log(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getData()
    }, [])

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
                    {data.map((item) => (
                        <Employee key={item._id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Employees
