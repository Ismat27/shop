import CardOne from "./CardOne";

import CompHeader from "../components/CompHeader";
import styled from "styled-components";

import React from 'react'

const TopRank = () => {
  return (
    <Wrapper>
        <CompHeader 
            title={'top ranked'}
        />
        <div className="products-group-one">
            <CardOne>
            </CardOne>
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
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
export default TopRank