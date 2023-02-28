import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { formatStr, formatPrice } from '../helpers'
import { Link } from 'react-router-dom'

const RecomProdCard = ({data}) => {
    const {
        title,
        thumbnail,
        price,
        discountPercentage,
        rating,
        reviews,
        id
    } = data
    const discount = (discountPercentage / 100) * price
    const sale_price = price - discount
  return (
    <Wrapper className='prod-card'>
        <Link to={`/products/${id}`}>
            <div className='prod-box'>
                <div className='prod-img-box'>
                    <img alt={title} src={thumbnail} />
                </div>
                <div className='prod-info'>
                    <h3 className='prod-name'>{formatStr(title)}</h3>
                    <p className='prices'>
                        <span className='actual-price'>{formatPrice(price)}</span>
                        <span className='discounted-price'>{formatPrice(sale_price)}</span>
                    </p>
                    <p className='prod-stats'>
                        <span className='star'><FaStar/> {rating || 0}</span>
                        <span className='reviews'>| {reviews || 0} Reviews</span>
                    </p>
                </div>
            </div>
        </Link>
        <div className='discount-percent'>{discountPercentage || 30}%</div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
position: relative;
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
    img {
        width: 148px;
        height: 140px;
    }
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
    align-items: center;
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
    color: var(--black-text-color);
}
.star{
    font-weight: 600;
    color: #030710;
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