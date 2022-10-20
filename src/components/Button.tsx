import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button: React.FC<{
  icon?: any;
  bgColor?: string;
  color?: string;
  bgHoverColor?: string;
  size?: number | string;
  text?: string;
  borderRadius?: number | string;
  width?: string;
}> = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
