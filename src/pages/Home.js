import React from 'react'
import styled from 'styled-components'
import RecomProds from '../components/RecomProds'
import Hero from '../components/Hero'
import FlashSales from '../components/FlashSales'
import NewArrivals from '../components/NewArrivals'
import TopRank from '../products/TopRank'
import ClientReviews from '../components/ClientReviews'
import Preloader from '../components/Preloader'
import { useProductContext } from '../contexts/ProductContext'

const Home = () => {
    const {products_loading} = useProductContext()

    if (products_loading) {
        return (
            <Preloader>
                <h1>Loading...</h1>
            </Preloader>
        )
    }
    return (
        <Wrapper>
            <div className='page-center'>
                <Hero />
                <RecomProds />
                <FlashSales />
                <NewArrivals />
                <TopRank />
                <ClientReviews />
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