import React from "react";
import styled from "styled-components";

// 같은 방식으로 같은 스타일을 적용해도 스타일 컴포넌트가 난독화된 클래스명을 적용하기 때문에 겹치지 않는다
const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: blue;
`;

export default function Hello() {
  return <ContentH2>hello world</ContentH2>;
}
