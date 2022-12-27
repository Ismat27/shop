import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import hero from '../assets/images/hero.png'

const Hero = () => {

    const nav = useNavigate()

    return (
        <Wrapper>
            <img className='hero-img' alt='hero-img' src={hero} />
            <div className='overlay'>
                <h1 className='hero-header'>Best Gadgets <br/> Deal</h1>
                <article className='alt-box'>
                    <span className='offer'>Up to 70% Off!</span>
                    <button onClick={() => nav('/shop')} className='btn'>shop now</button>
                </article>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-block: 2rem 3rem;
position: relative;
.hero-img {
    min-height: 250px;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
}
.hero-header {
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #558CEE;
}
.offer {
    display: inline-block;
    font-weight: 700;
    padding: 8px 20px;
    background-color: #A1A8DE;
    border-radius: 27px;
    margin-bottom: 1rem;
    margin-top: .5rem;
}
button {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    display: block;
}
@media (min-width: 576px) {
    
}
@media (min-width: 768px) {
    margin-block: 2rem 3rem;
    .hero-header {
        font-size: 2rem;
    }
    .overlay {
        padding-left: 7.5%;
        padding-top: 2rem;
    }
    .alt-box {
        display: block;
    }
    .offer {
        margin-block: .5rem 1.5rem;
   }
}
@media (min-width: 992px) {
    .hero-header {
        font-size: 4rem;
    }
   .overlay {
        padding-top: 4rem;
   }
   .offer {
        margin-block: 1rem 3.0rem;
   }
}
`

export default Hero
