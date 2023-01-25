import CardOne from "./CardOne";
import CompHeader from "../components/CompHeader";
import styled from "styled-components";
import { useProductContext } from "../contexts/ProductContext";

const TopRank = () => {
  const { 
    products_loading, 
    products_loading_error: error, 
    top_ranked 
  } = useProductContext()

  if (products_loading) {
    return (
      <Wrapper>
        <div className='no-products'>
          <h3>loading...</h3>
        </div>
      </Wrapper>
    )
  }

  if (error) {
    return (
      <Wrapper>
        <div className='no-products'>
          <h3>an error occured pls reload...</h3>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
        <CompHeader 
            title={'top ranked'}
        />
        <div className="products-group-one">
            {
              top_ranked.map(item => {
                return (
                  <CardOne key={item.id} data={item} />
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
export default TopRank