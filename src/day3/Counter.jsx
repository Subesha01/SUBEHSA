import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCounts] = useState(0);
  return (
    <div>
      <p>
        Run: {count} &emsp; Wicket: {count1}
      </p>
      <button
        className="px-4 py-4 bg-red-500"
        onClick={() => setCount(count + 1)}
      >
        1 RUN
      </button>
      <button
        className="px-4 py-4 bg-red-500"
        onClick={() => setCount(count + 2)}
      >
        2 RUN
      </button>
      <button
        className="px-4 py-4 bg-red-500"
        onClick={() => setCount(count + 4)}
      >
        4 RUN
      </button>
      <button
        className="px-4 py-4 bg-red-500"
        onClick={() => setCount(count + 6)}
      >
        6 RUN
      </button>
      <button
        className="px-4 py-4 bg-red-500"
        onClick={() => setCounts(count1 + 1)}
      >
        Wicket
      </button>
      <button className="px-4 py-2 bg-red-500" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
