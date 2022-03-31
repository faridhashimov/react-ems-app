import './Employee.scss'

const Employee = ({ img, name, position }) => {
    return (
        <div className="employee-item">
            <div className="employee-item__image">
                <img src={img} alt="item" />
            </div>

            <div className="employee-item__info">
                <h3 className="employee-item__info_name">{name}</h3>
                <p className="employee-item__info_position">{position}</p>
            </div>
            <button className="employee-item__details">
                View More Details
            </button>
        </div>
    )
}

export default Employee
