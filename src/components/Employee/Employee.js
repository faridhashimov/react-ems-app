import { Link } from 'react-router-dom'
import './Employee.scss'

const Employee = ({ _id, img, fullName, position }) => {
    return (
        <div className="employee-item">
            <div className="employee-item__image">
                <img src={img} alt="item" />
            </div>

            <div className="employee-item__info">
                <h3 className="employee-item__info_name">{fullName}</h3>
                <p className="employee-item__info_position">{position}</p>
            </div>
            <Link to={'/employee/' + _id}>
                <button className="employee-item__details">
                    View More Details
                </button>
            </Link>
        </div>
    )
}

export default Employee
