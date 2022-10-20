import React from "react";
import { SiShopware } from "react-icons/si";
import background from "../data/data/welcome.png";
import { Auth } from "../components";

const Landing = () => {
  return (
    <div>
      <header className="flex justify-between mb-10">
        <div className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900">
          <SiShopware />
          <p>Shoppy</p>
        </div>
      </header>
      <div className="flex justify-around mt-5 items-center">
        <div className="flex-col justify-around items-center">
          <div className="mb-10 flex flex-col items-center">
            <h1 className="m-5 text-3xl font-bold">
              Manage Your Team and Tasks Easily
            </h1>
            <p className="m-5 text-xl font-medium">
              A simple and smart tool that will help your business
            </p>
          </div>
          <div className="mt-5">
            <img
              src={background}
              alt="customize-your-experience"
              style={{ width: "400px" }}
            />
          </div>
        </div>
        <Auth />
      </div>
    </div>
  );
};

export default Landing;
