import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductContext } from '../contexts/ProductContext'
import { useCartContext } from '../contexts/CartContext'
import { formatPrice } from '../helpers'

const Shop = () => {

    const {addToCart} = useCartContext()
    const {current_products} = useProductContext()

    if (current_products.length === 0) {
        return (
            <Wrapper>
                <div className='no-products'>
                    <h1>
                        no products
                    </h1>
                </div>
            </Wrapper>
        )
    }

  return (
    <Wrapper className=''>
        <div className='products-container page-center'>
            <div className='section-header'>
                <h1 className='category-name'>ProductsList</h1>
            </div>
            <div className='bg-white products'>
                {
                    current_products.map((product, index) => {
                        const {name, price, image, id} = product
                        return (
                            <article className='product-card' key={index}>
                                <Link to={`/products/${id}`}>
                                    <img className='product-img' src={image} alt={name} />
                                </Link>
                                <div>
                                    <p className='info'>
                                        <span className='name'>{name}</span>
                                        <span className='price'>{formatPrice(price)}</span>
                                    </p>
                                    <button 
                                        className='add'
                                        onClick={() => addToCart(id, product)}
                                    >
                                    Add to bag
                                    </button>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.no-products {
    padding-block: 2rem;
    text-align: center;
}
margin-block: 1.5rem 4rem;
.section-header {
    margin-bottom: 2rem;
}
.category-name {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: var(--black);
}
.products {
    display: grid;
    gap: 1rem;
    justify-content: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    padding: .7rem 1.34rem
}
.product-card {
    max-width: 257px;
    padding: .5rem 1rem;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04);
    transition: all 0s;
}
.product-card:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), 0px 0px 6px rgba(0, 0, 0, 0.04);
}
.add {
    background-color: var(--btn-primary-bg);
    display: block;
    width: 100%;
    border: none;
    padding: .8rem 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 32px;
    color: var(--white);
}
img {
    width: 225px;
    height: 225px;
}
.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 1rem;
}
@media (min-width: 576px) {
    .products {
        grid-template-columns: repeat(2, auto);
        row-gap: 2rem;
        padding: 1rem;
    }
}
@media (min-width: 768px) {
    margin-block: 2rem 6rem;
    .products {
        grid-template-columns: repeat(3, auto);
    }
}
@media (min-width: 992px) {
    .products {
        grid-template-columns: repeat(4, auto);
        column-gap: 2rem;
        padding: .7rem 1rem;
    }
}
`

export default Shop