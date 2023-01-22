import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const BASE_URL = process.env.REACT_APP_BASE_URL

const useLogin = () => {
    const {login: loginDispatch} = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailErorr] = useState(false)
    const [passwordError, setPasswordErorr] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        setEmailErorr(false)
    }, [email])

    useEffect(() => {
        setPasswordErorr(false)
    }, [password])

    const login = () => {
        const emailTest  = EMAIL_REGEX.test(email)
        if (!emailTest) {
            setEmailErorr(true)
            return
        }
        if (!password) {
            setPasswordErorr(true)
            return
        }
        axios.post(`${BASE_URL}/login/`, {
            username: email, password
        })
        .then((response) => {
            const {data} = response
            loginDispatch(data)
            setEmail("")
            setPassword("")
            navigate(from)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        {
            email, setEmail,
            password, setPassword,
            emailError, passwordError,
            login,
        }
    )
}

export default useLogin