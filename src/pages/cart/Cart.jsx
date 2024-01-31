import React from 'react'
import { useSelector } from 'react-redux'
import { imageURL } from '../../utils/constants'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems)
  console.log(cartItems)
  return (
    <div className='text-center m-5 p-5'>
      <h1 className='font-bold text-3xl'>Cart</h1>
      <div className='w-6/12 m-auto ' >

        {
          cartItems.map((item) => {
            const { name, price, defaultPrice, imageId, isBestseller, isVeg } =
              item?.card?.info;
            return(
              <div key={item.id} className=" bg-orange-50 flex justify-between ">
                <div>
                <h3 className="p-3">{name}</h3>
                <h3>Rs. {price /100 || defaultPrice/100}</h3>

                <div>
                  {isBestseller ? <label>Bestseller</label> : ""}
                  {isVeg ? <label>Veg</label> : ""}
                </div>

                </div>
                <div className="w-40 h-40">
                  <img src={imageURL + imageId} />
                  <button  className="absolute bg-orange-400 text-white cursor-pointer m-2 p-2 ">Add</button>
                </div>
              </div>
            )
          })
        }
        

      </div>

    </div>
  )
}

export default Cart

