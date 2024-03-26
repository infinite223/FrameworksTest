import {useEffect, useState} from "react";
import RenderPlan from "../../components/RenderPlan";

function MicroComponents() {
  const [rectsCount, setRectsCount] = useState(10000);
  const [isRendering, setIsRendering] = useState(false);
  const [timeRender, setTimeRender] = useState(0);
  const [countRenderRects, setCountRenderRects] = useState(0);
  const [finishRender, setFinishRender] = useState(false);
  const [rects, setRects] = useState<any>([]);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let _rects = [];
    for (let i = 0; i < rectsCount; i++) {
      const generateRandomColor = () => {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
      };
      const backgroundColor = generateRandomColor();
      _rects.push({id: i, backgroundColor});
      // setCountRenderRects(countRenderRects + 1);
    }

    setRects(_rects);
  }, [reset]);

  useEffect(() => {
    if (finishRender) {
      setEndTime(performance.now());
    }
  }, [finishRender]);

  const startRenderRects = () => {
    setIsRendering(!isRendering);
    console.log(new Date());
    setStartTime(performance.now());
  };

  const resetTest = () => {
    setIsRendering(false);
    setFinishRender(false);
    setStartTime(0);
    setEndTime(0);
    setReset(!reset);
  };

  return (
    <div className="app">
      <h2>Test React App</h2>

      <p>Render components</p>
      <input
        type="number"
        value={rectsCount}
        onChange={(text) => setRectsCount(parseInt(text.target.value))}
        placeholder="Podaj ilość komponentów"
      />
      <div className="render-options">
        <button className="render-button" onClick={startRenderRects}>
          {isRendering ? "Stop" : "Start"} render
        </button>
        <button className="render-button" onClick={resetTest}>
          Reset
        </button>
        {timeRender !== null && endTime && (
          <div>
            Czas renderowania: {((endTime - startTime) / 1000).toFixed(4)} s
          </div>
        )}
        | {rectsCount} small rects
        <div>
          {" "}
          | one rect render time{" "}
          {((endTime - startTime) / rectsCount / 1000).toFixed(5)} s
        </div>
      </div>
      {isRendering && (
        <RenderPlan
          isRendering={isRendering}
          setTimeRender={setTimeRender}
          timeRender={timeRender}
          countRenderRects={countRenderRects}
          setFinishRender={setFinishRender}
          rects={rects}
        />
      )}
    </div>
  );
}

export default MicroComponents;
