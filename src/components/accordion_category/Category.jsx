import React, { useEffect } from "react";
import {imageURL} from "../../utils/constants.js"
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const Category = ({
  category,
  showItems,
  setShowIndex,
}) => {
  // console.log("1 show items", showItems);
  // console.log("1 index", index);
  // console.log("1 lastCategoryIndex", lastCategoryIndex);

  console.log("category", category?.card?.card?.title);

  const { itemCards } = category?.card?.card;

  const dispatch = useDispatch()


  function handleClick() {
    setShowIndex()
  }

  function handleAddItem(item){
    dispatch(addItem(item))

  }

  // function handleClick() {
  //   if (index === lastCategoryIndex) {
  //     setShowItems(!showItems);

  //     console.log("2 show items", showItems);
  //     console.log("2 index", index);
  //     console.log("2 lastCategoryIndex", lastCategoryIndex);
  //   } else {
  //     setShowIndex();
  //     setLastCategoryIndex();

  //     console.log("3 show items", showItems);
  //     console.log("3 index", index);
  //     console.log("3 lastCategoryIndex", lastCategoryIndex);
  //   }
  // }

  // useEffect(() => {
  //   setShowItems(false);
  // }, [lastCategoryIndex]); // Empty dependency array to mimic componentDidMount

  return (
    <div className="w-6/12 m-auto ">
      <div
        className="py-2 px-5 flex justify-between cursor-pointer bg-gray-50 "
        onClick={() => handleClick()}
      >
        <h3 className="font-bold">{category?.card?.card?.title}</h3>
        <h3>⬇</h3>
      </div>
      {showItems
        ? itemCards.map((item) => {

          console.log("item", item)
            const { name, price, defaultPrice, imageId, isBestseller, isVeg } =
              item.card.info;
            return (
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
                  <button onClick={() => handleAddItem(item)} className="absolute bg-orange-400 text-white cursor-pointer m-2 p-2 ">Add</button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Category;
