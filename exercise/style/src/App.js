import { createGlobalStyle } from "styled-components";
import Example from "./components/Example";
import reset from "styled-reset";
import normalize from "styled-normalize";

// CSS-in-JS: js를 통해 제공하는 css
// 기존 css 가중치를 따른다
// 같은 가중치를 가질 때 global style 우선순위가 높다
const GlobalStyle = createGlobalStyle`
	${reset}
	${normalize}
    
	span {
		color: red;
		font-size: 12px;
	}

	a {
		text-decoration : none;
		color : inherit;
	}

	button {
		border : none;
		cursor : pointer;
	}

	* {
		box-sizing: border-box;
	}
`;

function App() {
  // tagged tamplate literal
  const name = "윤말랑";
  const age = 10;

  function 인사(문구, 이름, 나이) {
    console.log(문구, 이름, 나이); // ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)] '윤말랑' 20
    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
  }

  const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;

  console.log(인사문구); // 이름은 윤말랑이고 나이는 40입니다.

  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
