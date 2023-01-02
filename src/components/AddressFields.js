import React, { useRef } from 'react'
import styled from 'styled-components'
import {BsPencil} from "react-icons/bs"

const AdressFields = ({data, editFunction}) => {

    const {
        first_name,
        last_name,
        email,
        street,
        state,
        country
    } = data

    const editRef = useRef(null)

    return (
    <Wrapper className='address-fields'>
        <div className='fields'>
            <div className='fullname dual'>
                <input 
                    placeholder='First Name'
                    name='first_name'
                    ref={editRef}
                    value={first_name}
                    onChange={editFunction}
                />
                <input 
                    placeholder='Last Name'
                    name='last_name'
                    value={last_name}
                    onChange={editFunction}
                />
            </div>
            <input 
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={editFunction}
            />
            <input 
                placeholder='Street'
                name='street'
                value={street}
                onChange={editFunction}
            />
            <div className='dual'>
                <select placeholder='Country' name='country' value={country} onChange={editFunction}>
                    <option>Country</option>
                </select>
                <select placeholder='State' name='state' value={state} onChange={editFunction}>
                    <option>State</option>
                </select>
            </div>
        </div>
        <div className='last-div'>
            <button
                type='button' 
                className='btn edit-btn'
                onClick={() => editRef.current.focus()}
            >
                Edit <BsPencil />
            </button>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.article`
border-left: 1px solid var(--grey-four);
padding-left: 1rem;
.fields {
    display: grid;
    row-gap: 1rem;
    max-width: 456px;
}
.dual {
    display: flex;
    column-gap: 1rem;
    justify-content: space-between;
}
input, select {
    padding: 16px 8px;
    border: 1px solid var(--grey-four);
    width: 100%;
    background-color: transparent;    
}
.last-div {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
}
svg {
    color: var(--white);
}
@media (min-width: 576px) {
    padding-left: 2rem;
}
`

export default AdressFields