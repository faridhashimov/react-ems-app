import { AiOutlineBell, AiOutlineLogout } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './AppHeader.scss'

const AppHeader = () => {
    return (
        <div className="header-container">
            <div className="wrapper">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <div className="logo-container">
                        <h1 className="logo-container__image">EMS</h1>
                    </div>
                </Link>
                <h1 className="abbr">Employee Managment System</h1>

                <div className="navbar">
                    <div className="icon-container">
                        <AiOutlineBell />
                        <span className="icon-container__notification">2</span>
                    </div>
                    <div className="user">
                        <div className="user-image">
                            <img
                                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="logged-user"
                            />
                        </div>
                        <div className="user-info">
                            <h1 className="user-info__name">Marry Jane</h1>
                            <a href="google.ru" className="user-info__profile">
                                View Profile
                            </a>
                        </div>
                    </div>
                    <div className="icon-container">
                        <FiRefreshCcw />{' '}
                    </div>
                    <div className="icon-container">
                        <AiOutlineLogout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
