import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";
import { useSelector } from "react-redux";
import { StateType } from "../types";

function Navbar() {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();
  const { user } = useSelector<StateType, any>((state) => state);

  const NavButton: React.FC<{
    title: string;
    handler: () => void;
    icon: any;
    color: string;
    dotColor?: string;
  }> = ({ title, handler, icon, color, dotColor }) => (
    <TooltipComponent content={title}>
      <button
        onClick={handler}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );

  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  console.log(user);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        handler={() => setActiveMenu((prev: boolean) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          handler={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          handler={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="yellow"
        />
        <NavButton
          title="Notification"
          handler={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="yellow"
        />
        <TooltipComponent content={"Profile"}>
          <div
            className="flex items-center gap-2 cursor-pointer p1- hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={user.picture}
              className="rounded-full w-8 h-8"
              alt="user-picture"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {user.username}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default Navbar;
