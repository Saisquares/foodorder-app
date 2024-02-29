import { PiStarBold } from "react-icons/pi";
import { CLOUDINARY_IMG_URL } from "../utils/constans";
import { LuDot } from "react-icons/lu";
const RestaurantCards = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    sla,
    costForTwo,
    cuisines,
    areaName,
    id,
  } = resData.info;
  return (
    <div className="res-container">
      <div key={id} className="border rounded-xl  w-64 m-2 p-3">
        <div>
          <img
            className="object-cover h-64 w-96 rounded-xl"
            src={CLOUDINARY_IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="pt-4">
          <strong className=" ">{name}</strong>
          <p className="flex items-center py-1">
            <span>
              <PiStarBold />
            </span>
            <span className="px-1 font-bold ">{avgRatingString}</span>
            <span>
              <LuDot />
            </span>
            <span className="px-1 font-bold">{sla?.slaString}</span>
          </p>
          <p>{costForTwo}</p>
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            {cuisines.join(", ")}
          </p>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
