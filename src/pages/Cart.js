import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { useCartContext } from '../contexts/CartContext'
import { formatPrice } from '../helpers'
import { useAuthContext } from '../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Cart = () => {
    const {isLogin} = useAuthContext()
    const {cartItems,total_quantity, total_amount} = useCartContext()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectLogin = () => {
        navigate('/login', {state: {from: {...location, pathname: '/checkout'}}, replace: true })
    }

    if (cartItems.length === 0) {
        return (
            <Wrapper className='page-center'>
                <div className='empty-cart'>
                    <h3 className='capitalize'>your cart is empty</h3>
                    <Link className='btn' to={'/shop'}>shop here</Link>
                </div>
            </Wrapper>
        )
    }

  return (
    <Wrapper className='page-center'>
        <p>
            <Link className='blue' to={'/'}>Home</Link>/Cart
        </p>
        <h1>Cart</h1>
        <main className='bg-white'>
            <section className='products-section'>
                <h2 className='capitalize comp-header'>
                    <span>product</span>
                    <span>quantity</span>
                    <span>price</span>
                </h2>
                <div className='cart-items'>
                    {
                        cartItems.map((item) => {
                            return (
                                <CartItem 
                                    key={item.id}
                                    data={item}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='summary-section'>
                <h2 className='capitalize comp-header'>
                    cart summary
                </h2>
                <div className='summary-box'>
                    <p className='bold'>
                        <span>Sub total</span>
                        <span>{formatPrice(total_amount)}</span>
                    </p>
                    <p className='bold'>
                        <span>Delivery</span>
                        <span>--</span>
                    </p>
                    <p className='bold'>
                        <span>Total</span>
                        <span>{formatPrice(total_amount)}</span>
                    </p>
                </div>
            </section>
            <section className='other'>
            {
                isLogin?
                <Link to={'/checkout'} className='capitalize btn checkout-btn'>Checkout ({formatPrice(total_amount)}) </Link>:
                <button onClick={redirectLogin} className='capitalize btn checkout-btn'>login to checkout ({formatPrice(total_amount)})</button>
            }
                <p>
                    <Link to={'/shop'} className='bold blue'>Continue Shopping</Link>
                </p>
            </section>
        </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.empty-cart {
    height: 35vh;
    padding-top: 10vh;
    text-align: center;
    h3 {
        margin-bottom: 2rem;
    }
    a {
        display: inline-block;
    }
}
margin-block: 1rem 3rem;
h1 {
    margin-block: 1rem;
    font-weight: 600;
    font-size: 18px;
}
h2 {
    font-size: 16px;
    font-weight: 600;
    border-radius: 0;
}
main {
    margin-top: 1rem;
}
.products-section {
    .comp-header {
        display: grid;
        grid-template-columns: 40% 30% 30%;
        gap: .45rem;
    }
}
.cart-items {
    display: grid;
    row-gap: 1rem;
    padding: 1rem 12px;
}
.summary-box {
    padding: 12px 16px; 
    display: grid;
    row-gap: 1rem;
    p {
        display: flex;
        justify-content: space-between;
    }
}
.other {
    p {
        text-align: center;
        padding-block: 2rem;
    }
}
.checkout-btn {
    display: block;
    font-family: 'Montserrat';
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    width: 100%;
}
@media (min-width: 576px) {
    h1 {
        font-size: 1.5rem;
    }
    .products-section {
        .comp-header {
            display: grid;
            grid-template-columns: 50% 25% 25%;
        }
    }
    .cart-items {
        padding: 1rem .5rem;
    }
}
@media (min-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    .products-section {
        .comp-header {
            display: grid;
            grid-template-columns: 60% 20% 20%;
        }
    }
    .cart-items {
        padding: 1rem;
    }
}
@media (min-width: 992px) {
    h2, .checkout-btn {
        font-size: 1.5rem;
    }
    .products-section {
        .comp-header {
            display: grid;
            grid-template-columns: 60% 25% 15%;
        }
    }
}
`
export default Cart