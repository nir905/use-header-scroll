import { useState, useCallback, useEffect } from "react";

const getInRange = (percent, min, max) => percent * (max - min) + min;

const useHeaderScroll = ({ min, max, target = window, endOffset }) => {
  const [height, setHeight] = useState(max);

  const calcHeight = useCallback(() => {
    const percent = 1 - Math.min(1, target.scrollY / endOffset);
    setHeight(getInRange(percent, min, max));
  }, [min, max, endOffset]);

  useEffect(() => {
    target.addEventListener("scroll", calcHeight, { passive: true });
    return () => target.removeEventListener("scroll", calcHeight, { passive: true });
  }, [target, calcHeight]);

  return height;
};

export default useHeaderScroll;
