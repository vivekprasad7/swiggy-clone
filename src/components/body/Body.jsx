import React from "react";
import "./Body.css"

const Body = () => {
  return (
    <div className="body">
      <div className="hero-tab">
        <div className="search-unit">
          <input type="search" placeholder="Search Your Favorite Food Items" />
          <button className="search-btn">Search</button>
        </div>
        <div className="btn-filter">
            <button>Filter Top Rated</button>

        </div>
      </div>
    </div>
  );
};

export default Body;
