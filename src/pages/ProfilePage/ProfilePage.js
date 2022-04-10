import AppHeader from '../../components/AppHeader/AppHeader'
import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <div>
            <AppHeader />
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
                            <li className="left-bottom__nav_item">Profile</li>
                            <li className="left-bottom__nav_item">Photo</li>
                            <li className="left-bottom__nav_item">Account</li>
                            <li className="left-bottom__nav_item">Privacy</li>
                            <li className="left-bottom__nav_item">
                                Notifications
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="right-top">
                        <h1 className="right-top__title">Account</h1>
                        <span className="right-top__span">
                            Edit your account settings and change your password
                            here.
                        </span>
                    </div>
                    <div className="right-center">
                        <div>
                            <label htmlFor="email" className="label">
                                Email:
                            </label>
                            <input
                                id="email"
                                type="text"
                                className="right-center__input"
                                placeholder="Your email adress is"
                            />
                        </div>
                    </div>
                    <div className="right-bottom">
                        <form>
                            <label htmlFor="password" className="label">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Current Password"
                            />
                            <input
                                type="password"
                                placeholder="Enter New Password"
                            />
                            <input
                                type="password"
                                placeholder="Re-type New Password"
                            />
                            <button>Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
