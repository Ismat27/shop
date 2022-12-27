import React from 'react'
import styled from 'styled-components'
import CompHeader from './CompHeader'
import RecomProdCard from './RecomProdCard'
import samsung from '../assets/images/Samsung.png'

const NewArrivals = () => {
  return (
    <Wrapper>
        <CompHeader 
            title={'new arrivals'}
        />
        <div className='products-group-two'>
            <RecomProdCard 
                data={{
                    image: samsung
                }}
            />
            <RecomProdCard 
                data={{
                    image: samsung
                }}
            />
            <RecomProdCard 
                data={{
                    image: samsung
                }}
            />
            <RecomProdCard 
                data={{
                    image: samsung
                }}
            />
            <RecomProdCard 
                data={{
                    image: samsung
                }}
            />
            <RecomProdCard 
                data={{
                    image: samsung
                }}
            />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 3rem;

@media (min-width: 576px) {
    
}
@media (min-width: 768px) {
    
}
@media (min-width: 992px) {
    
}
`

export default NewArrivals