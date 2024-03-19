import "./App.css";
import FoodProps from "./components/FoodProps";
import FuncComponent from "./components/FuncComponent";
import ImotionComponent from "./components/ImotionComponent";
import MemberChange from "./components/MemberChange";
import NewComponent from "./components/NewComponent";
import StateComponent from "./components/StateComponent";
import ChangeColor from "./ex/ChanageColor";
import EventHandle from "./ex/EventHandle";
import SecondEvent from "./ex/SecondEvent";

function App() {
  return (
    <div>
      {/* <FoodProps food="치킨"></FoodProps>
      <br />
      <hr />
      <FuncComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></FuncComponent> */}
      <NewComponent valid="콘솔 띄우기 성공!"></NewComponent>
      <br />
      <hr />
      <StateComponent></StateComponent>
      <br />
      <hr />
      <ImotionComponent></ImotionComponent>
      <br />
      <hr />
      <MemberChange name age NickName></MemberChange>
      <br />
      <hr />
      <EventHandle></EventHandle>
      <br />
      <hr />
      <SecondEvent></SecondEvent>
      <br />
      <hr />
      <ChangeColor></ChangeColor>
    </div>
  );
}

export default App;
