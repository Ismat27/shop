import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

const CompHeader = ({title}) => {
  return (
    <Wrapper>
        <h2 className='capitalize'>{title}</h2>
        <div>
            <span>see all</span>
            <span className='icon'><BsArrowRight /></span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: #D4E2FB;
border-radius: 4px;
display: flex;
justify-content: space-between;
${'' /* align-items: center; */}
padding: 12px 16px;
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

