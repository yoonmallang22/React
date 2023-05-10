import Blog from "./components/Blog";
import MyList from "./components/MyList";
import Shop from "./components/Shop";
import Counter from "./components/Counter";

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

function One() {
  return <p>one</p>;
}

function Two() {
  return <p>two</p>;
}

function Three() {
  return <p>three</p>;
}

function App() {
  return (
    <>
      <Blog posts={posts} />

      {/* 배열을 전달하면 다 펼쳐서 그려진다 */}
      {[<One />, <Two />, <Three />, [<One />, <Two />, [<One />, <Two />]]]}

      {/* forEach 사용 */}
      <MyList />

      <Shop />

      {/* 함수형 업데이트 예시 */}
      <Counter />
    </>
  );
}
export default App;
