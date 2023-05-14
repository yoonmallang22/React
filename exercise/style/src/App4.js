import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

// 확장
const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

// Sass 문법 사용
const UniAfter = styled.div`
  &::after {
    content: "!!";
  }
`;

function App() {
  return (
    <div>
      <UniAfter>Good</UniAfter>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
