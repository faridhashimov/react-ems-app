import { useRef, useState, useEffect } from 'react'
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa'
import axios from '../../api/axios'

import './Registration.scss'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/register'

const Registration = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        //if button enabled with JS hack
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2) {
            setErrMsg('Invalid Entry')
            return
        }
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )
            console.log(response.data)
            console.log(response.accessToken)
            console.log(JSON.stringify(response))
            setSuccess(true)
            // clear input fields
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server response')
            } else if (err.response?.status === 409) {
                setErrMsg('User taken')
            } else {
                setErrMsg('Reg failed')
            }
            errRef.current.focus()
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success</h1>
                    <p>
                        <a href="#">Sing In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p
                        ref={errRef}
                        className={errMsg ? 'errmsg' : 'offscreen'}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <span className={validName ? 'valid' : 'hide'}>
                                <FaCheck />
                            </span>
                            <span
                                className={
                                    validName || !user ? 'hide' : 'invalid'
                                }
                            >
                                <FaTimes />
                            </span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            required
                            onChange={(e) => setUser(e.target.value)}
                            ref={userRef}
                            autoComplete="off"
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p
                            id="uidnote"
                            className={
                                userFocus && user && !validName
                                    ? 'instructions'
                                    : 'offscreen'
                            }
                        >
                            <FaInfoCircle />
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, nymbers, underscore, hyphens allowed.
                        </p>

                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? 'valid' : 'hide'}>
                                <FaCheck />
                            </span>
                            <span
                                className={
                                    validPwd || !pwd ? 'hide' : 'invalid'
                                }
                            >
                                <FaTimes />
                            </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p
                            id="pwdnote"
                            className={
                                pwdFocus && !validPwd
                                    ? 'instructions'
                                    : 'offscreen'
                            }
                        >
                            <FaInfoCircle />
                            8 to 24 characters. <br />
                            Must include uppercase and lowercase letters, a
                            number and a special character. <br />
                            Allowed special characters:
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <span
                                className={
                                    validMatch && matchPwd ? 'valid' : 'hide'
                                }
                            >
                                <FaCheck />
                            </span>
                            <span
                                className={
                                    validMatch || !matchPwd ? 'hide' : 'invalid'
                                }
                            >
                                <FaTimes />
                            </span>
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p
                            id="confirmnote"
                            className={
                                matchFocus && !validMatch
                                    ? 'instructions'
                                    : 'offscreen'
                            }
                        >
                            <FaInfoCircle />
                            Must match the first password input field
                        </p>
                        <button
                            disabled={
                                !validName || !validPwd || !validMatch
                                    ? true
                                    : false
                            }
                        >
                            Sign up
                        </button>
                    </form>
                    <p className="signin">
                        Already registered? <br />
                        <span className="line">
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Registration
