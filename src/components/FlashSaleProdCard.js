import React from 'react'
import canon from '../assets/images/canon.png'
import CardOne from '../products/CardOne'

export const Range = ({ percent }) => {
    const abc = {
        width: `${percent}%`
    }
    return (
        <div className='range'>
            <div style={abc}></div>
        </div>
    )
}

const FlashSaleProdCard = ({image}) => {
  return (
    <CardOne
        image={image || canon}
    >
        <Range 
            percent={50}
        />
    </CardOne>
  )
}


export default FlashSaleProdCard
