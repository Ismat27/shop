import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[%@#!$]).{8,24}$/;
const BASE_URL = process.env.REACT_APP_BASE_URL

const useRegisterHook = () => {

  const navigate = useNavigate()
  
  const errorRef = useRef(null)

  const [firstName, setFirstname ] = useState("")
  const [lastName, setLastname ] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [passwordTwo, setPasswordTwo] = useState("")

  const register = () => {
      // validate data
      // send data to server
      axios.post(`${BASE_URL}/signup/`, {
        first_name: firstName, last_name: lastName,
        password, password1: passwordTwo, email
      })
      .then((response) => {
        const {data} = response
        console.log('success', data);
        // upon success redirect user to last visited page or login page
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
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