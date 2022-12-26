import React from 'react'
import styled from 'styled-components'
import iphone from '../assets/images/iphone.png'
import Emporio from '../assets/images/Emporio.png'
import { FaStar } from 'react-icons/fa'

const RecomProdCard = ({data}) => {
    const {
        name,
        image,
        price,
        discountedPrice,
        discount,
        rating,
        reviews
    } = data
  return (
    <Wrapper className='prod-card'>
        <div className='prod-box'>
            <div className='prod-img-box'>
                <img src={image || Emporio} />
            </div>
            <div className='prod-info'>
                <h3 className='prod-name'>{name || 'Apple iPhone 12 Pro Max'}</h3>
                <p className='prices'>
                    <span className='actual-price'>${price || '1,169.60'}</span>
                    <span className='discounted-price'>${discountedPrice || '899.69'}</span>
                </p>
                <p className='prod-stats'>
                    <span className='star'><FaStar/> {rating || 4.8}</span>
                    <span className='reviews'>| {reviews || 26} Reviews</span>
                </p>
            </div>
        </div>
        <div className='discount-percent'>{discount || 30}%</div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
position: relative;
background-color: var(--white);
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04);
border-radius: 4px;
max-width: 380px;
.prod-box {
    display: flex;
    gap: .5rem;
    align-items: center;
}
.prod-img-box {
    padding-block: .5rem;
    padding-left: .5rem;
}
.prod-info {
    padding-top: 2.5rem;
    padding-bottom: 2rem;
    padding-right: .5rem;
}
.prod-name {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: var(--black-text-color);
}
.prod-stats, .prices {
    display: flex;
    gap: .8rem;
    align-item: center;
}
.prices {
    margin-block: 1.0rem;
}
.actual-price {
    text-decoration: line-through;
    color: var(--grey-three);
}
.discounted-price {
    font-weight: 600;
    font-size: 16px;
}
.star{
    font-weight: 600;
    svg {
        color: #F6CA2E;
    }
}
.reviews {
    color: var(--grey-three);
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

export default RecomProdCard