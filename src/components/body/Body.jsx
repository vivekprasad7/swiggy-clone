import React, { useEffect, useState } from "react";
import "./Body.css";
import Card from "../card/Card";
import { FETCH_URL } from "../../utils/constants.js";

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

    setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log("Fetch", json?.data?.cards[4]?.card?.card?.brands)
  }

  return (
    <div className="body">
      <div className="hero-tab">
        <div className="search-unit">
          <input
            type="search"
            placeholder="Search Your Favorite Food Items"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={() => filterBySearch()} className="search-btn">
            Search
          </button>
        </div>
        <div className="btn-filter">
          <button onClick={() => filterByRating()}>Filter Top Rated</button>
        </div>
      </div>

      <div className="restaurant">
        {filterData?.map((item) => {
          console.log(item);
          return <Card key={item?.info?.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
