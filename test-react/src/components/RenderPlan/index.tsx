import React, {useEffect, useState} from "react";
import "./renderPlanStyles.css"; // Zaimportuj arkusz stylów CSS
import Rect from "../Rect";
import {Profiler as Profiler} from "react";

interface RenderPlanProps {
  isRendering: boolean;
  timeRender: number;
  setTimeRender: (value: number) => void;
  rects: {id: number; bg: string}[];
  countRenderRects: number;
  rectsSize: number;
  setFinishRender: () => void;
}
const RenderPlan = ({
  isRendering,
  setTimeRender,
  timeRender,
  rectsSize,
  rects,
  setFinishRender,
}: RenderPlanProps) => {
  // const [rects, setRects] = useState<any>([]);

  useEffect(() => {
    setFinishRender();
    // if (isRendering) {
    //   const startTime = performance.now(); // Pobierz czas rozpoczęcia renderowania

    //   const endTime = performance.now(); // Pobierz czas zakończenia renderowania
    //   const timeDiff: number = endTime - startTime; // Oblicz różnicę czasu

    //   setTimeRender(timeRender + timeDiff); // Zapisz różnicę czasu w stanie komponentu
    // }
  }, []);

  return (
    <div className="renderPlan">
      {rects.map((rect: any) => {
        return (
          <Rect key={rect.id} backgroundColor={rect.bg} rectsSize={rectsSize} />
        );
      })}
    </div>
  );
};

export default RenderPlan;
