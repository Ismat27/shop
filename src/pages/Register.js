import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Register = () => {

    const submitForm = (event) => {
        event.preventDefault()
    }

  return (
    <Wrapper>
        <div className='auth-container'>
            <h1 className='blue'>Register</h1>
            <form onSubmit={submitForm}>
                <div className='field-container'>
                    <div className='field'>
                        <label htmlFor='firstName' className='capitalize'>first name</label>
                        <div className='input-box'>
                            <input
                                id='firstName'
                                name='firstName' 
                                placeholder='enter your first name'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='lastName' className='capitalize'>last name</label>
                        <div className='input-box'>
                            <input 
                                id='lastName'
                                name='lastName'
                                placeholder='enter your last name'

                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='email' className='capitalize'>email</label>
                        <div className='input-box'>
                            <input 
                                id='email'
                                name='email'
                                placeholder='example@gmail.com'
                                type={'email'}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='phone' className='capitalize'>phone number</label>
                        <div className='input-box'>
                            <input 
                                id='phone'
                                name='phone'
                                placeholder='enter phone number'
                                type={'tel'}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='password' className='capitalize'>password</label>
                        <div className='input-box'>
                            <input 
                                id='password'
                                name='password'
                                placeholder='enter password'
                                type={'password'}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor='passwordTwo' className='capitalize'>confirm password</label>
                        <div className='input-box'>
                            <input 
                                id='passwordTwo'
                                name='passwordTwo'
                                placeholder='confirm password'
                                type={'password'}
                            />
                        </div>
                    </div>
                </div>
                <button className='capitalize btn'>
                    create account
                </button>
            </form>
            <div className='alt-reg'>
                <span className='hor-line'></span>
                <span>or</span>
                <span className='hor-line'></span>
            </div>
            <div className='social-btns'>
                <button className='btn social-btn fb-btn'>
                    Register with Facebook
                </button>
                <button className='btn social-btn google-btn'>
                    Register with Google
                </button>
            </div>
            <p className='agreement'>
                By creating an Account, you agree to Our <Link>Terms and conditions</Link>,
                Our <Link>Private Policy</Link> and <Link>Money Back Policy</Link>
            </p>
            <p className='login'>
                Already have an Account? &nbsp; <Link to={'/login'}>Log In</Link>
            </p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-block: 7.5vh;
h1 {
    font-weight: 600;
}
.auth-container {
    max-width: 768px;
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
@media (min-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    .field-container {
        display: grid;
        grid-template-columns: repeat(2, 45%);
        justify-content: space-between;
        row-gap: .6rem;
    }
    button {
        font-size: 24px;
    }
    .alt-reg {
        margin-block: 2rem;
    }
    .social-btns {
        justify-content: space-between;
        flex-direction: row;
    }
    .social-btn {
        flex-basis: 45%;
        font-size: 1rem;
    }
    .agreement {
        margin-block: 2rem;
        padding-bottom: 2rem;
    }
}
@media (min-width: 992px) {
    .field-container {
    }
}
`

export default Register