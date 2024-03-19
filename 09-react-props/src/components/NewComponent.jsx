export default function NewComponent({ text }) {
  const valid = () => {
    console.log("콘솔 띄우기 성공!");
  };
  return (
    <>
      <h1>{text}</h1>
      <button onClick={valid()}>버튼</button>
    </>
  );
}

NewComponent.defaultProps = {
  text: "이건 기본 text props입니다.",
};
