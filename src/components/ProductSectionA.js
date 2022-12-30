import styled from "styled-components";
import CardOne from "../products/CardOne";
import CompHeader from "./CompHeader";

export const Products = ({title}) => {

    return (
        <Wrapper>
            <CompHeader
                title={title}
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