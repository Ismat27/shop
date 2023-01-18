import React from 'react'
import styled from 'styled-components'
import laptop from '../assets/images/apple_laptop.png'
import { formatPrice } from '../helpers'
import { useCartContext } from '../contexts/CartContext'

const CartItem = ({data}) => {
    const { removeFromCart } = useCartContext()
    const {
        image, name,
        salePrice, stockPrice,
        qty,
        quantity,
        price,
        id
    } = data
    return (
        <Wrapper className=''>
            <div className='product'>
                <img src={image || laptop} />
                <div>
                    <h3 className='capitalize prod-name'>{name || 'Name of Laptop and few specs'}</h3>
                </div>
            </div>
            <div className='qty'>
                <button className='btn'>-</button>
                <span>{quantity || 2}</span>
                <button className='btn'>+</button>
            </div>
            <div>
                <div className='price'>
                    <p className='sale-price'>{formatPrice(price) || 450}</p>
                    <p className='stock-price'>${stockPrice || 500}</p>
                </div>
                <button onClick={() => removeFromCart(id)} className='btn remove-btn'>Remove -</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
padding: 10px 0px;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04);
display: grid;
align-items: start;
gap: .45rem;
padding: 12px 16px;
grid-template-columns: 40% 30% 30%;
.prod-name {
    font-size: .7rem;
    font-weight: 600;
}
.qty {
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-direction: column-reverse;
    button {
        border-radius: 3px;
        padding: 4px;
        width: 32px;
        height: 32px;
        border: none;
        background-color: var(--icon-color);
        font-size: 1rem;
    }
}
.remove-btn {
    background-color: var(--white);
    border: 2px solid #2A6FEA;
    color: #2A6FEA;
    padding: 8px 4px;
    font-weight: 600;
    font-size: 14px;
    max-width: 200px;
}
.price {
    margin-bottom: 1rem;
    .sale-price {
        font-size: 1.5rem;
        font-weight: 600;
    }
    .stock-price {
        font-size: 14px;
        font-weight: 500;
        text-decoration: line-through;
    }
}
@media (min-width: 576px) {
    grid-template-columns: 50% 25% 25%;
    .prod-name {
        font-size: 1rem;
    }
    .qty {
        gap: 1rem;
        flex-direction: row;
        button {

        }
    }
    .remove-btn {
        padding: 8px 16px;
        font-size: 16px;
    }
}
@media (min-width: 768px) {
    grid-template-columns: 60% 20% 20%;

    .product {
        display: flex;
        gap: 1rem;
    }
}
@media (min-width: 992px) {
    grid-template-columns: 60% 25% 15%;
}
`

export default CartItem