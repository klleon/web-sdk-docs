import { useEffect, useState } from "react";

export const useTimer = (initialTime = 30) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      if (timeLeft === 0) {
        setTimeLeft(initialTime); // 시간이 0이면 초기 시간으로 리셋
      }
    }
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return { timeLeft, start, stop, reset, isRunning };
};
