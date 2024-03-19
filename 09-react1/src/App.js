import "./App.css";

function App() {
  const name = "나나";
  const animal = "고양이";
  const a = 15;
  const b = 10;
  const title = "Hello World";
  return (
    <div>
      <h2
        style={{
          width: "400px",
          borderColor: "green",
          border: "solid",
          borderStyle: "dashed",
        }}
      >
        제 반려동물의 이름은 {name}입니다.
        <br />
        {name}는 {animal}입니다.
      </h2>
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>
      <br />
      <div>{a > b && "a가 b보다 큽니다"}</div>
      <hr />
      <div className="div">
        <h3 className="title">{title}</h3>
        아이디: <input></input>
        비밀번호: <input></input>
      </div>
    </div>
  );
}

export default App;
