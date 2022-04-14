import { FaCheck } from 'react-icons/fa'
import './EditPrivacy.scss'

const EditPrivacy = () => {
    return (
        <>
            <div className="right-top">
                <h1 className="right-top__title">Privacy</h1>
                <span className="right-top__span">
                    Modify your privacy settings here.
                </span>
            </div>
            <div className="right-center">
                <div>
                    <div className="show-profile">
                        <div className="check">
                            <FaCheck />
                        </div>
                        <span>Show your profile to logged-in users</span>
                    </div>
                    <div className="show-profile">
                        <div className="check">
                            <FaCheck />
                        </div>
                        <span>
                            How courses you're taking on your profile page
                        </span>
                    </div>
                </div>
            </div>
            <div className="right-bottom">
                <button>Save</button>
            </div>
        </>
    )
}

export default EditPrivacy
