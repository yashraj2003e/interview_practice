/*
TODO => 
1. Create 4x4 cell grid
2. it should have color picker on top using button, on click it should change the color of particular cell
3. it should allow input on double click !
4. Otherwise it should be only readonly !
TODO DONE !
*/

import { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [background, setBackground] = useState([]);
  const [id, setId] = useState("");

  function handleBackgroundChange(color) {
    let newArray = [...background];
    newArray[id] = color;
    setBackground(newArray);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          onClick={() => {
            if (id !== "") handleBackgroundChange("black");
          }}
          name="blackBtn"
        >
          Change background to Black
        </button>
        <button
          onClick={() => {
            if (id !== "") handleBackgroundChange("red");
          }}
          name="redBtn"
        >
          Change background to Red
        </button>
        <button
          onClick={() => {
            if (id !== "") handleBackgroundChange("yellow");
          }}
          name="yellowBtn"
        >
          Change background to Yellow
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "0px",
          maxWidth: "50vw",
          margin: "20px auto 0px auto",
        }}
      >
        {Array.from({ length: 16 }, (_, index) => (
          <InputComponent
            key={index}
            background={background[index]}
            setId={setId}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const InputComponent = memo(({ id, setId, background }) => {
  const [disabled1, setDisabled] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const btns = ["yellowBtn", "redBtn", "blackBtn"];
    function handleEvent(e) {
      console.log(e.target.name);
      console.log(btns.includes(e.target.name));
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !btns.includes(e.target.name)
      ) {
        setDisabled(true);
        setId("");
      }
    }

    let ev = document.addEventListener("mousedown", handleEvent);

    return () => document.removeEventListener("mousedown", ev);
  }, [setId]);

  return (
    <input
      type="text"
      ref={inputRef}
      onDoubleClick={() =>
        disabled1 ? setDisabled((disabled1) => !disabled1) : null
      }
      onClick={() => setId(id)}
      readOnly={disabled1}
      style={{ margin: "2px", background: `${background}` }}
    ></input>
  );
});

InputComponent.propTypes = {
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
};

export default App;
