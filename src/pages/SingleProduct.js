import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HiShoppingCart } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/ProductContext'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'

const SingleProduct = () => {
    const {productId} = useParams()
    const {
        fetchSingleProduct,
        single_product_loading,
        single_product_loading_error,
        single_product:product
    } = useProductContext()

    const { name, image, desc, price, } = product
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
    useEffect(() => {
        fetchSingleProduct(productId)
    }, [productId, fetchSingleProduct])

    if (single_product_loading) {
        return (
            <Wrapper>
                <h3>product loading...</h3>
            </Wrapper>
        )
    }

    if (single_product_loading_error) {
        return (
            <Wrapper>
                <h3>unable to fetch product</h3>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <div className='page-center'>
                <article className='bg-white info'>
                    <div className='imgs-box'>
                        <img className='display-img' alt={name} src={image} />
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
                            <span className='bold sale-price'><BsCurrencyDollar />{price}</span>
                            <span className='stock-price'></span>
                        </p>
                        <div className='qty-toggle'>
                            <p className='bold'>Quantity</p>
                            <div className='toggle-btns'>
                                <button id='decrease-button' title='decrease' onClick={decreaseQuantity} className='bold toggle-btn'><FiMinus className='bold' /></button>
                                <span className='bold qty'>{quantity}</span>
                                <button id='increase-button' title='increase' onClick={increaseQuantity} className='bold toggle-btn'><FiPlus className='bold' /></button>
                            </div>
                        </div>
                        <button className='btn cart-btn'>
                            <HiShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                </article>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top: 3rem;
margin-bottom: 5rem;
.info {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    max-width: 880px;
}
.imgs-box {
    background-color: #FAFAFA;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04);
    padding: 1rem;
    max-width: 394px;
    width: 100%;
    text-align: center;
}
.details {
  width: 100%;
}
.rating-review {
    margin-block: 1rem;
}
.prices {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    span {
        display: flex;
        align-items: center;
    }
}
.sale-price {
    svg {
        font-weight: bold;
        color: black;
    }
}
.toggle-btns {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-block: .5rem .8rem;
}
.toggle-btn {
    display: grid;
    place-items: center;
    width: 40px;
    height: 44px;
    background-color: var(--component-header-bg);
    color: var(--black-text-color);
    border: none;
    cursor: pointer;
    svg {
        font-size: 1.2rem;
        color: var(--black-text-color);
    }
}
.qty {
    font-size: 1.5rem;
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
@media (min-width: 768px) {
    .info {
        display: flex;
        gap: .5rem;
    }
    .product-name, .sale-price, .qty {
        font-size: 1.5rem;
    }
}
`
export default SingleProduct