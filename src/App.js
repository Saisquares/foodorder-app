import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Errorelement from "./components/ErrorPage";
import RestaraurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartItems from "./components/CartItems";

const App = () => {
  const [userName, setUserName] = useState("Default User");

  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurantmenu/:id",
        element: <RestaraurantMenu />,
      },
      {
        path: "/cart",
        element: <CartItems/>,
      }
    ],
    errorElement: <Errorelement />,
  },
]);

export default App;
