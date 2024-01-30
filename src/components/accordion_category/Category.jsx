import React, { useState } from 'react'

const Category = ({category, showItems, setShowIndex}) => {

    console.log("show items", showItems)

    // const [ showItems, setShowItems] = useState(false)

    console.log("category", category?.card?.card?.title)

    const { itemCards} = category?.card?.card

    function handleClick(){
        setShowIndex()
    }


  return (
    <div className='w-6/12 m-auto '>
        <div className='py-2 px-5 flex justify-between cursor-pointer bg-gray-50 ' onClick={() => handleClick()}>

        <h3 className='font-bold'>{category?.card?.card?.title}</h3>
        <h3>⬇</h3>
        </div>
        {showItems ? (
            itemCards.map((item) => {
                const { name, price, imageId, isBestseller, isVeg } = item.card.info
                return(
                    <div key={item.id } className=' bg-gray-100 '>
                        <h3 className='p-3'>{name}</h3>
                        <h3>Rs. {price/100}</h3>

                        <div>
                            {isBestseller ? <label>Bestseller</label> : ""}
                            {isVeg ? <label>Veg</label> : ""}
                        </div>
                    </div>
                )
            })
        ) : ""}
    </div>
  )
}

export default Category