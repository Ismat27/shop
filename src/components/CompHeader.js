import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

const CompHeader = ({title}) => {
  return (
    <Wrapper className='comp-header'>
        <h2 className='capitalize'>{title}</h2>
        <div>
            <span>see all</span>
            <span className='icon'><BsArrowRight /></span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
div {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--btn-primary-bg);
    font-weight: bold;
}
.icon {
    padding-top: .4rem;
}
svg {
    font-weight: bold;
    color: var(--btn-primary-bg);
}
`

export default CompHeader

