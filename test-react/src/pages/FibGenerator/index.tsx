import {useState} from "react";
import {Header} from "../../components/Header";
import "./fibGenStyles.css";

const FibGenerator = () => {
  const [fibonacciSequence, setFibonacciSequence] = useState<any>([]);
  const [loadingTime, setLoadingTime] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState<any>(false);
  const [count, setCount] = useState(10);

  const generateFibonacciSequence = () => {
    const startTime = performance.now();
    setIsCalculating(true);

    let fib1 = 0,
      fib2 = 1;
    const sequence = [fib1.toString(), fib2.toString()];

    for (let i = 2; i < count; i++) {
      const nextFib = fib1 + fib2;
      sequence.push(nextFib.toString());
      fib1 = fib2;
      fib2 = nextFib;
    }

    const endTime = performance.now();
    const loadTime = endTime - startTime;

    setFibonacciSequence(sequence);
    setLoadingTime(loadTime);
    setIsCalculating(false);
  };

  const handleReset = () => {
    setFibonacciSequence([]);
    setLoadingTime(null);
  };

  return (
    <div className="fib-generator">
      <Header
        header="Generation of a fiboonati sequence"
        title="Test polega na wyliczaniu kolejnych wyrazów ciągu fibonacciego i mierzeniu czasu."
      />
      <div className="render-options">
        <label htmlFor="countInput">Ilość liczb:</label>
        <input
          type="number"
          id="countInput"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button
          className="render-button"
          disabled={isCalculating}
          onClick={generateFibonacciSequence}
        >
          Start
        </button>
        <button
          className="reset-button"
          disabled={isCalculating}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="render-time">
        <p>
          {loadingTime !== null &&
            `Czas generowania: ${loadingTime.toFixed(2)} ms`}
        </p>
      </div>
      <div className="fib-numbers-container">
        {fibonacciSequence.length > 0 &&
          fibonacciSequence.map((number: string, index: number) => (
            <p className="fib-number" key={index}>
              {number}
            </p>
          ))}
      </div>
    </div>
  );
};

export default FibGenerator;
