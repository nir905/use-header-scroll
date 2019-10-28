import { useState, useCallback, useEffect, useRef } from "react";

const getInRange = (percent, min, max) => percent * (max - min) + min;

const useHeaderScroll = ({ min, max, target = window, endOffset }) => {
  const lastScrollPosition = useRef(0);
  const tick = useRef(false);
  const [height, setHeight] = useState(max);

  const calcHeight = useCallback(() => {
    lastScrollPosition.current = target.scrollY;

    if (!tick.current) {
      window.requestAnimationFrame(function() {
        const percent = 1 - Math.min(1, lastScrollPosition.current / endOffset);
        setHeight(getInRange(percent, min, max));
        tick.current = false;
      });

      tick.current = true;
    }
  }, [min, max, endOffset, target]);

  useEffect(() => {
    target.addEventListener("scroll", calcHeight, false);
    return () => target.removeEventListener("scroll", calcHeight);
  }, [target, calcHeight]);

  return height;
};

export default useHeaderScroll;
