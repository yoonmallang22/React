import React, { Fragment } from "react";
import "./FragmentTest.css";

function ListItem() {
  return (
    // <React.Fragment>
    // <>
    <Fragment>
      <dt>사과</dt>
      <dd>가을 제철 과일</dd>
    </Fragment>
  );
}

function Glossary() {
  return (
    <dl>
      <ListItem />
      <ListItem />
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
  return list.map((v) => {
    return (
      <>
        <p>{v.area}</p>
        <p>{v.visited ? "방문함" : "아직 방문 안 함"}</p>
      </>
    );
  });
}

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function FruitList() {
  let fruits = items.map(({ id, name, desc }) => {
    return (
      // Fragment는 화면에 렌더링되는 요소가 아니기 때문에 스타일과 관련된 속성을 사용하는 것은 무의미하며 보통 리스트 아이템의 key 값을 설정할 때 많이 사용한다
      <React.Fragment
        className="my-fragment"
        key={id}
      >
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    );
  });
  return <dl>{fruits}</dl>;
}

function App() {
  return (
    <div>
      <Glossary />
      <MyComponent />
      <FruitList />
    </div>
  );
}
export default App;
