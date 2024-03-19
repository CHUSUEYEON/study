import { useState } from "react";

export default function ImotionComponent() {
  const [state, setNumber] = useState(0);
  const Increase = () => {
    setNumber(state + 1);
  };
  const Decrease = () => {
    setNumber(state - 1);
  };
  return (
    <>
      {state < 8 ? state + "😀" : state + "🥰"} <br />
      <button onClick={Increase}>1 증가</button>
      <button onClick={Decrease}>1 감소</button>
    </>
  );
}
