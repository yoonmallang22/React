import styled from "styled-components";

const Btn1 = styled.button`
  background-color: royalblue;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

const Btn2 = styled(Btn1)`
  color: black;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const Btn3 = styled(Btn1)`
  background-color: yellowgreen;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const Btn4 = styled(Btn2)`
  border-radius: 20px;
  color: white;
  background-color: hotpink;
`;

export { Btn1, Btn2, Btn3, Btn4 };
