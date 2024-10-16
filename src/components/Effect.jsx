import { useState, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Example of useEffect:</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
}
