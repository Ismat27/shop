import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[%@#!$]).{8,24}$/;
const BASE_URL = process.env.REACT_APP_BASE_URL

const useRegisterHook = () => {

    const errorRef = useRef(null)

    const [firstName, setFirstname ] = useState("")
    const [lastName, setLastname ] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")

    const register = () => {
        console.log({
            firstName, lastName, email, phone,
            password, passwordTwo
        });
        // validate data
        axios.post(`${BASE_URL}/api/signup/`, {
          first_name: firstName, last_name: lastName,
          password, pasword: passwordTwo, email
        })
        .then(() => {
          console.log('success');
        })
        .catch(() => {
          console.log('error');
        })
    }

    useEffect(() => {
    }, [email])

    useEffect(() => {
    }, [password, passwordTwo])

    useEffect(() => {
    }, [firstName])

    useEffect(() => {
    }, [lastName])

    useEffect(() => {
    }, [phone])



  return (
    {
        errorRef,
        firstName, setFirstname,
        lastName, setLastname,
        email, setEmail,
        phone, setPhone,
        password, setPassword,
        passwordTwo, setPasswordTwo,
        register
    }
  )
}

export default useRegisterHook