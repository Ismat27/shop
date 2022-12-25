import React from 'react'

const Hamburger = ({isOpen, toggleFunction}) => {
  return (
    <div onClick={toggleFunction} className={`${isOpen? 'menu menu-open': 'menu'}`}>
        <div className='first'></div>
        <div className='second'></div>
        <div className='third'></div>
    </div>
  )
}



export default Hamburger