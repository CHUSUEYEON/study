export default function FuncComponent({ title, author, price, type }) {
  return (
    <div
      style={{
        width: "350px",
        height: "400px",
        backgroundColor: "greenyellow",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "orange" }}>이번주 베스트셀러</h1>
      <img
        src="americano.jpg"
        alt="아메리카노"
        style={{ width: "200px", height: "200px" }}
      />
      <div>
        {title} <br />
        저자: {author} <br />
        판매가: {price} <br />
        구분: {type}
      </div>
    </div>
  );
}
