import React from 'react'
import styled from 'styled-components'
import Countdown from './Countdown'
import FlashSaleProdCard from './FlashSaleProdCard'

const FlashSales = () => {
  return (
    <Wrapper>
        <Countdown />
        <div className='products-group-one'>
            <FlashSaleProdCard />
            <FlashSaleProdCard />
            <FlashSaleProdCard />
            <FlashSaleProdCard />
            <FlashSaleProdCard />
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
@media (min-width: 1200px) {
    
}
`

export default FlashSales