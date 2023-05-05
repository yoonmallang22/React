import "./App.css";
import Menu from "./components/menu/Menu";
import NewMenu from "./components/newMenu/newMenu";
import Time from "./components/time/Time";
import TripList from "./components/tripList/TripList";

// 태그에 속성 올바르게 적용하기
function TextArea() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{ backgroundColor: "green" }}
      />
    </div>
  );
}

function App() {
  const name = "라이캣!!!!";
  const 변수 = "value";
  function 함수() {
    console.log("함수 함수!");
  }
  const 값 = true;

  return (
    <div>
      {`${[1, 2, 3]}`}
      {[1, 2, 3]}
      {100 + 1}
      {"hello" + "world"}
      {[1, 2, 3].map((x) => x ** 2)}
      {함수()}
      {변수}
      {값 ? "one" : "two"}

      <p>안녕, {name} 1호</p>
      <p>안녕, 라이캣 2호!</p>
      <div className="class1" />

      <NewMenu />
      <Menu />

      {/* <TextArea /> */}

      <Time />

      <TripList />
    </div>
  );
}

export default App;
