import React from "react";
import useHeaderScroll from "./index";

const Demo = () => {
  const height = useHeaderScroll({ min: 50, max: 120, endOffset: 550 });

  return (
    <div>
      <header
        style={{
          backgroundColor: "red",
          position: "fixed",
          left: 8,
          right: 8,
          top: 0,
          height
        }}
      >
        Header
      </header>
      <article style={{ backgroundColor: "blue", height: 10000 }}>
        Content
      </article>
    </div>
  );
};

export default Demo;
