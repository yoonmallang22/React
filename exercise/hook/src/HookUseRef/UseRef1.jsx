import React, { useState, useRef } from "react";

export default function Counter2() {
  const [num2, setNum2] = useState(0);

  // 렌더링되는 시점: setState 함수가 실행돼서 state가 바뀌었을 때 함수가 새로 실행돼서 렌더링된다
  // 함수가 실행될 때마다 0이 할당된다
  // let num = 0;

  // 함수에서 기억하는 것이 아니라 리액트가 기억하는 것이다
  const num = useRef(0);

  return (
    <>
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>
      <button
        onClick={() => {
          // num += 1;
          // console.log(num);	// 렌더링되면 값이 기억이 안 된다

          num.current += 1;
          console.log(num.current);
        }}
      >
        버튼
      </button>
      {/* <div>{num}</div> */}
      <div>{num.current}</div>
    </>
  );
}
