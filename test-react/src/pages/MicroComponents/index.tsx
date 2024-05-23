import {useState} from "react";
import RenderPlan from "../../components/RenderPlan";
import {Header} from "../../components/Header";
import "./microComponents.css";

function MicroComponents() {
  const [rectsCount, setRectsCount] = useState(10000);
  const [rectsSize, setRectsSize] = useState(5);

  const [isRendering, setIsRendering] = useState(false);
  const [timeRender, setTimeRender] = useState(0);
  // const [countRenderRects, setCountRenderRects] = useState(0);
  // const [finishRender, setFinishRender] = useState(false);
  const [rects, setRects] = useState<any>([]);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const startRenderRects = () => {
    setRects([]);
    setIsRendering(false);
    setStartTime(0);
    setEndTime(0);

    setTimeout(() => {
      let _rects = [];

      for (let i = 0; i < rectsCount; i++) {
        const generateRandomColor = () => {
          const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
          return randomColor;
        };
        const backgroundColor = generateRandomColor();
        _rects.push({id: i, backgroundColor});
      }

      setRects(_rects);
      setIsRendering(true);
      setStartTime(performance.now());
    }, 0);
  };

  const resetTest = () => {
    setIsRendering(false);
    // setFinishRender(false);
    setStartTime(0);
    setEndTime(0);
  };

  const finishRendering = () => {
    setEndTime(performance.now());
  };

  return (
    <div className="micro-components">
      <Header
        header="Micro components test"
        title="Test polega na mierzeniu czasu renderowania się mikro komponentów w dowolnej ilości. "
      />

      <div className="render-options">
        <input
          type="number"
          value={rectsCount}
          onChange={(text) => setRectsCount(parseInt(text.target.value))}
          placeholder="Podaj ilość komponentów"
        />
        <input
          type="number"
          value={rectsSize}
          onChange={(text) => setRectsSize(parseInt(text.target.value))}
          placeholder="Podaj rozmiar komponentów"
        />
        <button className="render-button" onClick={startRenderRects}>
          Render
        </button>
        <button className="reset-button" onClick={resetTest}>
          Reset
        </button>
      </div>
      <div className="render-time">
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
          countRenderRects={0}
          setFinishRender={finishRendering}
          rectsSize={rectsSize}
          rects={rects}
        />
      )}
    </div>
  );
}

export default MicroComponents;
