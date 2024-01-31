import React from 'react'
// import "./Card.css"
import { imageURL } from '../../utils/constants'


const Card = ({item}) => {
    // console.log(item)

  return (
    <div className='w-[250px] h-[430px] p-2 m-4 bg-gray-50 overflow-hidden rounded-lg inline-block relative hover:shadow-lg'>
     

        <img className='rounded-lg w-[248px] h-[200px]' src={imageURL+item?.info?.cloudinaryImageId} alt="" />
  
        <h3 className='font-bold text-left py-2'>{item?.info?.name}</h3>
        <p className='text-left'>Locality: {item?.info?.locality}</p>
        <p className='absolute bottom-2 p-1 m-1 w-14 h-12 bg-lime-500 text-white rounded text-sm'>Rating: {item?.info?.avgRating}</p>
    </div>
  )
}

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withVegLablel = () => {
  return (props) => {
    return(
      <div className='inline-block'>
        <label className='absolute bg-green-600 text-white m-2 py-1 px-2 rounded-lg z-10'>Veg</label>
        <Card {...props}/>
      </div>
    )
  }
}



export default Card