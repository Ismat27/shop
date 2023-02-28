import React from 'react'
import styled from 'styled-components'

const Preloader = ({children}) => {
  return (
    <Wrapper>
      <div className='preloader-container'>
        {children}
        <div className='loader'>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 35vh;
text-align: center;
display: grid;
place-items: center;
.preloader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.loader {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid var(--icon-color);
  border-top-color: var(--btn-primary-bg);
  animation: loading 1s linear infinite ;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export default Preloader