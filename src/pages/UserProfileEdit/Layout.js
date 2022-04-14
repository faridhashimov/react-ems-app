import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const { pathname } = useLocation()

    let active = pathname === '/user' ? true : false
    console.log(active)

    let activeStyle = { backgroundColor: '#6a6f73', color: '#fff' }

    return (
        <div className="profile-wrapper">
            <div className="left">
                <div className="left-top">
                    <div className="left-top__img">
                        <img
                            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                            alt=""
                        />
                    </div>
                    <h1 className="left-top__username" alt="username">
                        Farid
                    </h1>
                </div>
                <div className="left-bottom">
                    <ul className="left-bottom__nav">
                        <li className="left-bottom__nav_item">
                            <NavLink
                                className="link"
                                style={pathname === '/user' ? activeStyle : undefined}
                                to="/user"
                            >
                                Account
                            </NavLink>
                        </li>
                        <li className="left-bottom__nav_item">
                            <NavLink
                                className="link"
                                style={pathname === '/user/edit-profile' ? activeStyle : undefined}
                                to="/user/edit-profile"
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className="left-bottom__nav_item">
                            <NavLink
                                className="link"
                                style={pathname === '/user/edit-photo' ? activeStyle : undefined}
                                to="/user/edit-photo"
                            >
                                Photo
                            </NavLink>
                        </li>
                        <li className="left-bottom__nav_item">
                            <NavLink
                                className="link"
                                style={pathname === '/user/edit-privacy'? activeStyle : undefined}
                                to="/user/edit-privacy"
                            >
                                Privacy
                            </NavLink>
                        </li>
                        <li className="left-bottom__nav_item">
                            <NavLink
                                style={pathname === '/user/edit-notifications'? activeStyle : undefined}
                                className="link"
                                to="/user/edit-notifications"
                            >
                                Notifications
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
