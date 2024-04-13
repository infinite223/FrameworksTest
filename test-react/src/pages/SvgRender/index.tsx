import React, {useState, useRef} from "react";
import {Header} from "../../components/Header";
import map from "../../assets/map.svg";
import "./svgRenderStyles.css";

const SvgRender = () => {
  const [loadingTime, setLoadingTime] = useState<any>(null);
  const [startTime, setStartTime] = useState(0);
  const [isRender, setIsRender] = useState(false);

  const handleLoad = () => {
    console.log("end");
    const endTime = performance.now();
    const loadTime = endTime - startTime;
    setLoadingTime(loadTime);
  };

  const startLoadingTimer = () => {
    setStartTime(performance.now());
    setIsRender(true);
  };

  const handleReset = () => {
    setStartTime(0);
    setIsRender(false);
    setLoadingTime(null);

    setTimeout(() => {
      startLoadingTimer();
    }, 0);
  };

  return (
    <div className="svgRender">
      <Header
        header="Svg render big map"
        title="Test polega na wyrenderowaniu całej mapy w formacie SVG"
      />
      <div className="render-options">
        <button className="render-button" onClick={() => startLoadingTimer()}>
          Start render
        </button>
        <button className="reset-button" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
      <div className="render-time">
        {loadingTime && <p>Czas ładowania: {loadingTime.toFixed(2)} ms</p>}
      </div>

      <div className="mapContainer">
        {isRender && (
          <img
            src={map}
            alt="map"
            className="map"
            onLoad={() => handleLoad()}
            onLoadStart={() => startLoadingTimer()}
          />
        )}
      </div>
    </div>
  );
};

export default SvgRender;
