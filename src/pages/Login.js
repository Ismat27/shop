import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useLogin from '../hooks/useLogin'

const Login = () => {

    const {
        email, setEmail,
        password, setPassword,
        emailError, passwordError,
        login
    } = useLogin()

    const submitForm = (event) => {
        event.preventDefault()
        login()
    }

  return (
    <Wrapper>
        <div className='auth-container'>
            <h1 className='blue'>Log In</h1>
            <form onSubmit={submitForm}>
                <div className='field-container'>
                    <div className='field'>
                        <label htmlFor='email'>Email Address<span>*</span></label>
                        <div className={`${emailError?'error input-box':'input-box'}`}>
                            <input 
                                type={'email'}
                                name='email'
                                id='email'
                                placeholder='example@gmail.com'
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='email'>Password<span>*</span></label>
                        <div className={`${passwordError?'error input-box':'input-box'}`}>
                            <input 
                                type={'password'}
                                name='password'
                                id='password'
                                placeholder='enter password'
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button className='capitalize btn'>
                    login
                </button>
            </form>
            <div className='alt-reg'>
                <span className='hor-line'></span>
                <span>or</span>
                <span className='hor-line'></span>
            </div>
            <div className='social-btns'>
                <button className='btn social-btn fb-btn'>
                    Log In with Facebook
                </button>
                <button className='btn social-btn google-btn'>
                    Log In with Google
                </button>
            </div>
            <p className='agreement'>
                By Login In, you agree to Our <Link>Terms and conditions</Link>,
                Our <Link>Private Policy</Link> and <Link>Money Back Policy</Link>
            </p>
            <p className='login'>
                Don't have an Account yet? &nbsp; <Link to={'/register'}>Create Account</Link>
            </p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-block: 7.5vh;
.auth-container {
    max-width: 440px;
}
.field-container {
    display: grid;
    gap: .6rem 1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
}
.input-box {
    border: 1px solid var(--grey-four);
    padding: 0 1rem;
    margin-top: .3rem;
}
.input-box.error {
    border: 1px solid red;
}
label {
    font-weight: 600;
}
input {
    border: none;
    outline: none;
    padding-block: 1rem;
    width: 100%;
}
button {
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
}
.alt-reg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 1rem;
}
.hor-line {
    background-color: var(--grey-four);
    height: 1px;
    flex-basis: 45%
}
.social-btns {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}
.fb-btn {
    background-color: #4267B2;
}
.google-btn {
    background-color: #EA4335;
}
p {
    font-weight: 600;
    font-size: 12px;
}
.agreement {
    margin-block: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--grey-four);
}
.agreement a {
    color: var(--btn-primary-bg);
}
.login a {
    color: var(--secondary-color);
}
`

export default Login