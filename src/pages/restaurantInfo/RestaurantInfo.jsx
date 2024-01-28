import React from 'react'

const RestaurantInfo = () => {
  return (
    <div>
        <div className='info-top'>
            <div className='info-top-left'>
            <h2>Restaurant Name</h2>
            <h4>Locality</h4>
            </div>

        <div className='info-bottom'>
            <h3>Price</h3>
        </div>
        </div>
        <div className='menu'>
            <p>item name - item price</p>

        </div>
    </div>
  )
}

export default RestaurantInfo