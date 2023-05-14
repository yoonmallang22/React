import React from "react";
import styled from "styled-components";
import Hello from "./components/Hello";

// 컴포넌트 안에서 개별적으로 스타일 적용
// 스타일 컴포넌트가 클래스명을 난수화시켜주기 때문에 클래스 이름이 겹칠 일이 없어서 클래스 이름을 고민할 필요가 없다
const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque! Nemo, ullam.</p>
      <Hello />
    </ContentDiv>
  );
};

export default App;
