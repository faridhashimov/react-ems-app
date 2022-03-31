import './AppHeader.scss'
import '../../responsive.scss'
import { AiOutlineBell, AiOutlineLogout } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { FaSearch, FaPlus } from 'react-icons/fa'
import Employee from '../Employee/Employee'
import { items } from '../../dummyData'

const AppHeader = () => {
    return (
        <div>
            <div className="header-container">
                <div className="wrapper">
                    <div className="logo-container">
                        <h1 className="logo-container__image">PMS</h1>
                    </div>
                    <h1 className="abbr">Performance Managment System</h1>
                    <div className="navbar">
                        <div className="icon-container">
                            <AiOutlineBell />
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
                                <a
                                    href="google.ru"
                                    className="user-info__profile"
                                >
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
            <div className="body-container">
                <div className="wrapper">
                    <div className="employee-action">
                        <div className="employee-action__search">
                            <input
                                type="text"
                                placeholder="Enter search keyword..."
                            />
                            <FaSearch className="search-icon" />
                        </div>
                        <div className="employee-action__add">
                            <FaPlus style={{color: '#fff'}} />
                        </div>
                    </div>
                    <div className="employee">
                        {items.map((item) => (
                            <Employee key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
