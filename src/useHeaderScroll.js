import useMultiScroll from "./useMultiScroll";

const useHeaderScroll = ({ min, max, target = window, endOffset }) => {
  const [height] = useMultiScroll({ ranges: [[min, max]], target, endOffset });
  return height;
};

export default useHeaderScroll;
