import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ProductsList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setErorr] = useState(false)

    useEffect(() => {
        axios('http://localhost:8000/api/products/')
        .then(response => {
            setProducts(response.data)
            setLoading(false)
            setErorr(false)
        }
            )
        .catch(error => {
            setLoading(false)
            setErorr(true)
            console.log(error);
        })
    }, [])

    if (loading) {
        return (
            <h1>
                loading
            </h1>
        )
    }

    if (error) {
        return (
            <h1>
                unable to load products
            </h1>
        )
    }

    if (products.length <= 0) {
        return (
            <h1>
                no products
            </h1>
        )
    }

  return (
    <Wrapper>
        <div>
            <h1>ProductsList</h1>
            <div className='products'>
                {
                    products.map((product, index) => {
                        const {name, price, image} = product
                        return (
                            <article className='product-card' key={index}>
                                <img className='product-img' src={image} alt={name} />
                                <p className='info'>
                                    <span className='name'>{name}</span>
                                    <span className='price'>{price}</span>
                                </p>
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
.products {
    display: grid;
    gap: 10px;
    justify-content: center;
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
}
@media (min-width: 576px) {
    .products {
        grid-template-columns: repeat(2, auto)
    }
}
@media (min-width: 768px) {
    .products {
        grid-template-columns: repeat(3, auto)
    }
}
@media (min-width: 992px) {
    .products {
        grid-template-columns: repeat(4, auto)
    }
}
`

export default ProductsList