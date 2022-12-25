import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'
import { HiShoppingCart, HiHeart } from 'react-icons/hi'
import Hamburger from './Hamburger'


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
    <Wrapper>
        <div className='page-center content'>
            <div className='box-one'>
                <Link to={'/'}>
                    <h1>
                        <span>Smart</span> <span>Mart</span>
                    </h1>
                </Link>

                <div className='box-two'>
                    <ul className='idk'>
                        <li className='cart-nav'>
                            <Link className='nav-link' to={'/cart'}>
                                <span className='pop-up'>
                                    <HiShoppingCart />
                                    <span>5</span>
                                </span>
                            </Link>
                        </li>
                        <li className='cart-nav'>
                            <Link className='nav-link' to={'/wishlist'}>
                                <span className='pop-up'>
                                    <span>24</span>
                                    <HiHeart />
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <Hamburger 
                        isOpen={menuOpen}
                        toggleFunction={toggleMenu}
                    />
                </div>
            </div>

            <Search />

            <ul className='nav-list'>
                <li className='cart-nav'>
                    <Link className='nav-link' to={'/cart'}>
                        <span className='pop-up'>
                            <HiShoppingCart />
                            <span>5</span>
                        </span>
                        cart
                    </Link>
                </li>
                <li className='cart-nav'>
                    <Link className='nav-link' to={'/wishlist'}>
                        <span className='pop-up'>
                            <span>24</span>
                            <HiHeart />
                        </span>
                        wishlist
                    </Link>
                </li>
            </ul>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.header`
padding-block: 1rem 2rem;
background-color: var(--white);
.content {
    width: 90%;
    margin: auto;
}
.box-one, .box-two {
    display: flex;
    justify-content: space-between;
}
.box-two {
    gap: 2rem;
    align-items: center;
}
.idk {
    display: flex;
    align-items: center;
    gap: .5rem;
}
.nav-list {
    display: none;
}
.pop-up {
    position: relative;
    span {
        position: absolute;
        top: -5px;
        right: 2px;
        background-color: #6832A5;
        padding: 2px 4px;
        border-radius: 50%;
        color: var(--white);
    }
}
.nav-link {
    text-transform: capitalize;
    display: flex;
    color: var(--black);
    font-weight: 600;
    svg {
        color: #AAC5F7;
        font-size: 40px;
    }
}
@media (min-width: 768px) {
    padding-block: .5rem 1rem;
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu, .idk {
        display: none;
    }
    .nav-list {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    .nav-link {
        flex-direction: column;
    }
}
@media (min-width: 992px) {
    ul {
        gap: 1rem;
    }
}
`

export default Header