import { useState } from "react";

export default function SecondEvent() {
  const [state, setText] = useState("");
  const ChangeText = () => {
    setText(state === "" ? "안녕하세요" : "");
  };
  return (
    <div>
      <button onClick={ChangeText}>
        {state === "" ? "보여라" : "사라져라"}
      </button>
      <h3>{state}</h3>
    </div>
  );
}
