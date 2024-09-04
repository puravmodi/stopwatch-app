import React, { useState, useEffect } from "react";
import Button from "./Button";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | string | number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-br from-sky-500 to-teal-300">
      <div className="flex flex-col justify-between w-80 h-80 lg:h-96 text-center border border-gray-300 rounded-lg p-6 relative bg-white shadow-md">
        <h1 className="text-xl font-bold text-center text-gray-600">
          Stopwatch - Solvative Demo
        </h1>
        <p className="text-center font-bold text-2xl md:text-4xl xl:text-5xl text-gray-900">
          {formatTime(time)}
        </p>
        <div className="flex gap-4 items-center justify-center absolute bottom-4">
          <Button variant="primary" onClick={handleStartPause}>
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button variant="danger" onClick={handleStop}>
            Stop
          </Button>
          <Button variant="secondary" onClick={handleStop}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
