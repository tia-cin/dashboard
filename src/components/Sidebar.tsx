import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

function Sidebar() {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={() => {}}
              className="gap-3 mt-3 flex text-xl font-extrabold ml-3 tracking-tight dark:text-white text-slate-900 items-center"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content={"Menu"}>
              <button
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => setActiveMenu(false)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((link, i) => (
              <div key={i}>
                <p className="text-gray-400 mt-4 m-3 uppercase">{link.title}</p>
                {link.links.map((item, i) => (
                  <NavLink
                    to={`/${item.name}`}
                    key={i}
                    onClick={() => setActiveMenu((prev: boolean) => !prev)}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
                        : "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
                    }
                  >
                    {item.icon}
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
