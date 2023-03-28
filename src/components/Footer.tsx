import React from "react";
import { footerData } from "../data/dummy";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="container pt-9">
        <div className="flex justify-center mb-9">
          {footerData.map((elem, ind) => (
            <a key={ind} href="#!" className="mr-9 text-gray-800">
              <svg
                viewBox={elem.svgViewBox}
                className={elem.svgClass}
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="https://www.w3.org/200/svg"
              >
                {elem.path}
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div
        className="text-center text-gray-700 p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:{" "}
        <a className="text-gray-800" href="#!">
          DashScope
        </a>
      </div>
    </footer>
  );
}

export default Footer;
