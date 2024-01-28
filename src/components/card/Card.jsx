import React from 'react'
// import "./Card.css"
import { imageURL } from '../../utils/constants'


const Card = ({item}) => {
    // console.log(item)

  return (
    <div className='w-40 h-80 p-2 m-4 bg-gray-100 overflow-hidden rounded-lg inline-block'>
     

        <img className=' w-full h-42 object-cover' src={imageURL+item?.info?.cloudinaryImageId} alt="" />
  
        <p>{item?.info?.name}</p>
        <p>Locality: {item?.info?.locality}</p>
        <p>Rating: {item?.info?.avgRating}</p>
    </div>
  )
}

export default Card