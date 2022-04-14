import { Route, Routes } from 'react-router-dom'
import AppHeader from '../../components/AppHeader/AppHeader'
import Layout from '../UserProfileEdit/Layout'
import './ProfilePage.scss'

import {
    EditPhoto,
    EditAccount,
    EditNotifications,
    EditPrivacy,
    EditProfile,
} from '../index'

const ProfilePage = () => {
    return (
        <div>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<EditAccount />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/edit-photo" element={<EditPhoto />} />
                    <Route path="/edit-privacy" element={<EditPrivacy />} />
                    <Route
                        path="/edit-notifications"
                        element={<EditNotifications />}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default ProfilePage
