import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../contexts/ProductContext'

const Category = () => {
    const { product_categories } = useProductContext()
    return (
        <Wrapper>
            <ul className='page-center'>
                <li>all</li>
                {
                    product_categories.map(category => {
                        return (
                            <li key={category}>{category}</li>
                        )
                    })
                }
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: var(--btn-primary-bg);
margin-top: 1rem;
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: .5rem 1rem;
    text-transform: capitalize;
    color: white;
    padding-block: .5rem;
}
li {
    cursor: pointer;
}
`

export default Category