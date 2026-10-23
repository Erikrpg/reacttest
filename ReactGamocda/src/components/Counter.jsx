import { useEffect, useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("მრიცხველი ჩაიტვირთა");
  }, []);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="counter">
        <h2>{count}</h2>
        <button onClick={increase}>გაზრდა</button>
        <button onClick={decrease}>შემცირება</button>
        <button onClick={reset}>განულება</button>
      </div>
    </>
  );
}
