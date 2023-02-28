import styled from 'styled-components'
import CompHeader from './CompHeader'
import RecomProdCard from './RecomProdCard'
import { useProductContext } from '../contexts/ProductContext'

const NewArrivals = () => {
  const {new_arrivals} = useProductContext()

  return (
    <Wrapper>
        <CompHeader 
            title={'new arrivals'}
        />
        <div className='products-group-two'>
            {
                new_arrivals.map(item => {
                    return (
                        <RecomProdCard key={item.id} data={item} />
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
`

export default NewArrivals