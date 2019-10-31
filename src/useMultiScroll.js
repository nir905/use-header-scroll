import { useState, useCallback, useEffect } from "react";

const getInRange = (percent, min, max) => percent * (max - min) + min;

const useMultiScroll = ({ ranges, target = window, endOffset }) => {
  const [heights, setHeights] = useState(ranges.map(([, max]) => max));

  const calcHeights = useCallback(() => {
    const percent = 1 - Math.min(1, target.scrollY / endOffset);
    const newHeights = ranges.map(([min, max]) =>
      getInRange(percent, min, max)
    );
    setHeights(newHeights);
  }, [ranges, endOffset, target]);

  useEffect(() => {
    target.addEventListener("scroll", calcHeights, { passive: true });
    return () =>
      target.removeEventListener("scroll", calcHeights, { passive: true });
  }, [target, calcHeights]);

  return heights;
};

export default useMultiScroll;
