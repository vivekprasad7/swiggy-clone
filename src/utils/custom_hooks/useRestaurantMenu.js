import { useEffect, useState } from "react"
import { FETCH_INFO } from "../constants"

const useRestaurantMenu = (resId) => {

    const [ resInfo, setResInfo] = useState(null)


    const fetchInfo = async() =>{
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=11208&catalog_qa=undefined&submitAction=ENTER")
        const data = await fetch(FETCH_INFO + resId)
        const json = await data.json()

        console.log("JSON", json)

        // console.log("Info", json?.data?.cards[0]?.card?.card?.info)
        setResInfo(json.data)
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return resInfo;
}

export default useRestaurantMenu;