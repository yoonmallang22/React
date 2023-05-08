import Hello from "./components/Hello";
import Time from "./components/Time";
import Resume from "./components/Resume";
import ColorText from "./components/ColorText";

/* ---- props 파라미터 ---- */
function HelloProps(props) {
  console.log(props);
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

/* ---- 구조분해할당으로 props. 생략 ---- */
// function HelloProps({ name, age, someFunc, someArr, someObj, someJSX }) {
//   return (
//     <div>
//       <p>
//         my name is {name} and age is {age}
//       </p>
//       <strong>you are {someFunc()}</strong>
//       <p>this is someArr {[...someArr]}</p>
//       <p>this is someObj {someObj.one}</p>
//       {someJSX}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Hello name="Gary" />
      <Time />

      <HelloProps
        name="mallang"
        age={23}
        someFunc={() => "awesome!!!"}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
      />

      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
			
			{/* 컴포넌트의 재사용성 */}
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;
