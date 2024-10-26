import { useEffect, useRef } from "react";

export const useInterval = (
  callback: () => void,
  shouldRun: boolean,
  interval: number
) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callbackRef]);

  useEffect(() => {
    if (!shouldRun) {
      return;
    }
    const intervalId = setInterval(() => callbackRef.current(), interval);
    return () => clearInterval(intervalId);
  }, [interval, shouldRun]);
};
