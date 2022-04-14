import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Modal.scss'
import { v4 as uuidv4 } from 'uuid'

const Modal = ({ setAddEmployee }) => {
    const [experience, setExperience] = useState(false)
    const [addExp, setAddExp] = useState([])

    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)
    const [skills, setSkills] = useState([])

    const Exp = ({ i }) => {
        return (
            <div className="addExperience-modal__body_input">
                <span data-id={i} onClick={onDeleteExp}>
                    Remove
                </span>
                <div className="addExperience-modal__body_input_element">
                    <label htmlFor="title">Company:</label>
                    <input type="text" id="title" />
                </div>
                <div className="addExperience-modal__body_input_element">
                    <label htmlFor="info">Experience:</label>
                    <textarea type="text" id="info" rows={6} />
                </div>
            </div>
        )
    }

    const onAddNewExp = () => {
        setAddExp((prev) => [...prev, <Exp i={uuidv4()} />])
    }

    const onDeleteExp = (e) => {
        const b = e.target.getAttribute('data-id')
        setAddExp((addExp) => addExp.filter((item) => item.props.i !== b))
    }

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    
    const handleSkill = (e) => {
        setSkills(e.target.value.split(","))
    }
    console.log(skills);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="modalContainer-header">
                    <h1 className="modalContainer-header__title">
                        Add New Employee
                    </h1>
                    <button
                        onClick={() => setAddEmployee(false)}
                        className="modalContainer-header__btn"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="modalContainer-body">
                    <form>
                        <div className="modalForm">
                            {/* Full Name */}
                            <div className="modalForm-input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Enter a Full Name"
                                />
                            </div>

                            {/* Birthdate */}
                            <div className="modalForm-input">
                                <label htmlFor="birthdate">Birth Date</label>
                                <input
                                    onChange={handleChange}
                                    type="date"
                                    name="birthdate"
                                    id="birthdate"
                                />
                            </div>

                            {/* Position */}
                            <div className="modalForm-input">
                                <label htmlFor="position">Position</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="position"
                                    id="position"
                                    placeholder="Enter Position"
                                />
                            </div>

                            {/* Gender */}
                            <div className="modalForm-input">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    onChange={handleChange}
                                    name="gender"
                                    id="gender"
                                >
                                    <option value="">--Please choose an option--</option>
                                    <option value="male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            {/* Department */}
                            <div className="modalForm-input">
                                <label htmlFor="department">Derpartment</label>
                                <select
                                    onChange={handleChange}
                                    name="department"
                                    id="department"
                                >
                                    <option value="">--Please choose an option--</option>
                                    <option value="IT">IT</option>
                                    <option value="Web Development">
                                        Web Development
                                    </option>
                                </select>
                            </div>

                            {/* Salary */}
                            <div className="modalForm-input">
                                <label htmlFor="salary">Salary</label>
                                <input
                                    onChange={handleChange}
                                    type="number"
                                    name="salary"
                                    id="salary"
                                    placeholder="Enter Salary"
                                />
                            </div>

                            {/* Phone */}
                            <div className="modalForm-input">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    onChange={handleChange}
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter Phone"
                                />
                            </div>

                            {/* Adress */}
                            <div className="modalForm-input">
                                <label htmlFor="adress">Adress</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="adress"
                                    id="adress"
                                    placeholder="Enter Adress"
                                />
                            </div>

                            {/* Email */}
                            <div className="modalForm-input">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                />
                            </div>

                            {/* Skills */}
                            <div className="modalForm-input">
                                <label htmlFor="skills">Skills</label>
                                <input
                                    onChange={handleSkill}
                                    type="text"
                                    name="skills"
                                    id="skills"
                                    placeholder='Add skills separated by ","'
                                />
                            </div>

                            {/* Experience */}
                            <div className="experience">
                                <span
                                    onClick={() => {
                                        setExperience(true)
                                        setAddExp((prev) => [
                                            ...prev,
                                            <Exp i={uuidv4()} />,
                                        ])
                                    }}
                                >
                                    Add Past Experience
                                </span>
                                {/* </div> */}
                            </div>

                            {/* Image */}
                            <div className="modalForm-input">
                                <label htmlFor="img">Image</label>
                                <input type="file" alt="" id="img" />
                            </div>
                        </div>

                        {experience ? (
                            <div className="addExperience">
                                <div className="addExperience-modal">
                                    <div className="addExperience-modal__header">
                                        <h1>Add Past Experience</h1>
                                        <span
                                            onClick={() => {
                                                setExperience(false)
                                                setAddExp([])
                                            }}
                                        >
                                            x
                                        </span>
                                    </div>

                                    {addExp.map((item, i) => (
                                        <div
                                            key={i}
                                            className="addExperience-modal__body"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                    <div className="addExperience-modal__footer">
                                        <span onClick={onAddNewExp}>
                                            Add New
                                        </span>
                                        <span>Save</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <button className="send">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
