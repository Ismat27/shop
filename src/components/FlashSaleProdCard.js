import React from 'react'
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

const FlashSaleProdCard = ({data}) => {
  return (
    <CardOne
        data={data}
    >
        {/* <Range 
            percent={50}
        /> */}
    </CardOne>
  )
}


export default FlashSaleProdCard
