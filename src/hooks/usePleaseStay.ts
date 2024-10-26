import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

export const usePleaseStay = (titles: string[]) => {
  const [shouldIterateTitles, setShouldIterateTitles] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const handelVisibilityChange = () => {
    setShouldIterateTitles(document.visibilityState !== "visible");
  };
  useEffect(() => {
    // Runs on mount
    document.addEventListener("visibilitychange", handelVisibilityChange);
    return () => {
      // Runs on unmount
      document.removeEventListener("visibilitychange", handelVisibilityChange);
    };
  }, []);

  useInterval(
    () => {
      setShouldIterateTitles(true);
      setCurrentTitleIndex((prev) =>
        prev + 1 === titles.length ? 0 : prev + 1
      );
    },
    shouldIterateTitles,
    1000
  );

  useEffect(() => {
    document.title = titles[currentTitleIndex];
  }, [titles, currentTitleIndex]);
};
