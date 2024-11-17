// import { Button, Button1, Button2 } from "./components/Button";
// import CounterContext from "./contexts/CounterContext";

import debounce from "debounce";
import { useEffect, useState } from "react";

export default function App() {
  const [val, setVal] = useState<number>(0);
  useEffect(() => {
    const scrollPos = debounce(() => {
      if (window.scrollY > 0) {
        setVal(0);
      } else {
        setVal(1);
      }
    });

    window.addEventListener("scroll", scrollPos);
    return function () {
      window.removeEventListener("scroll", scrollPos);
    };
  }, []);

  return (
    // <CounterContext>
    //   <div>
    //     <Button text={true} />
    //     <Button1 text={true} />
    //     <Button2 />
    //   </div>
    // </CounterContext>
    <div style={{ height: "200vh" }}>
      <h1 style={{ position: "fixed", top: 0 }}>{val ? "Hello" : "olleH"}</h1>
    </div>
  );
}
