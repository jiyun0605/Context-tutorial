import React, { useContext } from "react";
import ColorContext from "../Context/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: state.color,
        }}
      ></div>
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: state.subcolor,
        }}
      ></div>
    </>
  );
};

export default ColorBox;
