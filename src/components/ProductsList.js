import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ProductsList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios('http://localhost:8000/api/products/')
        .then(response => {
            console.log(response.data);
            setProducts(response.data)
        }
            )
        .catch(error => {
            console.log(error);
        })
    }, [])

    if (products.length <= 0) {
        <h1>
            no products
        </h1>
    }

  return (
    <div>
        <h1>ProductsList</h1>
        <div className='products'>
            {
                products.map((product, index) => {
                    const {name, price, image} = product
                    return (
                        <article key={index}>
                            <img src={image} alt={name} />
                            <p>
                                <span>{name}</span>
                                <span>{price}</span>
                            </p>
                        </article>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductsList