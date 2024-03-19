import { useState } from "react";

export default function EventHandle() {
  const [state, setText] = useState("Hello World!");
  const change = () => {
    setText(state === "Hello World!" ? "Goodbye World!" : "Hello World!");
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={change}>클릭</button>
    </div>
  );
}
