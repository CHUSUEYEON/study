import { useState } from "react";

export default function StateComponent() {
  const [state, setNumber] = useState(0);
  const onClickPlus = () => {
    setNumber(state + 2);
  };
  const onClickMinus = () => {
    setNumber(state - 1);
  };
  return (
    <>
      {state} <br />
      <button onClick={onClickPlus}>+2</button>
      <button onClick={onClickMinus}>-1</button>
    </>
  );
}
