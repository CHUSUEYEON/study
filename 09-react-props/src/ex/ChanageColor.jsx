import { useState } from "react";

export default function ChangeColor() {
  const [state, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  const changeColor1 = () => {
    setText("빨간색 글씩");
    setColor("red");
  };
  const changeColor2 = () => {
    setColor("blue");
    setText("파란색 글씨");
  };
  return (
    <div>
      <h3 style={{ color }}>{state}</h3> <br />
      <button onClick={changeColor1}>빨간색</button>
      <button onClick={changeColor2}>파란색</button>
    </div>
  );
}
