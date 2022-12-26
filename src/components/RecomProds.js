import React from 'react'
import styled from 'styled-components'
import RecomProdCard from './RecomProdCard'

const RecomProds = () => {
  return (
    <Wrapper>
        <RecomProdCard 
            data={{}}
        />
        <RecomProdCard 
            data={{}}
        />
        <RecomProdCard 
            data={{}}
        />
        <RecomProdCard 
            data={{}}
        />
        <RecomProdCard 
            data={{}}
        />
        <RecomProdCard 
            data={{}}
        />
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: grid;
gap: 1rem;
justify-content: center;
background-color: var(--white);
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
padding: .7rem 1.34rem;

@media (min-width: 576px) {
    
}
@media (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
    justify-content: stretch;
    row-gap: 2rem;
    column-gap: .5rem;
    padding: 1rem;
}
@media (min-width: 992px) {
    grid-template-columns: repeat(3, auto);
    column-gap: .5rem;
    padding: .7rem 1rem;
}
`

export default RecomProds