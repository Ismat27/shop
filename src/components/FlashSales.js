import React from 'react'
import styled from 'styled-components'
import Countdown from './Countdown'
import FlashSaleProdCard from './FlashSaleProdCard'
import { useProductContext } from '../contexts/ProductContext'

const FlashSales = () => {
  const {flash_sales, products_loading} = useProductContext()

  if (products_loading) {
    return (
      <Wrapper>
        <div className='no-products'>
          <h3>loading...</h3>
        </div>
      </Wrapper>
    )
  }

  if (flash_sales.length < 1) {
    return ''
  }

  return (
    <Wrapper>
        <Countdown />
        <div className='products-group-one'>
          {
            flash_sales.map(item => {
              return (
                <FlashSaleProdCard key={item.id} data={item} />
              )
            })
          }
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