import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppHeader from '../../components/AppHeader/AppHeader'
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg'
import Spinner from '../../components/Spinner/Spinner'
import useAxios from '../../hooks/useAxios'

import './EmployeePage.scss'

const EmployeePage = () => {
    const [employee, setEmployee] = useState(null)
    const { id } = useParams()

    console.log(id)
    console.log(employee)

    const { data, error, isLoading } = useAxios(
        'http://localhost:5000/api/employees/' + id
    )

    useEffect(() => {
        setEmployee(data)
    }, [data, id])

    const renderData = (item) => {
        return (
            <div className="employeeContainer">
                <div className="employeeWapper">
                    <div className="employeeLeft">
                        <img src={item.img} alt={item.fullName} />
                        <div className="experience">
                            <h1 className="experience-title">
                                Past experience
                            </h1>
                            {item.experience?.map((item, i) => (
                                <div key={i} className="experience-item">
                                    <h3 className="experience-item__title">
                                        {item.title}
                                    </h3>
                                    <p className="experience-item__info">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="employeeRight">
                        <div className="employeeRight-top">
                            <div className="employeeRight-top__userinfo">
                                <h1>{item.fullName}</h1>
                                <span>{item.position}</span>
                            </div>
                        </div>
                        <ul className="employeeRight-bottom">
                            <li className="employeeRight-bottom__title">General</li>
                            <li>
                                <span>Birth Date</span>{' '}
                                {item?.birthdate?.slice(0, 10)}
                            </li>
                            <li>
                                <span>Gender</span> {item.gender}
                            </li>
                            <li>
                                <span>Department</span> {item.department}
                            </li>
                            <li>
                                <span>Salary</span> $ {item.salary}
                            </li>
                        </ul>
                        <ul className="employeeRight-bottom">
                            <li className="employeeRight-bottom__title">Contact</li>

                            <li>
                                <span>Phone</span> +{item.phone}
                            </li>
                            <li>
                                <span>Adress</span> {item.adress}
                            </li>
                            <li>
                                <span>Email</span> {item.email}
                            </li>
                        </ul>
                        <ul className="skills">
                            <li className="skills-title">Skills</li>
                            {item.skills?.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const employeeInfo = employee ? renderData(employee) : null
    const loading = isLoading && !employee ? <Spinner /> : null
    const errorMsg = error ? <ErrorMsg error={error} /> : null

    return (
        <>
            <AppHeader />
            {employeeInfo}
            {loading}
            {errorMsg}
        </>
    )
}

export default EmployeePage
