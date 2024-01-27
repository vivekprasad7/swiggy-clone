import React from 'react'
import "./Card.css"


const Card = ({item}) => {
  return (
    <div className='card'>
        <p>{item?.info?.name}</p>
        <p>Locality: {item?.info?.locality}</p>
    </div>
  )
}

export default Card