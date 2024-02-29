import { useEffect, useState } from "react";
import { MENU_API } from "./constans";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResMenu(json?.data?.cards);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return resMenu;
};

export default useRestaurantMenu;
