import React, { useEffect, useState } from "react";
// import "./Body.css";
import Card, {withVegLablel} from "../card/Card";  // imported Higher Order Component as well
import { FETCH_URL } from "../../utils/constants.js";
import { Link, NavLink} from "react-router-dom";
import useOnlineStatus from "../../utils/custom_hooks/useOnlineStatus";


const Body = () => {
  

  const [resData, setResData] = useState();
  const [filterData, setFilterData] = useState();
  const [searchInput, setSearchInput] = useState("");

  const filterByRating = () => {
    let filteredRestaurants = resData.filter(
      (item) => item?.info?.avgRating > 4
    );
    setFilterData(filteredRestaurants);
  };

  const filterBySearch = () => {
    let filteredBySearch = resData.filter((item) =>
      item?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterData(filteredBySearch);
  };

  useEffect(() => {
    console.log("useEffect Called")
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch(`${FETCH_URL}`)

    const json = await data.json()

    console.log("JSON", json)

    setResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log("Fetch1", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    console.log("Fetch", json?.data?.cards[4]?.card?.card?.brands)
  }

  const onlineStatus = useOnlineStatus()

  if(!onlineStatus){
    return (<h1>Looks, like you're offline</h1>)
  }

  const RestaurantCardPromoted = withVegLablel(Card)  // Higher Order Component

  console.log("Filter Data", filterData)

  return (
    <div className="body">
      <div className="bg-black p-16 flex justify-center flex-col items-center">
        <div className="rounded-lg flex m-5">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-16  mx-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="search"
            placeholder="Search Your Favorite Food Items"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={() => filterBySearch()} className="text-white bg-orange-400 px-4 rounded-lg">
            Search
          </button>
        </div>
        <div className="btn-filter">
          <button className="text-white bg-orange-400 px-4 py-2 mx-4 rounded-lg my-0" onClick={() => filterByRating()}>Filter Top Rated</button>
        </div>
      </div>

      <div className="restaurant">
        {filterData?.map((item) => {
          console.log("n", item);
          return (<Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>
            {item.info.veg? <RestaurantCardPromoted item={item}/> : <Card  item={item} />}
            </Link>);
        })}
      </div>
    </div>
  );
};

export default Body;
