import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Employee.scss'

const Employee = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:5000/api/employees/' + id
                )
                setData(res.data)
                console.log(res.data)
            } catch (error) {}
        }
        getData()
    }, [id])

    return (
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <img src={data.img} alt={data.fullName} />
                    <div className="experience">
                        <h1 className="experience-title">Past experience</h1>
                        {data.experience?.map((item, i) => (
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
                <div className="right">
                    <div className="right-top">
                        <div className="right-top__userinfo">
                            <h1>{data.fullName}</h1>
                            <span>{data.position}</span>
                        </div>
                    </div>
                    <ul className="right-bottom">
                        <li className="right-bottom__title">General</li>
                        <li>
                            <span>Birth Date</span>{' '}
                            {data.birthdate?.slice(0, 10)}
                        </li>
                        <li>
                            <span>Gender</span> {data.gender}
                        </li>
                        <li>
                            <span>Department</span> {data.department}
                        </li>
                        <li>
                            <span>Salary</span> $ {data.salary}
                        </li>
                    </ul>
                    <ul className="right-bottom">
                        <li className="right-bottom__title">Contact</li>

                        <li>
                            <span>Phone</span> +{data.phone}
                        </li>
                        <li>
                            <span>Adress</span> {data.adress}
                        </li>
                        <li>
                            <span>Email</span> {data.email}
                        </li>
                    </ul>
                    <ul className="skills">
                        <li className="skills-title">Skills</li>
                        {data.skills?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Employee
