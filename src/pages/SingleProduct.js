import React, { useState } from 'react'
import styled from 'styled-components'
import { HiShoppingCart } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/ProductContext'

const SingleProduct = () => {
    const {productId} = useParams()
    const {current_products} = useProductContext()
    const product = current_products.find(item => item.id == productId)
    const { name, image, desc, id, price, } = product
    const [quantity, setQuantity] = useState(1)
    const increaseQuantity = () => {
        setQuantity(prev => {
            if (prev === 10) { // to be changed to number in stock
                return prev
            }
            return prev + 1
        })
    }
    const decreaseQuantity = () => {
        setQuantity(prev => {
            if (prev === 1) {
                return prev
            }
            return prev - 1
        })
    }
    return (
    <Wrapper>
        <article className='bg-white info'>
            <div className='imgs-box'>
                <img className='display-img' src={image} />
                <div className='other-imgs'>

                </div>
            </div>
            <div className='details'>
                <h1 className='bold capitalize product-name'>{desc || name}</h1>
                <p className='rating-review'>
                    <span className='bold star'></span>
                    <span className='review'></span>
                </p>
                <p className='prices'>
                    <span className='bold sale-price'>{price}</span>
                    <span className='stock-price'></span>
                </p>
                <div className='qty-toggle'>
                    <p className='bold'>Quantity</p>
                    <div className='toggle-btns'>
                        <button onClick={decreaseQuantity} className='bold toggle-btn'>-</button>
                        <span className='bold qty'>{quantity}</span>
                        <button onClick={increaseQuantity} className='bold toggle-btn'>+</button>
                    </div>
                </div>
                <button className='btn cart-btn'>
                    <HiShoppingCart />
                    Add to Cart
                </button>
            </div>
        </article>
    </Wrapper>
    )
}

const Wrapper = styled.section`
.info {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    padding: 1rem;
}
.imgs-box {
    background-color: #FAFAFA;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04);
    padding: 1rem;
    max-width: 394px;
}
.toggle-btns {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-block: .5rem .8rem;
}
.toggle-btn {
    padding: 2px 8px;
    width: 40px;
    height: 44px;
    background-color: var(--component-header-bg);
    color: var(--black-text-color);
    border: none;
}
.cart-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    svg {
        font-size: 2rem;
        color: white;
    }
}
`

export default SingleProduct