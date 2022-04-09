import { useContext } from 'react'
import { AiOutlineBell, AiOutlineLogout } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/authProvider'
import LoginPage from '../../pages/LoginPage/LoginPage'

import './AppHeader.scss'

const AppHeader = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const { user } = auth
    let navigate = useNavigate()
    const logout = () => {
        setAuth({ user: '', pwd: '', accessToken: '' })
        navigate(<LoginPage />, { replace: true })
    }

    return (
        <>
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
                            <span className="icon-container__notification">
                                2
                            </span>
                        </div>
                        <div className="user">
                            <div className="user-image">
                                <img
                                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="logged-user"
                                />
                            </div>
                            <div className="user-info">
                                <h1 className="user-info__name">{user}</h1>
                                <a
                                    href="google.ru"
                                    className="user-info__profile"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                        <div className="icon-container">
                            <FiRefreshCcw />
                        </div>
                        <div onClick={logout} className="icon-container">
                            <AiOutlineLogout />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppHeader
