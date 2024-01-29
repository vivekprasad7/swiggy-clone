import React from 'react'
import { useState, useEffect } from 'react'
import { FETCH_INFO } from "../../utils/constants.js";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/custom_hooks/useRestaurantMenu.js';

const RestaurantInfo = () => {

    // const [ resInfo, setResInfo] = useState(null)  extracted to custom_hook 

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)
 

    // const fetchInfo = async() =>{
    //     // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=11208&catalog_qa=undefined&submitAction=ENTER")
    //     const data = await fetch(FETCH_INFO + resId)
    //     const json = await data.json()

    //     console.log("JSON", json)

    //     // console.log("Info", json?.data?.cards[0]?.card?.card?.info)
    //     setResInfo(json.data)
    // }

    // useEffect(() => {
    //     fetchInfo()
    // }, [])

    if ( resInfo === null ) {
        return (<h1>Nakli Shimmer</h1>)
    } 

    console.log("resInfo", resInfo)

    const {  name, city, costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;
    // console.log("id", id)

    const { itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    console.log("itemCards", itemCards)

  return (
    <div>
        <div className='info-top'>
            <div className='info-top-left'>
            <h2>{name}</h2>
            <h4>{city}</h4>
            <h4>{cuisines.join(",")}</h4>
            </div>

        <div className='info-bottom'>
            <h3>{costForTwoMessage}</h3>
        </div>
        </div>
        <div className='menu'>
            <h2>Menu</h2>
            <ul>
            {
                itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name + "  : " +  "Rs." + (item?.card?.info?.price/100)  }</li> )
            }
            </ul>

        </div>
    </div>
  )
}

export default RestaurantInfo