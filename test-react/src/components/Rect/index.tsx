import React from "react";
import "./rectStyles.css";

const Rect = ({backgroundColor}: {backgroundColor: string}) => {
  return (
    <div
      className="rect"
      // style={{backgroundColor: backgroundColor}}
    />
  );
};

export default Rect;
