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

  // useEffect(() => {
  //   console.log("useEffect Called")
  //   fetchData()
  // },[])

  const fetchData = async () => {
    const data = await fetch(`${FETCH_URL}`)

    const json = await data.json()

    console.log("JSON", json)

    setResData(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    console.log("Fetch1", json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    console.log("Fetch", json?.data?.cards[4]?.card?.card?.brands)
  }

  const onlineStatus = useOnlineStatus()

  if(!onlineStatus){
    return (<h1>Looks, like you're offline</h1>)
  }

  const RestaurantCardPromoted = withVegLablel(Card)  // Higher Order Component

  console.log("Filter Data", filterData)

  const newItems = [
    {
        "info": {
            "id": "24197",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "pshpetnwl1cbozvccff1",
            "locality": "Rama Park",
            "areaName": "Uttam Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-01 02:55:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rama-park-uttam-nagar-delhi-24197",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "810784",
            "name": "Brother kitchen",
            "cloudinaryImageId": "af8349c33cc194911e3870097f79b0d5",
            "locality": "Baprola",
            "areaName": "Najafgarh",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian",
                "Pizzas",
                "Snacks",
                "Chinese",
                "Desserts"
            ],
            "avgRating": 2.7,
            "parentId": "264062",
            "avgRatingString": "2.7",
            "totalRatingsString": "3",
            "sla": {
                "deliveryTime": 72,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "72 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-31 23:58:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/brother-kitchen-baprola-najafgarh-delhi-810784",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "577723",
            "name": "Delhi Darbar Chikan Corner",
            "cloudinaryImageId": "xadtqpdcq65sp0kgqpah",
            "locality": "Nangli",
            "areaName": "Najafgarh",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Biryani"
            ],
            "avgRating": 3.2,
            "parentId": "346610",
            "avgRatingString": "3.2",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 66,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "66 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-31 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/delhi-darbar-chikan-corner-nangli-najafgarh-delhi-577723",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "630299",
            "name": "Firangi Restaurant & Cafe",
            "cloudinaryImageId": "cm5oawibipc04iczuyvz",
            "locality": "OPPT. Baniya ki Dukan (B.K.D)",
            "areaName": "Chanchal Park",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tandoor",
                "Chinese",
                "Biryani"
            ],
            "avgRating": 3.6,
            "parentId": "376397",
            "avgRatingString": "3.6",
            "totalRatingsString": "3",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "58 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-31 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/firangi-restaurant-and-cafe-oppt-baniya-ki-dukan-b-k-d-chanchal-park-delhi-630299",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "793197",
            "name": "Mummy Ka Cafe",
            "cloudinaryImageId": "154063424529f2e819bfe051edcd0564",
            "locality": "Ranaji Enclave",
            "areaName": "Najafgarh",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Indian",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 5,
            "parentId": "470927",
            "avgRatingString": "5.0",
            "totalRatingsString": "3",
            "sla": {
                "deliveryTime": 68,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "68 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-31 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mummy-ka-cafe-ranaji-enclave-najafgarh-delhi-793197",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "710635",
            "name": "Sitraj Sons Pizza & Burger",
            "cloudinaryImageId": "d1f427e88dde5cc6fb1a6eae2f56a700",
            "locality": "Kakrola",
            "areaName": "Najafgarh",
            "costForTwo": "₹178 for two",
            "cuisines": [
                "Pizzas",
                "Burgers"
            ],
            "avgRating": 5,
            "veg": true,
            "parentId": "424549",
            "avgRatingString": "5.0",
            "totalRatingsString": "5",
            "sla": {
                "deliveryTime": 64,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "64 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-31 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sitraj-sons-pizza-and-burger-kakrola-najafgarh-delhi-710635",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "655890",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Rama Park",
            "areaName": "Dwarka Mod",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "61955",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "28 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2024-02-01 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹149"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-rama-park-dwarka-mod-delhi-655890",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "713385",
            "name": "California Burrito",
            "cloudinaryImageId": "bfc67762fa34dd47250975f3e8131344",
            "locality": "Uttam Nagar",
            "areaName": "Rani Bagh",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "56 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2024-02-01 03:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-uttam-nagar-rani-bagh-delhi-713385",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "219514",
            "name": "Bikanervala",
            "cloudinaryImageId": "zkenptjuicgoselih0gk",
            "locality": "Sector A12",
            "areaName": "Dwarka",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian",
                "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "45936",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "slaString": "47 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextOpenTimeMessage": "Currently not taking orders for this location",
                "nextCloseTime": "2024-01-31 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-e366a95c-0182-4ed3-ac67-a7f8eb817d7a"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bikanervala-sector-a12-dwarka-delhi-219514",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

  return (
    <div className="text-center">
      <div className="bg-black p-16 flex justify-center flex-col items-center">
        <div className="rounded-lg flex m-5">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white border w-full border-slate-300 rounded-md py-2 px-16  mx-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="search"
            placeholder="Search Food Items..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={() => filterBySearch()} className="text-white bg-orange-400 px-4 rounded- focus:bg-orange-500">
            Search
          </button>
        </div>
        <div className="btn-filter">
          <button className="text-white bg-orange-400 px-4 py-2 mx-4 rounded-lg my-0" onClick={() => filterByRating()}>Filter Top Rated</button>
        </div>
      </div>

      <div className="restaurant">
        {newItems?.map((item) => {
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
