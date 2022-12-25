import React from 'react'
import styled from 'styled-components'
import { GrFormSearch } from 'react-icons/gr'

const Search = () => {
  return (
    <Wrapper>
        <div className='box'>
            <div className='inp'>
                <span className='icon'>
                    <GrFormSearch />
                </span>
                <input 
                    placeholder='search for everything'
                />
            </div>
            <button className='btn'>Search</button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
flex-basis: 50%;
.box {
    display: flex;
}
.inp {
    align-items: center;
    gap: 1rem;
    display: flex;
    background: #E6E6E7;
    padding-left: .2rem;
    flex-basis: 60%;
}
.icon {
    font-size: 20px;
}
input {
    padding-block: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
}
button {
    padding-block: 16px;
    border: none;
    flex-basis: 40%;
}
@media (min-width: 576px) {
    .inp {
        flex-basis: 70%;
    }
    button {
        flex-basis: 30%;
    }
}
`

export default Search