import './Employee.scss'

const Employee = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                        alt=""
                    />
                    <div className="experience">
                        <h1 className="experience-title">Past experience</h1>
                        <div className="experience-item">
                            <h3 className="experience-item__title">
                                Spotify New York
                            </h3>
                            <p className="experience-item__info">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Recusandae, laudantium.
                            </p>
                        </div>
                        <div className="experience-item">
                            <h3 className="experience-item__title">
                                Amazon New York
                            </h3>
                            <p className="experience-item__info">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Recusandae, laudantium.
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div className="right">
                    <div className="right-top">
                        <div className="right-top__userinfo">
                            <h1>Jeremy Rose</h1>
                            <span>Product Designer</span>
                        </div>
                    </div>
                    <ul className="right-bottom">
                        <li className="right-bottom__title">General</li>
                        <li>
                            <span>Birth Date</span> 1992.08.22
                        </li>
                        <li>
                            <span>Gender</span> Male
                        </li>
                        <li>
                            <span>Department</span> IT
                        </li>
                        <li>
                            <span>Salary</span> $ 2500
                        </li>
                    </ul>
                    <ul className="right-bottom">
                        <li className="right-bottom__title">Contact</li>

                        <li>
                            <span>Phone</span> +1 123 344 2332
                        </li>
                        <li>
                            <span>Adress</span> 8003 Gates Court Brooklyn, NY
                            11218
                        </li>
                        <li>
                            <span>Email</span> jeremy@gmail.com
                        </li>
                    </ul>
                    <ul className="skills">
                        <li className="skills-title">Skills</li>
                        <li>Branding</li>
                        <li>UI/UX</li>
                        <li>Logo-Desing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Employee
