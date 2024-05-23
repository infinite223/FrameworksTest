import "./rectStyles.css";

const Rect = ({rectsSize}: {backgroundColor: string; rectsSize: number}) => {
  return (
    <div
      className="rect"
      style={{width: `${rectsSize}px`, height: `${rectsSize}px`}}
      // style={{backgroundColor: backgroundColor}}
    />
  );
};

export default Rect;
