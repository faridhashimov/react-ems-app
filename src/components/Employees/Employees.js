import { FaSearch, FaPlus } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Employee from '../Employee/Employee'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import useAxios from '../../hooks/useAxios'

import './Employees.scss'
import Spinner from '../Spinner/Spinner'
import Modal from '../Modal/Modal'

const Employees = () => {
    const [employees, setEmployees] = useState(null)
    const [addEmployee, setAddEmployee] = useState(false)
    const [term, setTerm] = useState('')

    const { data, error, isLoading } = useAxios(
        'http://localhost:5000/api/employees'
    )

    useEffect(() => {
        setEmployees(data)
    }, [data])

    const renderEmployees = (arr) => {
        return (
            <div className="employee">
                {arr?.map((item) => (
                    <Employee key={item._id} {...item} />
                ))}
            </div>
        )
    }

    console.log(employees)
    const filterEmployees = (data, searchTerm) => {
        if (searchTerm.length === 0) {
            return data
        }

        return data.filter((item) => {
            return item.fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        })
    }

    const errorMessage = error ? <ErrorMsg error={error} /> : null
    const spinner = isLoading && !employees ? <Spinner /> : null
    const employeesData = renderEmployees(filterEmployees(employees, term))

    return (
        <>
            <div className="body-container">
                <div className="wrapper">
                    <div className="employee-action">
                        <div className="employee-action__search">
                            <input
                                type="text"
                                onChange={(e) => setTerm(e.target.value)}
                                placeholder="Enter search keyword..."
                            />
                            <FaSearch className="search-icon" />
                        </div>
                        <div
                            onClick={() => setAddEmployee(true)}
                            className="employee-action__add"
                        >
                            <FaPlus style={{ color: '#fff' }} />
                        </div>
                    </div>
                    {errorMessage}
                    {spinner}
                    {employeesData}
                </div>
                {addEmployee ? <Modal setAddEmployee={setAddEmployee} /> : null}
            </div>
        </>
    )
}

export default Employees
