export default function FoodProps({ food }) {
  return (
    <>
      <h2>내가 좋아하는 음식은 무엇일까요오?? 나도 잘 모르겠어요.</h2>
      <p>
        전반적으로 다 좋아하지 않나 싶지만... 요즘은{" "}
        <span style={{ color: "red" }}>{food}</span>이 좋아요.
      </p>
    </>
  );
}
