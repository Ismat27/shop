import React from 'react'
import styled from 'styled-components'
import RecomProds from '../components/RecomProds'
import Hero from '../components/Hero'
const Home = () => {
  return (
        <Wrapper>
            <div className='page-center'>
                <Hero />
                <RecomProds />
            </div>
        </Wrapper>
  )
}

const Wrapper = styled.section`
margin-block: 1.5rem 4rem;

@media (min-width: 576px) {
    
}
@media (min-width: 768px) {
    margin-block: 2rem 6rem;
    
}
@media (min-width: 992px) {
   
}
`

export default Home