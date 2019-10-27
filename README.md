# useHeaderScroll

Control header height while scrolling

Working [Demo](https://codesandbox.io/s/use-header-scroll-y15wc)

## Install

`yarn add use-header-scroll`

or

`npm i --save use-header-scroll`

---

## Using

Call the hook

`const height = useHeaderScroll({ min: 50, max: 120, endOffset: 550 });`

and apply the height on the header

`<header style={{position: 'fixed', height}}>Header</header>`

---

## Full Example

```
import React from "react";
import useHeaderScroll from "use-header-scroll";

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

```

## Options

`min` - minimum height

`max` - maximum height

`target` - element to listen scroll (default: `window`)

`endOffset` - the scroll offset to fully minimize header
