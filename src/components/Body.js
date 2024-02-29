import React, { useContext, useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { SWIGGY_API } from "../utils/constans";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, SetListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const {loggedInUser, setUserName} = useContext(UserContext)


  const fetchRestaurants = async () => {
    try {
      const fetchData = await fetch(SWIGGY_API);
      const json = await fetchData.json();
      
      SetListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);


  return listOfRestaurants.length === 0  ? <p>Loading...</p> : (
    <section className="Body">
      <div className="flex items-center">
        <div className="search-input m-5">
          <input
            className="border border-black rounded p-1"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value)
                let filterResList = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filterResList)
            }}
          />
          <button
            className="bg-slate-300 border-black rounded p-1"
            onClick={() => {
              let filterResList = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filterResList);
            }}
          >
            Search
          </button>
        
       
         
        </div>
        <div className="mx-2">
          <label className="p-2">User Name</label>
          <input className="border border-black rounded px-2 py-1" value={loggedInUser} onChange={((e) => setUserName(e.target.value))} />
          </div>
        <div>
           
        </div>  
      </div>
      <div className="flex flex-wrap justify-center">

      {filteredListOfRestaurants?.map((restaurant) => {
        return <Link key={restaurant?.info?.id} to={/restaurantmenu/ + restaurant?.info?.id }><RestaurantCards  resData={restaurant} /></Link>;
      })}
      </div>
    </section>
  );
};

export default Body;
