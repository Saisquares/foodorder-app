import { Link } from "react-router-dom";
import { WEBPAGE_LOGO } from "../utils/constans";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  // subscribing to the store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items)
  
  return (
    <>
    <header className="grid grid-cols-2 items-center bg-slate-300   shadow-xl">
      <div>
        <img className="m-2 h-20" src={WEBPAGE_LOGO} alt="webpage-logo" />
      </div>
      <nav>
        <ul className="flex justify-around text-lg">
          <Link to="/"><li>Home</li></Link>
          <Link to="/aboutus"><li>About Us</li></Link>
          <Link to="/contactus"><li>Contact</li></Link>
          <Link to="/cart"><li className="font-bold">cart items ({cartItems.length})</li></Link>
          <li>Online status {onlineStatus ? "🟢" : "🔴"}</li>
          <li>{loggedInUser}</li>
        </ul>
      </nav>
    </header>
    <hr/>
    </>
  );
};
export default Header;
