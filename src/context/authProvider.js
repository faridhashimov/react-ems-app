import { createContext } from 'react'
import usePersistState from './usePersistState'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = usePersistState('auth', {
        user: '',
        pwd: '',
        accessToken: '',
    })

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
