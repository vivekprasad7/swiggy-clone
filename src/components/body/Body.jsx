import React, { useState } from "react";
import "./Body.css";
import Card from "../card/Card";

const Body = () => {
  const resObject = {
    restaurants: [
      {
        info: {
          id: "466737",
          name: "Wow! Momoo",
          cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
          locality: "Dwarka",
          areaName: "Dwarka",
          costForTwo: "₹300 for two",
          cuisines: [
            "Tibetan",
            "Healthy Food",
            "Asian",
            "Chinese",
            "Snacks",
            "Continental",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.1,
          parentId: "1776",
          avgRatingString: "4.1",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "34 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-27 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/wow-momo-dwarka-delhi-466737",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "704872",
          name: "Chicago pizza",
          cloudinaryImageId: "2a718cddd77c199bc192cc2d3026b0d3",
          locality: "Sector - 14",
          areaName: "Dwarka",
          costForTwo: "₹400 for two",
          cuisines: ["Fast Food", "Pizzas"],
          avgRating: 3.8,
          parentId: "60277",
          avgRatingString: "3.8",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "33 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-27 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/chicago-pizza-sector-14-dwarka-delhi-704872",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "323163",
          name: "KFC",
          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
          locality: "Vegas Mall",
          areaName: "Dwarka",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          avgRating: 4.3,
          parentId: "547",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-27 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/kfc-vegas-mall-dwarka-delhi-323163",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "183329",
          name: "Burger King",
          cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          locality: "Rama Park",
          areaName: "Dwarka",
          costForTwo: "₹350 for two",
          cuisines: ["Burgers", "American"],
          avgRating: 4.3,
          parentId: "166",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.1,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "1.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-28 06:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/burger-king-rama-park-dwarka-delhi-183329",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "24197",
          name: "Domino's Pizza",
          cloudinaryImageId: "pshpetnwl1cbozvccff1",
          locality: "Rama Park",
          areaName: "Uttam Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
          avgRating: 4.3,
          parentId: "2456",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-28 02:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/dominos-pizza-rama-park-uttam-nagar-delhi-24197",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "755546",
          name: "Bakingo",
          cloudinaryImageId: "05994df0e49725bd230146c320b8f7aa",
          locality: "Uttam Nagar",
          areaName: "DWARKA",
          costForTwo: "₹300 for two",
          cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
          avgRating: 4.5,
          parentId: "3818",
          avgRatingString: "4.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "15 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-28 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/bakingo-uttam-nagar-dwarka-delhi-755546",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "391143",
          name: "NH1 Bowls - Highway To North",
          cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
          locality: "Najafgarh Road",
          areaName: "Uttam Nagar",
          costForTwo: "₹250 for two",
          cuisines: ["North Indian", "Punjabi", "Home Food"],
          avgRating: 4.4,
          parentId: "22452",
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "12-22 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-28 02:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-najafgarh-road-uttam-nagar-delhi-391143",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "36694",
          name: "Sargam Sweets & Restaurant",
          cloudinaryImageId: "qetsckyabfqyq3qz4opm",
          locality: "Pipal Wala Road",
          areaName: "Uttam Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["Sweets", "Snacks"],
          avgRating: 3.9,
          veg: true,
          parentId: "16038",
          avgRatingString: "3.9",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-27 13:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/sargam-sweets-and-restaurant-pipal-wala-road-uttam-nagar-delhi-36694",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "254009",
          name: "McDonald's",
          cloudinaryImageId: "ecd32b841549ce6bfd993260a2086c1f",
          locality: "Sector 5",
          areaName: "Dwarka",
          costForTwo: "₹400 for two",
          cuisines: ["American"],
          avgRating: 4.4,
          parentId: "630",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "27 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-01-28 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-b43f7faa-bdfa-491d-b94c-493864d9e946",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/mcdonalds-sector-5-dwarka-delhi-254009",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
    ],
  };

  const [resData, setResData] = useState(resObject?.restaurants);
  const [filterData, setFilterData] = useState(resObject?.restaurants);
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
