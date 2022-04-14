// import './UserProfileEdit.scss'

const EditProfile = () => {
    return (
        <>
            <div className="right-top">
                <h1 className="right-top__title">Profile</h1>
                <span className="right-top__span">
                    Add information about yourself
                </span>
            </div>
            <div className="right-center">
                <div>
                    <label htmlFor="email" className="label">
                        Bla:
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
                    <input type="password" placeholder="Enter New Password" />
                    <input type="password" placeholder="Re-type New Password" />
                    <button>Change Password</button>
                </form>
            </div>
        </>
    )
}

export default EditProfile
