import { useEffect, useState } from 'react'
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailErorr] = useState(false)
    const [passwordError, setPasswordErorr] = useState(false)

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
        // send request to server to verify user datails
        alert('success')
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