import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiCheckCircle } from 'react-icons/fi'

const OrderSuccessful = ({completeOrder}) => {
  return (
    <Wrapper>
        <div className='container'>
            <article>
                <div>
                    <h2>Great Choice</h2>
                    <p title='order complete' className='confirm'>
                        <FiCheckCircle />
                    </p>
                    <h3>Order Successful</h3>
                </div>
                <div>
                    <p>
                        <small>Your order number</small>
                    </p>
                    <h4>#12789</h4>
                </div>
                <div>
                    <p>Estimated time of delivery</p>
                    <h4>Friday 24, July 2022</h4>
                </div>
                <div>
                    <button onClick={completeOrder}>
                        <Link to={'/shop'}>Continue shopping</Link>
                    </button>
                </div>
            </article>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: rgba(0, 0, 0, 0.16);
position: fixed;
top: 0;
left: 0;
min-height: 100vh;
width: 100vw;
display: grid;
place-items: center;
text-align: center;
z-index: 9999;
h2 {
    color: var(--btn-primary-bg);
}
h3 {

}
h4 {
    margin-top: 1rem;
    /* sophis secondary */
    color: #6832A5;
}
.confirm {
    margin-block: 2rem 1rem;
}
svg {
    font-size: 5rem;
    color: var(--btn-primary-bg);
}
.container {
    width: 90%;
    margin: auto;
    max-width: 400px;
}
article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    background: #FFFFFF;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
}
article > * {
    width: 100%;
}
button {
    background-color: var(--btn-primary-bg);
    display: block;
    width: 100%;
    border: none;
    padding: 1rem 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.2rem;
    a {
        color: var(--white);
    }
}
`

export default OrderSuccessful