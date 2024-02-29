import { CLOUDINARY_IMG_URL } from "../utils/constans";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import ResMenuAccordian from "./ResMenuAccordian";

const RestaurantMenu = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [showIndex, setShowIndex] = useState(null)
  const param = useParams();
  const resMenu = useRestaurantMenu(param?.id);

  useEffect(() => {
    if (resMenu && resMenu.length > 0) {
      const filteredCategoryList =
        resMenu[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (list) =>
            list?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setCategoryList(filteredCategoryList);
    }
  }, []);
  
  

  

  if (!resMenu || resMenu.length === 0) return <p>Loading</p>;

  const restaurantInfo = resMenu[2]?.card?.card?.info || {};
  const {
    areaName,
    name,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    id,
    sla,
  } = restaurantInfo;

  return (
    <div className="">
      <div
        key={id}
        className="w-8/12 flex justify-between mx-auto items-center justify-items-center my-6"
      >
        <div>
          <p className="font-bold text-3xl my-1">{name}</p>
          <p className="text-lg">
            {areaName} - {city}
          </p>
          <p className="text-lg">{costForTwoMessage}</p>
          <p className="text-lg">Cuisines: {cuisines && cuisines.join(", ")}</p>
          <p className="text-lg">Delivery Time: {sla && sla.slaString}</p>
          <p className="text-lg">Average Rating: {avgRating}</p>
        </div>
        <div className="py-2">
          <img
            className="object-cover h-56 w-45 rounded-xl"
            src={CLOUDINARY_IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
      </div>

    

      {categoryList &&    categoryList.map((list,index) => (
        // controlled component - childeren are controlled by the parent state through the props and passing the setter call back function to childeren
        <ResMenuAccordian key={index} data={list?.card?.card} showItems={index === showIndex ? true : false}  setShowIndex={() => setShowIndex(index)}/>
      ))
      }
    </div>
  );
};

export default RestaurantMenu;
