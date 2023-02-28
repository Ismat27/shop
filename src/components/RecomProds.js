import React from 'react'
import styled from 'styled-components'
import RecomProdCard from './RecomProdCard'
import CompHeader from './CompHeader'
import { useProductContext } from '../contexts/ProductContext'

const RecomProds = () => {
    const {recommended_products} = useProductContext()
    
    return (
        <Wrapper>
            <CompHeader 
                title={'recommended'}
            />
            <div className='bg-white products'>
                {
                    recommended_products.map((item)=> {
                        return (
                            <RecomProdCard key={item.id} data={item} />
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.products {
    display: grid;
    gap: 1rem;
    justify-content: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    padding: .7rem 1.34rem;
}

@media (min-width: 576px) {
    
}
@media (min-width: 768px) {
    .products {
        grid-template-columns: repeat(2, auto);
        justify-content: stretch;
        row-gap: 2rem;
        column-gap: .5rem;
        padding: 1rem;
    }
}
@media (min-width: 992px) {
    .products {
        grid-template-columns: repeat(3, auto);
        column-gap: .5rem;
        padding: .7rem 1rem;
    }
}
`

export default RecomProds