import { useState, useRef, useEffect, useContext } from 'react'
import AuthContext from '../../context/authProvider'
import axios from '../../api/axios'

import './Login.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const LOGIN_URL = '/login'

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    let navigate = useNavigate()
    const userRef = useRef()
    const errReff = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        console.log(user, pwd)
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )

            console.log(JSON.stringify(response?.data))
            console.log(JSON.stringify(response))
            console.log(JSON.stringify(response?.data?.isAdmin))
            const accessToken = response?.data?.accessToken
            // const role = response?.data?.isAdmin
            setAuth({ user, pwd, accessToken })
            setUser('')
            setPwd('')
            navigate('/home', { replace: true })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            errReff.current.focus()
        }

        // setSuccess(true)
    }

    return (
        <div className='log-main'>
            <div className='log'>
                <p
                    ref={errReff}
                    className={errMsg ? 'errmsg' : 'offscreen'}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p className="signin">
                    Need an Account <br />
                    <NavLink to={'/'}>
                        <span className="line">Sing Up</span>
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Login
