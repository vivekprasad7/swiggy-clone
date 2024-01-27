import React from 'react'
import "./Card.css"
import { imageURL } from '../../utils/constants'


const Card = ({item}) => {
    console.log(item)

  return (
    <div className='card'>
        <img src={imageURL+item?.info?.cloudinaryImageId} alt="" />
        <p>{item?.info?.name}</p>
        <p>Locality: {item?.info?.locality}</p>
    </div>
  )
}

export default Card