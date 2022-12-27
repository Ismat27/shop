import React from 'react'
import styled from 'styled-components'
import ipod from '../assets/images/ipod.png'

const CardOne = ({image,  children }) => {
  return (
    <Wrapper className='prod-card'>
        <div className='prod-box'>
            <div className='prod-img-box'>
                <img alt='product' src={image || ipod} />
            </div>
            <p className='prod-name'>Canon EOS Rebel T3i ..</p>
            <p className='prices'>
                <span className='actual-price'>$350</span>
                <span className='discounted-price'>$332.5</span>
            </p>
            {children}
        </div>
        <div className='discount-percent'>5%</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
background-color: var(--white);
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04);
border-radius: 4px;
padding: .5rem;
padding-bottom: 1.5rem;
.prod-img-box {
    text-align: center;
    margin-bottom: .5rem;
}
.prod-name {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: var(--black-text-color);
}
.prices {
    margin-block: .5rem;
    display: flex;
    gap: .8rem;
    align-item: center;
    font-weight: 700;
}
.actual-price {
    text-decoration: line-through;
    color: var(--grey-three);
}
.remainder {
    margin-bottom: .35rem;
    color: var(--grey-three)
}
.range {
    height: 8px;
    position: relative;
    background-color: #ccc3a0;
    border-radius: 8px;
    div {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 8px;
        background-color: #F6CA2E;
    }
}
.discount-percent {
    position: absolute;
    padding: 8px;
    right: 0;
    top: 0px;
    background-color: #6832A5;
    color: var(--white);
    border-radius: 4px;
}
`

export default CardOne
