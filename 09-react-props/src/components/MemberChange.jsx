import { useState } from "react";

export default function MemberChange({ name, age, NickName }) {
  const objArr = [
    {
      name: "뽀로로",
      age: 7,
      NickName: "사고뭉치",
    },
    {
      name: "루피",
      age: 10,
      NickName: "귀요미",
    },
    {
      name: "포비",
      age: 9,
      NickName: "곰",
    },
    {
      name: "에디",
      age: 12,
      NickName: "척척박사",
    },
  ];
  const [state, setMember] = useState(objArr[0]);
  const change = () => {
    setMember(state === objArr[0] ? objArr[1] : objArr[0]);
    setMember(state === objArr[1] ? objArr[2] : objArr[1]);
    setMember(state === objArr[2] ? objArr[3] : objArr[2]);
    setMember(state === objArr[3] ? objArr[0] : objArr[3]);
    // i를  1 -> 2 -> 3 -> 0 -> 1 ... 버튼을 누를 때마다 이런식으로 바꾸고 싶음.
  };
  return (
    <div>
      이름: {state.name} <br />
      나이: {state.age} <br />
      별명: {state.NickName} <br />
      <button onClick={change}>멤버 바꾸기</button>
    </div>
  );
}
