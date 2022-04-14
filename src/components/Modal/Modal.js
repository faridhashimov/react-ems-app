import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Modal.scss'
import { v4 as uuidv4 } from 'uuid'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import axios from 'axios'

const Modal = ({ setAddEmployee }) => {
    const [experience, setExperience] = useState(false)
    const [addExp, setAddExp] = useState([])

    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)
    const [skills, setSkills] = useState([])
    const [expInputs, setExpInputs] = useState({})
    const [expArray, setExpArray] = useState([])

    const Exp = ({ i, onDeleteExp, handleExpInputs }) => {
        return (
            <div className="addExperience-modal__body_input">
                <span data-id={i} onClick={onDeleteExp}>
                    Remove
                </span>
                <div className="addExperience-modal__body_input_element">
                    <label htmlFor="title">Company:</label>
                    <input
                        onChange={handleExpInputs}
                        name="title"
                        type="text"
                        id="title"
                    />
                </div>
                <div className="addExperience-modal__body_input_element">
                    <label htmlFor="desc">Experience:</label>
                    <textarea
                        onChange={handleExpInputs}
                        name="desc"
                        type="text"
                        id="desc"
                        rows={6}
                    />
                </div>
            </div>
        )
    }

    const onAddNewExp = () => {
        setAddExp((prev) => [...prev, <Exp i={uuidv4()} handleExpInputs={handleExpInputs} onDeleteExp={onDeleteExp} />])
        setExpArray((prev) => [...prev, expInputs])
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
        setSkills(e.target.value.split(','))
    }

    const handleExpInputs = (e) => {
        setExpInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleExpArray = (e) => {
        e.preventDefault()
        setExpArray((prev) => [...prev, expInputs])
        setExperience(false)
    }


    // console.log(expInputs)
    // console.log(expArray)

    const handleClick = (e) => {
        e.preventDefault()
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused')
                        break
                    case 'running':
                        console.log('Upload is running')
                        break
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const employee = { ...inputs, img: downloadURL, skills, experience: expArray }

                    const sendData = async () => {
                        const response = await axios.post(
                            'http://localhost:5000/api/employees',
                            JSON.stringify(employee),
                            {
                                headers: { 'Content-Type': 'application/json' },
                                // withCredentials: true,
                            }
                        )
                        console.log(response.data)
                    }
                    sendData()

                })
            }
        )
    }

    // console.log(file)

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
                                    <option value="">
                                        --Please choose an option--
                                    </option>
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
                                    <option value="">
                                        --Please choose an option--
                                    </option>
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
                                            <Exp i={uuidv4()} handleExpInputs={handleExpInputs} onDeleteExp={onDeleteExp}  />,
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
                                <input
                                    type="file"
                                    alt="image"
                                    id="img"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
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
                                        <span onClick={handleExpArray}>Save</span>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <button onClick={handleClick} className="send">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
