// import './UserProfileEdit.scss'

const EditAccount = () => {
    return (
        <>
            <div className="right-top">
                <h1 className="right-top__title">Account</h1>
                <span className="right-top__span">
                    Edit your account settings and change your password here.
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
                    <input type="password" placeholder="Enter New Password" />
                    <input type="password" placeholder="Re-type New Password" />
                    <button>Change Password</button>
                </form>
            </div>
        </>
    )
}

export default EditAccount
