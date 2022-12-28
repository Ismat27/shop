import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMail } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <Wrapper>
        <div className='page-center'>
            <div className='footer-header'>
                <Link to={'/'}>
                    <h1>
                        <span>Smart</span> <span className='blue'>Mart</span>
                    </h1>
                </Link>
                <div className='child-one'>
                    <h2 className='mail-header'>Deliver the latest Product trends to your email</h2>
                    <div className='form box'>
                        <div className='box inp'>
                            <span className='icon'>
                                <IoMail />
                            </span>
                            <input 
                                placeholder='your email address'
                                type={'email'}
                            />
                        </div>
                        <button className='btn'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-mid'>
                <div className='products-box'>
                    <h3>products</h3>
                    <ul className='products-list'>
                        <li>laptops</li>
                        <li>phones</li>
                        <li>laptops accessories</li>
                        <li>phones accessories</li>
                    </ul>
                </div>
                <div className='links-box'>
                    <h3>links</h3>
                    <ul className='links-list'>
                        <li>
                            <Link to={'/shop'}>shop</Link>
                        </li>
                        <li>
                            <Link to={'/cart'}>cart</Link>
                        </li>
                        <li>
                            <Link to={'/wishlist'}>wishlist</Link>
                        </li>
                        <li>
                            <Link to={'/'}>terms and conditions</Link>
                        </li>
                    </ul>
                </div>
                <div className='contact-box'>
                    <h3>contact</h3>
                    <ul className='contact-list'>
                        <li>
                            <span className='icon'>
                                <MdLocationOn />
                            </span>
                            <span>
                                Flower Garden, GRA, Ilorin, Kwara State, Nigeria
                            </span>
                        </li>
                        <li>
                            <span className='icon'>
                                <BsFillTelephoneFill />
                            </span>
                            <a href='tel:09030902107'>+2349030902107</a>
                        </li>
                        <li>
                            <span className='icon'>
                                <IoMail />
                            </span>
                            <a className='mail-address' href='mailto:adegbiteismail27@gmail.com'>adegbiteismail27@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='footer-end'>&#169; {new Date().getFullYear()} developed by ismail adegbite. all right reserved</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: var(--black-text-color);
padding-block: 2.5rem;
color: #CDCDCF;
h1, h2, h3 {
    color: #E6E6E7;
}
.footer-header {
    margin-bottom: 3rem;
}
.mail-header {
    font-weight: 500;
    font-size: 16px;
    margin-block: 1rem;
}
input {
    padding-block: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
}
.box {
    display: flex;
}
.inp {
    align-items: center;
    gap: 1rem;
    display: flex;
    background-color: var(--grey-six);
    padding-left: .2rem;
    flex-basis: 60%;
}
.icon {
    font-size: 20px;
    padding-top: .65rem;
}
input {
    padding-block: 16px;
    color: var(--grey-two);
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
}
button {
    padding-block: 16px;
    border: none;
    flex-basis: 40%;
    font-weight: 600;
    font-size: 16px;
}
.footer-mid {
    margin-bottom: 2rem;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    h3 {
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 24px;
        color: var(--grey-five);
        margin-bottom: 1rem;
    }
    .mail-address {
        text-transform: none;
    }
}
ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
li {
    color: var(--grey-four);
    a {
        color: var(--grey-four);
    }
}
.contact-list li {
    display: flex;
    gap: 1rem;
    align-items: center;
}
.footer-end {
    text-align: center;
    text-transform: capitalize;
}
@media (min-width: 576px) {
    .footer-header {
        margin-bottom: 3rem;
    }
    .inp {
        flex-basis: 70%;
    }
    button {
        flex-basis: 30%;
    }
    .footer-mid {
        justify-content: space-between;
        gap: 3rem 3rem;
        margin-bottom: 2rem;
    }
}
@media (min-width: 768px) {
    .footer-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;
    }
    .child-one {
        flex-basis: 50%;
    }
    .mail-header {
        margin-block: 0rem 1rem;
    }
    .footer-mid {
        margin-bottom: 5rem;
    }
}
`

export default Footer
