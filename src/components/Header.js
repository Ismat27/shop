import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'
import { HiShoppingCart } from 'react-icons/hi'
import Hamburger from './Hamburger'
import { useCartContext } from '../contexts/CartContext'
import Category from './Category'

const Header = () => {

    const catContRef = useRef(null)
    const catListRef = useRef(null)

    const {total_quantity} = useCartContext()

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const listHeight = catListRef.current.getBoundingClientRect().height
        if (menuOpen) {
            catContRef.current.style.height = `${listHeight}px`
        }
        else {
            catContRef.current.style.height = 0
        }
    }, [menuOpen])

    return (
    <Wrapper className='bg-white'>
        <div className='page-center content'>
            <div className='box-one'>
                <Link to={'/'}>
                    <h1 className='logo-text'>
                        <span className='black'>Smart</span> <span className='blue'>Mart</span>
                    </h1>
                </Link>

                <div className='box-two'>
                    <ul className='idk'>
                        <li className='cart-nav'>
                            <Link className='nav-link' to={'/cart'}>
                                <span className='pop-up'>
                                    <HiShoppingCart />
                                    <span>{total_quantity}</span>
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
                            <span>{total_quantity}</span>
                        </span>
                        cart
                    </Link>
                </li>
            </ul>
        </div>
        <Category contRef={catContRef} listRef={catListRef}/>
    </Wrapper>
    )
}

const Wrapper = styled.header`
position: sticky;
top: 0;
z-index: 1000;
padding-block: 1rem 0rem;
.category-container {
    overflow: hidden;
}
.logo-text {
    font-size: 1.2rem;
}
.box-one, .box-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box-two {
    gap: 2rem;
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
@media (min-width: 576px) {
    .logo-text {
        font-size: 2rem;
    }
}
@media (min-width: 768px) {
    padding-block: .5rem 0rem;
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
    .category-container {
        height: auto !important;
    }
}
@media (min-width: 992px) {
    ul {
        gap: 1rem;
    }
}
`

export default Header