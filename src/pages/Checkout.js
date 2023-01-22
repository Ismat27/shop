import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import AddressFields from '../components/AddressFields'
import useCheckout from '../hooks/useCheckout'
import { useAuthContext } from '../contexts/AuthContext'
const Checkout = () => {

    const {isLogin} = useAuthContext()

    const {
        sameAddress, setSameAddress,
        billingAddress, shippingAddress,
        editBillingAdrress, editShippingAdrress,
        checkoutSubmit
    } = useCheckout()

    if (!isLogin) {
        return (
            <Navigate to={'/login'} replace/>
        )
    }

  return (
    <Wrapper className='page-center'>
        <p className='bold'>
            <Link to={'/'} className='blue'>Home/</Link>
            <Link to={'/cart'} className='blue'>Cart/</Link>
            Checkout
        </p>
        <main>
            <h1>Checkout</h1>
            <div className='bg-white page-content'>
                <p className='capitalize bold page-info'>
                    <span>total</span>
                    <span className='blue'>$3,000</span>
                </p>
                <form onSubmit={checkoutSubmit}>
                    <div className='address billing-address'>
                        <h2 className='capitalize comp-header bold'>
                            billing address
                        </h2>
                        <AddressFields data={billingAddress} editFunction={editBillingAdrress}/>
                    </div>
                    <div className='address shipping-address'>
                        <h2 className='capitalize comp-header bold'>
                            shipping address
                        </h2>
                        <div className='address-check'>
                            <label>
                                <input 
                                    type={'checkbox'} 
                                    value={sameAddress}
                                    onChange={()=>setSameAddress(!sameAddress)}
                                />
                                same as billing address
                            </label>
                        </div>
                        <AddressFields data={shippingAddress} editFunction={editShippingAdrress}/>
                    </div>
                    <button className='btn bold submit-btn'>
                        Confrim Order
                    </button>
                </form>
                <p className='bold last-p'>
                    <Link to={'/shop'} className='blue'>continue shopping</Link>
                </p>
            </div>
        </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-block: 1.5rem 3rem;
h1 {
    margin-block: 2rem 1rem;
}
main {
    max-width: 714px;
    margin: auto;
}
.page-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    .blue {
        font-size: 2rem;
    }
}
.page-content {
    padding: 2rem 1rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
}
h2 {
    font-size: 16px;
    font-weight: 600;
    border-radius: 0;
    color: var(--btn-primary-bg);
}
.address-fields {
    margin-top: 1rem;
}
.address {
    margin-bottom: 2rem;
}
.address-check {
    margin-top: 1rem;
    padding-left: 1rem; 
    label {
        display: flex;
        gap: 1rem;
    }
}
button {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1rem;
}
.edit-btn {
    padding-block: .5rem;
}
.submit-btn {
    width: 100%;
}
.last-p {
    text-align: center;
    padding-block: 2rem;
}
@media (min-width: 576px) {
    .address-check {
        padding-left: 2rem; 
    }
}
`

export default Checkout