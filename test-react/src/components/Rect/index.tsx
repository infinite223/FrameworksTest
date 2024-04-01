import React from "react";
import "./rectStyles.css";

const Rect = ({
  backgroundColor,
  rectsSize,
}: {
  backgroundColor: string;
  rectsSize: number;
}) => {
  return (
    <div
      className="rect"
      style={{width: `${rectsSize}px`, height: `${rectsSize}px`}}
      // style={{backgroundColor: backgroundColor}}
    />
  );
};

export default Rect;
